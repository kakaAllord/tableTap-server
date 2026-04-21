const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const { MENU_ITEMS } = require('./data');

const app = express();

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*", // allow all for dev
    methods: ["GET", "POST"]
  }
});

// In-Memory State
let inventoryState = {}; // { menuId: boolean } true means absent
let orders = [];
// Order shape:
// {
//   id: string,
//   tableId: number,
//   items: Array<{menuItemId: string, qty: number, name: string, price: number}>,
//   status: "payment_pending" | "preparing" | "ready" | "served",
//   totalAmount: number,
//   paymentMethod: string,
//   createdAt: string
// }

io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);

  // Send initial state on connection
  socket.emit('initial_state', { inventoryState, orders, menu: MENU_ITEMS });

  // 1. Customer places an order
  socket.on('place_order', (data) => {
    const newOrder = {
      id: data.id || Math.random().toString(36).substring(7).toUpperCase(),
      tableId: data.tableId || Math.floor(Math.random() * 20) + 1,
      items: data.items || [], // array of objects with menuItemId, qty, name, price
      status: 'payment_pending',
      totalAmount: data.totalAmount || 0,
      paymentMethod: data.paymentMethod || 'cash',
      createdAt: new Date().toISOString()
    };
    
    orders.push(newOrder);
    
    // Broadcast updated orders to everyone (staff & customer)
    io.emit('orders_update', orders);
  });

  // 2. Waiter confirms payment
  socket.on('confirm_payment', (orderId) => {
    const order = orders.find(o => o.id === orderId);
    if (order && order.status === 'payment_pending') {
      order.status = 'preparing';
      io.emit('orders_update', orders);
    }
  });

  // 3. Kitchen marks order as done
  socket.on('mark_order_ready', (orderId) => {
    const order = orders.find(o => o.id === orderId);
    if (order && order.status === 'preparing') {
      order.status = 'ready';
      io.emit('orders_update', orders);
      io.emit('order_ready_notification', { tableId: order.tableId, orderId: order.id });
    }
  });

  // 4. Waiter marks order as served
  socket.on('mark_order_served', (orderId) => {
    const order = orders.find(o => o.id === orderId);
    if (order && order.status === 'ready') {
      order.status = 'served';
      io.emit('orders_update', orders);
    }
  });

  // 5. Staff toggles inventory state
  socket.on('toggle_inventory', (menuId) => {
    inventoryState[menuId] = !inventoryState[menuId];
    io.emit('inventory_update', inventoryState);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Socket.IO server listening on port ${PORT}`);
});

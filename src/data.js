const MENU_ITEMS = [
  {
    id: "m1",
    name: "Classic Cheeseburger",
    price: 8.99,
    category: "dishes",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    description: "A juicy 100% beef patty with melted cheddar cheese, fresh lettuce, tomato, and our signature source."
  },
  {
    id: "m2",
    name: "Pepperoni Pizza",
    price: 12.50,
    category: "dishes",
    image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=800&q=80",
    description: "Classic Italian pizza crafted with fresh dough, topped with premium pepperoni slices and mozzarella."
  },
  {
    id: "m3",
    name: "Crispy French Fries",
    price: 4.50,
    category: "dishes",
    image: "https://images.unsplash.com/photo-1600028068383-ea11a7a101f3?auto=format&fit=crop&w=800&q=80",
    description: "Golden and crispy fries served with a side of garlic mayo."
  },
  {
    id: "m4",
    name: "Iced Caramel Macchiato",
    price: 5.00,
    category: "drinks",
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=800&q=80",
    description: "Refreshing iced coffee with a blend of caramel syrup and fresh milk."
  },
  {
    id: "m5",
    name: "Fresh Orange Juice",
    price: 4.00,
    category: "drinks",
    image: "https://plus.unsplash.com/premium_photo-1675667390417-d9d23160f4a6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "100% squeezed fresh oranges with no added sugar."
  },
  {
    id: "m6",
    name: "Classic Caesar Salad",
    price: 9.25,
    category: "dishes",
    image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&w=800&q=80",
    description: "Crisp romaine lettuce tossed with creamy Caesar dressing, garlic croutons, and parmesan."
  },
  {
    id: "m7",
    name: "Spaghetti Carbonara",
    price: 14.00,
    category: "dishes",
    image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=800&q=80",
    description: "Traditional pasta with eggs, pecorino cheese, pancetta, and black pepper."
  },
  {
    id: "m8",
    name: "Salmon Teriyaki",
    price: 18.50,
    category: "dishes",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80",
    description: "Grilled salmon glazed with house-made teriyaki sauce, served with steamed bok choy."
  },
  {
    id: "m9",
    name: "Avocado Toast",
    price: 10.50,
    category: "dishes",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80",
    description: "Sourdough bread topped with smashed avocado, chili flakes, and a poached egg."
  },
  {
    id: "m10",
    name: "Beef Tacos",
    price: 11.00,
    category: "dishes",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80",
    description: "Three corn tortillas with seasoned beef, cilantro, onions, and spicy salsa."
  },
  {
    id: "m11",
    name: "Mushroom Risotto",
    price: 15.75,
    category: "dishes",
    image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=800&q=80",
    description: "Creamy Arborio rice slow-cooked with porcini mushrooms and truffle oil."
  },
  {
    id: "m12",
    name: "BBQ Chicken Wings",
    price: 9.99,
    category: "dishes",
    image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=800&q=80",
    description: "Eight pieces of jumbo wings tossed in smoky barbecue sauce."
  },
  {
    id: "m14",
    name: "Greek Salad",
    price: 8.75,
    category: "dishes",
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=800&q=80",
    description: "Cucumber, tomatoes, olives, and feta cheese with extra virgin olive oil."
  },
  {
    id: "m15",
    name: "Strawberry Cheesecake",
    price: 6.50,
    category: "dishes",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80",
    description: "Creamy New York style cheesecake topped with fresh strawberry compote."
  },
  {
    id: "m16",
    name: "Iced Green Tea",
    price: 3.50,
    category: "drinks",
    image: "https://images.unsplash.com/photo-1499638673689-79a0b5115d87?auto=format&fit=crop&w=800&q=80",
    description: "Cold-brewed organic green tea with a hint of honey and lemon."
  },
  {
    id: "m17",
    name: "Beef Pho",
    price: 13.50,
    category: "dishes",
    image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=800&q=80",
    description: "Traditional Vietnamese noodle soup with thin slices of beef and herbs."
  },
  {
    id: "m18",
    name: "Chocolate Lava Cake",
    price: 7.25,
    category: "dishes",
    image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?auto=format&fit=crop&w=800&q=80",
    description: "Warm chocolate cake with a molten center, served with vanilla bean ice cream."
  },
  {
    id: "m19",
    name: "Mango Lassi",
    price: 4.95,
    category: "drinks",
    image: "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=800&q=80",
    description: "Refreshing yogurt-based drink blended with sweet Alphonso mangoes."
  },
  {
    id: "m20",
    name: "Chicken Ramen",
    price: 14.50,
    category: "dishes",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80",
    description: "Rich chicken broth with handmade noodles, soft-boiled egg, and nori."
  },
  {
    id: "m21",
    name: "Club Sandwich",
    price: 11.25,
    category: "dishes",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80",
    description: "Triple-decker sandwich with turkey, bacon, lettuce, tomato, and mayo."
  },
  {
    id: "m22",
    name: "Espresso",
    price: 3.00,
    category: "drinks",
    image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=800&q=80",
    description: "A concentrated shot of our premium dark roast coffee beans."
  },
  {
    id: "m23",
    name: "Eggs Benedict",
    price: 12.99,
    category: "dishes",
    image: "https://images.unsplash.com/photo-1600335895229-6e75511892c8?auto=format&fit=crop&w=800&q=80",
    description: "English muffin topped with Canadian bacon, poached eggs, and hollandaise."
  },
  {
    id: "m24",
    name: "Caprese Salad",
    price: 9.50,
    category: "dishes",
    image: "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?auto=format&fit=crop&w=800&q=80",
    description: "Fresh mozzarella, tomatoes, and basil leaves drizzled with balsamic glaze."
  },
  {
    id: "m25",
    name: "Lemonade",
    price: 3.75,
    category: "drinks",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    description: "Homemade lemonade with fresh lemons and a touch of mint."
  },
  {
    id: "m27",
    name: "Tiramisu",
    price: 7.50,
    category: "dishes",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80",
    description: "Coffee-soaked ladyfingers layered with mascarpone cream and cocoa."
  },
  {
    id: "m30",
    name: "Pesto Pasta",
    price: 13.00,
    category: "dishes",
    image: "https://images.unsplash.com/photo-1473093226795-af9932fe5856?auto=format&fit=crop&w=800&q=80",
    description: "Fusilli pasta tossed in fresh basil pesto, pine nuts, and parmesan."
  },
  {
    id: "m31",
    name: "Smoothie Bowl",
    price: 9.50,
    category: "dishes",
    image: "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&w=800&q=80",
    description: "Mixed berry smoothie topped with granola, chia seeds, and banana slices."
  },
  {
    id: "m32",
    name: "Pulled Pork Burger",
    price: 11.50,
    category: "dishes",
    image: "https://images.unsplash.com/photo-1521305916504-4a1121188589?auto=format&fit=crop&w=800&q=80",
    description: "Slow-cooked pulled pork with coleslaw and pickles on a brioche bun."
  },
  {
    id: "m33",
    name: "Matcha Latte",
    price: 5.25,
    category: "drinks",
    image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=800&q=80",
    description: "Ceremonial grade matcha whisked with velvety steamed milk."
  },
  {
    id: "m34",
    name: "Garlic Bread",
    price: 5.50,
    category: "dishes",
    image: "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?auto=format&fit=crop&w=800&q=80",
    description: "Toasted baguette slices smothered in garlic butter and herbs."
  },
  {
    id: "m35",
    name: "Quinoa Salad",
    price: 10.00,
    category: "dishes",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    description: "Nutritious quinoa with roasted vegetables, kale, and lemon vinaigrette."
  },
  {
    id: "m39",
    name: "Apple Pie",
    price: 6.00,
    category: "dishes",
    image: "https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?auto=format&fit=crop&w=800&q=80",
    description: "Traditional spiced apple filling in a flaky, buttery pastry crust."
  },
  {
    id: "m40",
    name: "Iced Latte",
    price: 4.75,
    category: "drinks",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=80",
    description: "Chilled espresso and milk over ice for a smooth coffee experience."
  },
  {
    id: "m42",
    name: "Chicken Quesadilla",
    price: 10.50,
    category: "dishes",
    image: "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?auto=format&fit=crop&w=800&q=80",
    description: "Grilled flour tortilla stuffed with spiced chicken and melted Monterey Jack."
  },
  {
    id: "m43",
    name: "Falafel Wrap",
    price: 9.99,
    category: "dishes",
    image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=800&q=80",
    description: "Crispy falafel balls with hummus, tahini, and pickles in a warm pita."
  },
  {
    id: "m44",
    name: "Fruit Salad",
    price: 6.50,
    category: "dishes",
    image: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&w=800&q=80",
    description: "A colorful mix of seasonal fresh fruits with a hint of lime."
  },
  {
    id: "m45",
    name: "Berry Smoothie",
    price: 5.50,
    category: "drinks",
    image: "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&w=800&q=80",
    description: "Blended strawberries, blueberries, and raspberries with Greek yogurt."
  },
  {
    id: "m46",
    name: "Steak Frites",
    price: 22.00,
    category: "dishes",
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80",
    description: "Pan-seared ribeye steak served with herb butter and crispy fries."
  },
  {
    id: "m48",
    name: "Milkshake",
    price: 5.75,
    category: "drinks",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80",
    description: "Thick and creamy vanilla milkshake topped with whipped cream."
  },
  {
    id: "m50",
    name: "Belgian Waffle",
    price: 9.00,
    category: "dishes",
    image: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=800&q=80",
    description: "Thick Belgian waffle dusted with powdered sugar and topped with berries."
  }
];

module.exports = { MENU_ITEMS };
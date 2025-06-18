
import mainminim from "./mainminim.png";
import minimlogo from "./minimlogo.svg";
import minimartlogo from "./minimartlogo.svg";
import minimart from "./minimart.png";
import search_icon from "./search_icon.svg";
import remove_icon from "./remove_icon.svg";
import arrow_right_icon_colored from "./arrow_right_icon_colored.svg";
import star_icon from "./star_icon.svg";
import star_dull_icon from "./star_dull_icon.svg";
import cart1 from "./cart1.svg";
import cart_icon from "./cart_icon.svg";
import nav_cart_icon from "./nav_cart_icon.svg";
import add_icon from "./add_icon.svg";
import refresh_icon from "./refresh_icon.svg";
import product_list_icon from "./product_list_icon.svg";
import order_icon from "./order_icon.svg";
import upload_area from "./upload_area.png";
import profile_icon from "./profile_icon.png";
import menu_icon from "./menu_icon.svg";
import delivery_truck_icon from "./delivery_truck_icon.svg";
import leaf_icon from "./leaf_icon.svg";
import coin_icon from "./coin_icon.svg";
import box_icon from "./box_icon.svg";
import trust_icon from "./trust_icon.svg";
import black_arrow_icon from "./black_arrow_icon.svg";
import white_arrow_icon from "./white_arrow_icon.svg";
import delivery_banner from "./delivery_banner.png";
import bottom_banner_image from "./bottom_banner_image.png";
import bottom_banner_image_sm from "./bottom_banner_image_sm.png";
import add_address_iamge from "./add_address_image.svg";
import locationicon from "./locationicon.png";
import organic_vegitable_image from "./organic_vegitable_image.png";
import fresh_fruits_image from "./fresh_fruits_image.png";
import bottles_image from "./bottles_image.png";
import maggi_image from "./maggi_image.png";
import Dairy_Product from "./Dairy_Product.jpg";
import dairy_product_image from "./dairy_product_image.png";
import bakery_image from "./bakery_image.png";
import grain_image from "./grain_image.png";
import potato_image_1 from "./potato_image_1.png";
import potato_image_2 from "./potato_image_2.png";
import potato_image_3 from "./potato_image_3.png";
import potato_image_4 from "./potato_image_4.png";
import tomato_image from "./tomato_image.png";
import carrot_image from "./carrot_image.png";
import apple_image from "./apple_image.png";
import amul_milk_image from "./amul_milk_image.png";
import coca_cola_image from "./coca_cola_image.png";
import brown_bread_image from "./brown_bread_image.png";
import basmati_rice_image from "./basmati_rice_image.png";
import paneer_image from "./paneer_image.png";
import orange_image from "./orange_image.png";
import pepsi_image from "./pepsi_image.png";
import wheat_flour_image from "./wheat_flour_image.png";
import cheese_image from "./cheese_image.png";
import eggs_image from "./eggs_image.png";
import spinach_image_1 from "./spinach_image_1.png";
import onion_image_1 from "./onion_image_1.png";
import banana_image_1 from "./banana_image_1.png";
import mango_image_1 from "./mango_image_1.png";
import grapes_image_1 from "./grapes_image_1.png";
import paneer_image_2 from "./paneer_image_2.png";
import sprite_image_1 from "./sprite_image_1.png";
import fanta_image_1 from "./fanta_image_1.png";
import seven_up_image_1 from "./seven_up_image_1.png";
import top_ramen_image from "./top_ramen_image.png";
import knorr_soup_image from "./knorr_soup_image.png";
import yippee_image from "./yippee_image.png";
import maggi_oats_image from "./maggi_oats_image.png";
import butter_croissant_image from "./butter_croissant_image.png";
import chocolate_cake_image from "./chocolate_cake_image.png";
import whole_wheat_bread_image from "./whole_wheat_bread_image.png";
import vanilla_muffins_image from "./vanilla_muffins_image.png";
import quinoa_image from "./quinoa_image.png";
import brown_rice_image from "./brown_rice_image.png";
import barley_image from "./barley_image.png";
import canGoods from "./canGoods.jpg";
import cangood from "./cangood.jpg";
import PrestoCreamsPeanut from "./PrestoCreamsPeanut.avif";
import Chocolate_Candy from "./Chocolate_Candy.jpg";
import Beverages from "./Beverages.jpg";
import Condiments from "./Condiments.png";
import Bread from "./Bread.avif";
import FrozenFood from "./FrozenFood.jpg";
import GreatTastecoffee from "./GreatTastecoffee.jpg";
export const assets = {
  mainminim,
  minimlogo,
  
  minimartlogo,
  minimart,
  search_icon,
  remove_icon,
  arrow_right_icon_colored,
  star_icon,
  star_dull_icon,
  cart1,
  cart_icon,
  nav_cart_icon,
  add_icon,
  refresh_icon,
  product_list_icon,
  order_icon,
  upload_area,
  profile_icon,
  menu_icon,
  delivery_truck_icon,
  delivery_banner,
  leaf_icon,
  locationicon,
  coin_icon,
  trust_icon,
  black_arrow_icon,
  white_arrow_icon,
  bottom_banner_image,
  bottom_banner_image_sm,
  add_address_iamge,
  box_icon,
  canGoods,
  cangood,
  PrestoCreamsPeanut,
  Chocolate_Candy,
  Beverages,
  Dairy_Product,
  dairy_product_image,
  Condiments,
  Bread,
  FrozenFood,
  GreatTastecoffee
};


export const footerSections = [
  {
    title: "Quick Links",
    links: [
      { name: "Home", path: "/" },
      { name: "Products", path: "/products" },
      { name: "Best Sellers", path: "/products?category=bestsellers" },
      { name: "Contact Us", path: "/contact" },
      { name: "My Orders", path: "/orders" }
    ]
  },
  {
    title: "Customer Care",
    links: [
      { name: "Delivery Information", path: "/delivery-info" },
      { name: "Payment Methods", path: "/payment-methods" },
      { name: "Return Policy", path: "/return-policy" },
      { name: "Track your Order", path: "/track-order" },
      { name: "FAQs", path: "/faqs" }
    ]
  },
  {
    title: "Connect With Us",
    links: [
      { name: "Facebook", path: "https://facebook.com", external: true },
      { name: "Instagram", path: "https://instagram.com", external: true },
      { name: "Twitter", path: "https://twitter.com", external: true },
    ]
  }
];


export const dummyProducts = [
  // Vegetables
  {
    _id: "gd46g23h",
    name: "Potato 500g",
    category: "Vegetables",
    price: 25,
    offerPrice: 20,
    image: [potato_image_1, potato_image_2, potato_image_3, potato_image_4],
    description: [
      "Fresh and organic",
      "Rich in carbohydrates",
      "Ideal for curries and fries",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "gd47g34h",
    name: "Tomato 1 kg",
    category: "Vegetables",
    price: 40,
    offerPrice: 35,
    image: [tomato_image],
    description: [
      "Juicy and ripe",
      "Rich in Vitamin C",
      "Perfect for salads and sauces",
      "Farm fresh quality",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "gd48g45h",
    name: "Carrot 500g",
    category: "Vegetables",
    price: 30,
    offerPrice: 28,
    image: [carrot_image],
    description: [
      "Sweet and crunchy",
      "Good for eyesight",
      "Ideal for juices and salads",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "gd49g56h",
    name: "Spinach 500g",
    category: "Vegetables",
    price: 18,
    offerPrice: 15,
    image: [spinach_image_1],
    description: [
      "Rich in iron",
      "High in vitamins",
      "Perfect for soups and salads",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "gd50g67h",
    name: "Onion 500g",
    category: "Vegetables",
    price: 22,
    offerPrice: 19,
    image: [onion_image_1],
    description: [
      "Fresh and pungent",
      "Perfect for cooking",
      "A kitchen staple",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },

  // Fruits
  {
    _id: "ek51j12k",
    name: "Apple 1 kg",
    category: "Fruits",
    price: 120,
    offerPrice: 110,
    image: [apple_image],
    description: [
      "Crisp and juicy",
      "Rich in fiber",
      "Boosts immunity",
      "Perfect for snacking and desserts",
      "Organic and farm fresh",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "ek52j23k",
    name: "Orange 1 kg",
    category: "Fruits",
    price: 80,
    offerPrice: 75,
    image: [orange_image],
    description: [
      "Juicy and sweet",
      "Rich in Vitamin C",
      "Perfect for juices and salads",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "ek53j34k",
    name: "Banana 1 kg",
    category: "Fruits",
    price: 50,
    offerPrice: 45,
    image: [banana_image_1],
    description: [
      "Sweet and ripe",
      "High in potassium",
      "Great for smoothies and snacking",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "ek54j45k",
    name: "Mango 1 kg",
    category: "Fruits",

    price: 150,
    offerPrice: 140,
    image: [mango_image_1],
    description: [
      "Sweet and flavorful",
      "Perfect for smoothies and desserts",
      "Rich in Vitamin A",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "ek55j56k",
    name: "Grapes 500g",
    category: "Fruits",
    price: 70,
    offerPrice: 65,
    image: [grapes_image_1],
    description: [
      "Fresh and juicy",
      "Rich in antioxidants",
      "Perfect for snacking and fruit salads",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },

  // Dairy
  {
    _id: "ek56j67k",
    name: "Amul Milk 1L",
    category: "Dairy",
    price: 60,
    offerPrice: 55,
    image: [amul_milk_image],
    description: [
      "Pure and fresh",
      "Rich in calcium",
      "Ideal for tea, coffee, and desserts",
      "Trusted brand quality",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "ek57j78k",
    name: "Paneer 200g",
    category: "Dairy",
    price: 90,
    offerPrice: 85,
    image: [paneer_image],
    description: [
      "Soft and fresh",
      "Rich in protein",
      "Ideal for curries and snacks",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "ek58j89k",
    name: "Eggs 12 pcs",
    category: "Dairy",
    price: 90,
    offerPrice: 85,
    image: [eggs_image],
    description: [
      "Farm fresh",
      "Rich in protein",
      "Ideal for breakfast and baking",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "ek59j90k",
    name: "Paneer 200g",
    category: "Dairy",
    price: 90,
    offerPrice: 85,
    image: [paneer_image_2],
    description: [
      "Soft and fresh",
      "Rich in protein",
      "Ideal for curries and snacks",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "ek60j01k",
    name: "Cheese 200g",
    category: "Dairy",
    price: 140,
    offerPrice: 130,
    image: [cheese_image],
    description: [
      "Creamy and delicious",
      "Perfect for pizzas and sandwiches",
      "Rich in calcium",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },

  // Drinks
  {
    _id: "ek61j12k",
    name: "Coca-Cola 1.5L",
    category: "Beverages",
    price: 80,
    offerPrice: 75,
    image: [coca_cola_image],
    description: [
      "Refreshing and fizzy",
      "Perfect for parties and gatherings",
      "Best served chilled",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "ek62j23k",
    name: "Pepsi 1.5L",
    category: "Beverages",
    price: 78,
    offerPrice: 73,
    image: [pepsi_image],
    description: [
      "Chilled and refreshing",
      "Perfect for celebrations",
      "Best served cold",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "ek63j34k",
    name: "Sprite 1.5L",
    category: "Beverages",
    price: 79,
    offerPrice: 74,
    image: [sprite_image_1],
    description: [
      "Refreshing citrus taste",
      "Perfect for hot days",
      "Best served chilled",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "ek64j45k",
    name: "Fanta 1.5L",
    category: "Beverages",
    price: 77,
    offerPrice: 72,
    image: [fanta_image_1],
    description: [
      "Sweet and fizzy",
      "Great for parties and gatherings",
      "Best served cold",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "ek65j56k",
    name: "7 Up 1.5L",
    category: "Beverages",
    price: 76,
    offerPrice: 71,
    image: [seven_up_image_1],
    description: [
      "Refreshing lemon-lime flavor",
      "Perfect for refreshing",
      "Best served chilled",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },

  // Grains
  {
    _id: "ek66j67k",
    name: "Basmati Rice 5kg",
    category: "Grains",
    price: 550,
    offerPrice: 520,
    image: [basmati_rice_image],
    description: [
      "Long grain and aromatic",
      "Perfect for biryani and pulao",
      "Premium quality",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "ek67j78k",
    name: "Wheat Flour 5kg",
    category: "Grains",
    price: 250,
    offerPrice: 230,
    image: [wheat_flour_image],
    description: [
      "High-quality whole wheat",
      "Soft and fluffy rotis",
      "Rich in nutrients",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "ek68j89k",
    name: "Organic Quinoa 500g",
    category: "Grains",
    price: 450,
    offerPrice: 420,
    image: [quinoa_image],
    description: [
      "High in protein and fiber",
      "Gluten-free",
      "Rich in vitamins and minerals",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "ek69j90k",
    name: "Brown Rice 1kg",
    category: "Grains",
    price: 120,
    offerPrice: 110,
    image: [brown_rice_image],
    description: [
      "Whole grain and nutritious",
      "Helps in weight management",
      "Good source of magnesium",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "ek70j01k",
    name: "Barley 1kg",
    category: "Grains",
    price: 150,
    offerPrice: 140,
    image: [barley_image],
    description: [
      "Rich in fiber",
      "Helps improve digestion",
      "Low in fat and cholesterol",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },

  // Bakery
  {
    _id: "bk01a24z",
    name: "Brown Bread 400g",
    category: "Bakery",
    price: 40,
    offerPrice: 35,
    image: [brown_bread_image],
    description: [
      "Soft and healthy",
      "Made from whole wheat",
      "Ideal for breakfast and sandwiches",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "bk02b30y",
    name: "Butter Croissant 100g",
    category: "Bakery",
    price: 50,
    offerPrice: 45,
    image: [butter_croissant_image],
    description: [
      "Flaky and buttery",
      "Freshly baked",
      "Perfect for breakfast or snacks",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "bk03c31x",
    name: "Chocolate Cake 500g",
    category: "Bakery",
    price: 350,
    offerPrice: 325,
    image: [chocolate_cake_image],
    description: [
      "Rich and moist",
      "Made with premium cocoa",
      "Ideal for celebrations and parties",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "bk04d32w",
    name: "Whole Bread 400g",
    category: "Bakery",
    price: 45,
    offerPrice: 40,
    image: [whole_wheat_bread_image],
    description: [
      "Healthy and nutritious",
      "Made with whole wheat flour",
      "Ideal for sandwiches and toast",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "bk05e33v",
    name: "Vanilla Muffins 6 pcs",
    category: "Bakery",
    price: 100,
    offerPrice: 90,
    image: [vanilla_muffins_image],
    description: [
      "Soft and fluffy",
      "Perfect for a quick snack",
      "Made with real vanilla",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },

  // Instant
  {
    _id: "in01f25u",
    name: "Maggi Noodles 280g",
    category: "Instant",

    price: 55,
    offerPrice: 50,
    image: [maggi_image],
    description: [
      "Instant and easy to cook",
      "Delicious taste",
      "Popular among kids and adults",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "in02g26t",
    name: "Top Ramen 270g",
    category: "Instant",
    price: 45,
    offerPrice: 40,
    image: [top_ramen_image],
    description: [
      "Quick and easy to prepare",
      "Spicy and flavorful",
      "Loved by college students and families",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "in03h27s",
    name: "Knorr Cup Soup 70g",
    category: "Instant",
    price: 35,
    offerPrice: 30,
    image: [knorr_soup_image],
    description: [
      "Convenient for on-the-go",
      "Healthy and nutritious",
      "Variety of flavors",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "in04i28r",
    name: "Yippee Noodles 260g",
    category: "Instant",
    price: 50,
    offerPrice: 45,
    image: [yippee_image],
    description: [
      "Non-fried noodles for healthier choice",
      "Tasty and filling",
      "Convenient for busy schedules",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "in05j29q",
    name: "Oats Noodles 72g",
    category: "Instant",
    price: 40,
    offerPrice: 35,
    image: [maggi_oats_image],
    description: [
      "Healthy alternative with oats",
      "Good for digestion",
      "Perfect for breakfast or snacks",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
];

export const dummyAddress = [
  {
    _id: "67b5b9e54ea97f71bbc196a0",
    userId: "67b5880e4d09769c5ca61644",
    firstName: "Great",
    lastName: "Stack",
    email: "user.greatstack@gmail.com",
    street: "Street 123",
    city: "Main City",
    state: "New State",
    zipcode: 123456,
    country: "IN",
    phone: "1234567890",
  },
];

export const dummyOrders = [
  {
    _id: "67e2589a8f87e63366786400",
    userId: "67b5880e4d09769c5ca61644",
    items: [
      {
        product: dummyProducts[3],
        quantity: 1,
        _id: "67e2589a8f87e63366786401",
      },
    ],
    amount: 89,
    address: dummyAddress[0],
    status: "Order Placed",
    paymentType: "Online",
    isPaid: true,
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
  },
  {
    _id: "67e258798f87e633667863f2",
    userId: "67b5880e4d09769c5ca61644",
    items: [
      {
        product: dummyProducts[0],
        quantity: 1,
        _id: "67e258798f87e633667863f3",
      },
      {
        product: dummyProducts[1],
        quantity: 1,
        _id: "67e258798f87e633667863f4",
      },
    ],
    amount: 43,
    address: dummyAddress[0],
    status: "Order Placed",
    paymentType: "COD",
    isPaid: false,
    createdAt: "2025-03-25T07:17:13.068Z",
    updatedAt: "2025-03-25T07:17:13.068Z",
  },
];

export const categoriesData = {
  title: "Categories",
  sections: [
    {
      id: 1,
      title: " Food & Beverages",
      items: [
        {
          text: "Biscuits & Cookies",
          description: "Sweet treats and biscuits",
          path: "biscuits-cookies",
          image: PrestoCreamsPeanut
        },
        {
          text: "Chocolates & Candy",
          description: "Sweet chocolates and candies",
          path: "chocolates-candy",
          image: Chocolate_Candy
        },
        {
          text: "Instant Noodles & Pasta",
          description: "Quick meals and pasta",
          path: "Instant",
          image: maggi_image
        },
        {
          text: "Canned Goods",
          description: "Tuna, Corned Beef",
          path: "Canned",
          image: canGoods
        },
        {
          text: "Frozen Foods",
          description: "Fries, Nuggets",
          path: "frozen-foods",
          image: FrozenFood
        },
        {
          text: "Bread",
          description: "Fresh bread and buns",
          path: "Bakery",
          image: Bread
        },
        {
          text: "Dairy Products",
          description: "Milk, Cheese, Yogurt",
          path: "Dairy",
          image: Dairy_Product
        },
        {
          text: "Beverages",
          description: "Juice, Soda, Energy Drinks",
          path: "Beverages",
          image: Beverages
        },
        {
          text: "Coffees",
          description: "Hot beverages",
          path: "coffee-tea",
          image: GreatTastecoffee
        },
        {
          text: "Condiments & Sauces",
          description: "Cooking essentials",
          path: "condiments-sauces",
          image: Condiments
        },
        {
          text: "Rice, Grains & Cereals",
          description: "Staple foods",
          path: "Grains",
          image: ""
        }
      ]
    },
    {
      id: 2,
      title: " Personal Care",
      items: [
        {
          text: "Shampoos & Conditioners",
          description: "Hair care products",
          path: "shampoos-conditioners",
          image: ""
        },
        {
          text: "Soap & Body Wash",
          description: "Body cleansing products",
          path: "soap-body-wash",
          image: ""
        },
        {
          text: "Toothpaste & Toothbrushes",
          description: "Oral care products",
          path: "toothpaste-toothbrushes",
          image: ""
        },
        {
          text: "Feminine Hygiene",
          description: "Women's health products",
          path: "feminine-hygiene",
          image: ""
        },
        {
          text: "Deodorant",
          description: "Personal freshness",
          path: "deodorant",
          image: ""
        },
        {
          text: "Lotion & Skincare Products",
          description: "Skin care essentials",
          path: "lotion-skincare",
          image: ""
        }
      ]
    },
    {
      id: 3,
      title: " Household Items",
      items: [
        {
          text: "Laundry Detergents",
          description: "Clothes washing essentials",
          path: "laundry-detergents",
          image: ""
        },
        {
          text: "Dishwashing Liquids",
          description: "Kitchen cleaning",
          path: "dishwashing-liquids",
          image: ""
        },
        {
          text: "Cleaning Supplies",
          description: "General cleaning products",
          path: "cleaning-supplies",
          image: ""
        },
        {
          text: "Trash Bags",
          description: "Waste management",
          path: "trash-bags",
          image: ""
        },
        {
          text: "Air Fresheners",
          description: "Home fragrance",
          path: "air-fresheners",
          image: ""
        }
      ]
    },
    {
      id: 4,
      title: " Baby & Kids",
      items: [
        {
          text: "Diapers",
          description: "Baby care essentials",
          path: "diapers",
          image: ""
        },
        {
          text: "Baby Wipes",
          description: "Gentle cleaning",
          path: "baby-wipes",
          image: ""
        },
        {
          text: "Baby Food & Formula",
          description: "Infant nutrition",
          path: "baby-food-formula",
          image: ""
        }
      ]
    },
    {
      id: 5,
      title: " Pet Supplies",
      items: [
        {
          text: "Pet Food",
          description: "Nutrition for pets",
          path: "pet-food",
          image: ""
        },
        {
          text: "Cat Litter",
          description: "Cat care essentials",
          path: "cat-litter",
          image: ""
        },
        {
          text: "Treats & Toys",
          description: "Pet entertainment",
          path: "treats-toys",
          image: ""
        }
      ]
    },
    {
      id: 6,
      title: " Miscellaneous",
      items: [
        {
          text: "Alcoholic Drinks",
          description: "B1eers, RTDs",
          path: "Drinks",
          image: ""
        },
        {
          text: "Cigarettes / Tobacco",
          description: "Tobacco products",
          path: "cigarettes-tobacco",
          image: ""
        },
        {
          text: "Batteries",
          description: "Power solutions",
          path: "batteries",
          image: ""
        },
        {
          text: "Stationery",
          description: "Pens, Notebooks",
          path: "stationery",
          image: ""
        },
        {
          text: "Phone Accessories",
          description: "Cables, Chargers",
          path: "phone-accessories",
          image: ""
        }
      ]
    }
  ]
};

// Store locations in Sorsogon City
export const storeLocations = [
  {
    id: 1,
    name: "A&A MiniMart - Pangpang Branch",
    address: "Pangpang, Sorsogon City",
    fullAddress: "Pangpang, Sorsogon City, Sorsogon Province, Philippines",
    coordinates: [12.978312, 123.985761], // Updated coordinates from Google Maps
    phone: "+63 919 123 4567",
    hours: "5:00 AM - 8:00 PM Daily",
    description: "Our main branch serving the Pangpang area with fast delivery and fresh products.",
    isMainBranch: true
  },
  {
    id: 2,
    name: "A&A MiniMart - Rizal Street Branch",
    address: "Rizal Street, Sorsogon City",
    fullAddress: "Rizal Street, Sorsogon City, Sorsogon Province, Philippines",
    coordinates: [12.9688, 124.0056], // Approximate coordinates for Rizal Street, Sorsogon City
    phone: "+63 919 123 4568",
    hours: "5:00 AM - 8:00 PM Daily",
    description: "Conveniently located in the heart of the city for easy access to daily essentials.",
    isMainBranch: false
  }
];

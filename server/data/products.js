
const products = [
  {
    name: 'Sony WH-1000XM4 Wireless Noise Cancelling Headphones',
    description: 'Industry-leading noise cancellation with dual noise sensor technology, premium sound quality with 40mm drivers, up to 30-hour battery life with quick charging.',
    price: 24990,
    imageUrl: '/uploads/electronics-headphones.jpg',
    category: 'Electronics',
    brand: 'Sony',
    stock: 15,
    featured: true,
    discount: 10,
  },
  {
    name: 'Apple iPhone 13 Pro Max',
    description: 'The iPhone 13 Pro Max features a 6.7-inch Super Retina XDR display with ProMotion, A15 Bionic chip, pro camera system with 3x optical zoom, and up to 28 hours of video playback.',
    price: 129900,
    imageUrl: '/uploads/electronics-iphone.jpg',
    category: 'Electronics',
    brand: 'Apple',
    stock: 10,
    featured: true,
    discount: 5,
  },
  {
    name: 'Samsung 55-inch QLED 4K Smart TV',
    description: 'Experience stunning 4K resolution with Quantum Dot technology, Quantum Processor 4K, Object Tracking Sound, and built-in voice assistants.',
    price: 79990,
    imageUrl: '/uploads/electronics-tv.jpg',
    category: 'Electronics',
    brand: 'Samsung',
    stock: 8,
    featured: true,
    discount: 15,
  },
  {
    name: 'Levi\'s Men\'s 501 Original Fit Jeans',
    description: 'The original blue jean since 1873, featuring a straight leg, button fly, and signature Levi\'s leather patch.',
    price: 2999,
    imageUrl: '/uploads/fashion-jeans.jpg',
    category: 'Fashion',
    brand: 'Levi\'s',
    stock: 25,
    featured: false,
    discount: 0,
  },
  {
    name: 'Nike Air Max 270 Running Shoes',
    description: 'The Nike Air Max 270 features the first-ever Max Air unit designed specifically for Nike Sportswear, delivering unrivaled comfort and style.',
    price: 12995,
    imageUrl: '/uploads/fashion-shoes.jpg',
    category: 'Fashion',
    brand: 'Nike',
    stock: 18,
    featured: true,
    discount: 0,
  },
  {
    name: 'Instant Pot Duo 7-in-1 Electric Pressure Cooker',
    description: '7-in-1 appliance: pressure cooker, slow cooker, rice cooker, steamer, sauté pan, yogurt maker, and warmer. Features 13 customizable programs for quick meal preparation.',
    price: 8999,
    imageUrl: '/uploads/kitchen-instantpot.jpg',
    category: 'Home & Kitchen',
    brand: 'Instant Pot',
    stock: 12,
    featured: false,
    discount: 20,
  },
  {
    name: 'Dyson V11 Absolute Cordless Vacuum Cleaner',
    description: 'Intelligent cordless vacuum with twice the suction of any other cordless vacuum, automatically optimizes suction and run time across all floor types.',
    price: 52900,
    imageUrl: '/uploads/home-vacuum.jpg',
    category: 'Home & Kitchen',
    brand: 'Dyson',
    stock: 7,
    featured: true,
    discount: 0,
  },
  {
    name: 'The Ordinary Niacinamide 10% + Zinc 1%',
    description: 'A high-strength vitamin and mineral formula to reduce the appearance of blemishes and congestion. Suitable for all skin types.',
    price: 750,
    imageUrl: '/uploads/beauty-ordinary.jpg',
    category: 'Beauty',
    brand: 'The Ordinary',
    stock: 30,
    featured: false,
    discount: 0,
  },
  {
    name: 'MAC Retro Matte Lipstick - Ruby Woo',
    description: 'A matte lipstick with high color payoff and long-lasting wear. Very matte, very intense, and very iconic.',
    price: 1950,
    imageUrl: '/uploads/beauty-lipstick.jpg',
    category: 'Beauty',
    brand: 'MAC',
    stock: 22,
    featured: false,
    discount: 0,
  },
  {
    name: 'Fossil Gen 5 Smartwatch',
    description: 'Touchscreen smartwatch with Google Wear OS, heart rate monitoring, GPS, NFC, and swimproof design with multiple battery modes.',
    price: 22995,
    imageUrl: '/uploads/electronics-watch.jpg',
    category: 'Electronics',
    brand: 'Fossil',
    stock: 14,
    featured: false,
    discount: 25,
  },
  {
    name: 'Cricket Bat - SS T20 Premier',
    description: 'Professional grade English willow cricket bat, perfect for T20 format with excellent pick-up and powerful sweet spot.',
    price: 9999,
    imageUrl: '/uploads/sports-cricket.jpg',
    category: 'Sports & Fitness',
    brand: 'SS',
    stock: 10,
    featured: false,
    discount: 0,
  },
  {
    name: 'Adidas Football - FIFA World Cup Qatar 2022',
    description: 'Official match ball of the FIFA World Cup 2022, featuring connected ball technology for semi-automated offside decisions.',
    price: 4999,
    imageUrl: '/uploads/sports-football.jpg',
    category: 'Sports & Fitness',
    brand: 'Adidas',
    stock: 15,
    featured: true,
    discount: 0,
  },
];

module.exports = products;




export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  imageUrl: string;
  description?: string; // <- Add this
}

export let products: Product[] = [
  {
    id: '1',
    name: 'MacBook Pro 16” M2',
    price: 2499,
    imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16-spacegray-select-202301_GEO_EMEA_LANG_EN?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1671302552566',
    category: 'Laptop',
    description: 'Powerful performance with the M2 chip and stunning Liquid Retina XDR display.'
  },
  
  {
    id: '2',
    name: 'iPhone 14 Pro',
    price: 999,
    imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-model-select-202209?wid=940&hei=1112&fmt=png-alpha&.v=1660753619946',
    category: 'Smartphone',
    description: 'Dynamic Island, Always-On display, and groundbreaking safety features.'
  },
  
  {
    id: '3',
    name: 'AirPods Pro (2nd Gen)',
    price: 249,
    imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-pro-2nd-gen-select-202209?wid=470&hei=556&fmt=png-alpha&.v=1660803972361',
    category: 'Audio',
    description: 'Re-engineered for richer audio experience, with up to 2x more Active Noise Cancellation.'
  },
  
  {
    id: '4',
    name: 'Apple Watch Series 9',
    price: 399,
    imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-s9-procellular-41-stainlesssilver-sportwhite?wid=470&hei=556&fmt=png-alpha&.v=1692749671813',
    category: 'Wearable',
    description: 'Smarter, brighter, mightier. With Double Tap gesture and precision finding for iPhone.'
  },
  
  {
    id: '5',
    name: 'iPad Pro 11” M2',
    price: 799,
    imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-11-select-202212_GEO_EMEA_LANG_EN?wid=470&hei=556&fmt=png-alpha&.v=1670863684181',
    category: 'Tablet',
    description: 'Unbelievable performance with the M2 chip, next-level Apple Pencil experience, and superfast Wi-Fi.'
  },
  
  {
    id: '6',
    name: 'Apple Magic Keyboard',
    price: 99,
    imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MK2A3?wid=2000&hei=2000&fmt=jpeg&qlt=90&.v=1633657386000',
    category: 'Accessory',
    description: 'A comfortable and precise typing experience with a remarkably long-lasting internal battery.'
  },
  
  {
    id: '7',
    name: 'Apple Studio Display',
    price: 1599,
    imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/studio-display-gallery1-202203?wid=2000&hei=1536&fmt=jpeg&qlt=90&.v=1645653315931',
    category: 'Display',
    description: 'A brilliant 27-inch 5K Retina display, 12MP Ultra Wide camera with Center Stage, and incredible six-speaker sound system.'
  },
  
  {
    id: '8',
    name: 'Apple TV 4K',
    price: 129,
    imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/apple-tv-4k-select-202210?wid=470&hei=556&fmt=png-alpha&.v=1664896363642',
    category: 'Streaming',
    description: 'The best of TV, films, sports, and live news, with groundbreaking new features.'
  },
  
  {
    id: '9',
    name: 'AirTag (4 Pack)',
    price: 99,
    imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airtag-4pack-select-202104?wid=470&hei=556&fmt=png-alpha&.v=1617761671000',
    category: 'Tracker',
    description: 'Keep track of your keys, wallet, luggage, backpack, and more. Find them with Precision Finding.'
  },
  
  {
    id: '10',
    name: 'HomePod Mini',
    price: 99,
    imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/homepod-mini-select-yellow-202110?wid=470&hei=556&fmt=png-alpha&.v=1632925511000',
    category: 'Smart Speaker',
    description: 'Small but mighty, HomePod mini delivers room-filling sound, intelligent assistant, and smart home control.'
  },
];

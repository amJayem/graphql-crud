const products = [
  {
    name: 'Steel Pot',
    description: 'Silver steel pot that is perfect for cooking',
    quantity: 230,
    price: 42.44,
    image:
      'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2016/7/26/0/FN_istock_stainless-steel-pots_s4x3.jpg.rend.hgtvcom.616.462.suffix/1469599520916.jpeg',
    onSale: false,
    categoryId: '1'
  },
  {
    name: 'Salad Bowl',
    description: 'Round wooden bowl perfect for tossing and making salads',
    quantity: 33,
    price: 53.5,
    image:
      'https://img.taste.com.au/sQvzwu00/taste/2018/09/mexican-141430-2.jpg',
    onSale: false,
    categoryId: '1'
  },
  {
    name: 'Spoon',
    description: 'Small and delicate spoon',
    quantity: 4266,
    price: 1.33,
    image:
      'https://assets.epicurious.com/photos/600b290984cb202391231bd0/5:4/w_3781,h_3025,c_limit/GoodSpoons_HERO_011421_7459_VOG_final.jpg',
    onSale: true,
    categoryId: '1'
  },
  {
    name: 'Shovel',
    description: 'Grey rounded shovel for digging',
    quantity: 753,
    price: 332,
    image:
      'https://cdn11.bigcommerce.com/s-3c8l9ljcjn/product_images/uploaded_images/may-blogthumbnails-shovelsspades.jpg',
    onSale: false,
    categoryId: '2'
  },
  {
    name: 'Fertilizer',
    description: 'Nitrogen based fertitlizer',
    quantity: 53453,
    price: 23.11,
    image:
      'http://cdn.shopify.com/s/files/1/0569/9675/7697/articles/organic-fertilizer-vs-chemical-fertilizer.jpg?v=1655866623',
    onSale: true,
    categoryId: '2'
  },
  {
    name: 'Basketball',
    description: 'Outdoor or indoor basketball',
    quantity: 128,
    price: 59.99,
    image:
      'https://d2560u4h06m0te.cloudfront.net/images/2021/12/29/021321_001_basketball.JPG',
    onSale: true,
    categoryId: '3'
  },
  {
    name: 'Golf Clubs',
    description: 'Good for golfing',
    quantity: 3,
    price: 427.44,
    image:
      'https://americanclassicgolf.com/wp-content/uploads/2020/12/shutterstock_382777819-500x300-1.jpg',
    onSale: false,
    categoryId: '3'
  },
  {
    name: 'Baseball Gloves',
    description: 'Professional catcher gloves',
    quantity: 745,
    price: 77.0,
    image: 'https://m.media-amazon.com/images/I/81yDjBHz3-L.jpg',
    onSale: true,
    categoryId: '3'
  },
  {
    name: 'Soccer Ball',
    description: 'Round ball',
    quantity: 734,
    price: 93.44,
    image: 'https://i.ebayimg.com/images/g/dE8AAOSwXXdjPGFM/s-l640.jpg',
    onSale: false,
    categoryId: '3'
  }
]

let categories = [
  {
    id: '1',
    name: 'Kitchen'
  },
  {
    id: '2',
    name: 'Garden'
  },
  {
    id: '3',
    name: 'Sports'
  }
]

const reviews = [
  {
    id: 'b22da5d4-6a4b-4db5-8ec3-acc228c36260',
    date: '2021-01-01',
    title: 'This is bad',
    comment: 'when i bought this it broke the stove',
    rating: 1,
    productId: '6423c8cc8c1d071460998d25'
  },
  {
    id: '78851fe8-a657-410f-9b0a-2bc952636e16',
    date: '2021-04-23',
    title: 'This is good',
    comment: 'one of the most decent pots',
    rating: 3,
    productId: '6423c8cc8c1d071460998d25'
  },
  {
    id: '463c0f40-86bc-4b8e-be47-e363111991d1',
    date: '2020-04-23',
    title: 'is okay',
    comment: 'yes it is decent i guess',
    rating: 2,
    productId: '6423c8cc8c1d071460998d25'
  },
  {
    id: 'ebd207cd-f909-4bb1-8416-3e17a161b859',
    date: '2020-07-23',
    title: 'terrible',
    comment: 'why is it so expensive',
    rating: 1,
    productId: '6423c8cc8c1d071460998d25'
  },
  {
    id: '92450802-24ef-4907-9c70-b82697a96882',
    date: '2021-01-01',
    title: 'best thing ever',
    comment: 'really good bowl',
    rating: 5,
    productId: '6423c8cc8c1d071460998d26'
  },
  {
    id: 'f7ca2f8e-74ed-4323-9166-c8b606c2238e ',
    date: '2021-04-23',
    title: 'SUPER HAPPY',
    comment: 'this is amazing, only 4 stars tho... :)',
    rating: 4,
    productId: '6423c8cc8c1d071460998d26'
  },
  {
    id: '908dbc7f-7782-43ae-9775-63bbd87db575',
    date: '2020-04-23',
    title: 'life changing',
    comment: 'writing mock data is so boring...',
    rating: 5,
    productId: '6423c8cc8c1d071460998d26'
  },
  {
    id: '1852460f-b186-4a7a-a024-dccc0f72e052',
    date: '2020-07-23',
    title: 'This is coooooool!',
    comment: 'I would totally recommend',
    rating: 5,
    productId: '6423c8cc8c1d071460998d26'
  },
  {
    id: 'd075bdc8-df4b-4389-82ba-cb63726639ec',
    date: '2020-07-23',
    title: 'idc',
    comment: "It's a spoon...",
    rating: 3,
    productId: '6423c8cc8c1d071460998d27'
  },
  {
    id: '1b2b32ba-acbd-4578-9455-30eb4c8f5c40',
    date: '2020-07-23',
    title: 'terrible!!!!!!',
    comment:
      'Not good at all!! used it once and got caught 2 days later. now im doing life without parole',
    rating: 1,
    productId: '6423c8cc8c1d071460998d28'
  },
  {
    id: '4480710a-e2b6-4dab-a227-43cb3ffca7b8',
    date: '2020-07-23',
    title: 'great',
    comment: 'Great for planting',
    rating: 5,
    productId: '6423c8cc8c1d071460998d28'
  },
  {
    id: '57825f8c-6c13-4ddb-a90e-0c2be283972c',
    date: '2020-07-23',
    title: 'Made well',
    comment: 'Strong an firm',
    rating: 5,
    productId: '6423c8cc8c1d071460998d28'
  },
  {
    id: '5b83af5b-e9fa-47e5-8ac8-faa7d420f2d5',
    date: '2020-07-23',
    title: 'Plants grew well',
    comment: 'Oxygen and nitrogen rich!',
    rating: 3,
    productId: '6423c8cc8c1d071460998d29'
  },
  {
    id: '29120a7e-5c75-4b83-9a21-aa064e2abf37',
    date: '2020-07-23',
    title: 'I made the Nba',
    comment: 'My name is LeBron James',
    rating: 5,
    productId: '6423c8cc8c1d071460998d2a'
  },
  {
    id: '48e297a2-4b6c-48a2-ab68-6fe6b40cb660',
    date: '2020-07-23',
    title: 'I did not make the NBA',
    comment: 'My name is Laith Harb',
    rating: 5,
    productId: '6423c8cc8c1d071460998d2a'
  },
  {
    id: '74bc2895-1ee7-4b97-8f4d-d5818fc95b09',
    date: '2020-07-23',
    title: 'I love ball',
    comment: 'I play basketball with this basketball',
    rating: 5,
    productId: '6423c8cc8c1d071460998d2a'
  },
  {
    id: 'e44b08ac-7b03-488e-83d6-0a85f0f0cecc',
    date: '2020-07-23',
    title: 'Gooooolf',
    comment: 'I need golfing tips',
    rating: 5,
    productId: '6423c8cc8c1d071460998d2b'
  },
  {
    id: '6ee01595-c3b8-42a9-b0e0-ce3cb2beb7d6',
    date: '2020-07-23',
    title: 'meh',
    comment: "I don't like it",
    rating: 3,
    productId: '6423c8cc8c1d071460998d2b'
  },
  {
    id: '4dfdbb84-67f1-48cc-8682-1456413225ad',
    date: '2020-07-23',
    title: 'baseball...?',
    comment: 'I thought this was for football',
    rating: 5,
    productId: '6423c8cc8c1d071460998d2c'
  },
  {
    id: '574f1c51-2483-44a7-8476-888905e1a711',
    date: '2020-07-23',
    title: 'soccer or football',
    comment: "IT'S CALLED FOOTBALL",
    rating: 2,
    productId: '6423c8cc8c1d071460998d2d'
  },
  {
    id: '1e489691-6d19-4438-a6c5-90919eef070e',
    date: '2020-07-23',
    title: 'too small',
    comment: 'ball is too same',
    rating: 4,
    productId: '6423c8cc8c1d071460998d2d'
  },
  {
    id: '6c8bc709-f675-472e-ae84-f8c7d73e99af',
    date: '2020-07-23',
    title: 'got flat',
    comment: 'The ball got as flat as the earth. I want it round!!!!',
    rating: 2,
    productId: '6423c8cc8c1d071460998d2d'
  }
]

exports.db = {
  products,
  categories,
  reviews
}

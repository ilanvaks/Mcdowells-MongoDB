import { client, productsCollection } from './mongoConnect.js'


const addProducts = async () => {
  const products = [ {
    name: "Big Mick",
    price: 3.99,
    stock: 1738,
    description: "McDowell's own version of the Big Mac, which features two all-beef patties, special sauce, lettuce, cheese, pickles, onions, on a sesame seed bun.",
  },
  {name: "French Fries",
  price: 4.99,
  stock: 1608,
  description: "Thinly sliced potatoes that are deep-fried and seasoned with salt.",
  },
  {name: "Milk Cake Shake",
  price: 6.99,
  stock: 1000,
  description:"Thick and creamy beverages made with ice cream and various flavors, including vanilla, chocolate, and strawberry.",
},
  {name: "Chicken Nuggets",
  price: 5.99,
  stock: 808,
  description: "Bite-sized pieces of breaded and fried chicken."
 },
]

  try {
    await client.connect()
    const addedProdcuts = await productsCollection.insertMany(products)
    console.log(addedProdcuts)
  } catch (error) {
    console.log(error)
  } finally {
    await client.close()
  }

}

addProducts()
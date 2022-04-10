const products = [
  {
    price: 200,
    name: "TV",
    amount: 3,
    discount: 5,
    availableIn: ["Odessa", "Kyiv", "Lviv"],
  },
  {
    price: 300,
    name: "Phone",
    amount: 5,
    discount: 10,
    availableIn: ["Baden-baden", "Kyiv", "Lviv"],
  },
  {
    price: 200,
    name: "oven",
    amount: 10,
    discount: 13,
    availableIn: ["Chernobaivka", "Lviv", "Zaporoje"],
  },
  {
    price: 400,
    name: "iron",
    amount: 32,
    discount: 0,
    availableIn: ["Kharkiv", "Vilnus", "Mykolaiv"],
  },
];

// Есть вот такой список продуктов.

console.log('Products: ', products);

// Нужно получить следующие переменные:

// 1. Cумму всех денег по продуктам

const totalAmount = products.reduce( 
  (total, product) => 
    total += product.price*product.amount, 
    0
);

console.log('Total Amount: ', totalAmount);

// 2. Сумму всех денег по продуктам с учетом скидки

const totalAmountWithDiscount = products.reduce( 
  (total, product) => 
    total += (product.price-product.price*product.discount/100)*product.amount, 
    0
);

console.log('Total Amount With Discount: ', totalAmountWithDiscount);

// 3. Cписок всех городов, где представлены продукты


function getCities(products) {
  return products.reduce((acc,{availableIn}) => [...acc, ...availableIn], [])
    .filter((city, i, arr) => arr.indexOf(city) === i)
};

const cities =  getCities(products);

console.log(`Cities: ${cities}`);


// 4. Cписок городов, по которым продукты пересекаются (Львов, Киев итд)

const citiesRepeat = products.reduce((a, e) => [...a, ...e.availableIn], []).reduce((a, e, i, arr) =>
      arr.indexOf(e) !== arr.lastIndexOf(e) && !a.includes(e) ? (a.push(e), a) : a, []
);

console.log(`Cities Repeat: ${citiesRepeat}`)
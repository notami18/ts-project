import { addProduct, calcStock, products } from "./product.service";

addProduct({
  title: 'Pro 1',
  createAt: new Date(),
  stock: 4511,
  size: "M",
});

addProduct({
  title: 'Pro 2',
  createAt: new Date(),
  stock: 75,
  size: "L",
});

addProduct({
  title: 'Pro 3',
  createAt: new Date(),
  stock: 12,
  size: "XL",
});

addProduct({
  title: 'Pro 4',
  createAt: new Date(),
  stock: 5,
});

console.log(products);
const total = calcStock();
console.log(total);

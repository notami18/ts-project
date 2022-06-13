(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  type Product = {
    title: string,
    createAt: Date,
    stock: number,
    size?: Sizes
  };

  const products: Product[] = [];

  const addProduct = (data: Product) => {
    products.push(data);
  };

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

  products.push({
    title: "Pro 5",
    createAt: new Date(1933, 08, 14),
    stock: 45,
    size: "S"
  });


  console.log(products)
})();

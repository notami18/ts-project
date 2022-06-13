(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  const login = (data: { email: string, password: number }) => {
    console.log(data.email, data.password);
  }

  login({
    email: 'andresminota@hoyd.com',
    password: 124541
  });

  const produts: any[] = [];

  const addProduct = (data: {
    title: string,
    createAt: Date,
    stock: number,
    size?: Sizes
  }) => {
    produts.push(data);
  }

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


  console.log(produts)
})();

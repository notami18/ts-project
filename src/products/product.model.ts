type Sizes = 'S' | 'M' | 'L' | 'XL';
type Product = {
  title: string,
  createAt: Date,
  stock: number,
  size?: Sizes
};

export {
  Sizes,
  Product
}

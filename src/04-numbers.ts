(() => {
  let productPrice = 100;
  productPrice = 23;
  console.log('productPrice', productPrice)

  let customerAge: number = 28
  customerAge = customerAge + 1;
  console.log('CustomerAge', customerAge)

  let productInStock: number;
  console.log('productInStock', productInStock)

  if (productInStock > 10) {
    console.log('is greater')
  }

  let discount = parseInt('100');
  console.log('discount', discount);

  if (discount <= 200) {
    console.log('apply')
  } else{
    console.log('not apply')
  }

  let hex = 0xfff;
  console.log('hex', hex)

  let bin = 0b101100111;
  console.log('bin', bin)

  const myNumber: Number = 10;

})();

(() => {
  let productTitle = "My amazing product";
  // productTitle = null;
  // productTitle = () => {};
  // productTitle = 1245;
  productTitle = 'My amazing product changed';
  console.log('productTitle', productTitle);

  const productDescription = "bla bla ba bla blaaa udyu";
  console.log('productDescription', productDescription);

  let productPrice = 100;
  let isNew: boolean = false;

  const summary = `
    title: ${productTitle}
    description: ${productDescription}
    price: ${productPrice}
    isNew: ${isNew}
  `;

  console.log(summary);
})();

(() => {
  let prices = [1, 4, 5, 2, 3, 56, 9, 212, 'Hola', true];
  // prices.push('asas');
  // prices.push(true);
  // prices.push({});
  prices.push(45411);
  prices = [55, 54, 61];

  let products = ['Hola', true];
  products.push(false);

  let mixed: (number | string | boolean | Object)[] = ['Hola', true];
  mixed.push(12);
  mixed.push(true);
  mixed.push('asds');
  mixed.push({});
  mixed.push([]);

  let numbers = [1, 2, 4, 5, 4, 11, 121, 441];
  numbers.map(item => item * 2);
})();

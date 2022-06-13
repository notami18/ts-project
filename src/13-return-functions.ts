(() => {
  const calcTotal = (prices: number[]): string => {
    // prices.reduce((a, b) => a + b)
    let total = 0;
    prices.forEach((item) => {
      total += item
    });
    return total.toString();
  }

  const printTotal = (prices: number[]): void => {
    const rta = calcTotal(prices);
    console.log(`el total es ${rta}`);
  }

  printTotal([1, 2, 5, 3, 4]);
  // console.log(rta);
})();

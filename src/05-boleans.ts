(() => {
  let isEnable = true;
  isEnable = false;

  let isNew: boolean = false;
  console.log('inNew', isNew);
  isNew = true;
  console.log('inNew', isNew);

  const random = Math.random();
  console.log('random', random);

  isNew = random >= 0.5 ? true : false;

  const myBoolean: Boolean = true;
})();

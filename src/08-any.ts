(() => {
  let myDinamicVar: any;
  myDinamicVar = 100;
  myDinamicVar = null;
  myDinamicVar = {};
  myDinamicVar = '';

  myDinamicVar = 'Hola'
  const rta = (myDinamicVar as String).toLocaleUpperCase();
  console.log(rta);

  myDinamicVar = 12451;
  const rta2 = (<number>myDinamicVar).toFixed();
  console.log(rta2);
})();

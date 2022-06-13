(() => {
  let userId: string | number;
  userId = 2656;
  userId = "qwass";

  function greeting(myText: string | number) {
    if (typeof myText === "string") {
      console.log(`string ${myText.toUpperCase()}`)
    } else {
      console.log(`number ${myText.toFixed(2)}`)
    }
  }
  greeting("Carlos Andres Minota");
  greeting(52.12224);
})();

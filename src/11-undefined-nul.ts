(() => {
  // let myNumber: number;
  // let myString: string;
  let myNull: null = null;
  let myUndefined: undefined = undefined;

  let myNumber: number | null = null; //
  myNumber = 78;

  let myString: string | undefined = undefined;
  myString = 'hola mundo';

  function hi(name: string | null) {
    let hello = 'Hola ';
    if (name) {
      hello += name;
    } else {
      hello += 'Nobody'
    }

    console.log(hello)
  }

  function hiV2(name: string | null) {
    let hello = 'Hola ';
    hello += name?.toUpperCase() || 'Nobody';
    console.log(hello);
  }

  hi('Carlos');
  hi(null);

  hiV2('Carlos Andres Minota');
  hiV2(null);


})();

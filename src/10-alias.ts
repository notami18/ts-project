(() => {
  type UserID = string | number | boolean;
  let userId: UserID;

  // Literal types
  type Sizes = 'S' | 'M' | 'L' | 'XL'
  let shirtSize: Sizes;
  shirtSize = 'M';
  shirtSize = 'L';
  shirtSize = 'XL';

  function greeting(userId: UserID, sizes: Sizes) {
    if (typeof userId === "string") {
      console.log(`string ${userId.toUpperCase()} |`, `Sizes: ${sizes}`)
    }
  }

  greeting(1144, 'M');
  greeting('1144', 'XL');
})();

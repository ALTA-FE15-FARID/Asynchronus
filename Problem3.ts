//Lets have some snack
type Snack = {
  name: string;
  price: number;
  time: number;
};

function purchaseSnack(
  budget: number,
  snack: Snack,
  callback: (message: string | null) => void
) {
  if (budget < snack.price) {
    callback(`Maaf, uang Anda tidak cukup untuk membeli ${snack.name}.`);
  } else {
    setTimeout(() => {
      callback(`Anda telah membeli ${snack.name}.`);
    }, snack.time * 1000);
  }
}

const boba: Snack = {
  name: "Boba",
  price: 5000,
  time: 5,
};

const seblak: Snack = {
  name: "Seblak",
  price: 8000,
  time: 9,
};

const budget = 20000;

purchaseSnack(budget, boba, (message) => {
  console.log(message);
  if (message) {
    purchaseSnack(budget - boba.price, seblak, (message) => {
      console.log(message);
    });
  }
});

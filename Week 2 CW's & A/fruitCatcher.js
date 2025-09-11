// ----------------- BASKETS -----------------
const baskets = [
  { name: "Basket 1", hasFruit: false },
  { name: "Basket 2", hasFruit: true },
  { name: "Basket 3", hasFruit: false },
];

// ----------------- FUNCTION -----------------
function checkBasket() {
  // ask the player for a basket
  let choice = prompt("Choose a basket: 0, 1, or 2");
  choice = Number(choice); // turn text into number

  let chosenBasket = baskets[choice]; // pick the basket

  // check if the basket has fruit
  if (chosenBasket.hasFruit) {
    console.log("🎉 Yay! You found the fruit in " + chosenBasket.name);
  } else {
    console.log("😢 Sorry, no fruit in " + chosenBasket.name);
  }
}

// ----------------- GAME PLAY -----------------
checkBasket(); // call the function

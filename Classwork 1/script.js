let highestBalance;
if (
  accountOne.balance > accountTwo.balance &&
  accountOne.balance > accountThree.balance
) {
  highestBalance = accountOne.balance;
  console.log(`Highest Balance is ${highestBalance}`);
} else if (
  accountTwo.balance > accountOne.balance &&
  accountTwo.balance > accountThree.balance
) {
  highestBalance = accountTwo.balance;
  console.log(`Highest Balance is ${highestBalance}`);
} else if (
  accountThree.balance > accountOne.balance &&
  accountThree.balance > accountTwo.balance
) {
  highestBalance = accountThree.balance;
  console.log(`Highest Balance is ${highestBalance}`);
} else if (
  accountOne.balance == accountTwo.balance ||
  accountTwo.balance == accountThree.balance ||
  accountOne.balance == accountThree.balance
) {
  console.log("Two accounts are equal");
}

let Status;
if (accountOne.balance > 0) {
  Status = "Active";
  console.log(`Account One is ${Status}`);
} else if (accountOne.balance === 0) {
  Status = "Inactive";
  console.log(`Account One is ${Status}`);
} else {
  Status = "Dormant";
  console.log(`Account One is ${Status}`);
}

if (accountTwo.balance > 0) {
  Status = "Active";
  console.log(`Account Two is ${Status}`);
} else if (accountTwo.balance === 0) {
  Status = "Inactive";
  console.log(`Account Two is ${Status}`);
} else {
  Status = "Dormant";
  console.log(`Account Two is ${Status}`);
}

if (accountThree.balance > 0) {
  Status = "Active";
  console.log(`Account Three is ${Status}`);
} else if (accountThree.balance === 0) {
  Status = "Inactive";
  console.log(`Account Three is ${Status}`);
} else {
  Status = "Dormant";
  console.log(`Account Three is ${Status}`);
}

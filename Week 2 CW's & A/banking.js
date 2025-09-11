let account1 = {
  name: "Anita",
  balance: 1000,
  currency: "USD",
  type: "Savings",
};
let account2 = {
  name: "Bella",
  balance: 500,
  currency: "USD",
  type: "Checking",
};
let account3 = {
  name: "Chris",
  balance: 2000,
  currency: "USD",
  type: "Savings",
};
let account4 = {
  name: "Dianne",
  balance: 1500,
  currency: "USD",
  type: "Checking",
};

//  Deposits
console.log("Deposits");
let depositToAnita = 300;
account1.balance = account1.balance + depositToAnita;
console.log(
  "Anita deposited " + depositToAnita + ". New balance = " + account1.balance
);

let depositToChris = 200;
account3.balance = account3.balance + depositToChris;
console.log(
  "Chris deposited " + depositToChris + ". New balance = " + account3.balance
);

//  Withdrawals
console.log(" Withdrawals ");
let withdrawFromBella = 700;
if (account2.balance >= withdrawFromBella) {
  account2.balance = account2.balance - withdrawFromBella;
  console.log(
    "Bella withdrew " +
      withdrawFromBella +
      ". New balance = " +
      account2.balance
  );
} else {
  console.log("Withdrawal denied for Bella: insufficient funds");
}

let withdrawFromDianne = 2500;
if (account4.balance >= withdrawFromDianne) {
  account4.balance = account4.balance - withdrawFromDianne;
  console.log(
    "Dianne withdrew " +
      withdrawFromDianne +
      ". New balance = " +
      account4.balance
  );
} else {
  console.log("Withdrawal denied for Dianne: insufficient funds");
}

//Transfers
console.log(" Transfers ");
let transferAmount = 400;
if (account1.currency === account3.currency) {
  if (account1.balance >= transferAmount) {
    account1.balance = account1.balance - transferAmount;
    account3.balance = account3.balance + transferAmount;
    console.log(
      "Transfer successful: " + transferAmount + " from Anita to Chris"
    );
  } else {
    console.log("Transfer failed: not enough balance");
  }
} else {
  console.log("Transfer failed: currency mismatch");
}

//  Monthly Maintenance
console.log("Monthly Maintenance");
if (account1.type === "Savings") {
  let interest = account1.balance * 0.02;
  account1.balance = account1.balance + interest;
  console.log("Anita (Savings) got interest: " + interest);
}
if (account2.type === "Checking") {
  account2.balance = account2.balance - 50;
  console.log("Bella (Checking) charged fee: 50");
}
if (account3.type === "Savings") {
  let interest = account3.balance * 0.02;
  account3.balance = account3.balance + interest;
  console.log("Chris (Savings) got interest: " + interest);
}
if (account4.type === "Checking") {
  account4.balance = account4.balance - 50;
  console.log("Dianne (Checking) charged fee: 50");
}

//  Comparisons
console.log(" Comparisons ");
let highest = account1;
if (account2.balance > highest.balance) {
  highest = account2;
}
if (account3.balance > highest.balance) {
  highest = account3;
}
if (account4.balance > highest.balance) {
  highest = account4;
}
console.log("Highest balance is " + highest.name + " with " + highest.balance);

let lowest = account1;
if (account2.balance < lowest.balance) {
  lowest = account2;
}
if (account3.balance < lowest.balance) {
  lowest = account3;
}
if (account4.balance < lowest.balance) {
  lowest = account4;
}
console.log("Lowest balance is " + lowest.name + " with " + lowest.balance);

//  Account Status
console.log(" Account Status");
if (account1.balance > 0) {
  console.log("Anita is Active");
} else if (account1.balance === 0) {
  console.log("Anita is Empty");
} else {
  console.log("Anita is Overdrawn");
}

if (account2.balance > 0) {
  console.log("Bella is Active");
} else if (account2.balance === 0) {
  console.log("Bella is Empty");
} else {
  console.log("Bella is Overdrawn");
}

if (account3.balance > 0) {
  console.log("Chris is Active");
} else if (account3.balance === 0) {
  console.log("Chris is Empty");
} else {
  console.log("Chris is Overdrawn");
}

if (account4.balance > 0) {
  console.log("Dianne is Active");
} else if (account4.balance === 0) {
  console.log("Dianne is Empty");
} else {
  console.log("Dianne is Overdrawn");
}

// Transaction Summary
console.log("Final Transaction Summary");
console.log(
  "Anita | Balance: " +
    account1.balance +
    " " +
    account1.currency +
    " | " +
    account1.type
);
console.log(
  "Bella | Balance: " +
    account2.balance +
    " " +
    account2.currency +
    " | " +
    account2.type
);
console.log(
  "Chris | Balance: " +
    account3.balance +
    " " +
    account3.currency +
    " | " +
    account3.type
);
console.log(
  "Dianne | Balance: " +
    account4.balance +
    " " +
    account4.currency +
    " | " +
    account4.type
);

// Bonus
console.log(" Bonus Challenge");
let account5 = {
  name: "Ella",
  balance: 1000,
  currency: "EUR",
  type: "Savings",
};

let euroTransfer = 200;
if (account5.currency === account1.currency) {
  console.log("Transfer successful (same currency).");
} else {
  console.log("Transfer failed: currency mismatch");
}

// Exchange rate: 1 EUR = 1.1 USD
let exchangeRate = 1.1;
let converted = euroTransfer * exchangeRate;

if (account5.balance >= euroTransfer) {
  account5.balance = account5.balance - euroTransfer;
  account1.balance = account1.balance + converted;
  console.log(
    "Transfer with conversion successful: " +
      euroTransfer +
      " EUR = " +
      converted +
      " USD"
  );
} else {
  console.log("Transfer failed: insufficient EUR balance");
}

console.log("Anita final balance: " + account1.balance + " USD");
console.log("Ella final balance: " + account5.balance + " EUR");

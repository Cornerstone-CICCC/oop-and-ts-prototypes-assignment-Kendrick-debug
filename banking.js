// Account Constructor
function Account(accountNumber, balance) {
  this._accountNum = accountNumber;
  this._bal = balance;
}

Account.prototype.deposit = function (amount) {
  if (amount > 0) {
    this._bal += amount;
    console.log(
      `Deposited ${amount} to account ${this._accountNum}. New balance: ${this._bal}`
    );
  } else {
    console.log("Positive amount only");
  }
};

Account.prototype.withdraw = function (amount) {
  if (amount > 0 && amount <= this._bal) {
    this._bal -= amount;
    console.log(
      `Withdrew ${amount} from account ${this._accountNum}. New balance: ${this._bal}`
    );
  } else {
    console.log("Insufficient funds or invalid amount");
  }
};

// SavingsAccount Constructor
function SavingsAccount(accountNumber, balance, interestRate) {
  Account.call(this, accountNumber, balance);
  this._interestRate = interestRate;
}

// Inherit from Account
SavingsAccount.prototype = Object.create(Account.prototype);
SavingsAccount.prototype.constructor = SavingsAccount;

SavingsAccount.prototype.addInterest = function () {
  const interest = this._bal * (this._interestRate / 100);
  this._bal += interest;
  console.log(
    `Added interest to savings account ${this._accountNum}. New balance: ${this._bal}`
  );
};

// CheckingAccount Constructor
function CheckingAccount(accountNumber, balance) {
  Account.call(this, accountNumber, balance);
}

// Inherit from Account
CheckingAccount.prototype = Object.create(Account.prototype);
CheckingAccount.prototype.constructor = CheckingAccount;

CheckingAccount.prototype.withdrawUsingCheck = function (amount) {
  if (amount > 0 && amount <= this._bal) {
    this._bal -= amount;
    console.log(
      `Withdrew ${amount} using check from account ${this._accountNum}. New balance: ${this._bal}`
    );
  } else {
    console.log("Insufficient funds or invalid amount");
  }
};

// Demonstrate functionality
const account = new Account("A123", 500);
account.deposit(200);
account.withdraw(100);
console.log(`Account Balance: ${account._bal}`);

const savings = new SavingsAccount("SA123", 1000, 5);
savings.deposit(500);
savings.addInterest();
savings.withdraw(200);
console.log(`Savings Account Balance: ${savings._bal}`);

const checking = new CheckingAccount("CA123", 2000);
checking.deposit(1000);
checking.withdrawUsingCheck(1500);
console.log(`Checking Account Balance: ${checking._bal}`);

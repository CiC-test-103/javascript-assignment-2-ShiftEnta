class Bank {
  constructor() {
    this.accounts = [];
  }

  createAccount(name, initialDeposit) {
    let newAccount = new Account(name, initialDeposit);
    this.accounts.push(newAccount);
    return newAccount; // Ensure this line is present
  }
}

class Account {
  constructor(name, balance = 0) {
    this.name = name;
    this.balance = balance;
    this.transactionHistory = [];
  }

  deposit(amount) {
    if (amount < 1) {
      console.log(`you cannot deposit: $${amount}`);
    } else {
      this.balance += amount;
      this.transactionHistory.push({
        transactionType: "deposit",
        amount: `${amount}`,
      });
    }
  }

  withdraw(amount) {
    if (amount > this.balance) {
      console.log(`you can not take more than $ ${this.balance}`);
    } else {
      this.balance -= amount;
      this.transactionHistory.push({
        transactionType: "withdrawal",
        amount: `${amount}`,
      });
    }
  }

  transfer(amount, recipientAccount) {
    if (amount > this.balance) {
      console.log(`you cannot transfer more than $ ${this.balance}`);
    } else {
      this.balance -= amount;
      recipientAccount.balance += amount;
      this.transactionHistory.push({
        transactionType: "transfer",
        amount: `${amount}`,
        to: `${recipientAccount.name}`,
      });
      recipientAccount.transactionHistory.push({
        transactionType: "Received",
        amount: `${amount}`,
        from: `${this.name}`,
      });
    }
  }

  checkBalance() {
    return this.balance;
  }
}

function testBankOperations() {
  const bank = new Bank();

  // Create new accounts
  const johnAccount = bank.createAccount("John Doe", 1000);
  const janeAccount = bank.createAccount("Jane Doe", 500);

  // Perform some operations on John's account
  johnAccount.deposit(500);
  johnAccount.withdraw(200);

  // Perform a transfer from John to Jane
  johnAccount.transfer(300, janeAccount);

  // Check balances
  const johnFinalBalance = johnAccount.checkBalance();
  const janeFinalBalance = janeAccount.checkBalance();
  console.log("John's balance:", johnFinalBalance);
  console.log("Jane's balance:", janeFinalBalance);

  // Return balances for testing
  return {
    johnFinalBalance,
    janeFinalBalance,
    johnTransactionHistory: johnAccount.transactionHistory,
    janeTransactionHistory: janeAccount.transactionHistory,
  };
}

// Run the test
console.log(testBankOperations());

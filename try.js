class Bank {
  constructor() {
    this.accounts = []; // Stores all accounts in the bank
  }

  // Add methods here:
  // Example: createAccount(name, initialDeposit)
  createAccount(name, initialDeposit) {
    let account = {
      name: name,
      accountBalance: initialDeposit,
    };
    this.accounts.push(account);
  }
  displayAcc() {
    console.log(this.accounts);
  }
}

let newacc = new Bank();
newacc.createAccount("kofi", 100);
newacc.displayAcc();

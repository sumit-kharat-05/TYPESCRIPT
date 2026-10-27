class wallet {
  private balance: number = 1000;

  withdrawn(amount: number) {
    if (amount > this.balance) return `Insufficient Balance`;
    this.balance -= amount;
    return `withdrawn ${amount} left ${this.balance}`;
  }
}

const withdrawnAmount = new wallet();
console.log(withdrawnAmount.withdrawn(300));
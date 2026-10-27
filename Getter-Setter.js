class Account {
    _balance = 0;
    get Balance() {
        return this._balance;
    }
    set Balance(value) {
        if (value < 0) {
            throw new Error("Balance Cannot Be Negative");
        }
        this._balance = value;
    }
}
const a = new Account;
a.Balance = 500;
console.log(a.Balance);
export {};
// a.Balance = -500;
// console.log(a.Balance);

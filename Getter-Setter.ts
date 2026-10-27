class Account
{
    private _balance = 0;

    get Balance():number
    {
        return this._balance;
    }

    set Balance(value:number)
    {
        if(value < 0)
        {
            throw new Error ("Balance Cannot Be Negative");
        }
        this._balance = value;
    }
}

const a = new Account;
a.Balance = 500;
console.log(a.Balance);
// a.Balance = -500;
// console.log(a.Balance);

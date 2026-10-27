interface payments
{
    pay(amount:number):string;
}

class UPI implements payments
{
    pay(amount:number):string
    {
        return `Paid RS.${amount} Via UPI`;
    }
}
class Card implements payments
{
    pay(amount:number):string
    {
        return `Paid RS.${amount} Via Card`;
    }
}

const methods : payments [] = [new UPI(),new Card()];
{
    methods.forEach(m => console.log(m.pay(100000)));
}
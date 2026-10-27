class UPI {
    pay(amount) {
        return `Paid RS.${amount} Via UPI`;
    }
}
class Card {
    pay(amount) {
        return `Paid RS.${amount} Via Card`;
    }
}
const methods = [new UPI(), new Card()];
{
    methods.forEach(m => console.log(m.pay(100000)));
}
export {};

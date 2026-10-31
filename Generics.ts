function identity <T>(value:T):T{
    return value;
}

console.log(identity<string>("sumit"));
console.log(identity<number>(10));


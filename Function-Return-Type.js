function finalPrice(price, discout) {
    return price - (price * discout) / 100;
}
console.log(finalPrice(1000, 10));
export {};

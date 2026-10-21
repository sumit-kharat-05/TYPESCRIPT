function finalPrice(price: number, discout: number): number {
  return price - (price * discout) / 100;
}
console.log(finalPrice(1000,10));
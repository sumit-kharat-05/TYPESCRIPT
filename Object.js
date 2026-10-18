function showProduct(p) {
    return `${p.tittle} - Rs.${p.price} by ${p.seller.name}`;
}
const phone = {
    id: 101,
    tittle: 'Phone',
    price: 180000,
    seller: { name: "Apple", rating: 5.0 },
};
console.log(showProduct(phone));
export {};

interface product {
  id: number;
  tittle: string;
  price: number;
  stock: number;
  seller: { name: string; rating: number };
}

function showProduct(p: product): string {
    return `${p.tittle} - Rs.${p.price} by ${p.seller.name}`;
}

const phone : product = {
    id:101,
    tittle:'Phone',
    price:180000 ,
    seller:{name:"Apple",rating:5.0},

}

console.log(showProduct(phone));

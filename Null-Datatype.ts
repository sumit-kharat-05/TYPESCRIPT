let coupon : string | null = null;

function getDiscount (): number {
    if(coupon === null)
    {
        return 0;
    }
    return coupon === "SAVE20" ? 20:0;
}

console.log(getDiscount());

coupon = "SAVE20";
console.log(getDiscount());

coupon = null ;
console.log(getDiscount());



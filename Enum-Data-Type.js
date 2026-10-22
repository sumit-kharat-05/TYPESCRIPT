var orderStatus;
(function (orderStatus) {
    orderStatus["placed"] = "PLACED";
    orderStatus["shipped"] = "SHIPPED";
    orderStatus["delivered"] = "DELIVERED";
})(orderStatus || (orderStatus = {}));
function message(s) {
    switch (s) {
        case orderStatus.placed:
            {
                console.log("Your Order Are Placed");
                break;
            }
        case orderStatus.shipped:
            {
                console.log("Your Order Are Shipped And On The Way");
                break;
            }
        case orderStatus.delivered:
            {
                console.log("Your Order Delivered");
                break;
            }
    }
}
console.log(message(orderStatus.shipped));
export {};

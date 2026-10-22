enum orderStatus {
  placed = "PLACED",
  shipped = "SHIPPED",
  delivered = "DELIVERED",
}

function message(s:orderStatus)
{
    switch(s)
    {
        case orderStatus.placed :
        {
            console.log("Your Order Are Placed");
            break;
        }
         case orderStatus.shipped :
        {
            console.log("Your Order Are Shipped And On The Way");
            break;
        }
         case orderStatus.delivered :
        {
            console.log("Your Order Delivered");
            break;
        }
    }
}

console.log(message(orderStatus.shipped));
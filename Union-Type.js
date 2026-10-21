function priceId(Id) {
    if (typeof Id === "string") {
        console.log(Id.toUpperCase());
    }
    else {
        console.log(Id.toFixed(2));
    }
}
priceId("Sumit");
priceId(5);
export {};

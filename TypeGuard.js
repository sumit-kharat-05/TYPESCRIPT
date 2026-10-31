function show(v) {
    if (typeof v === "string") {
        console.log(v.toUpperCase());
    }
    else {
        console.log(v.toFixed(2));
    }
}
show(10);
export {};

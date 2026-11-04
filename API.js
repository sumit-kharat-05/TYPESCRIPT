async function apiCallHandling() {
    const result = await fetch("https://dummyjson.com/carts");
    const data = await result.json();
    console.log(data);
}
apiCallHandling();
export {};

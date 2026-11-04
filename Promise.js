function complexLogic() {
    return new Promise((resolved) => {
        setTimeout(() => {
            resolved("Done");
        }, 2000);
    });
}
complexLogic().then((data) => {
    console.log(data);
});
export {};

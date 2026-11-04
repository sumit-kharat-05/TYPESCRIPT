function complexLogic():Promise<string>
{
    return new Promise((resolved)=>
    {
        setTimeout(() => {
            resolved("Done");
        }, 2000);
    });
}

complexLogic().then((data:string)=>
{
    console.log(data);
    
})
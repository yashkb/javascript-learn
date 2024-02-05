function sum(a,b,callback)
{
    callback()
    return a+b;
}

function print()
{
    console.log("Callb");
}


sum(10,20,print)
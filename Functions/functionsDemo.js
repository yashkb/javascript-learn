function a()
{
    console.log("A ")
}

const b = a;
//b();

function fun(name,callback)
{
    callback(name)
}

function print(name)
{
    console.log("Name=",name)
}

fun("Yash",print)


function fun(a,callback)
{
  callback(a)
}

function print(a)
{
  setTimeout(function()
  {
    console.log(a)
  },2000);
  console.log("Line 2");
} 

fun("Line 1",print)
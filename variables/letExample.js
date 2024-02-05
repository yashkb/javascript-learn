//Example 1 block Scope
{
    let letInside = "I'm inside";
    console.log(letInside)
}

//console.log(letInside)

//Example 2 :- Reassign
let num = 14;
console.log(num)
num = 18;
console.log(num)

//Example 3 :- Must Decalre before use

//console.log(useVar);
let useVar = "Yash"
console.log(useVar)

//Example 4:- 
var a = 10;
console.log("Outside",a)
{
    let a = 14;
    console.log("Inside",a)
}
console.log("Outside again",a)



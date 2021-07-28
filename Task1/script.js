// String(100500) and  100500 they are converted by the operator === this checks equality without coersin type, so result is false
if (100500 === '10500'){
    document.writeln("1)100500 = '100500' <br>")
}else{
    document.writeln("1)100500 != '100500' <br>")
}

//but if we use ==. String(10) and 10 they are converted by the == operator to a number, so result is true
if (10 == '10'){
    document.writeln("2)10 = '10' <br>")
}

//Null and undefined are both evaluated as complexity in terms of logical in JavaScript, they evaluate tofalse
if (null == undefined){
    document.writeln(`3)null == undefined <br>`)
}else{
    document.writeln(`3)null !== undefined<br>`)
}

if (null === undefined){
    document.writeln(`5)null == undefined <br>`)
}else{
    document.writeln(`5)null !== undefined<br>`)
}

//The empty array converts into Number.The result of Number([]) is 0. The expression evaluates to true.
if (0 == []){
    document.writeln(`6)0 == [] <br>`)
}else{
    document.writeln(`6)0 !== [] <br>`)
}

// The "0" is a String. The result of String([]) is "" so expression evaluates to false
if ("0" == []){
    document.writeln(`7)0 == [] <br>`)
}else{
    document.writeln(`7)"0" !== [] <br>`)
}

//Operator + run numeric conversion for true = 1 and false = 0: 1 + 0 = 1
let firstResult = true + false;
document.writeln(`8)true + false = ${firstResult} <br>`)

//Adding with a string turns the number 2 into a string and adds it to the string.
let secondResult = "He went to Sols barrow and drew out the" + 2 + "slim singlestick"
document.writeln(`9)He went to Sols barrow and drew out the" + 2 + "slim singlestick = ${secondResult} <br>`)

//At first we add 3 to 6 and recieve 9 amd then adding with a string turns the number 9 into a string and adds it to the string.
let thirdResult = 3 + 6 + "50"
document.writeln(`10)3 + 6 + "50" = ${thirdResult} <br>`)

//Subtraction always converts to a number so we add two numbers and sub a string 3 we can converts to a number, but em we cant? so result is NaN
let fourthResult = 6 + 50 - "3em"
document.writeln(`11)6 + 50 - "3em" = ${fourthResult} <br>`)

//If we remove em and stay only number how string
let fifthResult = 6 + 50 - "3"
document.writeln(`12)6 + 50 - "3" = ${fifthResult} <br>`)

//Change and add first string we recieve number
let sixthResult = "-6" - 5 - "3"
document.writeln(`13) "-6" - 5 - "3" = ${sixthResult} <br>`)

//Null becomes 0 after a coersin operation.
let seventhResult = null - 5
document.writeln(`14)null - 5 = ${seventhResult} <br>`)

//undefined becomes NaN after a coersin operation.
let eighthResult = undefined + 60
document.writeln(`15)undefined + 60 = ${eighthResult} <br>`)

//Сonvert string to number by function Number
let ninethResult = Number("50") - 60
document.writeln(`16)Number("50") - 60= ${ninethResult} <br>`)

//Сonvert number to string by function String
let tenthResult = String("50") + 60
document.writeln(`17)String("50") + 60= ${tenthResult} <br>`)

//When the division operation / is not applied to a number strings are converted to numbers
let eleventhResult = String("120") / "60"
document.writeln(`18)String("120") / "60" = ${eleventhResult} <br>`)

//add two array, we have common rules
let twelvethResult = ["My", "name"] + ["is", "Yulia"]
document.writeln(`19)["My", "name"] + ["is", "Yulia"] = ${twelvethResult} <br>`)

//sub two array, we have common rules
let thirteenthResult = ["My", "name"] - ["is", "Yulia"]
document.writeln(`20)["My", "name"] - ["is", "Yulia"] = ${thirteenthResult} <br>`)

//sub two array, we have common rules
let fourteenthResult = [3] - [2]
document.writeln(`21)[3] - [2] = ${fourteenthResult} <br>`)

//convert string to number and compares 
let fifteenthResult = 10 > "11"
document.writeln(`22)10 > "11" = ${fifteenthResult} <br>`)

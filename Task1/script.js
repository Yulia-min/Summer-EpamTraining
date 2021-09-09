let x =[1,2,3,4,5,6,7,8];

function approx(x){
    let y = [];
    y.push(x[1]);
    for(let i = 1; i < x.length-1; i++){
        y.push(x[i - 1] + x[i + 1]);      
    }
    y.push(x[x.length-2]);
    return y
}

result = approx(x);

document.write("Array: " + x + "<br>");
document.write("Sum of neighboring elements: " + result);


/*let randn_bm = function() {  
    let u = 0, v = 0;  
        while (u === 0) 
            u = Math.random();  
        while (v === 0) 
            v = Math.random();  
    return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v) * 2 | 0;
};*/

const array = [];
const result = {};

let randn_bm = function(){
    while (array.length < 10) {
        let u = 0;
        let v = 0;  
            while (u === 0) {
                u = Math.random(); 
            }
            while (v === 0) {
                v = Math.random(); 
            }

    let number = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v) * 2 | 0;
    array.push(number);
}
}

let numberCount = function(){
        for(let i = 0; i < array.length; i++){
            let arr = array[i];
            result[arr] = result[arr] + 1 || 1;
        }
}

randn_bm();
numberCount();

document.write("Ten random number: " + array + "<br>");
document.write("Result: " + JSON.stringify(result));



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

let randn_bm = function() {  
    let u = 0, v = 0;  
        while (u === 0) 
            u = Math.random();  
        while (v === 0) 
            v = Math.random();  
    return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v) * 2 | 0;
};

let num = Array.from({length: 10}, randn_bm)

/*let randn_bm = function(){
    while (array.length < 10) {
        let u = 0;
        let v = 0;  
            while (u === 0) {
                u = Math.random(); 
            }
            while (v === 0) {
                v = Math.random(); 
            }

    number = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v) * 2 | 0;

    array.push(number);
}
}*/

let numberCount = function(){
        for(let i = 0; i < num.length; i++){
            let arr = num[i];
            result[arr] = result[arr] + 1 || 1;
        }
        return result
}

randn_bm();
numberCount();

document.write("Ten random number: " + num + "<br>");
document.write("Result: " + JSON.stringify(result));



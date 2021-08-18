function range(min, max) {
    try{
        let sum = 0 ;

        min = +prompt("Enter min");
        max = +prompt("Enter max");

        for(let i = min; i <= max; i++){        
            sum += i;
        }

        if (min > max) {
            throw new SyntaxError(`${min} bigger then ${max}. Please, enter right order.`);
        }
        if (isNaN(min) || isNaN(max)) {
            throw new SyntaxError("Please, enter the number, not string."); 
        }
        if (min == '' || max == '') {
            throw new SyntaxError("The string can't be empty. Please, enter numbers."); 
        }
        if (min == max) {
            throw new SyntaxError("Min can't be equal to max. Please, enter another numbers."); 
        }
        if (sum > Number.MAX_SAFE_INTEGER) {
            throw new SyntaxError("It's really big sum. Please, enter another numbers."); 
        } 
        if(!Number.isInteger(min) || !Number.isInteger(max)){
            throw new SyntaxError("Please, enter the integer number."); 
        } else{
            return alert(`Sum of numbers: ${sum}`);
        }

    } catch(err){
        alert(err.message);
    } finally{
        alert("Thanks");
    }    
  }

range();


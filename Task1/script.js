const combinationOfLetters = (letters) =>{
      let array = [];
      for (let i = 0; i < letters.length; i++){
        let string = letters.slice(0, i) + letters.slice(i + 1);
        let fullString = combinationOfLetters(string)

        for (let k = 0; k < fullString.length; k++){
          array = array.concat(letters[i] + fullString[k]) 
        }          
      }
      if(letters.length == 1){
        return letters
      }
      if(letters.length == 0){
        return new Error("Please, enter the string"); 
      }else{
        return array
      }     
  }

document.write("Result: " + combinationOfLetters("abc") )





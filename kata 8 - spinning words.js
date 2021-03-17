//TASK:Write a function that takes in a string of one or more words, and returns the same string, 
//but with all five or more letter words reversed (Just like the name of this Kata). 
//Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

function spinWords(string){
let split = string.split(" ");
 let answer = []
  
  for(var i = 0; i<split.length ;i++) {
    if(split[i].length >= 5) {
      let arrayed = split[i].split("")
      let reversed = arrayed.reverse();
      let merged = reversed.join("")
      answer.push(merged)
    } else {
      
      answer.push(split[i])

    }
    
  }
   var finalAnswer  = answer.join(" ")
  return finalAnswer;
  
}

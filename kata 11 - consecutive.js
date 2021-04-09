function solution(list){
  
let markedArray = [];
let start;
  
 for(let i = 0;i<list.length;i++) {
   
   if ((list[i] === list[i+1]-1) && (list[i] !== list[i-1]+1))
     {
       start = list[i]
       
     } else
         
   if ((list[i] === list[i+1]-1) && (list[i] === list[i-1]+1)) {
       
          
      } else
   
   if ((list[i] !== list[i+1]-1) && (list[i] == list[i-1]+1)) {
     
      if ((list[i] - start) > 1) {
         markedArray.push(start + "-" + list[i]);
     } else {
        markedArray.push(start);
       markedArray.push(list[i]);
     }
     
        }else {
          markedArray.push(list[i]);
        }
  
    
  }
  let stringify = markedArray.toString();
 return stringify;
  }
  


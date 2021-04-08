function solution(list){
  
let markedArray = [];
let finalArray = [];
;
  
 for(let i = 0;i<list.length;i++) {
   
   
   if (list[i] === list[i+1]-1 && list[i] != list[i-1]+1)
     {
      
       let first= i;
       let second = i + 1;
       let diff = list[first]-list[second];
       
      
       
       while (diff === 1 ){
         second++
         first++
         list.splice(first,1); 
         
       }
       
       let end = first
       list[i] = list[i] + "-" + list[second];
       markedArray.push(list[i]);
       
     } else {
        markedArray.push(list[i]);
     }
   
 
 
  }
  
 console.log(markedArray);
  
   let start;
  let end;
    
   for(let x = 0; x < markedArray.length; x++) {
    
     if(typeof markedArray[x] ==="string" && typeof markedArray[x-1] !=="string") 
     {
       
     console.log('splice')
       start = markedArray[x];
        markedArray.splice(x,1)
 
       
       
      } else 
     
   if(typeof markedArray[x] === "string" && typeof markedArray[x+1] ==="string") 
   {
      
     markedArray.splice(x,1)
     console.log('splice')
     x--
     
     } else if (typeof markedArray[x] ==="string" && typeof markedArray[x+1] !=="string") {
       end = markedArray[x];
       markedArray[x] = start + "-" + end;
         
     }
     }
  console.log(markedArray);
 
  
  }
  


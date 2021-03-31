//A format for expressing an ordered list of integers is to use a comma separated list of either individual integers or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17" Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.
function solution(list){
  
let markedArray = [];
let finalArray = [];
  
 for(let i = 0;i<list.length;i++) {
   
   
   if (list[i] === list[i+1]-1 && list[i] != list[i-1]+1)
     {
      
       let first= i;
       let second = i + 1;
       let diff = list[first]-list[second];
       let start = list[i];
      
       
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
    
   for(let x = 0; x < markedArray.length; x++) {
     if(typeof markedArray[x] ==="string" && typeof markedArray[x-1] !=="string") {
       markedArray[x] === start
   if(typeof markedArray[x] === "string") {
      
     markedArray.splice(x,1)
     console.log('splice')
     x--
     
    
   } else {
     console.log(typeof markedArray[x])
     console.log(markedArray[x])
   }
     }
 

 console.log(markedArray);
  
  }

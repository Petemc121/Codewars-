//A format for expressing an ordered list of integers is to use a comma separated list of either individual integers or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17" Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.
function solution(list){
  

  
 for(let i = 0;i<list.length;i++) {
   
   if (list[i] === list[i+1]-1 && list[i] != list[i-1]+1)
     {
      
       let first= i;
       let second = i + 1;
       
       while (list[second] - list[first] === 1 || list[second] - list[first] == list[second]) {
         second++
         first++
         list.splice(second,1); 
         
       }
       list[i] = list[i] + "-" + list[second];
       
     } 
 
  }
  

 return list
  
  }



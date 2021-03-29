//A format for expressing an ordered list of integers is to use a comma separated list of either individual integers or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17" Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.
function solution(list){
  

  let newArray = []
 for(let i = 0;i<list.length;i++) {
   
   if (list[i] === list[i+1]-1 && list[i] != list[i-1]+1)
     {
       let j = i + 1;
       let start = i
      
       while (list[j] === list[j-1]+1) {
         j++
         list.splice(j,1) 
       }
       list[i] = i + "-" + j
       newArray.push(list[i])
       
     } else {
       newArray.push(list[i]);
     }
 
  }
  
  console.log(newArray);
  console.log(list);
  
  }


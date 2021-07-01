function LCS(x, y) {
  let subsequence = "";
  let tempY = y;
  let tempX = x;
  
   console.log(tempY)
           console.log(tempX)
          console.log(subsequence)
 
 
  for (let i = 0; i < x.length; i++)
    {
    
     if (tempY.indexOf(x[i]) !== -1)
        {
          subsequence += x[i];
        tempY = tempY.slice(0, tempY.indexOf(x[i])) + tempY.slice(tempY.indexOf(x[i]) + 1, tempY.length);
           
        }

    }
     
  
 console.log(tempY)
           console.log(tempX)
          console.log(subsequence)

  return subsequence;
}


LCS('notatest','anothertest')






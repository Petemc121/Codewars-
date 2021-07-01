function LCS(x, y) {
  let subsequence = "";
  let tempY = y;
  let tempX = x;
 
  if (y.length > x.length)
    {
  for (let i = 0; i < x.length; i++)
    {
    
     if (tempY.indexOf(x[i]) !== -1)
        {
          subsequence += x[i];
        tempY = tempY.slice(0, tempY.indexOf(x[i])) + tempY.slice(tempY.indexOf(x[i]) + 1, tempY.length);
            console.log(tempY)
           console.log(tempX)
          console.log(subsequence)
        }

    }
      }
  else if (x.length > y.length)
    {
       for (let i = 0; i < y.length; i++)
    {
    
     if (tempX.indexOf(y[i]) !== -1)
        {
          subsequence += y[i];
         tempX = tempX.slice(0, tempX.indexOf(y[i])) + tempX.slice(tempX.indexOf(y[i]) + 1, tempX.length);
          console.log(tempY)
           console.log(tempX)
          console.log(subsequence)
        }

    }
    }
  


  return subsequence;
}


console.log(LCS('FJKASDFNK','SADFKJLML'))




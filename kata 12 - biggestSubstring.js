function LCS(x, y) {
  let subsequence = "";
 
 
  for (let i = 0; i < x.length; i++)
    {
    
      if (y.includes(x[i], i))
        {
      
            subsequence += x[i];
        }
        

    }

  
  return subsequence;
}



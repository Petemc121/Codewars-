//find the largest common divisor between two inputs

function mygcd(x,y){
  
  if (x == 1 || y == 1) 
    {
      return 1;
    }
  
   if (x > y) 
   {
     if(x % y == 0) {
       return y;
     } else {
       return mygcd(x,y-1);
     }
   }
else if (y > x) 
  {
    if (y % x == 0) 
      {
        return x;
      } else {
        return mygcd(x-1, y);
      }
  }
  
    }
       
  
      


 

//find the largest common divisor between two inputs

function mygcd(x,y){
  return y == 0 ? x : mygcd(y, x % y)
}
       
  
      


 

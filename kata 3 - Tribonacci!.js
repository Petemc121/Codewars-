//TASK: create a fibonacci function that given a signature array/list, returns the first n elements - 
signature included of the so seeded sequence.

function tribonacci(signature,n){
  
 
  if (n>2){
  for (i = 0; i<n-3; i++) {
 signature.push(signature[i] + signature[i+1] + signature[i+2])
  }
    }else if (n<3) {
      
    signature.splice(n, 3)  
    
    }
  
  return signature
  }
  

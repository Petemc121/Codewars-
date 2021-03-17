//TASK:The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal 
//representation being returned. Valid decimal values for RGB are 0 - 255. 
//Any values that fall out of that range must be rounded to the closest valid value.

//Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

function rgb(r, g, b){
  var first =  rgbToHex(r);
 var second = rgbToHex(g);
 var third =  rgbToHex(b);
  
  return(first+second+third)
}

function rgbToHex(rgb) { 
   if (rgb>255) {
     let roundDown = 255
     let hex = roundDown.toString(16);
  if (hex.length < 2) {
       hex = "0" + hex;
  }
     return hex.toUpperCase();
     
     }else if(rgb<0) {
       let roundUp = 0;
let hex = roundUp.toString(16);
  if (hex.length < 2) {
       hex = "0" + hex;
  }
       return hex.toUpperCase();
     } else {
  
  let hex = Number(rgb).toString(16);
  if (hex.length < 2) {
       hex = "0" + hex;
  }
  return hex.toUpperCase();
     }
};

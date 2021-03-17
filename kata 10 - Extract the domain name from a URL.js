//TASK Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

function domainName(url){
start1 = url.startsWith("h");
  start2 = url.startsWith("w");
  slice = "";
  
  if (start1) {
     slice = url.slice(url.indexOf("/") + 2, url.length);
    if (slice.startsWith("w")) {
      andDice = slice.slice(slice.indexOf(".")+ 1, slice.length);
      finalSlice = andDice.slice(0, andDice.indexOf('.'))
      return finalSlice
    } else {
      finalSlice = slice.slice(0, slice.indexOf('.'))
      return finalSlice;
      }
      } else if(start2) {
        slice1 = url.slice(4,url.length);
        slice = slice1.slice(0 , slice1.indexOf("."));
        return slice;
      }
}

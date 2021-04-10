// this wasn't actually a problem set by code wars. Just me using recursion to reverse any input string. 

let reversed = [];

function reverse(string) {
  let n = reversed.length;

  if (n === string.length) {
    return;
  }

  reversed.push(string[string.length - 1 - n]);
  reverse(string);
}

reverse("Recursion");

join = reversed.join("");

var stringify = join.toString("");

console.log(stringify);

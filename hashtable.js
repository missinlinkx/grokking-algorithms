var prompt = require('syncprompt');
maMap = new Map();
var reading = true;

console.log("\nEnter keys and values when prompted.\nEnter 'done' to exit loop.");

while (reading) {
  var key = prompt("Enter key: ");
  var value = prompt("Enter value: ");
  if (key === 'done' || value === 'done') {
    console.log(maMap);
    search();
    return reading = false;
  } else {
    maMap.set(key,value);
  }
}

function search () {
  var src = prompt ("Enter key to search for: ")
  if (src) {
    console.log(maMap.get(src));
  }
}

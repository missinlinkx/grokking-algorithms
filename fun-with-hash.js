var prompt = require('syncprompt');
var array = [];
var hashsize = 1000;
var reading = true;

function numeric (string) {
  var sum = 0;
  for (var i = 0; i < string.length; i++) {
    sum += string.charCodeAt(i);
  }
  if (sum != 0) {
    return sum % hashsize;
  }
}

function printArray () {
  for (var i = 0; i < hashsize; i++) {
    if (array[i] !== undefined) {
      console.log(i + ':');
      var current = array[i];
      while(current) {
        console.log(current.value);
        current = current.next;
      }
    }
  }
}

function read() {
  while (reading) {
    var string = prompt('Enter string:');
    if (string === 'meh!') {
      printArray();
      return reading = false;
    } else {
      save(numeric(string), string);
    }
  }
}

function save (key, string) {
  if (array[key]) {
    var current = array[key];
    while (current) {
      if (current.next === null) {
        current.next = {
          value: string,
          next: null
        };
      break;
      }
      current = current.next;
    }
  } else {
    array[key] = {
      value: string,
      next: null
    }
  }
}

function search () {
  var val = prompt ("Enter value to search for: ")
  if (val) {
    var found = false;
    for (var i = 0; i < hashsize; i++) {
      if (array[i] !== undefined) {
        var current = array[i];
        while(current) {
          if (current.value === val) {
            console.log(val+" found at idx "+i);
            found = true;
            break;
          } else {
            current = current.next;
          }
        }
      }
    }
    if (!found) {
      console.log('value not found');
    }
  }
}

read();
if (!reading) {
  var searching = true;
  while (searching) {
    var src = prompt('Search for a value? Y/N ');
    while (src === 'Y' || src === 'y') {
      search();
      src = prompt('Search for another value? Y/N ');
    }
    if (src !== 'Y' || src !== 'y') {
      searching = false;
    }
  }
}

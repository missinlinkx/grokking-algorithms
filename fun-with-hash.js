var prompt = require('syncprompt');
var array = [];
var hashsize = 1000;

function numeric (string) {
  var sum = 0;
  for (var i=0; i<string.length; i++) {
    sum += string.charCodeAt(i);
  }
  if (sum != 0) {
    return sum%hashsize;
  }
}

function printArray () {
  for (var i=0; i<hashsize; i++) {
    if (array[i] !== undefined) {
      console.log(i, array[i]);
    }
  }
}

function read() {
  var reading = true;
  while (reading) {
    var string = prompt('Enter string:');
    if (string === 'meh!') {
      printArray();
      return reading = false;
    } else {
      save(numeric(string),string);
    }
  }
}

function save (key,string) {
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

read();

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
    var idx = numeric(val);
    if (array[idx] !== undefined) {
      var current = array[idx];
      while(current) {
        if (current.value === val) {
          console.log(val+" found at idx "+idx);
          found = true;
          break;
        } else {
          current = current.next;
        }
      }
    }
  }
  if (!found) {
    console.log('Value not found');
  }
}

function del () {
  var val = prompt ("Enter value to delete: ")
  var deleted = false;
  if (val) {
    var idx = numeric(val);
    if (array[idx] !== undefined) {
      var current = array[idx];
      if (array[idx].value === val) {
        array[idx] = array[idx].next;
        deleted = true;
      } else {
        while (current) {
          if (current.next && current.next.value === val) {
            current.next = current.next.next;
            deleted = true;
            break;
          } else {
            current = current.next;
          }
        }
      }
      if (!deleted) {
        console.log("value not found");
      }
      printArray();
    }
  }
}

function run () {
  var choice = prompt('Add values (A), Search for a value (S), or Delete value (D)? ');
  while (choice) {
    if (choice === 'A' || choice === 'a') {
      read();
      choice = prompt('Add values (A), Search for a value (S), or Delete value (D)? ');
    }
    else if (choice === 'S' || choice === 's') {
      search();
      choice = prompt('Add values (A), Search for a value (S), or Delete value (D)? ');
    }
    else if (choice === 'D' || choice === 'd') {
      del();
      choice = prompt('Add values (A), Search for a value (S), or Delete value (D)? ');
    }
    else {
      break;
    }
  }
}

run();

var fs = require('fs');

function quicksort (array) {
  if (array.length < 2) {
    return array;
  }
  else {
    var idx = Math.floor(array.length/2);
    var pivot = array[idx];
    var less = [], greater = [];
    array.splice(idx,1)
    array.forEach(function(elem) {
      if (elem <= pivot) {
        less.push(elem);
      }
      else if (elem > pivot) {
        greater.push(elem);
      }
    })
    return quicksort(less).concat(pivot, quicksort(greater));
  }
}

function read() {
  fs.readFile(process.argv[2], 'utf8', function doneReading(err,fileContents){
    var result = []
    result = fileContents.trim().split(',');
    if (result !== []) {
      result.forEach(function(elem,idx) {
        result[idx] = Number(elem);
      })
    console.log(quicksort(result));
    }

  });
};

read();

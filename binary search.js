var n;
var arr = [];
var doneSearching = false;

function getNumber () {
  console.log('Enter number between 1-1000:');
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', function (text) {
    n = Number(text.trim());
    if (n !== NaN) {
      createArray();
      if (arr !== []) {
        binarySearch(arr,n);
        if (doneSearching) {
          process.stdin.pause();
        }
      }
    }
  });
}

function createArray () {
  for (var i=1;i<=1000;i++) {
    arr.push(i);
  }
};

function binarySearch(arr, num){
  low = 0;
  high = arr.length-1;
  count = 0
  while (low <= high) {
    mid = Math.floor((low+high)/2);
    if (arr[mid] === num) {
      doneSearching = true;
      return console.log('found '+num+' at idx '+mid+' in '+count+' tries');
    }
    else if (arr[mid] > num) {
      high = mid - 1;
      count += 1;
    }
    else {
      low = mid + 1;
      count += 1;
    }
  }
  console.log('number not found');
  doneSearching = true;
};

getNumber();

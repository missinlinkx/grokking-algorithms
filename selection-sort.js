function findSmallest(arr) {
  var smallest = arr[0];
  var sm_idx = 0, len = arr.length;
  for (var i=1; i<len; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      sm_idx = i;
    };
  }
  return sm_idx;
}

function selectionSort (arr) {
  var newArr = [];
  var len = arr.length;
  for (var j=0; j<len; j++) {
    var sm_idx = findSmallest(arr);
    newArr.push(arr.splice(sm_idx,1)[0]);
  };
  if (newArr) {
    return newArr;
  };
}

console.log(selectionSort([3,7,2,8,5,1]));

var fs = require('fs');
var str1 = "art";
var str2 = "magic";

function levsDist (str1, str2) {
  if (str1===str2) {
    return 0;
  } else if (str1.length === 0) {
    return str2.length;
  } else if (str2.length === 0) {
    return str1.length;
  }

  var v0 = [];
  var v1 = [];

  for (var i=0;i<str2.length+1;i++) {
    v0[i] = i;
  }

  for (var i=0;i<str1.length;i++) {
    v1[0] = i+1;
    for (var j=0;j<str2.length;j++) {
      var cost;
      if (str1[i]===str2[j]) {
        cost = 0;
      } else {
        cost = 1;
      }
      v1[j+1] = Math.min(v1[j] + 1, v0[j + 1] + 1, v0[j] + cost);
    }
    for (var j=0;j<v0.length;j++) {
      v0[j] = v1[j];
    }
  }
  return v1[str2.length]
}

console.log(levsDist(str1, str2));

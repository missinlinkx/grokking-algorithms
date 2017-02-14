var fs = require("fs")
var str1 = "art";
var len1 = str1.length;
var str2 = "math";
var len2 = str2.length;

function levsDist (str1, len1, str2, len2) {
  var cost;

  if (len1 === 0) {
    return len2;
  }
  if (len2 === 0) {
    return len1;
  }

  if (str1[len1-1] === str2[len2-1]) {
    cost = 0;
  } else {
    cost = 1;
  }

  return Math.min(levsDist(str1, len1-1, str2, len2) + 1,
             levsDist(str1, len1, str2, len2-1) +1,
             levsDist(str1, len1-1, str2, len2-1) + cost);
}

console.log(levsDist(str1,len1,str2,len2))

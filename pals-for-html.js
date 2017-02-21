$(document).ready(function () {

var str = '';

$('#word').on('keyup', function () {
  str = $(this).val();
});
$('#activate').on('click', function () {
  solver(str);
});

//attattaac - 6, cccaacbabacbbabccbc - 15, mamad - 3

function letterCount (str) {
  var count = {};
  //count occurrences of each letter in given word
  for (var i=0; i < str.length; i++) {
    if (!count[str.charAt(i)]) {
      count[str.charAt(i)] = 1;
    } else {
      count[str.charAt(i)]++;
    }
  }
  return count;
}

function verification (count) {
  //check if more than one letter occurs an uneven number of times, meaning the word cannot be a palindrome
  var uneven = 0;
  for (var key in count) {
    var value = count[key];
    if (value % 2 === 0) {
      continue;
    } else {
      uneven++;
    }
    if (uneven === 2) {
      return false;
    }
  }
  return true;
}

function initialize (str) {
  //create object for each position in the word with parameters to be used in the solver
  var letters = [];
  for (var i=0;i<str.length;i++) {
    letters[i] = {
      'idx': i,
      'cIdx': str.length-i-1,
      'char': str.charAt(i),
    }
  }
  return letters;
}

function findCorrespondent (letters, currentIdx) {
  //find corresponding letter at other end of word
  var nth = 0, mth = 0;
  var currentLetter = letters[currentIdx];
  if (currentIdx === Math.floor(letters.length/2) && currentIdx === currentLetter.cIdx) {
    return currentIdx;
  } else if (currentIdx < Math.floor(letters.length/2)) {
    for (var i = 0; i<=currentIdx; i++) {
      if (currentLetter.char === letters[i].char) {
        nth++;
      }
    }
    for (var j=letters.length-1; j>=currentIdx; j--) {
      if (currentLetter.char === letters[j].char) {
        mth++;
        if (mth === nth) {
          return j;
        }
      }
    }
  } else {
    for (var k = 0; k<=currentIdx; k++) {
      if (findCorrespondent(letters, k) === currentIdx) {
        return k;
      }
    }
  }
}

function shifter (arr, from, to) {
  var aux;
  aux = arr[to].char;
  arr[to].char = arr[from].char;
  arr[from].char = aux;
}

function reanimator (letters) {
  var reanimated = '';
  for (var i=0;i<letters.length;i++){
    reanimated = reanimated+letters[i].char;
  }
  return reanimated;
}

function solver (str) {
  if (!verification(letterCount(str))) {
    $('#solution').text("'"+str+"'"+" cannot be a palindrome");
    return;
  }
  var letters = [];
  letters = initialize(str);
  var step = 0;
  for (var i=0;i<letters.length/2;i++) {
    if (check(letters)) {//check if word is already a palindrome
      $('#solution').text("we have a palindrome! '"+reanimator(letters)+"', "+ 'in '+step+' steps');
      break;
    }

    var cLtr; //find corresponding letter's position
    cLtr = findCorrespondent(letters,i);

    //see if corresponding letter needs to be moved up or down
    //based on comparison with position's correspondent
    //don't move to next letter until the correspondent is in position (i--)

    if (cLtr === letters[i].cIdx) {
        continue;
    } else if (cLtr < letters[i].cIdx) {
      shifter(letters,cLtr,cLtr+1);
      step++;
      i--;
    } else if (cLtr > letters[i].cIdx) {
      shifter(letters,cLtr,cLtr-1);
      step++;
      i--;
    }
  }

}

function check (letters) {
  var checked = 0, upper;
  upper = Math.floor(letters.length/2);
  for (var i=0;i<=upper;i++) {
    if (findCorrespondent(letters,i) !== letters[i].cIdx) {
      return false;
    } else {
      checked++;
    }
  }
  if (checked === upper+1) {
    return true;
  }
}

});

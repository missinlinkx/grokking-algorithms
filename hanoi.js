var A = [], B = [], C = [];
var n = 5, j=1;
var oLetter,dLetter;

for (var i=1;i<=n;i++) {
  A.push(i);
}

var columns = [A,B,C];

function solve (nOD, origin, destination) { //number of disks, origin and dest columns

  //base case, if number of disks is 0, return nothing
  if (nOD === 0) {
    return;
  }

  //find free column
  var free = findFree(origin, destination);

  //move n-1 disks to free (intermediary) column
  solve(nOD-1, origin, free);

  //move nth disk to destination column
  moveDisk(origin, destination);

  //move n-1 disks from the intermediary column to destination
  solve(nOD-1, free, destination);

}

function findFree(origin, destination) {
  var safetyCopy = [].concat(columns);
  safetyCopy.splice(safetyCopy.indexOf(origin), 1);
  safetyCopy.splice(safetyCopy.indexOf(destination), 1);
  return safetyCopy[0];
};

function moveDisk (origin, destination) {
  var disk = origin.shift();
  destination.unshift(disk);
  printColumns(disk, origin, destination);
}

function arrToLetter (origin, destination) { //stores origin and destination as strings for identification in console output
  if (origin === A) {oLetter = "A";}
  else if (origin === B) {oLetter = "B";}
  else {oLetter = "C";}
  if (destination === A) {dLetter = "A";}
  else if (destination === B) {dLetter = "B";}
  else {dLetter = "C";}
}

function printColumns (disk, origin, destination) {
  console.log("move", j+":");
  j++;
  arrToLetter(origin,destination);
  var move = {
    "disk": disk,
    "from": oLetter,
    "to": dLetter
  }
  console.log(move);
}

solve(n,A,C);

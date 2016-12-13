var n;
function promptUser (callback) {
  console.log('Enter number between 1-1000:');
  process.stdin.resume().setEncoding('utf8');
  process.stdin.on('data', function (text) {
    n = Number(text.trim());
    if (n !== undefined) {
      return callback(n);
    }
  });


};

module.exports = promptUser;

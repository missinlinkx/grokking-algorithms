var n;
function promptUser (callback) {
  process.stdin.resume().setEncoding('utf8');
  process.stdin.on('data', function (text) {
    n = Number(text.trim());
    if (n !== undefined) {
      return callback(n);
    }
  });


};

module.exports = promptUser;

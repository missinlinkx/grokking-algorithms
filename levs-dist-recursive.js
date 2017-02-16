$(document).ready(function () {
  var str1,len1,str2,len2;

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

    $('#calculator').on('keyup',function () {
      str1 = $('#str1').val();
      len1 = str1.length;
      str2 = $('#str2').val();
      len2 = str2.length;
      $('label').text("Lev's distance between " +$('#str1').val()+" and "+$('#str2').val()+" is:")
      var dist = levsDist(str1,len1,str2,len2);
      $('#distance').text(+dist);
    });
});

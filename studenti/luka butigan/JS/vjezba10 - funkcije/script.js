//  1. Napišite JavaScript funkciju koja prihvaća zadani niz kao parametar i pronalazi najdužu riječ unutar niza.
//  2. Vratite tu riječ iz funkcije i spremite u varijablu.
//  3. Ispišite varijablu u konzoli.

// 1.
var words = [
  'jumps',
  'dog',
  'cat',
  'quickest',
  'over',
  'information',
  'learning',
];

var word = '';

function findLongestWord(array) {
  for (var i = 0; i < array.length; i++) {
    if (word.length < array[i].length) {
      word = array[i];
    }
    return word;
  }
}

// 2.
var longestWord = findLongestWord(words);

//  3.
console.log(longestWord);

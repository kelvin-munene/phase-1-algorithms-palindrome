function reverse(word) {
  // 'abc' => 'cba'
  // const wordArray = word.split("");
  // const reversedWordArray = wordArray.reverse();
  // const reversedWord = reversedWordArray.join("");
  // return reversedWord;
  return word.split("").reverse().join("");
}

function isPalindrome(word) {
  // Write your algorithm here
  const reversedWord = reverse(word);

  return word === reversedWord;
}

/* 
  Add your pseudocode here
  that means if the word is the same as the word in reverse, I should return true.
  
  reverse the input string
  if the input is the same as the reversed input
    return true
  else
    return false
*/

/*
@@ -20,6 +39,16 @@ if (require.main === module) {

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome(""));
}
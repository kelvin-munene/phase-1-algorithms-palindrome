

function isPalindrome(word) {
  // let clonedWord = []
  // for(let i=0; i<word.length; i++){
  //   clonedWord.push(word[i])
  // }
  // let reversedWord = [...clonedWord]
  let clonedWord = [...word]
  let reversedWord = clonedWord.reverse().join('')     //tried avoiding looping backwards again
  // clonedWord = clonedWord.join('')      //redundant
  // reversedWord = reversedWord.join('')     //redundant
  return reversedWord === word;
}

/* 
  
  Convert string to array
  Loop forward and backward allocating return value to different variables
  Convert the variables back to string for later comparisons
  Compare the said variables and return true if same and false if not
*/

/*
  Add written explanation of your solution here
  Point to note, may not work on disregarding whitespace and symbols
*/

console.log(isPalindrome('racecar'))

if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
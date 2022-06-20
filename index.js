function isPalindrome(word) {
  // Write your algorithm here

  const regEx = /[\W_]/g;
  const lowerCaseWord = word.toLowerCase().replace(reg, "");
  const pal = lowerCaseWord.split("").reverse().join();
  if (pal === lowerCaseWord){
    return true;
  }else{
    return false;
  }
}

isPalindrome("abba");

/* 
  Add your pseudocode here
  // function to check palindromes
  if word is palindrome
  return true
  else 
  return false
  call function palindrome
*/


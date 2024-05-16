//Manipulating Strings and using looping statements
/**
 * Given a string s consisting of words and spaces, return the length of the last word in the string.
Example 1:
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5
 */

let s = "Hello World"
let separate =s.split(" ") //Spliting the Hello World String based on space
console.log(`The last word is ${separate[1]} with length ${separate[1].length}`) //separate[0] will be holding "Hello" and separate[1] will be holding "World" and length parameter return its length (length starts with 1)

/**
 * Example 2:
Input: s = " fly me to the moon "
Output: 4
Explanation: The last word is "moon" with length 4.
 */

let s1=" fly me to the moon "
let separate1=s1.split(" ") //Spliting the  fly me to the moon  String based on space
console.log(`The last word is ${separate1[5]} with length ${separate1[5].length}`)//separate1[5] is holding the value "moon" and length parameter return its length (length starts with 1)

/**
 * Example 3: 
Write a function to check if two strings are anagrams.
Input: isAnagram('listen', 'silent')
Output: true
Input: isAnagram('hello', 'world') 
Output: false
Explanation: An anagram is when you mix up the letters of a word to make a new one, using all the letters
 */
function isAnagram(str1,str2)
{
    // Remove spaces and convert strings to lowercase
    str1=str1.replace(" ","").toLowerCase()
    str2=str2.replace(" ","").toLowerCase()
    
    // Sort both strings and compare
    if (str1.split('').sort().join('') === str2.split('').sort().join(''))
        {
            return true
        }
    else
    {
        return false
    }
}
console.log(isAnagram('listen','silent'))
console.log(isAnagram('hello', 'world'))
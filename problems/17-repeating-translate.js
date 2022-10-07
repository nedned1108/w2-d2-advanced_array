/*
Write a function `repeatingTranslate` that accepts a sentence as an argument.
The function should translate the sentence according to the following rules:

- words that are shorter than 3 characters are unchanged
- words that are 3 characters or longer are translated according to the
  following rules:
  - if the word ends with a vowel, simply repeat the word twice (example:
    'like'->'likelike')
  - if the word ends with a non-vowel, repeat all letters that come after the
    word's last vowel, including the last vowel itself (example:
    'trash'->'trashash')

Note that if words are capitalized in the original sentence, they should remain
capitalized in the translated sentence. Vowels are the letters a, e, i, o, u.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Can you reduce the problem into helper functions?

Examples:

console.log(repeatingTranslate("we like to go running fast"));  // "we likelike to go runninging fastast"
console.log(repeatingTranslate("he cannot find the trash"));    // "he cannotot findind thethe trashash"
console.log(repeatingTranslate("pasta is my favorite dish"));   // "pastapasta is my favoritefavorite dishish"
console.log(repeatingTranslate("her family flew to France"));   // "herer familyily flewew to FranceFrance"

*/
// 1. accepts a sentence as an arg
// 2. func translate sentence according to rules
// 3. words that are shorter than 3 characters are unchanged
// 4. words that are 3 characters or longer are translated according to thefollowing rules:
// -----------> if the word ends with a vowel, simply repeat the word twice (example:'like'->'likelike')
// -----------> if the word ends with a non-vowel, repeat all letters that come after the
    // word's last vowel, including the last vowel itself (example:'trash'->'trashash')

let repeatingTranslate = function(sentence) {
    let arr = sentence.split(" ");
    let newArr = [];
    arr.forEach((word) => {
        newArr.push(translateWord(word))
    })
    return newArr.join(" ")
};

let translateWord = function(word) {
    let vowel = "aeiouAEIOU"
    let lastChar = word[word.length - 1]

    if (vowel.includes(lastChar) && word.length >= 3) {
        word = word + word;
    } else if (!vowel.includes(lastChar) && word.length >= 3) {
        let arr = word.split("");
        for (let i = arr.length - 1; i >= 0; i--) {
            if (vowel.includes(arr[i])) {
                arr = arr.concat(arr.slice(i))
                return arr.join("")
            }
        }
        return word = arr.join("")
    }
    return word;
};

// console.log(translateWord("running"))
console.log(repeatingTranslate("we like to go running fast"));  // "we likelike to go runninging fastast"
console.log(repeatingTranslate("he cannot find the trash"));    // "he cannotot findind thethe trashash"
console.log(repeatingTranslate("pasta is my favorite dish"));   // "pastapasta is my favoritefavorite dishish"
console.log(repeatingTranslate("her family flew to France"));   // "herer familyily flewew to FranceFrance"

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = repeatingTranslate;
} catch (e) {
    module.exports = null;
}

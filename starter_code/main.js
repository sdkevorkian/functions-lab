// Question 1
function maxOfTwoNumbers(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

console.log(maxOfTwoNumbers(1, 2));
console.log(maxOfTwoNumbers(2, 2));
console.log(maxOfTwoNumbers(3, 2));
console.log("end Q1");

// Question 2
function maxOfThree(num1, num2, num3) {
    var numbers = [num1, num2, num3];
    var highest = 0;

    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] > highest) {
            highest = numbers[i];
        }
    }
    return highest;
}

console.log(maxOfThree(0, 1, 2));
console.log(maxOfThree(3, 1, 2));
console.log(maxOfThree(0, 1, 0));
console.log(maxOfThree(2, 2, 2));
console.log("end Q2");

// Question 3
function isCharacterAVowel(letter) {
    var vowels = ["a", "e", "i", "o", "u"];

    for (var i = 0; i < vowels.length; i++) {
        if (letter === vowels[i]) {
            return true;
        } else {
            return false;
        }
    }
}

console.log(isCharacterAVowel("a"));
console.log(isCharacterAVowel("b"));
console.log("end Q3");

// Question 4
function sumArray(numbers) {
    var sum = 0;

    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

console.log(sumArray([1, 2, 3, 4, 5, 6])); // should be 21

// Question 4
function multiplyArray(numbers) {
    var mult = 1;

    for (var i = 0; i < numbers.length; i++) {
        mult *= numbers[i];
    }
    return mult;
}
console.log(multiplyArray([1, 2, 3, 4])); // should be 24
console.log("end Q4");
// Question 5

var numberOfArguments = function() {
    return arguments.length;
}


console.log(numberOfArguments(1, 2, 3, 1, 4, 5)); // should return 6
console.log("end Q5");
// Question 6

var reverseString = function(word) {
    var wordArray = [];
    wordArray = word.split("");
    wordArray.reverse();
    return wordArray.join("");
};

console.log(reverseString("jag testar"));
console.log("end Q6");

// Question 7
function findLongestWord(words) {
    var longestLength = 0;
    var longestWord;

    for (var i = 0; i < words.length; i++) {
        if (words[i].length > longestLength) {
            longestLength = words[i].length;
            longestWord = words[i];
        }
    }
    return longestWord;
}

console.log(findLongestWord(["dogs", "cats", "penguins", "dingos"])); // should return penguins
console.log("end Q7");


// Question 8
function filterLongWords(words, n) {
    var longWordsArray = [];

    if (words.length === 0) {
        return "Please add words to your array";
    }

    for (var i = 0; i < words.length; i++) {
        if (words[i].length > n) {
            longWordsArray.push(words[i]);
        }
    }
    return longWordsArray;
}

console.log(filterLongWords(["a", "lazy", "brown", "dog"], 3)); //should return lazy and brown
console.log(filterLongWords([], 3)); // should return my error message

console.log("end Q8");
// Bonus 1
//??????
// lol wut

// Bonus 2
function charactersOccurencesCount(word) {
word = {};




}

//This variable will contain the text you want to translate into “whale talk”.
let input = 'dogs are the best';

//AWhales only speak in vowels so you need an array of vowels to be extracted from the input variable. Set the array equal to a variable named vowels that will not be updated.
let vowels = ['a', 'e', 'i', 'o', 'u'];

//Create a variable named resultArray and set it equal to an empty array: []. This will serve as a place to store the vowels from the input string.
let resultArray = [];

//Create a loop to iterate through each letter of the input variable text. In a later step, we will compare each letter with our vowels array.
for (let inputIndex = 0; inputIndex < input.length; inputIndex++) {
  //Note: printed to console to check!
  //console.log(inputIndex);
  for (let vowelCheck = 0; vowelCheck < vowels.length; vowelCheck++) {
  //console.log(vowelCheck);
    if (input[inputIndex] === vowels[vowelCheck]) {
      resultArray.push(input[inputIndex]);
    }
  }
  if (input[inputIndex] === 'e' || input[inputIndex] === 'u') {
    resultArray.push(input[inputIndex]);

}
}
console.log(resultArray.join('').toUpperCase());

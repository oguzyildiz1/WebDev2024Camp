// change the first char of the username to uppercase if they enter it with lowercase


// ask the username
var name1 = prompt("What is your name?");

// change the first character to uppercase

// slice the first character
firstChar = name1.slice(0, 1);

// change it to uppercase
firstUpperChar = firstChar.toUpperCase();


// slice the rest of chars(1, name.length-1)

// slice from 1 to the end of the character
slicedTextToEnd = name1.slice(1, name1.length);

// OPTİONAL
// lowercase the rest of the sliced slicedTextToEnd
slicedTextToLowerCase = slicedTextToEnd.toLowerCase();

// then concatenate to rest of the string
alert(firstUpperChar + slicedTextToLowerCase);
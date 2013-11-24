"use strict";

var makePerson = function(persArr){

//Skappar ett nytt bojekt.    
var resultat = {};
//Skapar en array.
var ages = [];
// Skapar en array.
var names = [];
//Deklerar en variabel.
var sum;
	
	
// Tar personens ålder i arrayen.
ages = persArr.map(function(person){
   return  person.age;
});


//Räknar ut  Max-ålder, genom att jämföra elementen i arrayen för att få ut den.
resultat.maxAge = ages.reduce(function(prevAge, age){
    return Math.max(prevAge, age);
});

//Räknar ut  Min-ålder, genom att jämföra elementen i arrayen för att få ut den.
resultat.minAge = ages.reduce(function(prevAge, age) {
    return Math.min(prevAge, age);
});

//Summerar alla element i arrayen med hjälp av reduce.
sum = ages.reduce(function(prevAge, age){
    return prevAge + age;
});


//Tar ett namn i arrayen
names = persArr.map(function(person) {
    return person.name;
});


//Sortera bokstäverna i ordning.
names.sort(function(a, b){
   return a.localeCompare(b); 
});


//Skriver ut namnen i ordning med ett komma tecken som separerar dem.

resultat.names = names.reduce(function(prevName, name) {
    return prevName + ", " + name;
});


//Avrundar, upp medelvärdet här efter "AverageAge" har tillämpats. 
resultat.averageAge = Math.round(sum/persArr.length);


//Retunerar resulatet!    
return resultat;
};





"use strict"
var columns = 4;
var rows = 4;

var Memory= {
    
    
    
// Array som används som egenskap i objektet som refererar till den array med de slumpade resultaten. 
randomMemory: [],


   
init:function(){
    
// Här anropas "getPictureArray" i filen "random.js" som slumpar bilderna och sparar resultatet i randomMemory arrayen ovan.
Memory.randomMemory = RandomGenerator.getPictureArray(columns, rows);

console.log(Memory.randomMemory);
    
},
    
 };
 window.onload = Memory.init;
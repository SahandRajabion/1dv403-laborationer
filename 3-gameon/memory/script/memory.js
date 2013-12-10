"use strict"
var columns = 4;
var rows = 4;

var Memory= {
    
    
    
// Array som används som egenskap i objektet som refererar till den array med de slumpade resultaten. 
randomMemory: [],


   
init:function(){
    
// Här anropas "getPictureArray" i filen "random.js" som slumpar bilderna och sparar resultatet i randomMemory arrayen ovan.
Memory.randomMemory = RandomGenerator.getPictureArray(columns, rows);

//Anropar "createTable" för att kunna visa tabellen.
Memory.createTable();},

//Funktion som ritar upp själva tabellen.
createTable:function(){
    
    // För att skapa en tabell i funktionen createTable som sedan anropas av "Memory.CreateTable" som visar tabellen i fönstret.
    var table = document.createElement("table");
    
    // Sätter in i "memoryBoard" i html filen.
    document.getElementById("memoryBoard").appendChild(table);
    
    
    
    
}



    
 };
 window.onload = Memory.init;
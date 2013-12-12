"use strict"
var cols = 4;
var rows = 4;

var Memory= {
    
    
    
// Array som används som egenskap i objektet som refererar till den array med de slumpade resultaten, här de kommer lagras. 
randomMemory: [],

//Array som lagrar alla a-taggat.
atags: [],

//Antal rätta par
countPair: 0,

// Antal försök
countTries: 0,
   
init:function(){
   
    
// Här anropas "getPictureArray" i filen "random.js" som slumpar bilderna och sparar resultatet i randomMemory arrayen ovan.
Memory.randomMemory = RandomGenerator.getPictureArray(cols, rows);

//Anropar "createTable" för att kunna visa tabellen.
Memory.createTable();},

//Funktion som ritar upp själva tabellen.
createTable:function(){
     var mem= 0;
     
    // För att skapa en tabell i funktionen createTable som sedan anropas av "Memory.CreateTable" som visar tabellen i fönstret.
    var table = document.createElement("table");
    
    // Sätter in i "memoryBoard" i html filen.
    document.getElementById("memoryBoard").appendChild(table);
    
    // Genererar upp tabellen som bilderna kommer ligga i. Loopar med hjälp av en for sats, de antal rader som tabellen ska innehålla.
    for (var row = 0; row< rows; row++){
      
      //Lägger in alla loopade "tr" taggar i variabeln table.
        var tr = document.createElement("tr");
        table.appendChild(tr);
        
        // Genererar upp antal kolumner i tabellen.
        for (var col=0; col<cols; col++){
            
        // Lägger in alla loopade "td" taggar i de loopade "tr" taggar som redan skapats.
        var td = document.createElement("td");
        tr.appendChild(td);
        
        // Skapar "img" taggen och tilldelar den, den första bilden i mappen pics (0.png).
        var img = document.createElement("img");
        img.setAttribute("src", "pics/0.png");
        
        //Skapar a taggen, sätter sedan in "img" taggen i "a" taggen, därefter sätter in "a" taggen i "td" taggen.
        var a = document.createElement("a");
        a.setAttribute("href","#");
        a.appendChild(img);
        td.appendChild(a);
        
        //Anropar funktionen turn.
        Memory.turn(mem, a);
        
        // Räknar upp mem.
        mem++;
        
        }
        
    }
    
},

turn: function(q, b){
    
    console.log(q, b);
    

    
    b.onclick= function(){
      
      
      // Ska vara startbilden "0.png" och ej ngt annat, annars retunera "False", så alltid frågetecknet visas innan mus-klick.
        if(this.getElementsByTagName("img")[0].getAttribute("src") !== "pics/0.png")
        {
            return false;
        }
    };
    
    console.log(b);
    
    // Sätter in "a" taggen i arrayen "atags"
    Memory.atags.push(1);
   // Om arrayens längd bara uppnår 1 eller 2 element , visas bilden upp, alltså vid varje klick (ska bara kunna klicka på startbilden för vändning.
   if (Memory.atags.length === 1 || Memory.atags.length === 2) {
        console.log(Memory.randomMemory[q]);
        
        this.getElementsByTagName("img")[0].setAttribute("src", "pics/" + Memory.randomMemory[q] + ".png");
    }
    
    //Skulle bilderna ej stämma, anropas funktionen "seeMems" för att vända tillbaka efter 1 sec.
    if (Memory.atags.length == 2)
    { setTimeout(function(){ Memory.seeMems(Memory.atags);
    }, 1000);}

 
},






// Testar om rutorna är likadana så kommer den visas annars vänds dem tillbaka. 
seeMems: function(memo){
if (memo[0].getElementsByTagName("img")[0].getAttribute("src") === memo[1].getElementsByTagName("img")[0].getAttribute("src"))
{
    
// Räkna upp antal rätta par
Memory.countPair++;

// Är antal rätta par hälften av alla brickor på spelplanen har man vunnit spelet.
if (Memory.countPair === ((cols*rows)/2)){
alert("Grattis du har vunnit spelet!\nAntalförsök:" + Memory.countTries);
}

// Tömmer innehållet i arrayen
Memory.atags = [];
}

else
{
// Startbilden visas igen, arrayens innehåll töms
memo[0].getElementsByTagName("img")[0].setAttribute("src", "pics/0.png");
memo[1].getElementsByTagName("img")[0].setAttribute("src", "pics/0.png");

Memory.atags = [];

// och räknas upp som ett försök
Memory.countTries++;
}


}
};







 window.onload = Memory.init;
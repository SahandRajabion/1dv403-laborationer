"use strict";

window.onload = function(){


var i = 0; //Deklerar varibel
var resultat = ''; // Deklerar variabel
var Aa = /a/ig; // Deklerar varibel som gäller både A och a.


	// I denna funktion ska du skriva koden för att hantera "spelet"
	var convertString = function(str){
   
   
    //Om input är tom visas ett fel meddelande.
  
    if(str===""){
        throw{message:"Fel! Du måste ange något innan omvandling!"};
    }


// Plats för förändring.
// For loop
for (i = 0; i < str.length; i++) {
   
    // Om bokstaven är stor, ändra den till liten och alla A och a ändras till "#".
     if (str.charAt(i)===str.charAt(i).toUpperCase()) {
       resultat += str.charAt(i).toLowerCase();
       str = str.replace(Aa, "#");

       
    }
    // Om bokstaven är liten, ändra den till stor och alla A och a ändras till "#".
    else{
       resultat += str.charAt(i).toUpperCase();
       str = str.replace(Aa, "#");
    }
   
}

// Returnera den konverterade strängen resultat.
 alert (resultat);
return resultat;




	};
	// ------------------------------------------------------------------------------


	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#string");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		p.classList.remove( "error");

		try {
			var answer = convertString(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			p.innerHTML = answer;		// Skriver ut texten från arrayen som skapats i funktionen.	
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};
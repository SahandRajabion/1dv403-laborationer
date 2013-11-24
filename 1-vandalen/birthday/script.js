"use strict";

window.onload = function(){
        
        
        var birthday = function(date){
        var now;  // Deklarerar en variabel.
        var msLeft;  // Deklarera variabler för millisekunder.
        var dayLeft;  // Variabel för antal dagar kvar.
        var splitMyBirthDay= [];  // Array för uppdelning.
        var birthday;  // Deklarerar en variabel.
        
        
   //Om användaren knappar in i fel format, (annat än ÅÅÅÅ-MM-DD) kastas ett undantag.
   
        if(!date.match(/^(\d{4})([\/-])(\d{1,2})\2(\d{1,2})$/)){
          throw {message: "Fel! Du måste ange födelsedagen i formatet ÅÅÅÅ-MM-DD för att kunna fortsätta."};
        }
        // Skapar en ny date-objekt som döps till "now".
        now = new Date();
        
        splitMyBirthDay = date.split("-");
        console.log(splitMyBirthDay);
        
        //Skapar nytt Date-objekt och döper det till birthday och skickar in året, månaden och dagar.
        birthday = new Date(now.getFullYear(), splitMyBirthDay[1] - 1, splitMyBirthDay[2]);
        
        //Räknar ut födelsedagen för nästa år.
        if(birthday.getTime() < now.getTime() && birthday.getDate() != now.getDate()){
            birthday.setFullYear(now.getFullYear()+1);
        } 
        
        //Räknar ut antal dagar genom att dela millisekunderna med 1000 för att få det till sekunder, delat med 60 för minuter sedan på 60 igen för timmar och sist med 24 för dagar.
        msLeft = birthday.getTime() - now.getTime();
        dayLeft = Math.floor(((((msLeft /1000) /60) / 60) / 24)+1);
        
        
        // Returnera antal dagar kvar
        return dayLeft;



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
			var answer = birthday(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			var message;
			switch (answer){
				case 0: message = "Grattis på födelsedagen!";
					break;
				case 1: message = "Du fyller år imorgon!";
					break;
				default: message = "Du fyller år om " + answer + " dagar";
					break;
			}

			p.innerHTML = message;
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};
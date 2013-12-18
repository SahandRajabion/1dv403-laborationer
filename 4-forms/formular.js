"use strict";


var Validator = {  
    
         lastname: false,
         firstname: false,
         email: false,
         postnr: false,
         fieldset: false,
         send: false,
         
         init: function(){
             
             // Hämtar ut taggar från html filen och tilldelar dem variablar.
             
             
             var firstname = document.getElementById("Förnamn");
             var lastname = document.getElementById("Efternamn");
             var email = document.getElementById("Epost");
             var postnr = document.getElementById("Postnummer");
             var fieldset = document.getElementById("formular");
             var form = document.getElementById("form");
             var send = document.getElementById("skicka");
             
             
            // Validering av Förnamn , när användare går över till nästa fält.
            
            firstname.onblur = function(){
                
                // Kontrollerar Whitespace, mellanrum mellan text i första fältet.
                if(!form.element["firstname"]. value.match(/^[a-zåäö]+$/i))
                { 
                    form.elements["firstname"].className ="error";
                    
                    //Skickar ej om valideringen ej går igenom.
                    Validator.first = false;
                    
                    if(!document.getElementById("first").hasChildNodes())
                     {
                         
                         var div = document.createElement("div");
                         div.classname ="failedMessage";
                         document.getElementById("first").appendChild(div);
                         
                         var text = document.createTextNode("Skriv in ditt namn!");
                         div.appendChild(text);
                         
                         
                     }
                
            }
             
             else
             {
                 form.elements["firstname"].classname = "valid";
             Validator.first = true;
             var elements = document.getElementById("first");
             while (elements.firstChild); { elements.removeChild(elements.firstChild);
             
             
             }
             
            }
  
  
    
    
    };
         
        window.onload = Validator.init;
 
  
  
  
  
  
  
  
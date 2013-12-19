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
             
             
             var firstname = document.getElementById("firstN");
             var lastname = document.getElementById("Efternamn");
             var email = document.getElementById("Epost");
             var postnr = document.getElementById("Postnummer");
             var fieldset = document.getElementById("formular");
             var form = document.getElementById("form");
             var button = document.getElementById("skicka");
             
             
            // Validering av Förnamn , när användare går över till nästa fält.
            
            firstname.onblur = function(){
                
                // Kontrollerar Whitespace, mellanrum mellan text i första fältet.
                if(!form.elements["firstN"].value.match(/^[a-zåäö]+$/i))
                { 
                    form.elements["firstN"].className = "error";
                    
                    //Skickar ej om valideringen ej går igenom.
                    Validator.first = false;
                    
                    if(!document.getElementById("first").hasChildNodes())
                     {
                         
                         var div = document.createElement("div");
                         div.className ="failedMessage";
                         document.getElementById("first").appendChild(div);
                         
                         var text = document.createTextNode("Skriv in ditt namn!");
                         div.appendChild(text);
                         
                         
                     }
                
            }
             
             else
             {
                 form.elements["firstN"].className = "valid";
             Validator.first = true;
             var elements = document.getElementById("first");
             while (elements.firstChild) { elements.removeChild(elements.firstChild);
             
             
             }
             
            }
  
            };
            
         //Validering för efternamn , andra fältet. Valideras när fält är ur "focus".
         lastname.onblur = function(){
             if(!form.elements["Efternamn"].value.match(/^[a-zåäö]+$/i)){
                 
                 form.elements["Efternamn"].className = "error";
                    
                    //Skickar ej om valideringen ej går igenom.
                    Validator.last = false;
                    
                    if(!document.getElementById("last").hasChildNodes())
                     {
                         
                         var div = document.createElement("div");
                         div.className ="failedMessage";
                         document.getElementById("last").appendChild(div);
                         
                         var text = document.createTextNode("Skriv in ditt Efternamn!");
                         div.appendChild(text);
             }
             
             }
             
             
             else
             {
                 form.elements["Efternamn"].className = "valid";
             Validator.last = true;
             var elements = document.getElementById("last");
             while (elements.firstChild) {
                 elements.removeChild(elements.firstChild);
             }
             }
             };
             
             
             postnr.onblur = function(){
                 if (form.elements["Postnummer"].value.match(/^(SE)?[\ ]?[0-9]{3}(-|\ )?[0-9]{2}$/))
                 { 
                 form.elements["Postnummer"].value = form.elements["Postnummer"].value.replace(/(SE|\ |-)/g, '');
                 form.elements["Postnummer"].classname="valid";
                 
                 Validator.nummer= true;
                 var elements = document.getElementById("nummer");
                 while(elements.firstChild){
                     elements.removieChild(elements.firstChild);
                 }
                 }
                 
                 else {
                  form.elements["Postnummer"].classname="error";
                 Validator.nummer=false;
                 
                 
                 
                 if(!document.getElementById("nummer").hasChildNodes()){
                     var div =document.CreateElement("div");
                     div.classname= "failedMessage";
                     document.getElementById("nummer").appendChild(div);
                     
                     var text = document.createTextNode("Felaktigt postnummer, försök igen!");
                     div.appendchild(text);
                     
                 }
         
                 }

                 };
             
             
    
   
         
        window.onload = Validator.init;
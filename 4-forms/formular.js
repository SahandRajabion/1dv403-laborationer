"use strict";


var Validator = {  
    //Kontroll av fälten innan de skickas.
         last: false,
         first: false,
         mejl: false,
         nummer: false,
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
                    //Om förnamn ej matchat, byter firstN klassnamn och får en annan egenskap.
                    form.elements["firstN"].className = "error";
                    
                    //Skickar ej om valideringen ej går igenom.
                    Validator.first = false;
                    
                    if(!document.getElementById("first").hasChildNodes())
                     {
                         //Skapar div
                         var div = document.createElement("div");
                         div.className ="failedMessage";
                         
                         //Lägger in div taggen i "first"(span)
                         document.getElementById("first").appendChild(div);
                         
                         var text = document.createTextNode("Skriv in ditt namn!");
                         div.appendChild(text);
                         
                         
                     }
                
            }
             
             else
             {
                 //Om det är rätt format, byter den class till "valid" som har andra egenskaper.
                 form.elements["firstN"].className = "valid";
             
             //Skickar formuläret då det är "true".
             Validator.first = true;
             var elements = document.getElementById("first");
             while (elements.firstChild)
             { elements.removeChild(elements.firstChild);
             
             
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
                 if(postnr.value.match(/^(SE)?\s?[0-9]{3}(-|\s)?[0-9]{2}$/))
                 { 
                 form.elements["Postnummer"].value = form.elements["Postnummer"].value.replace(/(SE|\ |-)/g, '');
                
                 // Om rätt , byter klass till "valid"
                 form.elements["Postnummer"].className= "valid";
                 
                 Validator.nummer= true;
                 var elements = document.getElementById("nummer");
                 while(elements.firstChild){
                     elements.removeChild(elements.firstChild);
                 }
                 }
                 
                 else {
                     
                     //Ger annan klass, "error"
                  form.elements["Postnummer"].className= "error";
                 Validator.nummer= false;
                 
                 
                 
                 if(!document.getElementById("nummer").hasChildNodes()){
                     var div = document.createElement("div");
                     div.className= "failedMessage";
                     document.getElementById("nummer").appendChild(div);
                     
                     var text = document.createTextNode("Felaktigt postnummer!");
                     div.appendChild(text);
                     
                 }
         
                 }

                 },
             
             
             email.onblur = function(){
                 if (!form.elements["Epost"].value.match(/^[\w]+(\.[\w]+)*@([\w]+\.)+[a-z]{2,7}$/i))
                 { 
                 form.elements["Epost"].className="error";
                 Validator.mejl= false;
                 
                  if(!document.getElementById("mejl").hasChildNodes()){
                     var div =document.createElement("div");
                     div.className= "failedMessage";
                     document.getElementById("mejl").appendChild(div);
                     
                     var text = document.createTextNode("Felaktig epost-adress!");
                     div.appendChild(text);
                     
                  }
                 }
                  
                  else {
                  form.elements["Epost"].className="valid";
                 Validator.mejl=true;
                 
                 var elements = document.getElementById("mejl");
                 while(elements.firstChild){
                     elements.removeChild(elements.firstChild);
                 }
                  }
                 };
                 
                 
                 // Funktion för skicka knappen, Skapar ett event.
                 button.onclick = function (){
                     
                     //Testar om ngn av fälten är fel, då den ej skickar om så är fallet.
                     if ((Validator.first === false)|| (Validator.last===false)||(Validator.nummer===false)||(Validator.mejl===false))
                     {
                         
                         return false;
                         
                     }
                     
                     //Div tagg för Shadow.
                     var winBackground = document.createElement("div");
                     winBackground.className ="winBackground";
                     document.body.appendChild(winBackground);
                     
                     //Div tagg för popup fönstret
                     var windowDiv = document.createElement("div");
                     windowDiv.className ="popup";
                     document.body.appendChild(windowDiv);
                     
                    
                     
                     var title = document.createElement("h5");
                     windowDiv.appendChild(title);
                     var top = document.createTextNode("Bekräfta ditt köp");
                     title.appendChild(top);
                     
                     var p = document.createElement("p");
                     var firname = document.createTextNode (form.elements["firstN"].name + ": " + form.elements["firstN"].value);
                     p.appendChild(firname);
                     windowDiv.appendChild(p);
                     
                     
                     p = document.createElement("p");
                     var lasname = document.createTextNode (form.elements["Efternamn"].name + ": " + form.elements["Efternamn"].value);
                     p.appendChild(lasname);
                     windowDiv.appendChild(p);
                     
                     p = document.createElement("p");
                     var zipcode = document.createTextNode (form.elements["Postnummer"].name + ": " + form.elements["Postnummer"].value);
                     p.appendChild(zipcode);
                     windowDiv.appendChild(p);
                     
                     p = document.createElement("p");
                     var email = document.createTextNode (form.elements["Epost"].name + ": " + form.elements["Epost"].value);
                     p.appendChild(email);
                     windowDiv.appendChild(p);
                     
                     p = document.createElement("p");
                     var price = document.createTextNode (form.elements["Pris"].name + ": " + form.elements["Pris"].value);
                     p.appendChild(price);
                     windowDiv.appendChild(p);
                     
                     
                     var change = document.createElement("input");
                     change.type = "button";
                     change.value ="Ändra!";
                     windowDiv.appendChild(change);
                     
                     
                     change.onclick =function() {
                         
                         //Vid nedstägning av fönster 
                         form.elements["firstN"].disabled = false;
                         form.elements["Efternamn"].disabled = false;
                         form.elements["Postnummer"].disabled = false;
                         form.elements["Epost"].disabled = false;
                         form.elements["Pris"].disabled = false;
                         form.elements["skicka"].disabled = false;
                        
                        
                         // Stänger ner popupfönstret och tar bort skuggan.
                         document.body.removeChild(windowDiv);
                         document.body.removeChild(winBackground);
                         }; 
                         
                         
                         //Skicka knappen.
                         var sendKnapp = document.createElement("input");
                         sendKnapp.type = "submit";
                         sendKnapp.value = "Bekräfta köpet!";
                         windowDiv.appendChild(sendKnapp);

                         //Funktionen till skicka knappen 
                         sendKnapp.onclick = function() {
                         form.elements["firstN"].disabled = false;
                         form.elements["Efternamn"].disabled = false;
                         form.elements["Postnummer"].disabled = false;
                         form.elements["Pris"].disabled = false;
                         form.elements["Epost"].disabled = false;
                         form.elements["skicka"].disabled = false;
                         form.submit();
}; 

                         //Tar bort fälten i formuläret.
                         form.elements["firstN"].disabled = true;
                         form.elements["Efternamn"].disabled = true;
                         form.elements["Postnummer"].disabled = true;
                         form.elements["Pris"].disabled = true;
                         form.elements["Epost"].disabled = true;
                         form.elements["skicka"].disabled = true;

                         return false;
                         
                         
                 };
                         
                     }
                     
                     
                     
};
         
 window.onload = Validator.init;
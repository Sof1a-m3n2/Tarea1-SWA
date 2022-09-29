 
 var contvig = document.getElementById("id-vig");
 var contces = document.getElementById("id-ces");

 var butvig = document.getElementById("bot-vig");
 var butces = document.getElementById("bot-ces");

 
 var clickCount = 0;

butvig.addEventListener('click',function(){

    clickCount++;

    if (clickCount === 1) {

        contvig.style.display = "block";
        

    }  
   else if (clickCount === 2) {

        contvig.style.display = "none";
        clickCount = 0;

    }

})



var clickCount2= 0;

butces.addEventListener('click',function(){

    clickCount2++;


        if (clickCount2 === 1) {

            contces.style.display = "block";

        }  
    else if (clickCount2 === 2) {

            contces.style.display = "none";

            clickCount2=0;
        
        }

        

    
    

})



a = 51;
let stan = true;
function stoper() {

    if (stan) {
        pocz = Date.now() 
       stan = !stan

        czasdrugi();
    } else {
        
        clearTimeout(za);
    }

}


function czasdrugi() {
    const kon = Date.now();
    const uplynelo = kon - pocz;
    const minuty = Math.floor(uplynelo / 60000);
    const sekundy = Math.floor((uplynelo % 60000) / 1000);
    const setne = ((uplynelo % 1000) / 10).toFixed(0);
    const setneStr = setne < 10 ? "0" + setne : setne;
    const sekundyStr = sekundy < 10 ? "0" + sekundy : sekundy;
    const minutyStr = minuty < 10 ? "0" + minuty : minuty;

    document.getElementById("czas").innerHTML = minutyStr + ":" + sekundyStr + ":" + setneStr;
        
    za = setTimeout(czasdrugi, 10);
    }

    const elements = document.querySelectorAll(".sr");

    elements.forEach(function(element) {
        element.addEventListener("click", function() {


            element.classList.add("ka"); 

            a--

            if (a == 50) {
                
                stoper()
            
            };

            if ( a == 1) {

                stoper()

                let koniec = document.getElementById("czas").innerText;
		alert("Brawo !!! - Twój czas: " + koniec);

            }

        });
});

   function reset() {

    location.reload();

   }



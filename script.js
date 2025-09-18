let stan = true;

let foto = {
  a: '<img class="fot" id="a" src="images/fot1.jpg">',
  b: '<img class="fot" id="b" src="images/fot2.jpg">',
  c: '<img class="fot" id="c" src="images/fot3.jpg">',
  d: '<img class="fot" id="d" src="images/fot4.jpg">',
  e: '<img class="fot" id="e" src="images/fot5.jpg">',
  f: '<img class="fot" id="f" src="images/fot6.jpg">',
  g: '<img class="fot" id="g" src="images/fot7.jpg">',
  h: '<img class="fot" id="h" src="images/fot8.jpg">',
  i: '<img class="fot" id="i" src="images/fot9.jpg">',
  j: '<img class="fot" id="j" src="images/fot10.jpg">',
  k: '<img class="fot" id="k" src="images/fot11.jpg">',
  l: '<img class="fot" id="l" src="images/fot12.jpg">',
}

//let tab = Object.values(foto);

let tab = [foto.a, foto.b, foto.c, foto.d, foto.e, foto.f, foto.g, foto.h, foto.i, foto.j, foto.k, foto.l]

var stab = tab.sort(function() { return 0.5 - Math.random()});

document.getElementById("info").innerHTML =  stab.join(""); 
;

jQuery(function() {
 $("#info").sortable();
});

function por() {
  tablica = [];

document.querySelectorAll("#info .fot").forEach(function(el) {
  tablica.push(el.getAttribute("id"));
});

  let tab_wzorcowa = ['a', 'b', 'c', 'd', 'e', "f", "g", "h", "i", "j", "k", "l" ];

  if (JSON.stringify(tablica) === JSON.stringify(tab_wzorcowa)) {
    stop();

let koniec = document.getElementById("czas").innerText;
alert("Brawo !!! - Twój czas: " + koniec);

  } else {

    alert("Niestety - obrazki są źle ułożone.");
  }
}



function stoper() {
    if (stan) {
        if (typeof pocz === "undefined") {  // ustawia początek tylko raz
            pocz = Date.now();
        }
        czasdrugi();
    } else {
        clearTimeout(za);
    }
}





function stop() {
clearTimeout(za);
stan = false;
};





function czasdrugi() {

  if (!stan) return;

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

    const elements = document.querySelectorAll(".fot");

document.getElementById("info").addEventListener("mouseup", function(e) {
    if (e.target.classList.contains("fot")) {
      
stoper(); 

	
    }


});



   function reset() {
    location.reload();
   }




/*
mousedown → kiedy przycisk myszy jest wciśnięty (poczatek przeciągania)

mousemove → kiedy mysz się rusza (przesunięcie obrazka)

mouseup → kiedy puszcza się przycisk myszy (koniec przeciągania)

*/










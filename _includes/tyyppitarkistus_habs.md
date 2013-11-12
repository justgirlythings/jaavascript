Tyyppitarkistaminen
===================

Tavoitteet
----------

-Saada tarkistettua funktion palautuksen tyyppi
-Eli jos funktion pitäisi palauttaa integer, se palauttaa integerin
-Jos palauttaa jotain muuta, voidaan tarvittaessa palauttaa arvo virheen kera

Hyödyt
------

*Tiedetään, mitä saadaan
*Voidaan varmuudella käyttää saatuja arvoja joissain operaatioissa

Miten toteuttaa?
----------------

Luodaan jokin funktio, joka

<<<<<<< HEAD
-Ottaa sisäänsä parametreja, esimerkiksi
-Mitä funktion pitäisi palauttaa
-Funktion itsensä
-Funktiolle annettavat parametrit
-Valinnaisena (ylimääräisinä argumentteina)
-Jos tulee virhe, palautetaanko mitään
-Mahdollinen oma tarkistusfunktio
=======
- Ottaa sisäänsä parametreja, esimerkiksi
    - Mitä funktion pitäisi palauttaa
    - Funktion, jota tutkitaan
    - Funktiolle annettavat parametrit
    - Valinnaisena (ylimääräisinä argumentteina)
        - Jos tulee virhe, palautetaanko mitään
        - Mahdollinen oma tarkistusfunktio
>>>>>>> 64bb1cc411fc9e151a6fe95afe9a9759dcf4821b

Yksinkertainen Integer-tarkistaja
---------------------------------

<pre><code>
function onkoInt(a) {
  if ((typeof a === "number") &amp; &amp;  Math.floor(a) === a) {
    return true;
  }
  else {
    return false;
  }
}
</br>
var a = "jk"
if (onkoInt(a)) {
  alert("JEE!");
}
else {
  alert("hö.");
}
</code></pre>

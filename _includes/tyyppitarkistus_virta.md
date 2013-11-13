Muuttujen näkyvyysalueista
----------

Muuttujat eivät saa tyyppiä javascriptissä. Muuttujan nimi, tunnus, voidaan määritellä samaan tapaan kuin monessa ohjelmointikielessä:

<pre><code>var a = 3;
var b = "merkkijono";
</code></pre>

Muuttujien näkyvyysalueet ovat joskus sekavan laajat. Jos muuttujaa, jota käytetään vaikka funktiossa, ei määritellä eikä sitä ole aikaisemmin määritelty se tulee aksessoinnin jälkeen globaaliksi muuttujaksi. Lohkot eivät javascriptissä näkyvyysalueita, joten lohkojen sisällä määritellyt muuttujat ovat käytettävissä. Javascriptissä on myös mahdollista määritellä muuttuja niin, että se on puhtaasti käytettävissä vain ko. lohkon sisällä:

<pre><code>
var a = 3;
function(){
	write(a); //tulostuu 3
	let b = "merkkijono";
}
write(b); // tulostuu 'undefined'
</code></pre>

Tästä on hyötyä esimerkiksi silmukoiden apumuuttujien määrittelyssä: silmukan päätyttyä apumuuttuja on vapaasti käytettävissä ilman, että silmukan suorituksessa määritelty arvo säilyisi muuttujassa. Toisaalta on myös hyvien ohjelmointikäytänteiden mukaista nimetä muuttujat kuvaavasti, jolloin on todennäköisempää, että muuttujien nimiä ei tahattomasti uudelleenkäytetä.

Tyypilliset arvot
------------

Vaikka muuttujilla ei ole tyyppiä, arvoilla on. Tyyppejä ovat mm.: numeeriset tyypit, merkkijonoliteraalit, oliot ja totuusarvot. Tyyppi voi myös olla mm. null, undefined tai vaikka NaN; Not a Number.

<pre><code>var kokonaisluku = 2;
var merkkijono = "merkkijono";
var totuusarvo = true;
</code></pre>

Arvon tyypin tarkastuksesta
------------

Javascript tarjoaa kasan välineitä arvon tyypin tarkastukseen. Esitellään muutama funktio jolla tämä onnistuu.

Yksinkertainen mekanismi joka testaa, että muuttujan tyyppi on numeerinen saattaisi näyttää tältä:
<pre><code>var onkoNumeerinen = function(muuttuja){
   return (typeof muuttuja === 'number') 
   &amp;&amp; !isNaN(muuttuja));
}
</code></pre>

Javascriptissä muuttuja voi saada arvon "NaN", epänumero, joka kuitenkin tyypittyy numeroksi, joten sen testaus täytyy ottaa myös huomioon. NaN ei ole yhtäsuuri itsensä kanssa, joten tarkistaminen täytyy tehdä sisäänrakennetulla isNaN-funktiolla.

Esimerkkiä voi laajentaa ja yleistää tarkistamaan minkä tahansa arvon tyypin:
<pre><code>var onkoSamaTyyppi1 = function(tarkistettava, referenssi){
   return typeof muuttuja === typeof referenssi;
}
var onkoSamaTyyppi2 = function(tarkistettava, referenssi){
   return tarkistettava instanceof (typeof referenssi);
}
</code></pre>

Arvojen tyypit on syytä tarkistaa aina kun funktiolla on parametrejä. Näin voidaan varmistua, että funktio toimii oikein ja tuottaa mielekkään tuloksen.

Taulukon arvojen tyypin tarkastuksesta
------------
Taulukon alkioiden tyyppitarkastuksia voitaisiin suorittaa esimerkiksi tarkastamalla ovatko kaikki taulukon alkiot haluttua tyyppiä, tai löytyykö taulukosta alkio, joka on haluttua tyyppiä.

Pari esimerkkifunktiota:
<pre><code>var ovatkoKaikkiAlkiotTyyppia = function(a, type) {
    for (var i = 0; i &lt; a.length; ++i){
        if (typeof a[i] !== type) {
            return false;
        }
    }
    return true;
}

var onkoAlkioissaTyyppia = function(a, type) {
    for (var i = 0; i &alt; a.length; ++i){
        if (typeof a[i] === type) {
            return true;
        }
    }
    return false;
}
</code></pre>

Näitä funktioita voitaisiin käyttää esimerkiksi seuraavasti:

<pre><code>var a = ["köpö", "kissa", "appelsiini", 3];
ovatkoKaikkiAlkiotTyyppia(a, "string");	// false
onkoAlkioissaTyyppia(a, typeof 666);	// true
</code></pre>

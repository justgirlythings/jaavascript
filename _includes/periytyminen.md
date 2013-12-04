Oliot 
========

JavaScriptin oliot ovat käytännössä assosiaatiotaulukkoja, joilla on kenttiä eli attribuutteja. Olioita on kolmenlaisia: funktio-olioita, prototyyppiolioita ja "tavallia olioita". JavaScriptissä ei luoda olioita luokkien kautta vaan oliot luodaan kirjoittamalla olioliteraali tai konstruktorifunktiolla:
<pre><code> var boss = 
	{nimi: 'Boss',
	 laji: 'Koira'
	}
alert(boss.nimi + ' luotiin olioliteraalin avulla');
function Elain(nimi, laji){
	this.nimi = nimi;
	this.laji = laji;
}
var pomo = new Elain('Pomo', 'Koira');
alert(pomo.nimi + ' luotiin konstruktorifunktiolla');
</code></pre>

Huom! Konstruktorifunktiot on tapana kirjoittaa isolla alkukirjaimella.

Käyttö
------

Olioiden kentät ovat julkisia, joten niiden dynaaminen lisääminen, muokkaaminen ja poistaminen on varsin helppoa:
<pre><code> function Elain(nimi, laji){
	this.nimi = nimi;
	this.laji = laji;
}
var pomo = new Elain('Pomo', 'Koira');
pomo.nimi = 'Lilliputti';
pomo.ika = 3;
delete pomo.rotu;
alert(pomo.nimi + ' on ' + pomo.ika + ' vuotta, rotu: ' + pomo.rotu);
</code></pre>

Periminen
=========

Olio voi periä ominaisuuksia prototyyppioliolta, joka toimii eräänlaisena esikuvana. Oliolla voi olla vain yksi prototyyppi, ja oletusarvoisesti se on Object-olio. Oliolla on perimistä varten prototype-kenttä, jonka arvo on olion prototyyppi.
<pre><code> function Koira(nimi, rotu){
	Elain.call(this, nimi, 'Koira');
	this.rotu = rotu;
}
Koira.prototype = new Elain();
var pomo = new Koira('Pomo', 'Chihuahua');
</code></pre>

Prototyyppiketju
----------------

Prototyyppiketju kertoo, keneltä peritään ominaisuuksia. JavaScriptissä on mahdollista periä vain yhdeltä prototyypiltä ominaisuuksia, sillä kielessä ei ole moniperintää. Mikäli annamme väkisin useamman perittävän prototyypin kenttään prototype, vain viimeisin jää voimaan.

Prototyyppiketju määrittää sen, mikä arvo annetaan, kun haetaan tiettyä kenttää - aluksi kysellään oliolta itseltään, mutta mikäli mitään ei löydy siirrytään ketjua ylöspäin askel kerrallaan, kunnes päädytään ketjun loppuun asti. Mikäli silloinkaan ei ole löytynyt mitään, palautetaan arvo "undefinend".

Olion lähin prototyyppi on tallennettu (toistaiseksi) kenttään \_\_proto\_\_

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
----------

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
========

Olio voi periä ominaisuuksia prototyyppioliolta, joka toimii eräänlaisena esikuvana. Oliolla voi olla vain yksi prototyyppi, ja oletusarvoisesti se on Object-olio. Oliolla on perimistä varten prototype-kenttä, jonka arvo on olion prototyyppi.
<pre><code> function Koira(nimi, rotu){
	Elain.call(this, nimi, 'Koira');
	this.rotu = rotu;
}
Koira.prototype = new Elain();
var pomo = new Koira('Pomo', 'Chihuahua');
</code></pre>

Prototyyppiketju
----------

Blaa blaa

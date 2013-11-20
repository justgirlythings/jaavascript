Virheenhallinta
===============

JavaScriptissä, kuten kaikissä muissakin kielissä, tulee virheitä, kun tehdään asioita. Tiedoston avaus voi epäonnistua,
käyttäjä saattaa antaa virheellisen syötteen tai asiat menevät muuten vain pieleen.

Virheiden hallinnan ymmärtäminen on siksi oleellinen osa ohjelmointia.

Miksi?
------

Ohjelmat toimivat virhetilanteissa mitä epämiellyttävimmällä tavalla. Silloin on hyvä, jos on jokin standarditapa, mitä
ohjelma virhetilanteessa tekee. Osa jatkaa kuin mitään ei olisi tapahtunut - toiset lopettavat koko ohjelman siihen
paikkaan ragequitin elkein.

Virheiden käsittelyllä pääsemme yli näistä tilanteista ja voimme sopia, mitä missäkin tilanteessa tulee tehdä.

Milloin?
--------

Virheitä ei välttämättä kannata aina hoitaa oikein. Toisinaan on nopeampaa ja hyödyllisempää antaa koko ohjelman vain
kaatua ja pitää ajoympäristöllä huoli siitä, että tilanteesta palaudutaan mahdollisimman nopeasti.

Tälläisiä tilanteita ovat esimerkiksi kun ajetaan pientä ohjelmaa, jonka käynnistäminen on nopeata eikä väärällä
syöttellä suoritettuja operaatioita haluta suorittaa lainkaan. (Toki logiin jäljen jättäminen on fiksua)

Miten?
------
Tehdään laajahko poc.
Oletetaan, että a pitää tallentaa arvo "1" (integer)

<pre><code>
a="s";
try {
  if (a!==1){
    throw new Error("Pieleen meni");
  }
  alert("JEE!");
}
catch (e) {
  alert("Virhe tapahtui - " +e);
}
finally {
   alert("THIS IS THE END!");
}
</code></pre>

Yksinkertainen tilanne voitaisiin hoitaa myös if-else rakenteella, jolloin varsinaisia poikkeuksia ei tarvitse käsitellä. 
Tämä saattaa olla hieman nopeampi tapa kuin poikkeuksen käsittely esimerkiksi try-catch rakenteella.

<pre><code>
a="s";
if (a!==1){
	alert("Virhe tapahtui - Pieleen meni" );
} else {
	alert("JEE!");
}
alert("THIS IS THE END!");
</code></pre>

Tyypittömyys ja algoritmit
===============

JavaScriptin muuttujien tyypittömyys luo ongelmatilanteita ja mahdollisuuksia. On tarpeetonta pyrkiä tekemään JavaScript ohjelmasta Javan kaltaista täysin tyyppiturvallista, kun tyypittömyyttä voidaan käyttää hyödyksi. Tämän kautta voidaan päästä selkeämpään ja tehokkaampaan lopputulokseen. Esimerkiksi voitaisiin luoda geneerinen funktio, joka järjestää kaikentyyppiset taulukot. Näin saadaan vähennettyä toiston tarvetta ohjelmassa. Tyypittömyyttä hyödyntäessä tulee kuitenkin huomioida arvojen tyypit, joten tyyppitarkastukset ovat ehdottoman tarpeellisia. Tyypittömyyden osalta on tärkeää pitää yhtenäistä ja selkeää linjaa.

Funktionaalinen vs. imperatiivinen
==================================

JavaScriptiä on toki helppo käyttää imperatiivisesti, mutta joustavuutensa ansiosta se soveltuu yhtä hyvin funktionaaliseen käyttöön. JavaScriptissä on esimerkiksi mahdollista tallentaa funktio muuttujan arvoksi, ja täten syöttää funktio parametrinä toiselle funktiolle. Sisäänrakennettuna - ainakin uusimmista implementaatioista - löytyvät mm. tärkeät map, filter, reduce sekä muutamia muita funktionaalisuudelta haiskahtavia funktioita. Tämä kertoo siitä, että JavaScript on myös tarkoitettu käytettäväksi funktionaalisesti.

Kohta sattuu Juhaa leukaan
--------------------------

JavaScriptissä on siis hyvät valmiudet funktionaalisuuteen, mutta milloin niitä kannattaa hyödyntää? Ikävä kyllä funktionaalisuuden kanssa täytyy olla muutamissa tapauksissa todella tarkkana.

<pre><code>
var stooges = [{name: 'curly', age: 25}, {name: 'moe', age: 21}, {name: 'larry', age: 23}];
var youngest = _.chain(stooges)
  .sortBy(function(stooge){ return stooge.age; })
  .map(function(stooge){ return stooge.name + ' is ' + stooge.age; })
  .first()
  .value();
</code></pre>

Esimerkki on otettu [Underscore.js](http://underscorejs.org/#chain) -kirjaston dokumentaatiosta ja se esittelee kätevää funktioiden ketjuttamista, joka on yksi kirjaston tarjoamista mahdollisuuksista. Nättiä, eikös vaan? Tässä suoritetaan map kaikille taulukossa oleville alkioille! Jos taulukossa olisikin vaikkapa 10 000 alkiota ja mapattava funktio tekisi jotain hiukan raskaampaa laskentaa ja päälle vielä ajettaisiin lopuksi vaikkapa jonkinlainen filter, voisi tästä muodostua suorituskykyongelma. Funktionaalisen tyylin kanssa on siis pidettävä muistissa, että JavaScriptissä ei ole laiskuuden tuomia etuja, joten operaatioiden järjestys täytyy harkita tarkkaan ja joskus mahdollisesti korvata jokin kohta imperatiivisella tyylillä.

Kun tämän pitää mielessä, on funktionaalisuus todella kätevä työkalu JavaScriptissä. Tyypillisessä ympäristössä ei myöskään käsitellä niin suuria tietomääriä, että suorituskyvyn kanssa olisi ongelmia, vaikka hiukan sähläisikin.

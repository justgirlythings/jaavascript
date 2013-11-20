Sulkeumista
========

Sulkeumat ovat tapa kapseloida funktioon muuttujia ja toisia funktioita. Sulkeuma nimensä mukaisesti sulkee muuttujat yms. sisäänsä ikään kuin ulkomaailman ulottumattomiin, jolloin niihin pääsee vaikuttamaan vain sulkeumaan määriteltyjen funktioiden avulla. Tämä simuloi monen ohjelmointikielten piilotettuja muuttujua ja funktioita (esimerkiksi Javassa private).

Esimerkiksi sulkeumaan suljetut muuttujat voivat säilyä sulkeuman suorituksen jälkeiseen aikaan:
<pre><code> function kapseloi(muuttuja){
	var sisainen = muuttuja;
	return function(){return sisainen};
}
</code></pre>


Miten saattaisimme asettaa arvoja sulkeumien sisäisiin muuttujiin? Voimme palauttaa funktioita jotka toimivat aksessoreina:
<pre><code> function kapseloiAksessorein(muuttuja){
	var sisainen = muuttuja;
	return {
		getMuuttuja: function() {return sisainen},
		setMuuttuja: function(uusi) {
			sisainen = uusi;
		}
	}
}
</code></pre>


Toisaalta, javascriptille ominaisesti, mikään ei estä edellisen esimerkin getMuuttuja- tai setMuuttuja-funktioiden uudelleenmäärittämistä lennossa. Tästä voi koitua ongelmia tilanteessa jossa henkilö A on luonut ko. olion ja henkilö B koettaa asettaa jotain arvoa sisäiseen muuttujaan käyttämättä setMuuttuja-funktiota oikein:

<pre><code> var kapseloitu = kapseloiAksessorein("JS on tosi kiva!");
write(kapseloitu.getMuuttuja());	// JS on tosi kiva!
write(kapseloitu.getMuuttuja);		// function () {return sisainen}
kapseloitu.getMuuttuja = function(){return "Eikä ole"};
write(kapseloitu.getMuuttuja());	// Eikä ole
write(kapseloitu.getMuuttuja);		// function (){return "Eikä ole"}
</code></pre>

Tätä ominaisuutta voi myös käyttää hyväksi. Voimme määritellä vaikka järjestyksen määräävän funktion uudelleen aina tarpeen vaatiessa suorituksen aikana. Taulukkoon voisi tallentaa kasan erilaisia funktioita ja määritellä määrätyn olion järjestyksen sen sisältämässä taulukossa lennossa määrittelemällä sen vertailufunktion aina uudelleen.

Toinen vahva tekniikka joka hyödyntää sulkeumia on antaa funktio parametrina toiselle funktiolle. Edellistä taulukon järjestyksen määräystä jatkaen; sen sijaan, että määrittelemme kullekin oliolle järjestyksen erikseen, voimme antaa järjestävälle funktiolle säännön funktiona:

<pre><code> var taulukkoKapseloituja = [{kapseloiAksessorein("ab")},
			{kapseloiAksessorein("abc")},
			{kapseloiAksessorein("a")}];
write(taulukkoKapseloituja);	//ab, abc, a

function pituusKomparaattori() {
    return function(a, b) {
        a = a.getMuuttuja().length;
        b = b.getMuuttuja().length;
        return a-b;
    }
}

taulukkoKapseloituja.sort(pituusKomparaattori());
write(taulukkoKapseloituja);	//a, ab, abc
</code></pre> 

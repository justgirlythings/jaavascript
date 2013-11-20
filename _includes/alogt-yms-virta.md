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
		getMuuttuja: {function() return sisainen};
		setMuuttuja: function(uusi) {
			sisainen = uusi;
		};
	}
}
</code></pre>



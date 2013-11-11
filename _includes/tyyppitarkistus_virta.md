Tyypittömät muuttujat, tyypilliset arvot
=====================

Muuttujen näkyvyysalueista
------------

Muuttujat eivät saa tyyppiä javascriptissä. Muuttujan nimi, tunnus, voidaan määritellä samaan tapaan kuin monessa ohjelmointikielessä:

```javascript
var a = 3;
var b = "merkkijono";
```

Muuttujien näkyvyysalueet ovat joskus sekavan laajat. Jos muuttujaa, jota käytetään vaikka funktiossa, ei määritellä eikä sitä ole aikaisemmin määritelty se tulee aksessoinnin jälkeen globaaliksi muuttujaksi. Lohkot eivät javascriptissä näkyvyysalueita, joten lohkojen sisällä määritellyt muuttujat ovat käytettävissä. Javascriptissä on myös mahdollista määritellä muuttuja niin, että se on puhtaasti käytettävissä vain ko. lohkon sisällä:

```javascript
var a = 3;
function(){
	write(a); //tulostuu 3
	let b = "merkkijono";
}
write(b); // tulostuu 'undefined'
```

Tästä on hyötyä esimerkiksi silmukoiden apumuuttujien määrittelyssä: silmukan päätyttyä apumuuttuja on vapaasti käytettävissä ilman, että silmukan suorituksessa määritelty arvo säilyisi muuttujassa. Toisaalta on myös hyvien ohjelmointikäytänteiden mukaista nimetä muuttujat kuvaavasti, jolloin on todennäköisempää, että muuttujien nimiä ei tahattomasti uudelleenkäytetä.

Tyypilliset arvot
------------

Vaikka muuttujilla ei ole arvoa, tyypeillä on. Tyyppejä ovat mm.: numeeriset tyypit, merkkijonoliteraalit, oliot ja totuusarvot. Tyyppi voi myös olla mm. null, undefined tai vaikka NaN; Not a Number.

```javascript
var kokonaisluku = 2;
var merkkijono = "merkkijono";
var totuusarvo = true;
```


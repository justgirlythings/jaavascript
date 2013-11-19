Virheenhallinta
===============

JavaScriptissä, kuten kaikissä muissakin kielissä, tulee virheitä, kun tehdään asioita. Tiedoston avaus voi epäonnistua,
käyttäjä saattaa antaa virheellisen syötteen tai asiat menevät muuten vain pieleen.

Virheiden hallinnan ymmärtäminen on siksi oleellinen osa ohjelmointia.

Miksi?
------

Ohjelmat toimivat virhetilanteissa mitä epämiellyttävimmällä tavalla. Silloin on hyvä, jos on jokin standardi tapa, mitä
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

TL;DW

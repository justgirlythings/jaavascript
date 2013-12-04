Javascript ohjelmointikielenä
-----------------------------

Javascript on pohjimmiltaan hyvin monipuolinen ja voimakas kieli hyvinkin erityyppisten ongelmien ratkomiseen. Sen heikosti tyypitelty syntaksi antaa ohjelmoijalle paljon erivapauksia joita voi hyödyntää. Siinä on kokemattomalle ohjelmoijalle myös vaarallisia sudenkuoppia, joiden debuggaaminen saattaa olla hyvinkin hankalaa.

Kielen perusrakenne, linkitetyt assosiaatiolistat, ovat samalla tavalla hyvin joustavia ja tarjoavat paljon sellaisia ominaisuuksia, kuten suorituksenaikainen perinnänhallinta, prototyyppien sekä olioiden ominaisuuksien muokkaus, joita monessa hyvin vahvasti tyypitellyissä ohjelmointikielissä joskus tulee kaivanneeksi. Linkitettyjen assosiaatiolistojen syvyyksissäkin piilee vaaranpaikkoja, jos niiden ketjua ei täysin ymmärrä. Huolimattomasti sohiessa saattaa vahingossa ylikirjoittaa olion kenttiä tai funktioita niin, ettei sen oleellisiin funktioihin, jotka protyyppiketjussa löytyisivät, pääsekkään enää käsiksi ja ohjelman toiminta rikkoutuu.

Tätä dokumentaatiota kirjoitettaessa on käynyt selväksi, että Javascript on enemmän funktionaalinen kuin olio-ohjelmointikieli. Siitä huolimatta samankaltaiset periaatteet pätevät ja aivan yhtälailla Javascriptissäkin on mahdollista, ja syytäkin, noudattaa niin kutsuttuja patterneja.


Module pattern
--------------

Modulit toteutetaan tässä suunnittelumallissa sulkeumina. Sulkeuma voidaa toteutettaa anonyyminä funktiona, joka on pohjimmiltaan olio, joka suoritetaan heti määrittelyn jälkeen, jolloin johonkin tunnukseen tallentuu ainutkertainen instanssi kyseisestä moduulista. Toinen vahtoehto on luoda nimetty funktio sulkeumana ja luoda siitä tunnukseen uusi olio aina tarvittaessa.

Module pattern -suunnittelumallissa yritetään lähestyä esimerkiksi Javasta tuttua luokkapohjaista ohjelmointiparadigmaa, jossa luokalla on yksityisiä ja julkisia muuttujia sekä metodeja, funktioita. Javascriptissä on silti edelleen mahdollista muokata olion sisältämiä kenttiä ja funktioita suorituksen edetessä, joka ei ole edellä mainitussa Javassa mahdollista.

Milloin on Aika?
----------------

JavaScriptiä kannatta käyttää silloin, kun se on järkevää (ofc). JavaScriptin vahvuudet ovat juuri aikaisemmin mainituissa "villin lännen meisingeissä", kuten selainpäässä DOMmaaminen. Tästä saattaa muodostua myös ongelmia, jokaisen selaimen moottori kun haluaa toimia vähän niikuin haluaa. Tämän takia kannattaa toimia mahdollisimman yleisellä tasolla, jolloin kaikesta optimoinnista ei hyödytä - vaihtoehtoisesti sanoo käyttäjälle sivujen toimivan pelkästään esimerkiksi Chromella.

Viime aikoina JS on saanut jalansijaa myös muualta kuin selaimesta. Hyvänä esimerkkinä toimii palvelinpään moottori node.js ja sen mainio pakettienhallintamanageri npm. Täten JS yleistynee myös muualla, joka on hyväksi kielelle, sillä kaikkea ei voi tehdä enää niin villisti ja vapaasti.

JSsää kannattaa käyttää yleisesti silloin, kun käpisteltävät asiat eivät ole järin suuria. Aurinkotuulien ennustaminen vuosien päähän kannattaa toteuttaa jollain muulla kuin JavaScriptillä, mutta selaimessa tapahtuva tekstin merkkien pituuden laskeminen puolestaan on. Fiksu koodari valitsee oikeat työkalut oikeaan työvaiheeseen.

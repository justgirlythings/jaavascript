Tyyppitarkistaminen
===================

Tavoitteet
----------

- Saada tarkistettua funktion palautuksen tyyppi
    - Eli jos funktion pitäisi palauttaa integer, se palauttaa integerin
    - Jos palauttaa jotain muuta, voidaan tarvittaessa palauttaa arvo virheen kera


Miten toteuttaa?
----------------

Luodaan jokin funktio, joka

- Ottaa sisäänsä parametreja, esimerkiksi
    - Mitä funktion pitäisi palauttaa
    - Funktion itsensä
    - Funktiolle annettavat parametrit
    - Valinnaisena (ylimääräisinä argumentteina)
        - Jos tulee virhe, palautetaanko mitään
        - Mahdollinen oma tarkistusfunktio
            - Kuinka tarkkoja ollaan (onko 1 true, vai onko vain true true)

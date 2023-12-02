# Human Records OPR
React App (JavaScript)

## How to run:
    git clone https://github.com/AnonymousGrizzly/human-records.git

    cd human-records

    npm install

    npm start

## App description:
- screen with:
    - form about human 
    - table about humans
    - calculated fields 
    - search for human 
    - delete human 
    - sort humans 
    
- second screen with:
    - show statistics of all human fields 
    - more about human 
    - XML file reader for adding records

- design:
    - brutalism
    - black and white
    - clean minimalist
    - transition-less
    - SCSS

*HAPPY HACKING!*  😘


## Seminarska naloga OPR navodila

Seminarska naloga naj vsebuje vsaj:
-	Dve spletni strani povezani med seboj
-	Na prvi spletni strani se omogoči vnos v tabelo.
-	Doda se gumb, ki omogoča iskanje po enem polju (npr. Priimek), ki v primeru, da tak priimek obstaja, izpiše podatke tega zapisa na ekran ali nazaj v vnosna polja. Za potrditev najdenega zapisa uporabite polja tipa Boolean, kjer True pomeni, da smo našli zapis, False, pa da takega zapisa ni. Ker JavaScript razlikuje majhne in velike črke uporabite ukaze za pretvorbo stringov, da boste lažje primerjali vnosna in iskana polja ( npr. .toLowerCase())
-	Omogočite brisanje zapisa iz tabele.
-	Na enem polju se pokaže uporaba zaščite z ukazi try catch ( na primer, da polje ni prazno in da ne vsebuje znake, ki niso dovoljeni, ali pogoje za vnos datuma)
-	Eno vnosno polje naj omogoča vnos števil na dve decimalki natančno.
-	Pokažite uporabo radijskih gumbov in spustnega menija. S pomočjo SWITCH stavka posredujte izbiro v kodi za nadaljnji izpis ali izračun.
-	Prikažite izračun vsaj enega rezultata na osnovi polj iz tabele, (Npr. Vsota, povprečje, min, max, …) Rezultat naj bo izpisan na eno decimalno mesto natančno.
-	Nekje na strani morate imeti  gumb ali povezavo, ki omogoči prehod na drugo stan. 

-	Druga stran prebere XML datoteko, ki jo naredite sami. Datoteka naj vsebuje vsaj 5 zapisov. Zapis mora imeti element, ki bo za vsaj 2 zapisa skupen (npr. »Obcina« ali »Spol« na sliki na naslednji strani) in en številčni element (npr. Starost ali stOtrok – število otrok). 
-	Po skupnem elementu nato seštejte številčni element za vsako vrednost skupnega elementa. V primeru na spodnji sliki npr. seštejte »Stevilo otrok« za Kranj (4), Ljubljana (6) in Jesenice (6), ali pa po spolu seštejte starost. 
-	Za shranjevanje seštevkov uporabite JS tabelo (array). Izpišite tudi sumarno vrstico (skupno število otrok za vse občine (Skupaj: 16)). Rezultat se naj zapiše v obliki HTML tabele (rezultati so znotraj okvirčkov).
-	S pomočjo potrditvenega polja prikažite izpis na osnovi omejitve (npr. samo ženske)




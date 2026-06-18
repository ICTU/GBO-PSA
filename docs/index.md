# Inleiding

## Doel van dit document

Dit document beschrijft de Projectstartarchitectuur (PSA) voor het project Gemeenschappelijke Bronontsluiting (GBO).

De PSA beschrijft **wat de oplossing moet kunnen**, maar legt nog geen technische implementatie vast.


## Scope

De PSA beschrijft de architectuur voor een afsprakenstelsel en generieke infrastructuur waarmee:

-   burgers gegevens van overheidsorganisaties kunnen verkrijgen  
-   burgers deze gegevens kunnen delen met private partijen  
-   gegevens gebruikt kunnen worden voor Europese toepassingen zoals EDI Wallet en OOTS  

De PSA omvat:

-   oplossingsrichting  
-   architectuur- en ontwerpprincipes  
-   generieke functies  
-   stelselfuncties  
-   realisatiestrategie  

De PSA beschrijft **niet**:

-   concrete technische oplossingen  
-   implementaties van componenten en afspraken<sup>\*</sup>  
-   leverancierskeuzes  

<sup>\*</sup>: hoewel in deze PSA benoemd wordt welke afspraken gemaakt moeten worden en welke componenten ontwikkeld moeten worden, is het **niet** de bedoeling dat GBO een nieuw afsprakenstelsel of voorzieningenbeheerder wordt. De te maken afspraken moeten landen in bestaande afsprakenstelsels en de te ontwikkelen voorzieningen moeten bij bestaande beheerorganisaties in beheer genomen worden.

## Leeswijzer

De PSA bevat de volgende onderdelen:

- Oplossingsrichting: een schets van hoe de gemeenschappelijke bronontsluiting eruit komt te zien;
- Architectuurprincipes: de principes die de kaders vormen voor de oplossing;
- Ontwerpprincipes: de principes waaraan de ontwikkeling van de oplossing zich moet houden;
- Interactiepatronen: een uitwerking van hoe de gegevensstromen die in beeld zijn, uitgevoerd worden;
- Logische architectuur: de generieke functies die nodig zijn om invulling te geven aan de gewenste oplossing;
- Stelselfuncties: de stelselfuncties (capabilities) die invulling geven aan de generieke functies;
- Realisatiestrategie: de voorgestelde manier om de oplossing tot stand te laten komen;
- Open vragen en ontwerpkeuzes: vraagstukken die nog uitgewerkt moeten worden en (indien relevant) de ontwerpkeuze die is gemaakt.

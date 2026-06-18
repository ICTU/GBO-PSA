# Inleiding

## Doel van dit document

Dit document beschrijft de Projectstartarchitectuur (PSA) voor het project Gemeenschappelijke Bronontsluiting (GBO).  
De PSA beschrijft **wat de oplossing moet kunnen**, maar legt nog geen technische implementatie vast.  

> LET OP: Het project gemeenschappelijke bronontsluiting is in ontwikkeling en de documentatie volgt dit. De huidige versie van dit document is daarom niet definitief. De status van de documentatie is [hier](https://ictu.github.io/GBO/latest/#reviewproces) te vinden.


## Scope

De PSA beschrijft de architectuur voor een afsprakenstelsel en generieke infrastructuur waarmee:

-   burgers gegevens van overheidsorganisaties kunnen verkrijgen  
-   burgers deze gegevens kunnen delen met private partijen  
-   gegevens gebruikt kunnen worden voor Europese toepassingen zoals EDI Wallet en OOTS  


De PSA beschrijft **niet**:

-   concrete technische oplossingen  
-   implementaties van componenten en afspraken  
-   leverancierskeuzes  


## Leeswijzer

De PSA bevat de volgende onderdelen:

- [Oplossingsrichting](oplossingsrichting.md): een schets van hoe de gemeenschappelijke bronontsluiting eruit komt te zien;
- [Architectuurprincipes](architectuurprincipes.md): de principes die de kaders vormen voor de oplossing;
- [Ontwerpprincipes](ontwerpprincipes.md): de principes waaraan de ontwikkeling van de oplossing zich moet houden;
- [Interactiepatronen](interactiepatronen.md): een uitwerking van hoe de gegevensstromen die in beeld zijn, uitgevoerd worden;
- [Logische architectuur](generieke-functies.md): de generieke functies die nodig zijn om invulling te geven aan de gewenste oplossing;
- [Stelselfuncties](capabilities.md): de stelselfuncties (capabilities) die invulling geven aan de generieke functies;
- [Realisatiestrategie](realisatiestrategie.md): de voorgestelde manier om de oplossing tot stand te laten komen;
- [Open vragen en ontwerpkeuzes](vraagstukken.md): vraagstukken die nog uitgewerkt moeten worden en (indien relevant) de ontwerpkeuze die is gemaakt.

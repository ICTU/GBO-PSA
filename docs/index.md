# Inleiding

## Doel van dit document

Dit document beschrijft de Projectstartarchitectuur (PSA) voor het project Gemeenschappelijke Bronontsluiting (GBO).

Het [globaal ontwerp](https://ictu.github.io/GBO-GO/main/) beschrijft de gekozen oplossingsrichting, de ondersteunde interactiepatronen, de generieke functies en de benodigde componenten op hoofdlijnen. De PSA neemt dit globaal ontwerp als vertrekpunt en legt de architectuurkaders en richtlijnen vast voor de verdere uitwerking en inrichting van de generieke functies en stelselfuncties.

De PSA beschrijft daarmee vooral:

- welke normerende eisen gelden voor de generieke functies;
- welke afspraken, standaarden en functionele voorzieningen nodig zijn voor de stelselfuncties;
- welke verantwoordelijkheden en beheerkeuzes nog moeten worden belegd;
- welke juridische, organisatorische en technische besluiten nog openstaan.

De PSA legt geen leveranciers- of productkeuzes vast. Concrete componentontwerpen en technische specificaties worden uitgewerkt in het technisch ontwerp en de technische requirements.

> LET OP: Het project Gemeenschappelijke Bronontsluiting is in ontwikkeling en de documentatie volgt dit. De huidige versie van dit document is daarom niet definitief. De status van de documentatie is [hier](https://ictu.github.io/GBO/latest/#reviewproces) te vinden.

## Documenthiërarchie

Voor GBO geldt de volgende documenthiërarchie:

1. Het **globaal ontwerp** beschrijft de oplossingsrichting, interactiepatronen, generieke functies en componenten op hoofdlijnen.
2. De **PSA** beschrijft de kaders, eisen en ontwerpkeuzes voor de generieke functies en stelselfuncties.
3. Het **technisch ontwerp** beschrijft de technische inrichting van de benodigde voorzieningen en koppelvlakken.
4. De **technische requirements** specificeren de te realiseren of aan te passen componenten.
5. De uitwerking **Semantiek** beschrijft de informatiemodellen, begrippen, schema's en mappings voor gegevensuitwisseling.

Bij verschillen in de beschrijving van de oplossingsrichting of interactiepatronen is het globaal ontwerp leidend. De PSA is leidend voor de normerende architectuureisen aan de uitwerking.

## Scope

De PSA beschrijft de afspraken, standaarden en voorzieningen die nodig zijn om de [voordelen die GBO nastreeft](https://ictu.github.io/GBO/latest/) te bereiken. Waar mogelijk worden bestaande afspraken, standaarden en voorzieningen hergebruikt. Aanvullingen worden ingebracht bij bestaande afsprakenstelsels en beheerorganisaties.

De PSA beschrijft niet:

- de volledige werking van de oplossingsrichting en interactiepatronen; daarvoor wordt verwezen naar het globaal ontwerp;
- concrete technische implementaties of referentie-implementaties;
- leverancierskeuzes;
- gedetailleerde API-, gegevens- of component-specificaties.

## Naamgeving

In deze PSA worden de volgende namen consequent gebruikt:

| Begrip | Gebruik in deze PSA |
|---|---|
| Europese digitale identiteitswallet | **EUDI-Wallet** |
| Publieke elektronische attestatie van attributen | **PubEAA** |
| Technische voorziening voor uitgifte van PubEAA's | **PubEAA-provider** |
| Gestandaardiseerd koppelvlak voor authentieke bronnen | **Authentic Source Interface (ASI)** |
| Technische rol of voorziening die een ASI aanbiedt | **ASI-provider** |
| Nederlandse voorziening voor aansluiting van verstrekkende bronhouders op OOTS | **Basisinrichting OOTS**, onderdeel **OOTS-V** |
| GBO-component voor aansluiting op OOTS-V | **OOTS-adapter** |
| Generieke interface van een bronhouder | **bronontsluiting-API** |
| Catalogus van toegestane gegevensvragen per dienst | **dienstencatalogus** |
| Overkoepelende functie voor register, portaal en interfaces voor toestemming | **toestemmingsvoorziening** |
| Registratie van verleende en ingetrokken toestemmingen | **toestemmingsregister** |
| Burgerinterface voor toestemming | **toestemmingsportaal** |
| Ondersteuning voor bronhouders die niet rechtstreeks op de bronontsluiting-API kunnen aansluiten | **GBO-vertaallaag** |

## Leeswijzer

De PSA bevat de volgende onderdelen:

- [Vertrekpunt uit het globaal ontwerp](oplossingsrichting.md): een korte samenvatting van de architectuurconsequenties die in deze PSA worden uitgewerkt;
- [Architectuurprincipes](architectuurprincipes.md): de richtinggevende principes en hun concrete consequenties voor GBO;
- [Ontwerpprincipes](ontwerpprincipes.md): de normerende principes voor ontwerp en realisatie;
- [Interactiepatronen](interactiepatronen.md): de relatie tussen de interactiepatronen uit het globaal ontwerp en de stelselfuncties;
- [Generieke functies](generieke-functies.md): de eisen aan F1 tot en met F8 en hun relatie met de stelselfuncties;
- [Stelselfuncties](capabilities.md): de uitwerking van S01 tot en met S11 in afspraken, standaarden, functionele voorzieningen, verantwoordelijkheden en open besluiten;
- [Realisatiestrategie](realisatiestrategie.md): de werkpakketten, afhankelijkheden en beoogde landing in bestaande stelsels en beheerorganisaties;
- [Open besluiten](vraagstukken.md): het besluitregister voor nog niet vastgestelde architectuurkeuzes.

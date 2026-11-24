# Inleiding

## Doel van dit document

Dit document beschrijft de projectstartarchitectuur (PSA) voor het programma Gemeenschappelijke Bronontsluiting (GBO).

De probleemstelling en doelen van het programma GBO staan op het tabblad [Gemeenschappelijke Bronontsluiting](https://ictu.github.io/GBO/). De organisatorische en juridische context staat op het tabblad [Context](https://ictu.github.io/GBO/latest/context). Het [globaal ontwerp](https://ictu.github.io/GBO-GO/) beschrijft op hoofdlijnen het voorgestelde bronontsluitingsmodel, de interactiepatronen, generieke functies en benodigde componenten.

## Terminologie en begrippen

In deze PSA verwijst **GBO** uitsluitend naar het programma Gemeenschappelijke Bronontsluiting. De door het programma voorgestelde oplossing heet het **bronontsluitingsmodel**. Dit model bestaat uit een **decentrale bronontsluiting** die iedere bronhouder zelf inricht of laat inrichten en uit **kanaalvoorzieningen** voor de kanalen EUDI-Wallet, OOTS en private dienstverleners (DvTP). Het bronontsluitingsmodel is zelf geen standaard, voorziening, organisatie of afsprakenstelsel.

Deze PSA gebruikt de begrippen en definities uit de [begrippenlijst van het globaal ontwerp](https://ictu.github.io/GBO-GO/latest/bijlage_begrippenlijst/). Begrippen worden in de PSA niet afzonderlijk gedefinieerd. Als een benodigd begrip ontbreekt, wordt het aan die gemeenschappelijke begrippenlijst toegevoegd.

De PSA neemt het globaal ontwerp als vertrekpunt. De PSA legt de architectuurkaders en richtlijnen vast voor de verdere uitwerking van de generieke functies en stelselfuncties.

De PSA beschrijft vooral:

- welke normerende eisen gelden voor de generieke functies.
- welke afspraken, standaarden en functionele voorzieningen nodig zijn voor de stelselfuncties.
- voor welke verantwoordelijkheden en beheerkeuzes nog een verantwoordelijke partij nodig is.
- welke juridische, organisatorische en technische besluiten nog openstaan.

De PSA legt geen leveranciers- of productkeuzes vast. Het technisch ontwerp en de technische requirements werken de componentontwerpen en technische specificaties verder uit.

> LET OP: het programma GBO en het voorgestelde bronontsluitingsmodel zijn in ontwikkeling. De documentatie verandert mee. Deze versie is daarom niet definitief. De actuele status staat [hier](https://ictu.github.io/GBO/latest/#reviewproces).

## Documenthiërarchie

Voor het programma GBO geldt de volgende documenthiërarchie:

0. De [**inleiding**](https://ictu.github.io/GBO/) en [**context**](https://ictu.github.io/GBO/latest/context) beschrijven de doelen van het programma, de omgeving en de juridische kaders.
1. Het [**globaal ontwerp**](https://ictu.github.io/GBO-GO/) beschrijft op hoofdlijnen het voorgestelde bronontsluitingsmodel, de interactiepatronen, generieke functies en componenten.
2. De [**PSA**](https://ictu.github.io/GBO-PSA/) beschrijft de kaders, eisen en ontwerpkeuzes voor de generieke functies en stelselfuncties.
3. Het [**technisch ontwerp**](https://ictu.github.io/GBO-TO/) beschrijft de technische inrichting van de voorzieningen en koppelvlakken.
4. De [**technische requirements**](https://ictu.github.io/GBO/main/underconstruction_tr/) specificeren welke referentiecomponenten of voorzieningen het programma laat ontwikkelen of aanpassen.
5. De uitwerking [**Semantiek**](https://ictu.github.io/GBO-Semantiek/) beschrijft de informatiemodellen, begrippen, schema's en mappings voor gegevensuitwisseling.

Bij verschillen over de oplossingsrichting of interactiepatronen is het globaal ontwerp leidend. De PSA is leidend voor de normerende architectuureisen aan de verdere uitwerking.

De [**demo-omgeving**](https://gbo.simulatie.datastelsel.nl/) laat zien hoe de voorgestelde oplossing in de praktijk kan werken. De demo is nog in ontwikkeling, gebruikt testdata en kan fouten bevatten.

## Scope

De PSA beschrijft de kaders, eisen en ontwerpkeuzes voor de afspraken, standaarden en voorzieningen die nodig zijn om de [doelen van het programma GBO](https://ictu.github.io/GBO/) te bereiken. Het bronontsluitingsmodel bouwt waar mogelijk voort op bestaande afspraken, standaarden en voorzieningen. Het programma doet voorstellen voor noodzakelijke aanvullingen. Deze gelden pas na besluitvorming en borging in de aangewezen afsprakenstelsels en beheerorganisaties.

De PSA beschrijft niet:

- de volledige werking van de oplossingsrichting en interactiepatronen. Daarvoor verwijst de PSA naar het globaal ontwerp.
- concrete technische implementaties of referentie-implementaties.
- leverancierskeuzes.
- gedetailleerde API-, gegevens- of componentspecificaties.

## Naamgeving

Deze PSA gebruikt de volgende namen consequent:

| Begrip | Gebruik in deze PSA |
|---|---|
| Europese digitale identiteitswallet | **EUDI-Wallet** |
| Publieke elektronische attestatie van attributen | **PubEAA** |
| Technische voorziening waarmee een bronhouder PubEAA's kan uitgeven | **Voorziening voor PubEAA-uitgifte** |
| Gestandaardiseerd koppelvlak voor authentieke bronnen | **Authentic Source Interface (ASI)** |
| Technische rol of voorziening die een ASI aanbiedt | **ASI-provider** |
| Nederlandse voorziening voor aansluiting van verstrekkende bronhouders op OOTS | **Basisinrichting OOTS**<br>(met **OOTS-V** als interface voor aansluiting vanuit een FSC-koppeling) |
| Optionele kanaalvoorziening voor aansluiting op OOTS-V en semantische vertaling | **OOTS-adapter** |
| Generieke interface van een bronhouder | **bronontsluiting-API**<br>(functioneel ook beschreven als **generieke bronontsluiting**) |
| Catalogus van toegestane gegevensvragen per dienst | **dienstencatalogus** |
| Overkoepelende functie voor register, portaal en interfaces voor toestemming | **toestemmingsvoorziening** |
| Registratie van verleende en ingetrokken toestemmingen | **toestemmingsregister** |
| Burgerinterface voor toestemming | **toestemmingsportaal** |
| Optionele ondersteuning voor bronhouders die niet rechtstreeks op de bronontsluiting-API kunnen aansluiten | **Referentievertaallaag** |

De begrippen en definities staan in de [begrippenlijst van het globaal ontwerp](https://ictu.github.io/GBO-GO/latest/bijlage_begrippenlijst/).

## Leeswijzer

De PSA bevat de volgende onderdelen:

- [Vertrekpunt uit het globaal ontwerp](oplossingsrichting.md): de architectuurconsequenties uit het globaal ontwerp die de PSA verder uitwerkt.
- [Architectuurprincipes](architectuurprincipes.md): de richtinggevende principes en de gevolgen daarvan voor het bronontsluitingsmodel.
- [Ontwerpprincipes](ontwerpprincipes.md): de normerende principes voor ontwerp en realisatie.
- [Interactiepatronen](interactiepatronen.md): de relatie tussen de interactiepatronen en de stelselfuncties.
- [Generieke functies](generieke-functies.md): de eisen aan F1 tot en met F8 en de relatie met de stelselfuncties.
- [Stelselfuncties](capabilities.md): de afspraken, standaarden, functionele voorzieningen, verantwoordelijkheden en open besluiten voor S01 tot en met S11.
- [Realisatiestrategie](realisatiestrategie.md): de werkpakketten, afhankelijkheden en beoogde onderbrenging bij bestaande stelsels en beheerorganisaties.
- [Open besluiten](vraagstukken.md): het besluitregister voor architectuurkeuzes die nog niet zijn vastgesteld.

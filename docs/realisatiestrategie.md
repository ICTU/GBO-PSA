# Realisatiestrategie

## Uitgangspunten

Het programma GBO richt geen zelfstandig nieuw afsprakenstelsel in. Het programma doet voorstellen voor aanvullingen op bestaande afspraken, standaarden en voorzieningen en laat deze waar nodig combineren. De aanvullingen gelden pas na besluitvorming en worden waar mogelijk geborgd bij bestaande stelsels en beheerorganisaties.

Tijdens pilots kan het programma referentiecomponenten of tijdelijke voorzieningen ontwikkelen. Voor productiegebruik moeten de betrokken partijen vóór overdracht vaststellen:

- wie inhoudelijk eigenaar is.
- waar de gebruiks- en aansluitafspraken worden beheerd.
- wie standaarden en profielen beheert.
- wie het operationele beheer en de ondersteuning uitvoert.
- hoe financiering, continuïteit, toezicht en aansprakelijkheid zijn geregeld.
- welke acceptatie- en exitcriteria gelden.

De realisatie volgt de [ontwerpprincipes](ontwerpprincipes.md). Vooral de principes *afspraken boven standaarden boven voorzieningen* en *decentraal wat kan, centraal wat moet* zijn bepalend.  
Keuzes bij de uitwerking van het ontwerp, worden vastgelegd in *Architecture Decision Records* (ADR's).

## Werkpakketten

De werkpakketten groeperen samenhangende stelselfuncties. GBO-basis vormt het overkoepelende basiswerkpakket. EUDI-Wallet, OOTS en DvTP zijn kanaalwerkpakketten: zij werken de afspraken en voorzieningen voor een specifiek kanaal uit. Het globaal ontwerp bevat het overzicht van het bronontsluitingsmodel en de componentbeschrijvingen. Deze PSA herhaalt die informatie niet.

| Werkpakket&nbsp;&nbsp; | Stelselfuncties | Belangrijkste resultaten | Belangrijkste afhankelijkheden |
|---|---|---|---|
| **GBO-basis** | S04 tot en met S07, S09 en S10 | Aansluitvoorwaarden.<br>Bronontsluiting-API en dienstencatalogus.<br>Autorisatieprofiel en policy-governance.<br>Logging- en traceprofiel.<br>Semantische kaders. | FDS en GDI.<br>Standaardisering van het API-profiel.<br>Beheerkeuzes voor beleid en catalogi. |
| **EUDI-Wallet** | S03 tot en met S05, S09 tot en met S11 | Attestation rulebooks.<br>PubEAA- en ASI-profielen.<br>Mappings.<br>Signing, status en intrekking.<br>Technische functies voor uitgifte en verificatie. | eIDAS2/ARF.<br>Nationale EUDI-Wallet-governance.<br>Certificering.<br>Rolverdeling tussen bronhouders en QTSP's. |
| **OOTS** | S04, S05 en S07 tot en met S10 | Koppelvlak met OOTS-V.<br>Optionele OOTS-adapter.<br>Semantische mappings naar SDG-EDM.<br>Aansluiting op de dienstverlening van bNC SDG.<br>Logging over de keten. | Basisinrichting OOTS.<br>Nationale SDG-governance.<br>Afspraken over mapping en beheer. |
| **DvTP** | S01 tot en met S07, S09 en S10 | Toestemmingsmodel en -voorziening.<br>Pseudonimiseringsintegratie.<br>Toelatingsmodel voor private partijen.<br>Dienstregistratie.<br>Autorisatiebeleid. | Wet- en regelgeving.<br>Toezicht.<br>Beheer van de toestemmingsvoorziening.<br>Aansluiting op BSNk PP.<br>Governance voor privaat vertrouwen. |

## Werkpakket GBO-basis

Dit werkpakket legt de herbruikbare basis voor alle interactiepatronen.

### Op te leveren afspraken en standaarden

- aansluitvoorwaarden voor bronhouders en afnemers.
- API-profiel voor de bronontsluiting.
- model en beheerproces voor de dienstencatalogus.
- autorisatieprofiel voor PEP, PDP en PIP.
- governance- en distributieprofiel voor beleidsregels.
- profiel voor ketenlogging en correlatie.
- kaders voor begrippen, schema's, kwaliteit en mappings.
- model en koppelvlak voor de bronconfiguratie.
- afspraken over validatie, versiebeheer, publicatie en raadpleging van deze configuratie.

### Op te leveren of aan te passen voorzieningen

- aansluitbare bronontsluiting-componenten.
- referentie-implementatie van een decentraal configuratiecomponent.
- dienstencatalogus.
- functies voor beleidsbeheer en -distributie.
- ondersteunende referentievertaallaag.
- schema- en mappingrepository.
- test- en conformiteitsvoorzieningen.

Referentiecomponenten ondersteunen interoperabiliteit en maken implementatie eenvoudiger. Zij zijn geen verplichte productkeuze. Een alternatief is toegestaan als het aantoonbaar aan de standaarden en eisen voldoet.

## Kanaalwerkpakket EUDI-Wallet

Dit werkpakket maakt attestatie-uitgifte mogelijk en ondersteunt QTSP's.

### Op te leveren afspraken en standaarden

- rolverdeling tussen bronhouder, voorziening voor PubEAA-uitgifte, ASI-provider en QTSP.
- attestation rulebooks per attribuuttype.
- profielen voor uitgifte, verificatie, retrieval, walletbinding, signing, status en intrekking.
- schema's en mappings per attestatietype.
- toelatings- en certificeringseisen.

### Inrichtingsvarianten

De realisatie ondersteunt meerdere varianten:

- een bronhouder richt zelf een voorziening voor PubEAA-uitgifte in.
- meerdere bronhouders gebruiken een gedeelde technische voorziening voor PubEAA-uitgifte, waarbij iedere bronhouder verantwoordelijk blijft voor de eigen uitgifte.
- een QTSP geeft QEAA's uit na verificatie of retrieval via een ASI-provider.
- per attribuuttype of domein is een combinatie van deze varianten mogelijk.

De PSA legt vooraf geen centrale keuze tussen deze varianten vast. De interfaces en eisen moeten ervoor zorgen dat de varianten onderling uitwisselbaar zijn.

## Kanaalwerkpakket OOTS

Dit werkpakket koppelt de decentrale bronontsluiting aan de Basisinrichting OOTS. De optionele OOTS-adapter kan daarbij de geconfigureerde semantische vertaling uitvoeren.

### Op te leveren afspraken en standaarden

- het koppelvlak tussen OOTS-V en de bronontsluiting-API.
- autorisatie- en loggingafspraken voor OOTS-verzoeken.
- beheerproces voor gegevensdiensten en semantische mappings naar SDG-EDM, inclusief de bronconfiguratie waarmee de bronhouder bepaalt welke mapping voor een gegevensdienst wordt toegepast.
- aansluiting op de dienstverlening van bNC SDG voor het publiceren van beschikbare bewijsdiensten. Deze publicatiefunctie valt buiten het bronontsluitingsmodel.
- verdeling van verantwoordelijkheden bij fouten, wijzigingen en incidenten.

### Afbakening

Binnen het OOTS-kanaal verzorgt de Basisinrichting OOTS de Europese proces- en transportfuncties. Het kanaalwerkpakket richt zich op:

- de aansluiting van OOTS-V op de decentrale bronontsluiting.
- semantische mapping naar SDG-EDM, indien deze door de bronhouder voor de betreffende gegevensdienst is geconfigureerd.
- toepassing van de generieke autorisatie- en loggingfuncties.

Sectorale en eigen OOTS-aansluitingen vallen buiten de scope van het programma GBO.

## Kanaalwerkpakket DvTP

Dit werkpakket maakt gegevensverstrekking aan private dienstverleners mogelijk als daarvoor een geldige juridische grondslag bestaat.

### Juridische randvoorwaarde

Productiegebruik is pas mogelijk als wet- en regelgeving voldoende duidelijkheid geeft over:

- wanneer een bronhouder gegevens aan een private dienstverlener mag verstrekken.
- welke eisen gelden voor toestemming of een andere grondslag.
- welke rechten de burger heeft.
- welke regels gelden voor toelating, toezicht en handhaving.
- hoe het BSN en andere identificerende gegevens worden beschermd.

### Op te leveren afspraken en standaarden

- model voor toestemming en grondslag.
- UX- en toegankelijkheidsprofiel voor het toestemmingsportaal.
- aansluitprofiel voor pseudonimisering.
- toelatingsmodel voor private dienstverleners.
- registratie van diensten, doelen en toegestane gegevensvragen.
- autorisatiebeleid en governance voor wijzigingen.

## Impact op betrokken partijen

Het [globaal ontwerp](https://ictu.github.io/GBO-GO/main/#6-impact-op-betrokken-partijen) bevat een eerste inschatting van de impact van het bronontsluitingsmodel op betrokken partijen. De PSA maakt een verdere uitwerking mogelijk. Het technisch ontwerp en de technische requirements werken deze impact verder uit.

### Bronhouder

Een bronhouder realiseert of gebruikt:

- een bronontsluiting-API volgens het vastgestelde profiel.
- een PEP en toegang tot een passende PDP.
- logging volgens het vastgestelde profiel.
- een beschrijving van gegevensdiensten, schema's en kwaliteit en de bronconfiguratie waarmee wordt vastgelegd hoe deze gegevens via de verschillende gegevensstromen worden aangeboden.
- beheerprocessen voor aansluiting, wijzigingen en incidenten.

Een bronhouder kan referentiecomponenten gebruiken en eventueel onderdelen van de referentievertaallaag inzetten. Functioneel gelijkwaardige alternatieven zijn ook mogelijk. De bronhouder beheert hiervoor een decentraal configuratiecomponent. De technische implementatie daarvan is vrij, zolang deze voldoet aan de vastgestelde functionele eisen en koppelvlakken.
De bronhouder moet altijd voldoen aan de vastgestelde afspraken, standaarden en koppelvlakken.

### QTSP's

De PSA legt nog niet vast hoe attestatie-uitgifte binnen het EUDI-Wallet-kanaal wordt ingericht. Daarom ondersteunt de PSA voorlopig alle varianten. QTSP's hebben daardoor verschillende mogelijkheden:

- de verifyfunctie van de centrale ASI-provider gebruiken om attributen te controleren en daarna attestaties uit te geven.
- de retrievefunctie van de centrale ASI-provider gebruiken om namens een bronhouder attestaties uit te geven.
- de benodigde gegevens via andere kanalen bij de bron ophalen om attestaties uit te geven. Dit valt buiten de scope van het programma GBO.

Een QTSP die de centrale ASI-provider gebruikt, moet aansluiten volgens de EUDI-afspraken en -standaarden.

### Basisinrichting OOTS

De decentrale bronontsluiting sluit aan op de Basisinrichting OOTS voor levering van bewijzen aan andere Europese overheden volgens de SDG-verordening. De optionele OOTS-adapter kan daarbij de geconfigureerde semantische vertaling uitvoeren. Bronhouders mogen hiervoor ook andere aansluitingen gebruiken.

Voor deze aansluiting op de Basisinrichting OOTS zijn de volgende onderdelen nodig:

- uitbreiding van de OOTS-V-component met het nationale koppelvlak voor de decentrale bronontsluiting.
- afspraken over de precieze grens tussen dat koppelvlak, de optionele OOTS-adapter, OOTS-V en de Basisinrichting OOTS.
- afspraken over autorisatie, logging en verantwoording op die grens.
- afspraken over gebruik en beheer van de semantische mapping tussen de gegevensmodellen van de bronhouder en SDG-EDM.
- aansluiting op de dienstverlening van bNC SDG voor publicatie van bewijsdiensten.

### Private dienstverlener

Een private dienstverlener die wil deelnemen aan het DvTP-kanaal, moet:

- voldoen aan de aansluitvoorwaarden voor de voorzieningen.
- de burger via de centrale toestemmingsvoorziening om toestemming vragen.
- de burger een volwaardig alternatief bieden om de gegevens aan te leveren.
- gegevens volgens de dienstencatalogus uitvragen.
- gegevensverzoeken volgens de afgesproken koppelvlakspecificatie uitvoeren.

## Landing in bestaande stelsels en beheerorganisaties

GBO is een programma en geen organisatie die componenten kan beheren in een structurele productieomgeving. Ook is GBO geen stelsel met deelnemers en afspraken. Alle referentiecomponenten en voorzieningen die het programma laat ontwikkelen, moeten worden overgedragen aan of uitgefaseerd ten gunste van stelsels en organisaties waar structureel beheer en toezicht zijn geregeld.
Gedurende de ontwikkeling onderzoekt het programma waar de verschillende componenten het beste kunnen landen. Daarbij wordt zoveel mogelijk gebruikgemaakt van bestaande stelsels en beheerorganisaties. Een eerste voorzet hiervoor staat in de onderstaande tabel.

| Beheerobject | Beoogde governance | Beoogde beheer- of uitvoeringsrichting | Besluitpunt |
|---|---|---|---|
| Aansluitvoorwaarden en gebruik bronontsluiting | FDS | FDS-beheer, in samenwerking met GDI-partijen | Definitieve eigenaar en handhaving |
| API-profiel bronontsluiting | Digikoppeling/API-governance en FDS | Logius en relevante standaardisatiegremia | Positionering GraphQL |
| Dienstencatalogus | FDS met inhoudelijke verantwoordelijkheid bij domeinen | Bestaande of uit te breiden FDS-catalogusinfrastructuur | Beheerder en federatief model |
| Autorisatieprofiel | FDS/GDI | Beheer bij passende landelijke standaardbeheerder | Status, versiebeheer en conformiteitstoetsing |
| Beleidsbeheer en distributie | FDS/FTV-governance | Operationele beheerder nader te bepalen | Inhoudelijk eigenaarschap en technisch beheer |
| Logging- en traceprofiel | GDI/FDS | Aansluiting op beheer LDV en technische profielen | Inzage- en aggregatiemodel |
| Semantische kaders en catalogusprofielen | FDS en Geonovum waar passend | Federatief: standaarden centraal, inhoud per domein | Scheiding standaardbeheer en inhoudsbeheer |
| Schema- en mappingrepository | FDS en betrokken externe stelsels | Operationele beheerder nader te bepalen | Centraal of federatief |
| PubEAA- en ASI-profielen | Nationale EUDI-Wallet- en eIDAS-governance | BZK/RDI en uitvoeringsorganisaties, rol nader te bepalen | Centraal, decentraal of federatief model |
| OOTS-koppelvlak en adapter | Nationale SDG/OOTS-governance | Beheer rond Basisinrichting OOTS en betrokken bronontsluiting | Functiegrenzen en beheerder |
| Toestemmingsvoorziening | DvTP/GDI/FDS, afhankelijk van wetgeving | Landelijke beheerorganisatie nader te bepalen | Juridische grondslag, toezicht en beheer |
| Pseudonimiseringsaansluiting | GDI/BSNk-governance | Logius/BSNk | Deelnemersrollen en integratieprofiel |
| Referentiecomponenten | Programmagovernance tijdens ontwikkeling | Overdracht per component | Acceptatiecriteria en exitplan |

## Fasering

1. **Kaders vaststellen:** het programma besluit over scope, rollen, juridische randvoorwaarden en beheerprincipes.
2. **Profielen ontwerpen:** het programma werkt koppelvlakken, gegevensmodellen, beleid, logging en conformiteitseisen uit.
3. **Beproeven:** pilots toetsen referentiecomponenten en alternatieve implementaties.
4. **Standaardiseren en beleggen:** de betrokken partijen stellen afspraken en profielen vast en wijzen beheerorganisaties aan.
5. **Productierijp maken:** de betrokken partijen richten audits, serviceniveaus, continuïteit, financiering, ondersteuning en toezicht in.
6. **Overdragen en opschalen:** het programma draagt programmavoorzieningen over of faseert deze uit. Daarna kunnen deelnemers gecontroleerd aansluiten.

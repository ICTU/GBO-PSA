# Realisatiestrategie

## Uitgangspunten

GBO richt geen zelfstandig nieuw afsprakenstelsel in. De realisatie bestaat uit het aanvullen, combineren en toepassen van bestaande afspraken, standaarden en voorzieningen. Nieuwe onderdelen worden waar mogelijk ondergebracht bij bestaande stelsels en beheerorganisaties.

Tijdens pilots kunnen referentiecomponenten of tijdelijke voorzieningen onder projectverantwoordelijkheid worden ontwikkeld. Voor productiegebruik moet vóór overdracht zijn vastgesteld:

- wie inhoudelijk eigenaar is;
- waar de gebruiks- en aansluitafspraken worden beheerd;
- wie standaarden en profielen beheert;
- wie operationeel beheer en ondersteuning uitvoert;
- hoe financiering, continuïteit, toezicht en aansprakelijkheid zijn geregeld;
- welke acceptatie- en exitcriteria gelden.

De realisatie volgt de [ontwerpprincipes](ontwerpprincipes.md), in het bijzonder afspraken boven standaarden boven voorzieningen en decentraal wat kan, centraal wat moet.

## Werkpakketten

De werkpakketten zijn gekoppeld aan samenhangende stelselfuncties. De oplossingsplaat en technische componentbeschrijvingen staan in het globaal ontwerp en worden hier niet herhaald.

| Werkpakket&nbsp;&nbsp; | Stelselfuncties | Belangrijkste resultaten | Belangrijkste afhankelijkheden |
|---|---|---|---|
| **GBO-basis** | S04 tot en met S07, S09 en S10 | Aansluitvoorwaarden; bronontsluiting-API; dienstencatalogus; autorisatieprofiel; policy-governance; logging- en traceprofiel; semantische kaders. | FDS- en GDI-governance; standaardisering API-profiel; beheerkeuzes voor beleid en catalogi. |
| **EUDI-Wallet** | S03 tot en met S05, S09 tot en met S11 | Attestation rulebooks; PubEAA- en ASI-profielen; mappings; signing, status en intrekking; technische uitgifte- en verificatiefuncties. | eIDAS2/ARF; nationale EUDI-Wallet-governance; certificering; rolverdeling bronhouders en QTSP's. |
| **OOTS** | S04, S05 en S07 tot en met S10 | Koppelvlak met OOTS-V; OOTS-adapter; OOTS-EDM-mappings; dienst- en discoverybeheer; ketenlogging. | Basisinrichting OOTS; nationale SDG-governance; afspraken over mapping en beheer. |
| **DvTP** | S01 tot en met S07, S09 en S10 | Toestemmingsmodel en -voorziening; pseudonimiseringsintegratie; toelatingsmodel private partijen; dienstregistratie; autorisatiebeleid. | Wet- en regelgeving; toezicht; beheer toestemmingsvoorziening; aansluiting BSNk PP; private vertrouwensgovernance. |

## Werkpakket GBO-basis

Dit werkpakket legt de herbruikbare fundatie voor alle interactiepatronen.

### Op te leveren afspraken en standaarden

- aansluitvoorwaarden voor bronhouders en afnemers;
- API-profiel voor de bronontsluiting;
- model en beheerproces voor de dienstencatalogus;
- autorisatieprofiel voor PEP, PDP en PIP;
- governance- en distributieprofiel voor beleidsregels;
- profiel voor ketenlogging en correlatie;
- kaders voor begrippen, schema's, kwaliteit en mappings.

### Op te leveren of aan te passen voorzieningen

- aansluitbare bronontsluiting-componenten;
- dienstencatalogus;
- beleidsbeheer- en distributiefuncties;
- ondersteunende GBO-vertaallaag;
- schema- en mappingrepository;
- test- en conformiteitsvoorzieningen.

Referentiecomponenten zijn hulpmiddelen voor interoperabiliteit en implementatiegemak. Zij vormen geen verplichte productkeuze zolang een alternatieve implementatie aantoonbaar aan de standaarden en eisen voldoet.

## Werkpakket EUDI-Wallet

Dit werkpakket maakt attestatie-uitgifte en ondersteuning van QTSP's mogelijk.

### Op te leveren afspraken en standaarden

- rolverdeling tussen bronhouder, PubEAA-verstrekker, ASI-provider en QTSP;
- attestation rulebooks per attribuuttype;
- profielen voor uitgifte, verificatie, retrieval, walletbinding, signing, status en intrekking;
- schema's en mappings per attestatietype;
- toelatings- en certificeringseisen.

### Inrichtingsvarianten

De realisatie ondersteunt meerdere varianten:

- een bronhouder beheert zelf een PubEAA-verstrekker;
- meerdere bronhouders gebruiken een gedeelde technische PubEAA-verstrekker;
- een QTSP geeft QEAA's uit na verificatie of retrieval via een ASI-provider;
- een combinatie van deze varianten per attribuuttype of domein.

De keuze wordt niet door de PSA op voorhand centraal vastgelegd. De interfaces en eisen moeten varianten onderling uitwisselbaar maken.

## Werkpakket OOTS

Dit werkpakket koppelt de gemeenschappelijke ontsluiting aan de Basisinrichting OOTS.

### Op te leveren afspraken en standaarden

- het koppelvlak tussen OOTS-V en de bronontsluiting-API;
- autorisatie- en loggingafspraken voor OOTS-verzoeken;
- beheerproces voor gegevensdiensten, discovery en OOTS-EDM-mappings;
- verantwoordelijkheidsverdeling bij fouten, wijzigingen en incidenten.

### Afbakening

Binnen GBO wordt de Basisinrichting OOTS gebruikt voor de Europese proces- en transportfuncties. De GBO-uitwerking richt zich op:

- de aansluiting van OOTS-V op de generieke bronontsluiting;
- semantische mapping naar overeengekomen evidence types;
- toepassing van de generieke autorisatie- en loggingfuncties.

Sectorale en eigen OOTS-aansluitingen vallen buiten de GBO-realisatie.

## Werkpakket DvTP

Dit werkpakket maakt gegevensverstrekking aan private dienstverleners mogelijk als daarvoor een geldige juridische grondslag bestaat.

### Juridische randvoorwaarde

Productiegebruik is pas mogelijk als wet- en regelgeving voldoende duidelijk maakt:

- wanneer een bronhouder gegevens aan een private dienstverlener mag verstrekken;
- welke eisen gelden aan toestemming of een andere grondslag;
- welke rechten de burger heeft;
- welke toelatings-, toezichts- en handhavingsregels gelden;
- hoe het BSN en andere identificerende gegevens worden beschermd.

### Op te leveren afspraken en standaarden

- model voor toestemming en grondslag;
- UX- en toegankelijkheidsprofiel voor het toestemmingsportaal;
- aansluitprofiel voor pseudonimisering;
- toelatingsmodel voor private dienstverleners;
- registratie van diensten, doelen en toegestane gegevensvragen;
- autorisatiebeleid en wijzigingsgovernance.

## Impact op betrokken partijen

In het [globaal ontwerp](https://ictu.github.io/GBO-GO/main/#6-impact-op-betrokken-partijen) is een eerste inschatting gemaakt van de impact van GBO op de betrokken partijen. Op basis van het PSA kan dat verder uitgewerkt worden.  
Dit zal verder geconcretiseerd worden als het technisch ontwerp en de technische requirements uitgewerkt zijn.  

### Bronhouder

Een bronhouder realiseert of gebruikt:

- een bronontsluiting-API conform het vastgestelde profiel;
- een PEP en toegang tot een passende PDP;
- logging conform het GBO-profiel;
- een beschrijving van gegevensdiensten, schema's en kwaliteit;
- beheerprocessen voor aansluiting, wijzigingen en incidenten.

Een bronhouder kan gebruikmaken van referentiecomponenten, eventueel ondersteund met onderdelen uit de GBO-vertaallaag, of functioneel gelijkwaardige alternatieven. De keuzevrijheid geldt niet voor de naleving van de vastgestelde afspraken, standaarden en koppelvlakken.

### QTSP's

De wijze waarop attestaties uitgegeven worden met GBO, is nog niet vastgesteld. Vooralsnog worden alle varianten ondersteund. Dat betekent dat QTSP's verschillende opties hebben:

- gebruikmaken van de verifyfunctie van de centrale ASI-provider om attributen te controleren en op basis daarvan attestaties uitgeven;
- gebruikmaken van de retrievefunctie van de centrale ASI-provider om namens een bronhouder attestaties uit te geven;
- via andere kanalen bij de bron de vereiste gegevens ophalen om attestaties uit te geven (buiten scope van GBO).

Voor het gebruik van de centrale ASI-provider zal de QTSP conform de EUDI-afspraken en -standaarden moeten aansluiten.

### OOTS Basisinrichting

Voor levering van bewijzen aan andere Europese overheden conform de SDG verordening, sluit GBO aan op de OOTS Basisinrichting. NB: Bronhouders zijn vrij om hiervoor andere kanalen te gebruiken.  
Voor de aansluiting van GBO op de OOTS Basisinrichting is het volgende nodig:

- uitbreiding van de OOTS-V component van de Basisinrichting OOTS met het GBO-koppelvlak;
- afspraken over precieze grens tussen GBO-koppelvlak en OOTS-V / Basisinrichting OOTS (o.a. voor autorisatie, logging en verantwoording);
- afspraken over gebruik en beheer van semantische mapping tussen gegevenmodellen van de bronhouder en EDM;
- afspraken over discovery- en dienstinformatie.

### Private dienstverlener

De private dienstverlener die gebruik wil maken van de DvTP dienst van GBO, moet:

- voldoen aan de aansluitvoorwaarden om gebruik te maken van de voorzieningen;
- de burger toestemming vragen via de centrale toestemmingsvoorziening;
- de burger een volwaardig alternatief aanbieden om de gegevens aan te leveren;
- gegevens conform de dienstencatalogus uitvragen;
- gegevensverzoeken conform de afgesproken koppelvlakspecificatie moeten uitvoeren.


## Landing in bestaande stelsels en beheerorganisaties

| Beheerobject | Beoogde governance | Beoogde beheer- of uitvoeringsrichting | Besluitpunt |
|---|---|---|---|
| Aansluitvoorwaarden en gebruik bronontsluiting | FDS | FDS-beheer, in samenwerking met GDI-partijen | Definitieve eigenaar en handhaving |
| API-profiel bronontsluiting | Digikoppeling/API-governance en FDS | Logius en relevante standaardisatiegremia | Positionering GraphQL of alternatief profiel |
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
| Referentiecomponenten | Projectgovernance tijdens ontwikkeling | Overdracht per component | Acceptatiecriteria en exitplan |

## Fasering

1. **Kaders vaststellen:** besluiten over scope, rollen, juridische randvoorwaarden en beheerprincipes.
2. **Profielen ontwerpen:** koppelvlakken, gegevensmodellen, beleid, logging en conformiteitseisen.
3. **Beproeven:** pilots met referentiecomponenten en alternatieve implementaties.
4. **Standaardiseren en beleggen:** afspraken en profielen vaststellen en beheerorganisaties aanwijzen.
5. **Productierijp maken:** audits, servicelevels, continuïteit, financiering, ondersteuning en toezicht inrichten.
6. **Overdragen en opschalen:** projectvoorzieningen overdragen of uitfaseren en deelnemers gecontroleerd aansluiten.

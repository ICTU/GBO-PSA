# Generieke functies

Het [globaal ontwerp](https://ictu.github.io/GBO-GO/main/#4-generieke-functies-en-stelselfuncties) onderscheidt acht generieke functies. Deze PSA herhaalt de functionele beschrijving daarvan niet, maar legt per functie de normerende eisen en de relatie met de stelselfuncties vast.

## F1 — Identiteit & Vertrouwen

De inrichting voldoet aan de volgende eisen:

- burgers, organisaties en systemen worden eenduidig geïdentificeerd;
- het vereiste betrouwbaarheidsniveau wordt per dienst, gegevenscategorie en interactiepatroon vastgesteld;
- organisaties worden toegelaten op basis van expliciete aansluitvoorwaarden en blijven periodiek aantoonbaar aan die voorwaarden voldoen;
- trust anchors, certificaten en vertrouwenslijsten worden centraal of federatief beheerd en zijn machineleesbaar raadpleegbaar;
- het BSN wordt alleen verwerkt door partijen en componenten die daarvoor een wettelijke grondslag hebben;
- voor andere afnemers wordt een partijspecifieke identiteit of pseudoniem toegepast;
- identiteitsvertaling en pseudonimisering zijn gescheiden van de inhoudelijke autorisatiebeslissing en worden alleen uitgevoerd als de gegevensvraag is toegestaan.

## F2 — Toegang & Interactie

De inrichting voldoet aan de volgende eisen:

- een burgerinteractie over toestemming toont ten minste de afnemer, dienst, het doel, de gegevens, geldigheidsduur en gevolgen van de keuze;
- toestemming is vrij, specifiek, geïnformeerd, ondubbelzinnig en aantoonbaar, voor zover dit de toepasselijke grondslag is;
- de burger kan geldige toestemmingen inzien en, waar toepasselijk, intrekken;
- de toestemming wordt op het moment van de gegevensvraag actueel gecontroleerd;
- organisaties krijgen geen toegang op basis van alleen technische bereikbaarheid: toelating, identiteit, dienstregistratie en autorisatie zijn afzonderlijke controles;
- de interfaces voor burger- en organisatie-interactie voldoen aan toepasselijke toegankelijkheids- en beveiligingseisen.

## F3 — Gegevensvoorziening

De inrichting voldoet aan de volgende eisen:

- iedere bronhouder biedt één generieke bronontsluiting-API voor de binnen GBO ondersteunde gegevensstromen;
- gegevensvragen zijn selectief en beperkt tot vooraf geregistreerde diensten en gegevenssets;
- nieuwe afnemers of interactiepatronen vereisen in beginsel wijziging van beleid, dienstregistratie of mapping, niet van het bronsysteem;
- protocol- en formaatverschillen van externe stelsels worden door expliciete adapters en mappings afgehandeld;
- de bronhouder blijft verantwoordelijk voor beschikbaarheid, juistheid en actualiteit van de brongegevens;
- GBO ondersteunt bronhouders die het gekozen API-profiel nog niet rechtstreeks kunnen aanbieden met een vervangbare GBO-vertaallaag;
- tijdelijke opslag is geen onderdeel van de standaard gegevensstroom en wordt alleen gemotiveerd toegepast.

## F4 — Semantiek & Eenheid van Taal

De inrichting voldoet aan de volgende eisen:

- beschikbare gegevensdiensten, gegevenselementen en begrippen zijn beheerd beschreven;
- bronhouders en domeinen blijven inhoudelijk verantwoordelijk voor hun begrippen en informatiemodellen;
- GBO stelt gemeenschappelijke kaders voor vindbaarheid, beschrijving, versiebeheer en mapping;
- schema's en mappings zijn machineleesbaar, testbaar en versieerbaar;
- transformaties naar OOTS-EDM, attestatieschema's en andere uitwisselformaten zijn afgeleid van beheerde bron- en doelschema's;
- wijzigingen bevatten een impactanalyse en een overgangsstrategie voor bestaande afnemers.

## F5 — Gegevenskwaliteit & Validatie

De inrichting voldoet aan de volgende eisen:

- kwaliteitseisen zoals actualiteit, volledigheid en nauwkeurigheid zijn per gegevensdienst beschreven;
- herkomst, bronhouder, tijdstip en relevante versie-informatie worden meegeleverd of aantoonbaar vastgelegd;
- berichten en attestaties worden vóór uitlevering tegen het toepasselijke schema gevalideerd;
- cryptografische integriteit en authenticiteit worden toegepast waar het interactiepatroon dat vereist;
- afnemers kunnen fouten of vermoedelijke onjuistheden via een gestandaardiseerd proces terugmelden;
- een terugmelding is herleidbaar tot de betreffende gegevenslevering, zonder onnodige verspreiding van persoonsgegevens.

## F6 — Grondslag & Beleid

De inrichting voldoet aan de volgende eisen:

- iedere gegevensvraag wordt beoordeeld op afnemer, dienst, doel, grondslag, gegevensvraag en context;
- beleid is machineleesbaar, versieerbaar, testbaar en onafhankelijk van één product of policytaal;
- beleid kan worden gewijzigd zonder programmatuur bij iedere bronhouder te wijzigen;
- het beleidswijzigingsproces bevat voorbereiding, toetsing, goedkeuring, publicatie, inwerkingtreding en terugval;
- de toegepaste beleidsversie en de uitkomst van de beslissing worden vastgelegd;
- de bronhouder kan aanvullende, rechtmatige beperkingen toepassen zolang deze passen binnen de stelselafspraken en het gestandaardiseerde koppelvlak.

## F7 — Orkestratie & Integratie

Voor de huidige interactiepatronen is geen afzonderlijke centrale procesorkestratie voorzien. Integratie wordt ingevuld door S07, S08 en S11.

Daarbij gelden de volgende eisen:

- een gegevensvraag aan meerdere bronhouders bestaat uit afzonderlijke, herleidbare bronverzoeken;
- een toestemming of dienstcontext kan naar meerdere bronverzoeken verwijzen, zonder resultaten centraal samen te voegen tenzij daarvoor een expliciete functie en grondslag bestaan;
- adapters verzorgen alleen integratie, protocolomzetting en semantische mapping en nemen geen impliciete bronhoudersverantwoordelijkheid over;
- foutafhandeling, time-outs en gedeeltelijke beschikbaarheid worden per koppelvlak en interactiepatroon beschreven;
- patroonafhankelijke logica blijft buiten de generieke bronontsluiting-API.

## F8 — Beheer & Continuïteit

De inrichting voldoet aan de volgende eisen:

- alle componenten hebben een expliciete eigenaar, beheerder, serviceniveau en continuïteitsplan;
- voor eventuele "Single Point of Failure" (SPOF) worden maatregelen getroffen om beschikbaarheid te garanderen;
- de keten is monitorbaar zonder inhoudelijke persoonsgegevens onnodig centraal te verzamelen;
- gebeurtenissen zijn over componenten heen correleerbaar via een gestandaardiseerde verzoekidentificator;
- configuraties, beleid, schema's, mappings en dienstregistraties zijn versieerbaar en auditeerbaar;
- incidenten, kwetsbaarheden en wijzigingen worden volgens overeengekomen processen afgehandeld;
- de inrichting ondersteunt wettelijke inzage- en verantwoordingsverplichtingen;
- afhankelijkheden van tijdelijke projectvoorzieningen hebben een overdrachts- of uitfaseringsplan.

## Samenhang

De generieke functies worden niet als afzonderlijke silo's gerealiseerd. In het bijzonder geldt:

- F1 levert identiteits- en vertrouwensinformatie aan F2 en F6;
- F2 registreert en beheert burgerinteracties die door F6 als grondslaginformatie worden gebruikt;
- F3 dwingt de door F6 genomen autorisatiebeslissing af;
- F4 en F5 bepalen welke gegevens betekenisvol en valide kunnen worden geleverd door F3;
- F7 verbindt F3 met de externe interactiepatronen;
- F8 stelt beheer- en auditvoorwaarden aan alle functies.

## Uitwerking in stelselfuncties

De generieke functies worden uitgewerkt naar stelselfuncties: afspraken, standaarden en voorzieningen die invulling geven aan de generieke functie. In de onderstaande tabel staat de relatie tussen generieke functies en stelselfuncties, die in het volgende hoofdstuk uitgewerkt worden.

| Generieke functie | Doel in het globaal ontwerp | Stelselfuncties |
|---|---|---|
| **F1 — Identiteit & Vertrouwen** | Vaststellen en vertrouwen van burgers, organisaties en systemen. | [S03](capabilities.md#s03-burgeridentificatie-pseudonimisering), [S04](capabilities.md#s04-organisatie-authenticatie-vertrouwensstelsel) |
| **F2 — Toegang & Interactie** | Toegang voor burgers en organisaties en, waar nodig, interactie over toestemming. | [S01](capabilities.md#s01-toestemmingsregistratie), [S02](capabilities.md#s02-toestemmingsportaal), [S05](capabilities.md#s05-autorisatie), [S06](capabilities.md#s06-beleidsbeheer-distributie) |
| **F3 — Gegevensvoorziening** | Herbruikbare en selectieve ontsluiting van brongegevens naar verschillende gegevensstromen. | [S07](capabilities.md#s07-gegevensontsluiting), [S08](capabilities.md#s08-oots-adapter), [S11](capabilities.md#s11-attesteringsuitgifte) |
| **F4 — Semantiek & Eenheid van Taal** | Eenduidige betekenis, beschrijving en transformatie van gegevens. | [S10](capabilities.md#s10-semantiek-gegevenscatalogus) |
| **F5 — Gegevenskwaliteit & Validatie** | Aantoonbare kwaliteit, herkomst en geldigheid van uitgewisselde gegevens. | [S10](capabilities.md#s10-semantiek-gegevenscatalogus) |
| **F6 — Grondslag & Beleid** | Vastleggen en toepassen van grondslagen, voorwaarden en autorisatiebeleid. | [S01](capabilities.md#s01-toestemmingsregistratie), [S05](capabilities.md#s05-autorisatie), [S06](capabilities.md#s06-beleidsbeheer-distributie) |
| **F7 — Orkestratie & Integratie** | Integratie met bronnen en externe stelsels zonder patroonafhankelijke logica in de bron. | [S07](capabilities.md#s07-gegevensontsluiting), [S08](capabilities.md#s08-oots-adapter), [S11](capabilities.md#s11-attesteringsuitgifte) |
| **F8 — Beheer & Continuïteit** | Beheersbaarheid, monitoring, auditbaarheid en continuïteit van de keten. | [S09](capabilities.md#s09-logging-audit-traceerbaarheid) en alle overige stelselfuncties |

# Generieke functies

Het [globaal ontwerp](https://ictu.github.io/GBO-GO/main/#4-generieke-functies-en-stelselfuncties) onderscheidt acht generieke functies. Deze PSA herhaalt de functionele beschrijving niet. De PSA legt per functie de normerende eisen vast.

Deze eisen volgen uit de [functionele beschrijving](https://ictu.github.io/GBO-GO/latest/#4-generieke-functies-en-stelselfuncties), de [uitgangspunten](https://ictu.github.io/GBO-GO/latest/#uitgangspunten), de [architectuurprincipes](architectuurprincipes.md) en de [ontwerpprincipes](ontwerpprincipes.md). Dit hoofdstuk legt ook de relatie met de stelselfuncties vast.

## F1 — Identiteit & Vertrouwen

De inrichting voldoet aan de volgende eisen:

- de inrichting identificeert burgers, organisaties en systemen eenduidig.
- de inrichting gebruikt per dienst, gegevenscategorie en interactiepatroon een vastgesteld betrouwbaarheidsniveau.
- een organisatie kan alleen deelnemen op basis van expliciete aansluitvoorwaarden. De organisatie toont periodiek aan dat zij nog aan deze voorwaarden voldoet.
- de inrichting behandelt identiteit, rol of hoedanigheid en bevoegdheid als afzonderlijke aspecten. Een vastgestelde identiteit geeft niet automatisch bevoegdheid voor een handeling.
- als een actor namens een andere persoon of organisatie handelt, kan de inrichting de vertegenwoordigingsrelatie aantoonbaar vaststellen. De relatie bevat rol, reikwijdte en geldigheid. De autorisatie kan deze relatie als context gebruiken.
- trust anchors, certificaten en vertrouwenslijsten hebben centraal of federatief beheer en zijn machineleesbaar raadpleegbaar.
- de vertrouwensarchitectuur is niet afhankelijk van één soort identiteits- of bevoegdheidsbewijs. Gestandaardiseerde verificatie ondersteunt verschillende erkende registers, vertrouwensdiensten en wallet-gebaseerde bewijzen.
- alleen partijen en componenten met een wettelijke grondslag verwerken het BSN.
- andere afnemers ontvangen een partijspecifieke identiteit of pseudoniem.
- identiteitsvertaling en pseudonimisering staan los van de inhoudelijke autorisatiebeslissing. De inrichting voert deze handelingen alleen uit na een toegestane gegevensvraag.

## F2 — Toegang & Interactie

De inrichting voldoet aan de volgende eisen:

- een burgerinteractie over toestemming toont minimaal de afnemer, dienst, het doel, de gegevens, geldigheidsduur en gevolgen van de keuze.
- toestemming is vrij, specifiek, geïnformeerd, ondubbelzinnig en aantoonbaar als toestemming de toepasselijke grondslag is.
- de burger kan geldige toestemmingen inzien en, waar van toepassing, intrekken.
- de autorisatieketen controleert de actuele toestemming op het moment van de gegevensvraag.
- technische bereikbaarheid geeft een organisatie niet automatisch toegang. Toelating, identiteit, dienstregistratie en autorisatie zijn afzonderlijke controles.
- interfaces voor burgers en organisaties voldoen aan de toepasselijke toegankelijkheids- en beveiligingseisen.

## F3 — Gegevensvoorziening

De inrichting voldoet aan de volgende eisen:

- iedere bronhouder biedt één generieke bronontsluiting-API voor de gegevensstromen die GBO ondersteunt.
- gegevensvragen zijn selectief en beperkt tot vooraf geregistreerde diensten en gegevenssets.
- nieuwe afnemers of interactiepatronen vereisen in beginsel alleen wijzigingen in beleid, dienstregistratie of mapping, niet in het bronsysteem.
- expliciete adapters en mappings verwerken protocol- en formaatverschillen van externe stelsels.
- de bronhouder blijft verantwoordelijk voor de beschikbaarheid, juistheid en actualiteit van de brongegevens.
- de GBO-vertaallaag ondersteunt bronhouders die het gekozen API-profiel nog niet rechtstreeks kunnen aanbieden. Deze ondersteuning blijft vervangbaar.
- de standaard gegevensstroom bevat geen tijdelijke opslag. Tijdelijke opslag is alleen toegestaan met een expliciete motivering.

## F4 — Semantiek & Eenheid van Taal

De inrichting voldoet aan de volgende eisen:

- beschikbare gegevensdiensten, gegevenselementen en begrippen hebben een beheerde beschrijving.
- bronhouders en domeinen blijven inhoudelijk verantwoordelijk voor hun begrippen en informatiemodellen.
- GBO stelt gemeenschappelijke kaders vast voor vindbaarheid, beschrijving, versiebeheer en mapping.
- schema's en mappings zijn machineleesbaar, testbaar en versieerbaar.
- transformaties naar OOTS-EDM, attestatieschema's en andere uitwisselformaten zijn afgeleid van beheerde bron- en doelschema's.
- iedere wijziging bevat een impactanalyse en een overgangsstrategie voor bestaande afnemers.

## F5 — Gegevenskwaliteit & Validatie

De inrichting voldoet aan de volgende eisen:

- iedere gegevensdienst beschrijft kwaliteitseisen zoals actualiteit, volledigheid en nauwkeurigheid.
- de levering bevat herkomst, bronhouder, tijdstip en relevante versie-informatie, of legt deze informatie aantoonbaar vast.
- de inrichting valideert berichten en attestaties vóór uitlevering tegen het toepasselijke schema.
- de inrichting past cryptografische integriteit en authenticiteit toe als het interactiepatroon dat vereist.
- afnemers kunnen fouten of vermoedelijke onjuistheden via een gestandaardiseerd proces terugmelden. Deze eis geldt niet voor OOTS, waarvoor expliciet geen terugmelding is voorzien.
- iedere terugmelding is herleidbaar tot de betreffende gegevenslevering, zonder onnodige verspreiding van persoonsgegevens.

## F6 — Grondslag & Beleid

De inrichting voldoet aan de volgende eisen:

- de autorisatie beoordeelt iedere gegevensvraag op afnemer, dienst, doel, grondslag, gegevensvraag en context.
- beleid is machineleesbaar, versieerbaar, testbaar en onafhankelijk van één product of policytaal.
- beleidswijzigingen vereisen geen wijziging van de programmatuur bij iedere bronhouder.
- het proces voor beleidswijzigingen omvat voorbereiding, toetsing, goedkeuring, publicatie, inwerkingtreding en terugval.
- logging legt de toegepaste beleidsversie en de uitkomst van de beslissing vast.
- de bronhouder kan aanvullende rechtmatige beperkingen toepassen. Deze beperkingen moeten passen binnen de stelselafspraken en het gestandaardiseerde koppelvlak.

## F7 — Orkestratie & Integratie

De huidige interactiepatronen hebben geen afzonderlijke centrale procesorkestratie. S07, S08 en S11 verzorgen de integratie.

Daarbij gelden de volgende eisen:

- een gegevensvraag aan meerdere bronhouders bestaat uit afzonderlijke, herleidbare bronverzoeken.
- één toestemming of dienstcontext kan naar meerdere bronverzoeken verwijzen. Alleen een expliciete functie met een geldige grondslag mag resultaten centraal samenvoegen.
- adapters verzorgen alleen integratie, protocolomzetting en semantische mapping. Zij nemen geen impliciete verantwoordelijkheid van bronhouders over.
- ieder koppelvlak en interactiepatroon beschrijft foutafhandeling, time-outs en gedeeltelijke beschikbaarheid.
- patroonafhankelijke logica blijft buiten de generieke bronontsluiting-API.

## F8 — Beheer & Continuïteit

De inrichting voldoet aan de volgende eisen:

- iedere component heeft een expliciete eigenaar, beheerder, serviceniveau en continuïteitsplan.
- voor ieder mogelijk Single Point of Failure (SPOF) zijn maatregelen nodig om de beschikbaarheid te borgen.
- monitoring van de keten vereist geen onnodige centrale verzameling van inhoudelijke persoonsgegevens.
- een gestandaardiseerde verzoekidentificator maakt gebeurtenissen over componenten heen correleerbaar.
- configuraties, beleid, schema's, mappings en dienstregistraties ondersteunen versiebeheer en audit.
- overeengekomen processen regelen incidenten, kwetsbaarheden en wijzigingen.
- de inrichting ondersteunt wettelijke verplichtingen voor inzage en verantwoording.
- afhankelijkheden van tijdelijke projectvoorzieningen hebben een plan voor overdracht of uitfasering.

## Samenhang

De realisatie behandelt de generieke functies niet als afzonderlijke silo's. De belangrijkste relaties zijn:

- F1 levert identiteits- en vertrouwensinformatie aan F2 en F6.
- F2 registreert en beheert burgerinteracties. F6 gebruikt deze als informatie over de grondslag.
- F3 dwingt de autorisatiebeslissing van F6 af.
- F4 en F5 bepalen welke gegevens F3 betekenisvol en geldig kan leveren.
- F7 verbindt F3 met de externe interactiepatronen.
- F8 stelt beheer- en auditvoorwaarden aan alle functies.

## Uitwerking in stelselfuncties

Stelselfuncties werken de generieke functies uit in afspraken, standaarden en voorzieningen. De onderstaande tabel toont de relatie tussen de generieke functies en stelselfuncties. Het volgende hoofdstuk werkt de stelselfuncties verder uit.

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

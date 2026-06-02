# Realisatiestrategie

## Werkwijze

- Er komt geen nieuw stelsel en er komen geen "GBO"-voorzieningen, maar bestaande afspraken, standaarden en voorzieningen worden hergebruikt. Waar afspraken of standaarden aangevuld of aangepast moeten worden of voorzieningen ontworpen of ingericht moeten worden, wordt dit ingebracht bij de bestaande gremia.
Zie ook de paragraaf [Gebruik van bestaande afsprakenstelsels](#gebruik-van-bestaande-afsprakenstelsels) voor een verdere uitwerking hiervan.

- Er wordt gedurende de projectfase al wel pilots gestart waar gewerkt met de gewenste afspraken, standaarden en voorzieningen. Als deze nog niet bestaan, worden voorbeeld implementaties gebruikt die tevens gebruikt worden om het ontwerp te verbeteren. Uiteindelijk worden deze ontwikkelingen als referentie implementaties aangeboden aan de gremia waar het beheer belegd wordt. Dit gaat tot het niveau van "pre-productie": d.w.z. dat de afspraak of voorziening volledig genoeg is uitgewerkt om in productie genomen te kunnen worden. Maar de daadwerkelijke productiegang wordt aan de beoogde beheerder overgelaten. In sommige gevallen kan hier zelfs wet- en regelgeving voor nodig zijn, die in werking moet zijn getreden voor in productie gegaan kan worden.

- De inrichting van de ontbrekende afspraken, standaarden en voorzieningen moet voldoen aan de ontwerpprincipes. Gedurende het traject worden de ontwikkelingen hier periodiek op beoordeeld, waarover zo openbaar mogelijk (maar in elk geval naar de betrokken partijen) wordt gerapporteerd.


## Werkpakketten

De stelselfuncties die nodig zijn om de GBO te kunnen gebruiken voor de drie gewenste toepassingen worden opgedeeld in werkpakketten. Met deze werkpakketten is het mogelijk om de drie toepassingen los van elkaar mogelijk te maken en afhankelijk van de prioriteiten rond de toepassingen te implementeren.  
Er worden drie werkpakketten onderscheiden, die gekoppeld zijn aan de drie toepassingen. Daarnaast is er een werkpakket dat voor alle toepassingen nodig is: de basis functies.  

<figure>
``` mermaid
--8<-- "diagrammen/gbo_swimlanes.mmd"
```
<figcaption>De werkpakketten getekend in relatie tot elkaar.  
NB: in deze figuur zijn enkel de voorzieningen geschetst - geen afspraken of standaarden die ook nodig zijn. De lichtrode voorzieningen moeten nog ontwikkeld worden. De overige voorzieningen bestaan al - daar moet op aangesloten worden.</figcaption>
</figure>


### Werkpakket GBO Basis

Het GBO Basis-werkpakket legt de gemeenschappelijke fundatie waar alle drie de toepassingen op steunen. Het omvat de generieke bronontsluiting via GraphQL/FSC, de autorisatieketen (PEP/PDP/PIP/PAP), logging & traceerbaarheid, en de semantische catalogus.

#### Te realiseren onderdelen

##### 1. Bronontsluiting API (S07)

Bronhouders stellen gegevens beschikbaar via een generieke GraphQL-API, ontsloten via FSC (Federated Service Connectivity). De volgende afspraken, standaarden en voorzieningen zijn nodig:

**Afspraken**
- Stelselafspraak (in te brengen bij FDS): elke bronhouder realiseert één generieke ontsluiting; geen trajectspecifieke koppelingen.
- Stelselafspraak (GBO): query-registratie — toegestane gegevensvragen per use case zijn vooraf geregistreerd in een centrale Query Template Registry en machineleesbaar afdwingbaar.
- Toetredingsafspraak (GBO/FDS): onboardingprocedure bronhouders (PKIoverheid-certificaat → FSC-registratie → DCAT-beschrijving → trajectactivatie).

**Standaarden**
- FSC — binnenlands koppelnetwerk (beschikbaar en in gebruik).
- GraphQL — selectieve gegevensuitvraag (in productie bij iWlz); ⚠️ positionering als FDS-datadienst-type nog nodig.
- DCAT-AP NL — verplichte zelfbeschrijving datasets (beschikbaar en verplicht binnen FDS).

**Voorzieningen** (zie ook deployment-opties hieronder)
- FSC Inway per bronhouder (referentie-implementatie beschikbaar).
- FSC Outway per afnemer (referentie-implementatie beschikbaar).
- Query Template Registry — ⚠️ nog te realiseren als centrale GBO-voorziening.

##### 2. FSC-standaard aanvullen met PEP/FTV en stelselrollen (S05)

De FSC-standaard wordt uitgebreid met een Policy Enforcement Point (PEP) conform de FTV/AuthZEN-architectuur, zodat autorisatiebeslissingen langs dezelfde keten lopen ongeacht het traject.

**Afspraken**
- Architectuurafspraak (GBO): geünificeerde autorisatieketen voor alle trajecten — één PEP/PDP, trajectspecifieke policies.
- Stelselafspraak (GBO, aansluiting FTV): gestandaardiseerd Subject/Action/Resource/Context vocabulaire als GBO-AuthZEN-profiel.
- Architectuurafspraak (GBO): BSN-resolving vindt uitsluitend plaats binnen de PEP, na de beleidsbeslissing.

**Standaarden**
- AuthZEN NL Gov (draft) — interface PEP↔PDP (pilot bij Logius/FTV).
- OPA/Rego — machineleesbare beleidstaal (in productie bij iWlz; directe precedentwaarde).

**Voorzieningen** (zie ook deployment-opties)
- PEP — ⚠️ nog te realiseren; GBO levert referentie-implementatie.
- PDP — ⚠️ nog te realiseren; policies centraal beheerd, PDP-instantie decentraal per bronhouder.
- PAP/Policy Store — ⚠️ nog te realiseren; centraal beheer en distributie van policy-bundles via OPA Bundle API.

##### 3. Logging & Traceerbaarheid (S09)

**Afspraken**
- Stelselafspraak (GBO/FDS): LDV-conforme logging verplicht voor alle GBO-componenten.
- Stelselafspraak (GBO): cross-component correlatie via gestandaardiseerde trace-identifier (OpenTelemetry / W3C Trace Context).

**Standaarden**
- Logboek Dataverwerkingen (LDV) — in consultatie; referentie-implementatie beschikbaar.
- OpenTelemetry + W3C Trace Context — beschikbaar en breed ingezet.

**Voorzieningen**
- LDV-logging per component (decentraal, per GBO-component te realiseren).

##### 4. Semantiek & Catalogus (S10)

**Afspraken**
- Stelselafspraak (GBO): per bronhouder bestaat een beheerde, GBO-geregistreerde schemabeschrijving.
- Architectuurafspraak: canonieke schemadefinitie is de enige bron van waarheid; serialisaties zijn afgeleid.

**Voorzieningen**
- GBO Schema Registry / Catalogus — ⚠️ nog te realiseren; bouwt op FDS-datacatalogus.
- Serialisatie-service (canoniek schema → JSON / XML / SD-JWT VC / mdoc) — ⚠️ nog te realiseren.

---

#### Deployment-opties bronontsluiting

Het werkpakket kent drie deployment-opties voor de bronontsluiting. Deze kunnen naast elkaar bestaan; bronhouders kiezen de optie die past bij hun situatie.

##### Optie A — Bronhouder ontwikkelt en beheert zelf

De bronhouder implementeert een GraphQL-API direct op zijn eigen systemen en beheert deze zelf. FSC Inway en PEP/PDP draaien bij de bronhouder. Dit is de doelarchitectuur voor grote bronhouders (BRP, Belastingdienst, UWV, DUO).

*Wat GBO levert:* referentie-implementaties van FSC Inway, PEP en PDP; onboardingprocedure; query-templates.

##### Optie B — Bronhouder implementeert referentiecomponenten en beheert deze zelf

GBO stelt deploybare packages beschikbaar (containers/Helm charts) voor FSC Inway, PEP, PDP en GraphQL-wrapper. De bronhouder deployt en beheert deze zelf, maar hoeft ze niet zelf te ontwikkelen.

*Wat GBO levert:* deploybare referentiecomponenten, inclusief configuratiegidsen en onboardingondersteuning.

##### Optie C — Bronhouder neemt dienst af van GBO-vertaallaag (overgangstool)

Voor bronhouders die (nog) geen GraphQL-API kunnen bieden, stelt GBO een centrale vertaallaag beschikbaar. Deze vertaalt inkomende GraphQL-query's naar bestaande REST-JSON API's of SOAP/XML-webservices van de bronhouder. De bronhouder hoeft zijn systemen niet aan te passen.

*Wat GBO levert:* centrale GBO Vertaallaag met configureerbare connectors per bronhouder; ⚠️ nog te realiseren.

*Kanttekening:* Optie C is bedoeld als overgangsmaatregel. De architectuurvoorkeur blijft dat bronhouders uiteindelijk een eigen GraphQL-API aanbieden (optie A of B), zodat de selectiviteit en semantische rijkdom van de uitvraag volledig benut worden.

---

#### Deployment-opties autorisatie (PEP/PDP)

| Optie | Beschrijving |
|---|---|
| PEP/PDP decentraal bij bronhouder | Eigen instantie per bronhouder; policies van centraal PAP. Voorkeur voor grote bronhouders. |
| PEP/PDP als shared service (GBO) | GBO biedt een gedeelde PEP/PDP-dienst aan; geschikt voor kleine bronhouders. ⚠️ nog te bepalen. |

---

### Werkpakket EUDI-wallet (EDI)

Het EDI-werkpakket maakt het mogelijk dat burgers overheidsgegeven kunnen ophalen als digitale attestatie (PuB-EAA) in een EUDI-wallet, conform eIDAS2/ARF. Het bouwt op de GBO Basis-API's.

#### Te realiseren onderdelen

##### 1. Pub-EAA provider — centrale uitgifte-dienst (S11)

Een Pub-EAA provider is een publieke verstrekker van publieke elektronische attestaties van attributen. Deze haalt brongegevens op via de GBO bronontsluiting (S07) en geeft ze uit als ondertekende credential in de wallet van de burger.

**Afspraken**
- Stelselafspraak (GBO): welke overheidsbronnen PuB-EAAs uitgeven en voor welke attribuuttypen.
- Attestation Rulebook per attribuuttype: vereiste gegevens, opmaak, beveiligingseisen en intrekkingsbeleid.
- Toetredingsafspraak (RDI/GBO): opname van de uitgifte-dienst op de Nederlandse Trusted List (LoTE); vereist CAR-certificering.
- ⚖️ CAR-certificering (Conformity Assessment Report) is verplicht op grond van Uitvoeringsverordening (EU) 2025/1569 voordat de dienst in productie kan.

**Standaarden**
- OpenID4VCI — uitgifte-protocol (verplicht binnen ARF).
- SD-JWT VC — primair credential-formaat (verplicht binnen ARF).
- ISO/IEC 18013-5 (mdoc) — alternatief voor proximity-scenario's.
- ETSI EN 319 412 — QESeal voor ondertekening van PuB-EAA.
- Token Status List (IETF draft) — statusbeheer uitgegeven credentials.

**Voorzieningen**
- Centrale Pub-EAA uitgifte-dienst (Credential Issuer) — ⚠️ nog te realiseren; bouwt op S07 en S03 (BSNk PP).
- Opname op Nederlandse Trusted List — ⚠️ procedure nog te doorlopen bij RDI.
- NL Wallet (EUDI Wallet referentie-implementatie) — beschikbaar als pilot; GBO-attestaties moeten aansluiten.

##### 2. Authentic Source Interface met verificatiefunctie (S11)

De Authentic Source Interface (ASI-P) stelt vertrouwende partijen in staat om de geldigheid van een gepresenteerde attestatie te verifiëren en eventueel de actuele brongegevens op te vragen ("verify & retrieve").

**Standaarden**
- OpenID4VP — presentatieprotocol wallet naar verifier (verplicht binnen ARF).

**Voorzieningen**
- Centrale verificatiedienst (Status List / Verifier endpoint) — ⚠️ nog te realiseren.

##### 3. Configuratie met bronhouders: mapping GraphQL-API's naar EDI-attestaties (S10)

Per bronhouder en per attribuuttype worden de canonieke GraphQL-schema's gemapt naar de ARF-attestatieschema's.

**Afspraken**
- Stelselafspraak (GBO): mapping naar PuB-EAA attestatieschema's verplicht voor EDI-wallet traject.

**Voorzieningen**
- Serialisatie-service (canoniek schema → SD-JWT VC / mdoc) — ⚠️ nog te realiseren (onderdeel S10).

---

#### Deployment-opties EDI-wallet

##### Optie A — Bronhouder als eigen Pub-EAA provider

De bronhouder richt zelf een Pub-EAA uitgifte-dienst in, inclusief CAR-certificering. Vereist zware inspanning van de beheerorganisatie (vergelijkbaar met een Pub TSP). Realistisch alleen voor de grootste bronhouders.

##### Optie B — Centrale Pub-EAA provider (GBO)

GBO richt één centrale uitgifte-dienst in die namens meerdere bronhouders attesteringen uitgeeft op basis van de generieke bronontsluiting. Één CAR-certificering dekt meerdere bronhouders. Dit is de verwachte voorkeursinrichting.

##### Optie C — Enkel ASI-P met verify & retrieve (geen wallet-opslag)

Alleen de Authentic Source Interface wordt ingericht. Vertrouwende partijen kunnen in real-time de actuele brongegevens ophalen bij een presentatie; er worden geen credentials vooraf uitgegeven en in de wallet opgeslagen. Lichtere optie, maar minder offline-capabel.

---

### Werkpakket SDG/OOTS

Het SDG/OOTS-werkpakket maakt het mogelijk dat Europese overheden in het kader van de Single Digital Gateway (SDG-verordening EU 2018/1724) bewijsstukken kunnen opvragen bij Nederlandse bronhouders via het OOTS-stelsel (Once Only Technical System). Het bouwt op de GBO Basis-API's.

#### Te realiseren onderdelen

##### 1. SDG-OOTS-adapter: mapping GraphQL-API's naar OOTS-schema's (S08, S10)

Een centrale adapter vertaalt inkomende OOTS-verzoeken (AS4/OOTS-EDM formaat) naar GraphQL-query's op de bronontsluiting, en vertaalt de respons terug naar OOTS-EDM XML.

**Afspraken**
- Architectuurafspraak (GBO): de Basisinrichting OOTS is de enige AS4-toegangspoort; binnenlands verkeer gebruikt FSC direct.
- Stelselafspraak (GBO): SMP-registratie van GBO-bronhouders voor OOTS-discovery wordt centraal beheerd.
- Stelselafspraak (GBO): autorisatie van OOTS-verzoeken doorloopt dezelfde PEP/PDP-keten als binnenlandse verzoeken.
- Stelselafspraak (GBO): mapping naar OOTS Semantic Repository evidence types verplicht voor OOTS-trajecten.

**Standaarden**
- eDelivery AS4 (CEF) — verplicht transport voor OOTS.
- OOTS-EDM (Evidence Data Model) — XML-payloadformaat; Schematron-validatieregels beschikbaar.
- SMP 2.1 (Service Metadata Publisher) — discovery van toegangspunten.

**Voorzieningen**
- Domibus Access Point — beschikbaar als open source (EC); ⚠️ operationele inrichting voor GBO nog te doen.
- OOTS-EDM Adapter (XML ↔ FSC/GraphQL) — ⚠️ nog te realiseren.
- SMP 2.1 Publisher — ⚠️ nog te realiseren; configuratie gebaseerd op Query Template Registry.

##### 2. Configuratie met bronhouders: welke data via OOTS-schema's (S10)

Per bronhouder wordt bepaald welke gegevens ontsloten worden voor welke OOTS evidence types (nu 9 gedefinieerde typen in de OOTS Semantic Repository).

**Afspraken**
- Stelselafspraak (GBO): per bronhouder een beheerde schemabeschrijving; mapping naar OOTS evidence types is verplicht.

---

#### Deployment-opties OOTS

##### Optie A — Eigen SDG/OOTS-stroom (bijv. EMREX voor diplomawaardering)

De bronhouder heeft een bestaande bilaterale OOTS-aansluiting (bijv. DUO via EMREX). GBO biedt een aanvullende route via de generieke ontsluiting, maar vervangt de bestaande stroom niet.

##### Optie B — Gebruik GBO-adapter én basisinrichting

De bronhouder sluit aan op de centrale GBO OOTS-adapter en Domibus Access Point. De OOTS-EDM-vertaling en SMP-registratie worden centraal afgehandeld. De bronhouder biedt alleen de GraphQL-bronontsluiting (werkpakket Basis).

*Dit is de verwachte standaardinrichting voor de meeste bronhouders.*

##### Optie C — Gebruik enkel basisinrichting (RINIS Domibus, geen GBO-adapter)

De bronhouder richt zelf een OOTS-EDM-koppeling in op de bestaande Basisinrichting OOTS (RINIS), zonder gebruik te maken van de GBO-adapter. Dit vereist trajectspecifieke mapping bij de bronhouder zelf.

---

### Werkpakket DvTP

Het DvTP-werkpakket (Dienstverlening aan derde partijen met toestemming van de burger) maakt het mogelijk dat private dienstverleners met toestemming van de burger gegevens kunnen opvragen bij overheidsbronhouders. Het bouwt op de GBO Basis-API's en voegt de toestemmingsinfrastructuur toe.

> ⚖️ **Juridische randvoorwaarde:** Dit werkpakket is pas operationeel inzetbaar nadat de Wdo een expliciete bevoegdheid voor bronhouders bevat om op verzoek van de burger gegevens te verstrekken aan private dienstverleners, én nadat sectorale geheimhoudingsplichten (AWR art. 67, Wet SUWI art. 74 e.a.) via de Wdo zijn doorbroken. De technische uitwerking loopt parallel aan het wetgevingstraject.

#### Te realiseren onderdelen

##### 1. Toestemmingsportaal (S02)

Een toegankelijk portaal waar de burger geïnformeerde toestemming geeft voor gegevensdeling, zich authenticeert via DigiD, en zijn toestemmingen kan inzien en intrekken. Pseudonimisering via BSNk PP vindt hier plaats.

**Afspraken**
- Stelselafspraak (GBO, AVG art. 7): minimale informatie-eisen voor toestemmingspresentatie (doel, afnemer, gegevens, geldigheidsduur).
- ⚖️ Aansluiteis (wettelijk te verankeren in Wdo/AMvB): gelijkwaardig alternatief verplicht; private dienstverleners mogen de digitale route niet als enige toegangsweg stellen.
- ⚖️ Aansluiteis (wettelijk te verankeren): geen nadeel bij weigering van toestemming.
- Architectuurafspraak (GBO): pseudonimisering vindt plaats in het portaal op het moment van toestemmingsvastlegging.

**Standaarden**
- DigiD-aansluiting (SAML 2.0 / OpenID Connect) — beschikbaar.
- WCAG 2.1 AA — verplicht voor overheidsdiensten.

**Voorzieningen**
- Toestemmingsportaal — ⚠️ nog te realiseren; raakvlak MijnOverheid.
- BSNk Activate (BSN → PI+PP bij eerste toestemmingsregistratie) — beschikbaar; ⚠️ onboarding portaal als BSNk-deelnemer nog te realiseren.

##### 2. Toestemmingsregister / grondslagregister (S01)

Een centrale voorziening die toestemmingen machineleesbaar vastlegt en beschikbaar stelt aan de PDP als Policy Information Point (PIP). De PDP toetst iedere gegevensuitvraag real-time aan de geregistreerde grondslag.

**Afspraken**
- Stelselafspraak (GBO/FDS): welke grondslagtypen geldig zijn per traject (toestemming / wettelijke basis / doelbinding).
- Stelselafspraak (GBO): formaat en inhoud van een grondslag-record (minimale attributen, geldigheid, scope).
- Stelselafspraak (GBO/FDS, raakvlak AVG): intrekkingsrecht burger — termijnen en effect op lopende verwerkingen.

**Standaarden**
- W3C ODRL — machineleesbare expressie van beleid en toestemming (beschikbaar; al in gebruik binnen FDS/DCAT-AP NL).
- ⚠️ GBO PIP-profiel (raadpleeginterface grondslagregistratie) — nog te standaardiseren.

**Voorzieningen**
- Toestemmingsregister / grondslagregister — ⚠️ nog te realiseren; Mitz (zorg) als leervoorbeeld.
- Policy Store (centrale beleidsdefinities overige grondslagen) — ⚠️ nog te realiseren (zie ook S06).

##### 3. Aansluiten op BSNk PP (S03)

Het BSN van de burger mag private dienstverleners niet bereiken. Via BSNk PP (polymorf pseudonimisering) wordt het BSN omgezet naar partijspecifieke, onomkeerbare pseudoniemen.

**Afspraken**
- Stelselafspraak (GBO, verankerd in AMvB Wdo / Wabvpz): BSN mag private dienstverleners zonder wettelijke grondslag nooit bereiken; pseudoniem is verplicht voor DvTP-traject.
- Toetredingsafspraak (Logius/BSNk): onboarding private dienstverleners als BSNk PP-deelnemer.

**Voorzieningen**
- BSNk PP (polymorf pseudonimiseringsstelsel) — **beschikbaar en in productie**; integratiewerk voor DvTP-traject nog nodig.
- BSNk Transform / Close — beschikbaar; ⚠️ aansluiting PEP als BSN-geautoriseerde component nog te realiseren.

##### 4. Aansluiten op Stelsel Toegang (S04)

Private afnemers moeten op betrouwbaar niveau kunnen aantonen wie zij zijn voordat zij gegevens kunnen opvragen.

**Afspraken**
- Stelselafspraak (GBO/FDS): onboardingproces dienstverleners (registratie, contractering, certificaatuitgifte).
- Stelselafspraak (GBO): welke certificaattypen / trust anchors geaccepteerd worden per traject.

**Voorzieningen**
- FDS Poortwachter (toelating en onboarding) — **beschikbaar als FDS-functie**; ⚠️ GBO-aansluitvoorwaarden voor private dienstverleners nog te maken.
- FDS Marktmeester (deelnemerslijst en naleving) — **beschikbaar als FDS-functie**; uitbreiding met GBO-nalevingseisen gewenst.
- eHerkenning — beschikbaar voor organisatie-authenticatie private dienstverleners.

##### 5. Configuratie met bronhouders: policies voor afnemers op basis van dienstenregister (S05, S06)

Per bronhouder worden policies opgesteld die bepalen welke afnemers welke gegevens mogen opvragen, onder welke grondslag en doelbinding. Deze policies worden centraal beheerd en gedistribueerd naar de decentrale PDP's.

**Afspraken**
- Stelselafspraak (GBO): beleidstemplates per traject (wie mag wat opvragen onder welke grondslag).
- Stelselafspraak (GBO): governance over wie policies mag schrijven, wijzigen en goedkeuren.
- Stelselafspraak (GBO): RFC-procedure voor beleidswijzigingen, analoog aan iWlz RFC-aanpak.

**Voorzieningen**
- PAP / Policy Store (centrale beleidsopstelling en distributie) — ⚠️ nog te realiseren.
- OPA Bundle Server (distributie-endpoint voor PDP-updates) — ⚠️ nog te realiseren.

---

#### Deployment-opties DvTP

##### Optie A — Centrale toestemmingsvoorziening en -register (GBO)

Eén centraal toestemmingsportaal en toestemmingsregister, beheerd door GBO of Logius. Alle bronhouders en afnemers sluiten hierop aan. Meest efficiënt; één punt voor burger om toestemmingen te beheren.

##### Optie B — Decentraal toestemmingsportaal, centraal register

Bronhouders (of sectoren) bieden een eigen toestemmingsportaal aan (bijv. geïntegreerd in bestaand klantportaal), maar registreren toestemmingen in het centrale GBO-register. De PDP raadpleegt altijd het centrale register als PIP.

##### Optie C — Versleuteld verzoek verwerkt centraal (VP/VI decrypt centraal)

De private dienstverlener stuurt een versleuteld verzoek; ontsleuteling vindt centraal plaats binnen de GBO-infrastructuur (bijv. als onderdeel van de PEP/FSC-keten). Gegevens bereiken de afnemer pas na autorisatiecontrole en pseudonimisering.

##### Optie D — Versleuteld verzoek verwerkt in FSC (VP/VI decrypt in FSC)

Ontsleuteling en autorisatiecontrole zijn volledig geïntegreerd in de FSC Inway van de bronhouder. De GBO-infrastructuur bevat geen versleutelde gegevens; de keten is end-to-end vanuit de bronhouder.


## Gebruik van bestaande afsprakenstelsels

Nog uitwerken:  
- GBO-basis componenten GraphQL/PBAC in FSC/FTV  
- GraphQL profiel in Digikoppeling  
- Toestemmingsvoorziening in GDI  
- Toestemmingsportaal in MijnOverheid  
- OOTS Semantiek-adapter in Basisinrichting?  
- PubEAA-provider?  
- ASI-P met Verify-functie?  
- etc.


## Toekomstige ontwikkelingen

Plaatsen t.o.v. GBO als nieuwe "werkpakketten": swimlanes plaatje aangevuld met EBW/QERDS, Overheid-Overheid

<figure>
``` mermaid
--8<-- "diagrammen/gbo_swimlanes_qerds_g2g.mmd"
```
<figcaption>Mogelijke toekomstige use cases GBO-model.</figcaption>
</figure>

# Logische architectuur (generieke functies)

De oplossingsrichting met gemeenschappelijke bronontsluiting wordt gerealiseerd door **generieke functies**.

## Logisch architectuurdiagram

Het logische architectuurdiagram schetst de generieke functies ten opzichte van elkaar.

<figure>

``` mermaid
--8<-- "diagrammen/Architectuuroverzicht.mmd"

```
<figcaption>Architectuuroverzicht GBO</figcaption>
</figure>

Het diagram onderscheidt drie lagen binnen de GBO:

1. **Juridisch & Identiteit** — de grondslag- en vertrouwenslaag die bepaalt *wie* gegevens mag opvragen en op basis waarvan.
2. **Generieke functies** — de acht functionele clusters die de gegevensuitwisseling mogelijk maken.
3. **Bronontsluiting** — de generieke API waarmee bronhouders eenmalig hun gegevens beschikbaar stellen.

De generieke functies die het GBO-stelsel moet bieden zijn:

1. Identiteit & Vertrouwen
2. Toegang & Interactie
3. Gegevensvoorziening
4. Semantiek & Eenheid van Taal
5. Gegevenskwaliteit & Validatie
6. Grondslag & Beleid
7. Orkestratie & Integratie
8. Beheer & Continuïteit

Vanuit de [architectuur- en ontwerpprincipes](./architectuurprincipes.md) worden aan deze generieke functies eisen gesteld, die hieronder zijn uitgewerkt. De eisen zijn bewust technologieneutraal geformuleerd; ze beschrijven *wat* een generieke functie moet kunnen, niet *hoe* dat gerealiseerd wordt.

---

## Juridisch & Identiteit

De vier functies in deze laag vormen de voorwaarden waaronder de generieke functies mogen opereren. Ze zijn geen onderdeel van de gegevensstroom zelf, maar worden door alle generieke functies geraadpleegd.

### Toestemming

**Doel:** Vaststellen en beheren van de testemming voor gegevensdeling.

**Eisen:**

- Toestemming van de burger is altijd herleidbaar tot een specifiek doel, een specifieke afnemer, en een specifieke gegevensvraag (doelbinding).
- De toestemming is machineleesbaar raadpleegbaar op het moment van gegevensuitvraag — niet alleen vastgelegd in een document of token dat van tevoren is uitgegeven.
- Intrekking van toestemming werkt met onmiddellijke ingang: een ingetrokken grondslag leidt bij de eerstvolgende uitvraag automatisch tot weigering, zonder dat daarvoor aparte notificaties of tokeninvalidatie nodig zijn.
- De burger heeft inzage in welke toestemmingen namens hem actief zijn en kan deze zelf beheren via een toegankelijke interface.
- De vastlegging van toestemmingen voldoet aan de eisen van de AVG, de Wdo en de van toepassing zijnde AMvB's.

### Burgeridentificatie  

**Doel:** Het vaststellen van de identiteit van de burger ten behoeve van gegevensontsluiting.

**Eisen:**

- De identiteitsvaststelling sluit aan op de voor het traject vereiste betrouwbaarheidsniveaus (eIDAS Laag/Substantieel/Hoog) en maakt gebruik van erkende authenticatiemiddelen.
- Voor het EDI-wallet traject ondersteunt de functie het ontvangen van een burgeridentiteit via een wallet-presentatie (conform eIDAS2/ARF), met verificatie via de relevante Trusted List.

### Pseudonimisering

**Doel:** Het garanderen dat het BSN uitsluitend circuleert binnen de overheidsinfrastructuur en nooit zichtbaar is voor private afnemers.

**Eisen:**

- Het BSN wordt nooit doorgegeven aan of verwerkt door private dienstverleners die daar geen wettelijke grondslag voor hebben. Voor deze partijen wordt altijd een partij-specifiek, onomkeerbaar pseudoniem gebruikt.
- Pseudoniemen voor verschillende private partijen zijn niet onderling koppelbaar, ook niet wanneer die partijen samenwerken.
- Herhaald gebruik van hetzelfde pseudoniem voor dezelfde burger levert cryptografisch onkoppelbare uitvoer op (geen correlatierisico over tijd).
- De omzetting van BSN naar pseudoniem — en terug, aan de bronhouderszijde — vindt plaats in een door de overheid beheerde en gecertificeerde voorziening.

### Vertrouwensstelsel & Authenticatie van organisaties

**Doel:** Vaststellen dat een afnemende organisatie (dienstverlener, EU-lidstaat) daadwerkelijk is wie zij zegt te zijn, en bevoegd is om deel te nemen aan het desbetreffende traject.

**Eisen:**

- Iedere deelnemende organisatie is aantoonbaar geregistreerd en geautoriseerd vóór zij gegevens kan opvragen. Onboarding is een expliciete beheerhandeling.
- Organisatie-authenticatie is gebaseerd op certificaten uitgegeven door een erkende, toezichthoudende vertrouwensdienstverlener (conform eIDAS of PKI Overheid).
- Het vertrouwensstelsel ondersteunt zowel binnenlandse als grensoverschrijdende partijen, waarbij grensoverschrijdend vertrouwen via de Europese Trusted List-infrastructuur wordt verankerd — niet via bilaterale afspraken per traject.
- Vertrouwensankers (certificaten, attestaties van gekwalificeerde aanbieders) zijn verificeerbaar zonder afhankelijkheid van de uitgevende partij op het moment van verificatie.
- Het vertrouwensstelsel is onafhankelijk van het transportprotocol: dezelfde vertrouwensbeoordeling geldt ongeacht of de verbinding via het binnenlandse koppelnetwerk of via een Europese infrastructuur binnenkomt.

---

## Generieke functie 1 — Identiteit & Vertrouwen

**Doel:** Vaststellen en handhaven van de identiteit van alle deelnemende systemen en organisaties, en borgen van de integriteit en vertrouwelijkheid van de gegevensuitwisseling via PKI en audit logging.

**Eisen:**

- Iedere gegevensuitvraag — ongeacht het traject of de afnemer — doorloopt dezelfde autorisatieketen. Er zijn geen trajectspecifieke omwegen of parallelle handhavingspunten.
- Het beleid is uitgedrukt in een formele, machineleesbare taal. Menselijk leesbare beschrijvingen zijn afgeleid van dezelfde bron, niet de bron zelf.
- De autorisatiebeslissing is gebaseerd op: de identiteit van de afnemer, de gevraagde gegevens, de aanwezige grondslag (via toestemmingenregister, grondslagenregels of impliciet in request), en de context van het verzoek. Deze vier elementen zijn altijd expliciet aanwezig in de beslissing.
- De autorisatiecomponent raadpleegt de toestemming real-time op het moment van uitvraag — er is geen vertrouwen op eerder uitgegeven tokens die de toestemmingsstatus "bevroren" vastleggen.
- Beleidsdefinities zijn per traject instelbaar zonder wijziging van de autorisatie-infrastructuur zelf.
- De beslissing (allow/deny) en de relevante context worden vastgelegd ten behoeve van auditbaarheid.
- BSN-resolving vindt pas plaats *na* de autorisatiebeslissing (PDP), binnen de handhavingscomponent (PEP) — niet als invoer voor de beleidsevaluatie.

---

## Generieke functie 2 — Toegang & Interactie

**Doel:** De burger geeft geïnformeerde, specifieke toestemming voor gegevensdeling via een toegankelijke interface, en kan die toestemming inzien en intrekken. Organisaties krijgen toegang via federatieve mechanismen (SSO, machtigen).

**Eisen:**

- De toestemmingsinteractie is begrijpelijk voor de burger: doel, afnemer en gegevens zijn in gewone taal gepresenteerd, niet in technische of juridische termen.
- De burger authenticeert zich op een betrouwbaarheidsniveau dat passend is bij de gevoeligheid van de betrokken gegevens.
- Na het geven van toestemming ontvangt de burger een bevestiging, en kan hij via dezelfde of een gelijkwaardige interface zijn actieve toestemmingen inzien en intrekken.
- De UI-component schrijft de vastgelegde toestemming weg naar het toestemmingenregister, zodat de autorisatiecomponent deze real-time kan raadplegen.
- De pseudonimiseringsactie (BSN → pseudoniem voor de afnemer) vindt plaats als onderdeel van het toestemmingsproces, transparant voor de burger en zonder dat het BSN wordt gedeeld.
- De functie ondersteunt federatief inloggen en machtigingenbeheer voor organisaties die namens een burger of een andere organisatie handelen.

---

## Generieke functie 3 — Gegevensvoorziening

**Doel:** Bronhouders stellen hun gegevens beschikbaar via een gestandaardiseerde interface die door alle trajecten herbruikbaar is, inclusief grensoverschrijdende uitwisseling conform SDG/OOTS.

**Eisen:**

- Een bronhouder realiseert één generieke ontsluiting. Er zijn geen trajectspecifieke endpoints of koppelingen per afnemer.
- De interface ondersteunt selectieve gegevensuitvraag: de afnemer kan exact de velden opvragen die voor het specifieke gebruik nodig zijn. Dataminimalisatie is structureel ingebouwd, niet afhankelijk van afsprakenstelsel of goede wil.
- De set van toegestane gegevensvragen per gebruik is vooraf geregistreerd (via een catalogus of template-mechanisme) en door beleid afdwingbaar. Binnen de toegestane gegevensvraag bepaalt de afnemer welke gegevens voor zijn situatie nodig zijn. Afwijkingen die buiten de toegestane gegevensvraag vallen zijn niet mogelijk.
- De interface is onafhankelijk van het BSN als externe sleutel: het subject-identifier in een uitvraag van een private afnemer is altijd een pseudoniem of een consent-referentie; BSN-resolving is een interne aangelegenheid van de ontsluiting.
- Bronhouders implementeren de ontsluiting eenmalig; aanpassingen voor nieuwe afnemers of trajecten vereisen geen bronhouder-specifieke ontwikkeling, alleen aanpassing van het beleid en de query-registratie.
- Verzoeken vanuit andere EU-lidstaten (SDG/OOTS) worden aan de GBO-zijde vertaald naar het binnenlandse formaat en protocol. Bronhouders zien geen EU-specifiek transportprotocol.
- Serviceregistratie voor grensoverschrijdende discovery (SMP) wordt centraal beheerd, niet door individuele bronhouders.

---

## Generieke functie 4 — Semantiek & Eenheid van Taal

**Doel:** Gegevens die via GBO worden uitgewisseld hebben een eenduidige, gedocumenteerde betekenis, ongeacht het traject of de afnemer.

**Eisen:**

- Per bronhouder bestaat een geregistreerde, door GBO beheerde beschrijving van de beschikbaar gestelde gegevenselementen (naam, type, definitie, herkomst).
- Dezelfde gegevensset kan worden geserialiseerd naar de voor elk traject vereiste uitwisselingsformaten (JSON voor binnenlands, OOTS-EDM XML voor grensoverschrijdend, SD-JWT VC of mdoc voor de wallet). De canonieke definitie is eenmalig vastgelegd.
- Mapping tussen de GBO-canonieke definitie en trajectspecifieke schema's (zoals OOTS Semantic Repository types of PuB-EAA attestatieschema's) is expliciet en beheerbaar.
- Vocabularia zijn gebaseerd op open, breed gedragen standaarden (RDF, OWL, SKOS, JSON-LD) en sluiten aan op de Nederlandse overheidsstandaarden (GGM, NORA).
- Semantische afspraken zijn versie-beheerd; wijzigingen in definities zijn traceerbaar en worden beheerst doorgevoerd.

---

## Generieke functie 5 — Gegevenskwaliteit & Validatie

**Doel:** Gegevens die via GBO worden uitgewisseld zijn aantoonbaar correct, volledig en afkomstig van de opgegeven bron.

**Eisen:**

- Gegevensherkomst (bronhouder, tijdstip, versie) is altijd meegeleverd bij uitgewisselde gegevens.
- Uitgewisselde gegevens zijn cryptografisch gezegeld door de bronhouder, zodat de authenticiteit en integriteit door de afnemer verifieerbaar zijn.
- Validatie van gegevens tegen het geregistreerde schema (conform Generieke functie 4) vindt plaats vóór uitlevering, niet bij de afnemer.
- Afnemers kunnen geconstateerde onjuistheden terugmelden via een gestandaardiseerde feedbackloop; terugmeldingen zijn herleidbaar tot de specifieke gegevenslevering.
- De kwaliteitseisen per gegevenselement (actualiteit, volledigheid, nauwkeurigheid) zijn gedocumenteerd als onderdeel van de catalogusbeschrijving.

---

## Generieke functie 6 — Grondslag & Beleid

**Doel:** Elke gegevensuitvraag wordt getoetst aan het geldende beleid. De toetsing is geünificeerd, machineleesbaar en herleidbaar. Beleid en grondslagen zijn beheerbaar zonder wijziging van de verwerkende infrastructuur.

**Eisen:**

- Beleidsdefinities omvatten: welke afnemers welke gegevens mogen opvragen, onder welke grondslagtypen, voor welke doelen, en met welke beperkingen (doelbinding, dataminimalisatie).
- Beleidsregels zijn uitgedrukt in een formele, machineleesbare taal. Menselijk leesbare beschrijvingen zijn afgeleid van dezelfde bron, niet de bron zelf.
- Wijzigingen in beleid (nieuwe afnemer, nieuwe gegevensvraag, gewijzigde AMvB) zijn door te voeren zonder aanpassing van de verwerkende systemen van bronhouders of de centrale GBO-infrastructuur.
- De grondslag wordt real-time geraadpleegd op het moment van uitvraag. Er is geen vertrouwen op eerder uitgegeven tokens die de grondslagstatus "bevroren" vastleggen.
- De autorisatiebeslissing en de bijbehorende beleidscontext worden vastgelegd ten behoeve van auditbaarheid (zie Generieke functie 8).

---

## Generieke functie 7 — Orkestratie & Integratie

**Doel:** Gegevensuitvragen die meerdere bronhouders, trajecten of verwerkingsstappen omvatten, worden gecoördineerd afgehandeld. Integratie met bestaande systemen van bronhouders en afnemers verloopt via beheerde adapters.

**Eisen:**

- Een gegevensuitvraag die gegevens van meerdere bronhouders vereist, wordt als één samengesteld verzoek afgehandeld. De afnemer ziet één gecoördineerde respons, niet een reeks losse antwoorden.
- Procesorkestratie is configureerbaar per traject zonder dat de onderliggende bronhouderssystemen worden aangepast.
- Mapping tussen het interne GBO-model en de externe formaten van afnemers (REST/JSON, AS4/XML, SD-JWT VC) is een expliciete, beheerde transformatiestap — geen impliciete conversie in de transportlaag.
- De orkestratie-component handelt foutscenario's af (bronhouder niet bereikbaar, gedeeltelijke respons) op een voorspelbare, per traject instelbare manier.
- Event-gedreven interacties (notificaties bij wijziging van brongegevens) worden ondersteund als aanvulling op synchrone bevraging.

---

## Generieke functie 8 — Beheer & Continuïteit

**Doel:** De GBO is beheersbaar, monitorbaar en aantoonbaar betrouwbaar. Iedere gegevensuitvraag is herleidbaar: welke afnemer heeft wanneer welke gegevens over welke burger opgevraagd, op basis van welke grondslag, met welk besluit.

**Eisen:**

- Iedere gegevensuitvraag genereert een vastlegging conform de Logboek Dataverwerkingen (LDV) standaard.
- Logregels over de keten heen zijn correleerbaar via een gestandaardiseerde verzoekidentificator, zodat een uitvraag van afnemer tot bronhouder volledig reconstrueerbaar is.
- Audit-logs zijn niet aanpasbaar door de componenten die ze genereren (onweerlegbaarheid).
- De burger heeft recht op inzage in de verwerkingen die zijn gegevens betreffen; de logging is zo ingericht dat dit recht technisch uitvoerbaar is.
- Wallet-lokale logs (EDI-traject) vallen buiten de server-side correlatie; de architectuur maakt geen aannames over inzage in wallet-transacties van de burger zelf.
- Versies van beleid, schema's en configuraties zijn beheerd en traceerbaar, zodat een uitvraag altijd reconstrueerbaar is naar de op dat moment geldende instellingen.
- Incidentbeheer en monitoring zijn ingericht conform de continuïteitseisen die gelden voor overheidsinfrastructuur.

---

## Samenhang

De generieke functies zijn niet op zichzelf staand. De onderstaande afhankelijkheden zijn architectureel kritiek:

- **Generieke functie 1 (Identiteit & Vertrouwen)** is afhankelijk van de **Vertrouwensstelsel**-laag voor de identiteitsvaststelling van organisaties, en van **Generieke functie 6 (Grondslag & Beleid)** als informatiebron voor autorisatiebeslissingen.
- **Generieke functie 2 (Toegang & Interactie)** is de schrijfinterface naar **Toestemming & Grondslag**, en triggert de pseudonimiseringsactie van **Burgeridentificatie & Pseudonimisering**.
- **Generieke functie 3 (Gegevensvoorziening)** is afhankelijk van **Generieke functie 1** voor toegangshandhaving, en van **Generieke functie 4 (Semantiek)** voor de definitie van wat er ontsloten wordt.
- **Generieke functie 5 (Gegevenskwaliteit & Validatie)** is een uitvoerende kwaliteitslaag bovenop **Generieke functie 3**, en levert herkomstinformatie aan **Generieke functie 4**.
- **Generieke functie 7 (Orkestratie & Integratie)** coördineert verzoeken die meerdere instanties van **Generieke functie 3** aanroepen, en verzorgt de formatmapping naar afnemers.
- **Generieke functie 8 (Beheer & Continuïteit)** is een cross-cutting concern: iedere andere generieke functie genereert input voor de audit-keten.

# Change Log

## Change Log v0.8.1

Van: versie [**0.7.2**](https://ictu.github.io/GBO-PSA/0.7.2/) (juli 2026) → Naar: versie **0.8.1** (september 2026)

Dit is geen uitputtende opsomming van iedere gewijzigde zin, maar een overzicht van wat er conceptueel en structureel is veranderd, per hoofdstuk/paragraaf.

---

### Samenvatting in één oogopslag

| Onderdeel                   | Aard van de wijziging                                                                                                              | Details                                                    |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| Positionering PSA           | PSA duidelijker gepositioneerd tussen Globaal Ontwerp en technische uitwerking                                                     | [detailbeschrijving](#algemeen-opzet)                      |
| Terminologie                | Naamgeving gelijkgetrokken met het Globaal Ontwerp                                                                                 | [detailbeschrijving](#algemeen-opzet)                      |
| Vertrekpunt Globaal Ontwerp | Uitgebreide oplossingsbeschrijving vervangen door architectuurconsequenties en duidelijke documentafbakening                       | [detailbeschrijving](#vertrekpunt-uit-het-globaal-ontwerp) |
| Architectuurprincipes       | Sterk compacter en normerender gemaakt; principes P-01 t/m P-16 behouden                                                           | [detailbeschrijving](#architectuurprincipes)               |
| Ontwerpprincipes            | Sterk vereenvoudigd en technologieneutraler gemaakt; concrete implementatiekeuzes teruggebracht                                    | [detailbeschrijving](#ontwerpprincipes)                    |
| Interactiepatronen          | Procesbeschrijvingen en diagrammen verplaatst naar het Globaal Ontwerp; PSA legt vooral eisen en relaties met stelselfuncties vast | [detailbeschrijving](#interactiepatronen)                  |
| Generieke functies          | Volledig herschreven als normerende eisen voor F1 t/m F8, met expliciete koppeling naar stelselfuncties                            | [detailbeschrijving](#generieke-functies)                  |
| Stelselfuncties             | Uitwerking S01 t/m S11 geharmoniseerd en productonafhankelijk gemaakt                                                              | [detailbeschrijving](#stelselfuncties)                     |
| Realisatiestrategie         | Van concrete component-/implementatiematrix naar werkpakketten, afhankelijkheden en landing in bestaande stelsels                  | [detailbeschrijving](#realisatiestrategie)                 |
| Open vraagstukken           | Losse vragen en voorlopige ontwerpkeuzes vervangen door een gestructureerd besluitregister                                         | [detailbeschrijving](#open-besluiten)                      |

---

### Algemeen / opzet

* De rol van de PSA binnen de totale GBO-documentatie is expliciet gemaakt. Het **Globaal Ontwerp** is leidend voor oplossingsrichting, interactiepatronen en de functionele hoofdindeling; de **PSA** is leidend voor de normerende architectuureisen aan de verdere uitwerking.
* Een nieuwe paragraaf **Documenthiërarchie** beschrijft de verhouding tussen context, Globaal Ontwerp, PSA, Technisch Ontwerp, Technische Requirements en de semantische uitwerking.
* De scope is aangescherpt. De PSA beschrijft vooral:

    * normerende eisen aan de generieke functies;
    * afspraken, standaarden en functionele voorzieningen voor de stelselfuncties;
    * verantwoordelijkheden en beheerkeuzes;
    * open juridische, organisatorische en technische besluiten.

* Beschrijvingen die al in het Globaal Ontwerp staan worden zoveel mogelijk niet meer herhaald.
* De PSA schrijft explicieter **geen producten, leveranciers of referentie-implementaties** voor. Concrete technische componentontwerpen horen thuis in het Technisch Ontwerp en de Technische Requirements.
* De terminologie is gelijkgetrokken met het Globaal Ontwerp. Onder andere **EUDI-Wallet**, **PubEAA-verstrekker**, **Authentic Source Interface (ASI)**, **ASI-provider**, **Basisinrichting OOTS**, **OOTS-V**, **OOTS-adapter**, **bronontsluiting-API**, **dienstencatalogus**, **toestemmingsvoorziening**, **toestemmingsregister** en **GBO-vertaallaag** worden nu consequent gebruikt.
* Specifieke implementaties, pilots en producten worden waar mogelijk niet meer als architectuurkeuze genoemd. Verwijzingen naar bijvoorbeeld specifieke policy-engines en referentie-implementaties zijn verwijderd of technologieneutraal gemaakt.
* De hoofdstuknamen zijn aangepast om beter aan te sluiten op hun nieuwe functie:

    * "Oplossingsrichting" → **Vertrekpunt uit het globaal ontwerp**;
    * "Logische architectuur" → **Generieke functies**;
    * "Open vragen en ontwerpkeuzes" → **Open besluiten**.

<span style='font-size: small;'>[terug naar overzicht](#samenvatting-in-een-oogopslag)</span>

---

### Vertrekpunt uit het globaal ontwerp

* De uitgebreide beschrijving van de voorgestelde oplossingsrichting is verwijderd. Hiervoor wordt voortaan verwezen naar hoofdstuk 2 van het Globaal Ontwerp.
* De eerdere technische beschrijving van FSC, GraphQL, PBAC, centrale voorzieningen en adapters is vervangen door een overzicht van de **architectuurconsequenties** van het Globaal Ontwerp.
* Een nieuwe tabel koppelt deze architectuurconsequenties expliciet aan de onderdelen van de PSA waarin zij normerend worden uitgewerkt.
* De afbakening tussen Globaal Ontwerp en PSA is expliciet gemaakt:

    * het Globaal Ontwerp bepaalt de gekozen oplossingsrichting en interactiepatronen;
    * de PSA bepaalt principes, normerende eisen, afspraken, standaarden, verantwoordelijkheden en open architectuurbesluiten.

* De passage over bestaande afsprakenstelsels is aangescherpt: GBO richt geen zelfstandig nieuw afsprakenstelsel in. Nieuwe afspraken, standaarden en voorzieningen moeten zoveel mogelijk landen in bestaande governance- en beheerstructuren.
* Voor tijdelijke project- en pilotvoorzieningen zijn expliciete voorwaarden toegevoegd voor overgang naar productie, waaronder eigenaarschap, afsprakenbeheer, standaardbeheer, operationeel beheer, continuïteit, financiering en toezicht.
* Illustratieve toekomstige gegevensstromen en bijbehorende diagrammen zijn uit dit hoofdstuk verwijderd.

<span style='font-size: small;'>[terug naar overzicht](#samenvatting-in-een-oogopslag)</span>

---

### Architectuurprincipes

* De zestien architectuurprincipes **P-01 t/m P-16** zijn behouden, maar de uitwerking is sterk vereenvoudigd.
* De oude indeling per juridisch of beleidskader met uitgebreide achtergrondteksten en afzonderlijke bronlijsten is vervangen door één overzichtelijke tabel.
* Per principe wordt nu direct vastgelegd:

    * het principe;
    * de concrete consequentie voor GBO;
    * het primaire wettelijke of architectuurkader.

* De principes zijn daarmee meer **normerend** en minder beschrijvend geworden.
* De formuleringen zijn aangescherpt op onder andere:

    * controleerbare grondslag en doelbinding;
    * selectieve gegevensuitvraag en dataminimalisatie;
    * voorkomen van BSN-verwerking door onbevoegde afnemers;
    * ondersteuning van EUDI-Wallet, verificatie en retrieval;
    * toelating en trust anchors;
    * hergebruik van gegevens bij de bron;
    * product- en leveranciersonafhankelijkheid;
    * ketenbrede herleidbaarheid;
    * transparantie voor burgers;
    * scheiding tussen generieke en domeinspecifieke verantwoordelijkheid.

* Een nieuwe paragraaf **Toepassing** beschrijft hoe de principes worden gebruikt bij afspraken, standaarden, voorzieningen, aansluitvoorwaarden en architectuurbesluiten.
* Afwijkingen van principes moeten voortaan expliciet als architectuurbesluit worden vastgelegd.

<span style='font-size: small;'>[terug naar overzicht](#samenvatting-in-een-oogopslag)</span>

---

### Ontwerpprincipes

* De ontwerpprincipes **D-01 t/m D-14** zijn behouden, maar de uitgebreide beschrijvingen, voorbeelden en productspecifieke uitwerkingen zijn vervangen door een compacte tabel met normerende toepassing voor GBO.
* Het onderscheid tussen principe, betekenis, GBO-toelichting en bronnen is teruggebracht tot de essentie.
* De principes leggen nu nadrukkelijker vast **welke eisen gelden**, zonder de technische implementatie voor te schrijven.
* "Gebruik landelijke GDI-bouwstenen" is verbreed naar hergebruik van generieke **GDI-, FDS-, eIDAS- en OOTS-bouwstenen**.
* Het principe rond API's is technologieneutraler gemaakt. **GraphQL blijft de voorgestelde invulling** voor selectieve bronontsluiting, maar alternatieven zijn toegestaan als zij aan dezelfde eisen voor selectie, beveiliging, autorisatie, schema's en audit voldoen.
* De eerdere uitgebreide vergelijking tussen REST en GraphQL is verwijderd.
* Een nieuwe paragraaf **Aanvullende eisen voor de bronontsluiting-API** legt technologieonafhankelijke eisen vast voor onder meer:

    * vooraf toegestane gegevensvragen;
    * dataminimalisatie;
    * autorisatie op gegevensniveau;
    * versieerbare schema's;
    * authenticatie en beveiliging;
    * logging en foutafhandeling;
    * ondersteuning van bronhouders via de GBO-vertaallaag.

<span style='font-size: small;'>[terug naar overzicht](#samenvatting-in-een-oogopslag)</span>

---

### Interactiepatronen

* De uitgebreide procesbeschrijvingen en sequencediagrammen voor de drie interactiepatronen zijn uit de PSA verwijderd en staan voortaan alleen in het Globaal Ontwerp.
* De PSA bevat nu een compacte tabel voor:

    * **Patroon A — Burger gebruikt EUDI-Wallet**;
    * **Patroon B — Grensoverschrijdend verzoek via OOTS**;
    * **Patroon C — Gegevensverzoek private dienstverlener**.

* Per patroon worden de relevante stelselfuncties en de belangrijkste PSA-aandachtspunten benoemd.
* Voor EUDI-Wallet zijn de verantwoordelijkheden rond bronhouder, PubEAA-verstrekker, ASI-provider en QTSP explicieter gemaakt.
* Voor OOTS is duidelijker vastgelegd dat de GBO-oplossing aansluit op de **Basisinrichting OOTS en OOTS-V**, terwijl Europese transport- en procesfuncties buiten de generieke bronontsluiting blijven.
* Voor DvTP ligt meer nadruk op juridische grondslag, toestemming, pseudonimisering, toelating van private dienstverleners en registratie van diensten en toegestane gegevensvragen.
* Een nieuwe paragraaf **Gemeenschappelijke eisen** legt eisen vast die voor alle interactiepatronen gelden, waaronder:

    * geen patroon- of afnemerspecifiek bronkoppelvlak;
    * uniforme toetsing van identiteit, grondslag, doel en gegevensvraag;
    * hergebruik van dezelfde generieke autorisatieketen;
    * expliciete protocol- en semantische transformaties;
    * ketenbrede herleidbaarheid;
    * patroonafhankelijke logica als configuratie, beleid of mapping in plaats van hardgecodeerde bronlogica.

<span style='font-size: small;'>[terug naar overzicht](#samenvatting-in-een-oogopslag)</span>

---

### Generieke functies

* Het hoofdstuk **Logische architectuur** is vervangen door **Generieke functies**.
* Het logische architectuurdiagram en de uitgebreide duplicatie van functionele beschrijvingen zijn verwijderd. Hiervoor wordt verwezen naar het Globaal Ontwerp.
* Voor alle acht generieke functies **F1 t/m F8** zijn nu expliciete normerende eisen opgenomen.
* **F1 — Identiteit & Vertrouwen** is uitgebreid met duidelijk onderscheid tussen identiteit, rol, hoedanigheid, vertegenwoordiging en bevoegdheid. Ook identity matching en pseudonimisering zijn scherper afgebakend.
* **F2 — Toegang & Interactie** concentreert zich op eisen aan burgerinteractie, toestemming, actuele controle en toegang van organisaties.
* **F3 — Gegevensvoorziening** legt één herbruikbare bronontsluiting, selectieve bevraging, externe adapters en de optionele GBO-vertaallaag vast.
* **F4 — Semantiek & Eenheid van Taal** legt meer nadruk op beheerde begrippen, modellen, schema's, mappings en versiebeheer.
* **F5 — Gegevenskwaliteit & Validatie** bevat eisen aan kwaliteit, herkomst, validatie en terugmelding van fouten; voor OOTS is terugmelding expliciet uitgezonderd.
* **F6 — Grondslag & Beleid** is technologieneutraal gemaakt: beleid moet machineleesbaar, testbaar en versieerbaar zijn, maar is niet meer gekoppeld aan één policy-engine of taal.
* **F7 — Orkestratie & Integratie** stelt nu expliciet dat voor de huidige interactiepatronen **geen afzonderlijke centrale procesorkestratie** nodig is. De nadruk ligt op adapters, mappings, foutafhandeling en afzonderlijke bronverzoeken.
* **F8 — Beheer & Continuïteit** is uitgebreid met expliciete eisen rond eigenaarschap, beheer, serviceniveaus, continuïteit, SPOF's, monitoring, versiebeheer en overdracht van tijdelijke projectvoorzieningen.
* Een nieuwe tabel legt de relatie tussen **F1 t/m F8 en S01 t/m S11** expliciet vast.

<span style='font-size: small;'>[terug naar overzicht](#samenvatting-in-een-oogopslag)</span>

---

### Stelselfuncties

Het hoofdstuk met stelselfuncties is inhoudelijk en structureel sterk herwerkt.

* Alle stelselfuncties **S01 t/m S11** hebben nu een uniforme opbouw:

    * doel;
    * normerende eisen;
    * afspraken en standaarden;
    * functionele voorzieningen;
    * verantwoordelijkheden, waar relevant;
    * open besluiten.

* De oude nadruk op concrete producten, referentie-implementaties, "beschikbaar/nog te realiseren" en specifieke beheerproducten is teruggebracht.
* Een voorziening wordt expliciet als een **functionele component** beschreven; de PSA schrijft geen product of specifieke implementatie voor.
* Een nieuw totaaloverzicht koppelt iedere stelselfunctie aan de bijbehorende generieke functies.

Belangrijkste inhoudelijke wijzigingen per stelselfunctie:

* **S01 — Toestemmingsregistratie**

    * naamgeving aangescherpt;
    * eisen aan toestemmingsrecords, actualiteit, intrekking en bewaartermijnen explicieter;
    * centrale versus federatieve inrichting is een open besluit;
    * PIP-profiel en governance expliciet benoemd.

* **S02 — Toestemmingsportaal**

    * nadruk op begrijpelijkheid, toegankelijkheid, vrijwilligheid en een gelijkwaardig alternatief;
    * centrale voorziening is niet meer als vanzelfsprekende implementatie voorgeschreven;
    * meerdere interoperabele portalen blijven mogelijk.

* **S03 — Burgeridentificatie & Pseudonimisering**

    * scherper onderscheid tussen identificatie, pseudonimisering en autorisatie;
    * identity matching voor buitenlandse of walletidentiteiten explicieter uitgewerkt;
    * concrete implementatiekeuzes vervangen door functionele eisen aan een erkende pseudonimiseringsvoorziening.

* **S04 — Organisatie-authenticatie & Vertrouwensstelsel**

    * uitgebreid met **vertegenwoordiging en bevoegdheidsbewijzen**;
    * onderscheid tussen technische identiteit, juridische organisatie, rol en bevoegdheid expliciet gemaakt;
    * toelating, schorsing, beëindiging en periodieke herbeoordeling toegevoegd.

* **S05 — Autorisatie**

    * productonafhankelijk geformuleerd;
    * PEP/PDP of functioneel gelijkwaardige scheiding blijft de basis;
    * autorisatie betrekt afnemer, dienst, doel, grondslag, gegevensscope en context;
    * vertegenwoordiging en bevoegdheid worden onderdeel van de autorisatiecontext;
    * centrale, decentrale en hybride PDP-inrichtingen blijven mogelijk.

* **S06 — Beleidsbeheer & -distributie**

    * directe afhankelijkheid van specifieke policy-engines en distributieproducten verwijderd;
    * beleid moet machineleesbaar, versieerbaar, testbaar en productonafhankelijk zijn;
    * governance voor schrijven, goedkeuren, publiceren, activeren en terugrollen van beleid is expliciet gemaakt.

* **S07 — Gegevensontsluiting**

    * **Query Catalogus / Query Template Registry** vervangen door **dienstencatalogus**;
    * GraphQL is een voorgestelde invulling in plaats van een verplichte technologiekeuze;
    * de GBO-vertaallaag is expliciet optioneel en vervangbaar;
    * nieuwe diensten moeten primair via schema's, dienstregistratie en beleid kunnen worden toegevoegd.

* **S08 — OOTS-adapter**

    * duidelijker gekoppeld aan **Basisinrichting OOTS en OOTS-V**;
    * Europese transport-, discovery- en procesfuncties worden bij de Basisinrichting OOTS belegd;
    * GBO concentreert zich op bronontsluiting, autorisatie, logging en semantische mapping;
    * de precieze grens tussen OOTS-V, adapter en mapping is als open besluit benoemd.

* **S09 — Logging, Audit & Traceerbaarheid**

    * nadruk verschoven van specifieke loggingproducten naar ketenbrede functionele eisen;
    * decentrale logging en federatieve correlatie zijn het uitgangspunt;
    * centrale aggregatie is alleen toegestaan als noodzaak en privacygrondslag zijn aangetoond;
    * LDV en tracecontext worden als te profileren standaarden benoemd.

* **S10 — Semantiek & Gegevenscatalogus**

    * inhoudelijke verantwoordelijkheid explicieter bij bronhouders en domeinen gelegd;
    * gemeenschappelijke kaders gelden voor begrippen, schema's, kwaliteit, mappings en versiebeheer;
    * mappings naar OOTS-EDM en attestatieschema's worden expliciet beheerd;
    * ook begrippen rond rol, vertegenwoordiging en bevoegdheid vallen waar nodig onder semantische governance;
    * terugmelding van fouten of vermoedelijke onjuistheden is als afzonderlijk vraagstuk toegevoegd.

* **S11 — Attesteringsuitgifte**

    * rolverdeling tussen bronhouder, PubEAA-verstrekker, ASI-provider en QTSP aangescherpt;
    * ASI omvat verify- en waar toegestaan retrievefuncties;
    * centrale, decentrale en federatieve inrichtingsvarianten blijven expliciet mogelijk;
    * verantwoordelijkheden voor signing, status, intrekking, attestatieschema's en rulebooks zijn uitgebreider beschreven.

* De afsluitende gaptabel is vereenvoudigd. In plaats van vooral concrete producten en implementatiestatussen wordt nu per stelselfunctie onderscheid gemaakt tussen:

    * juridische of bestuurlijke gaps;
    * standaardisatie- of realisatiegaps.

<span style='font-size: small;'>[terug naar overzicht](#samenvatting-in-een-oogopslag)</span>

---

### Realisatiestrategie

* De realisatiestrategie is opnieuw opgebouwd rond het uitgangspunt dat **GBO geen zelfstandig nieuw afsprakenstelsel of structurele GBO-beheerorganisatie vormt**.
* Tijdelijke projectvoorzieningen en referentiecomponenten zijn toegestaan voor pilots, maar voor productie zijn expliciete eigenaarschap-, beheer-, continuïteits-, financierings- en exitafspraken vereist.
* De realisatie is opnieuw ingedeeld in vier samenhangende werkpakketten:

    * **GBO-basis**;
    * **EUDI-Wallet**;
    * **OOTS**;
    * **DvTP**.

* Per werkpakket worden nu de betrokken stelselfuncties, belangrijkste resultaten en afhankelijkheden benoemd.
* De oude gedetailleerde matrices met specifieke producten en referentie-implementaties zijn vervangen door functionele resultaten en te maken afspraken en standaarden.
* Voor **GBO-basis** ligt de nadruk op bronontsluiting, dienstencatalogus, autorisatie, policy-governance, logging en semantische kaders.
* Voor **EUDI-Wallet** worden meerdere uitgiftemodellen expliciet ondersteund: bronhouder-eigen PubEAA-uitgifte, gedeelde uitgifte en QEAA-uitgifte door QTSP's via een ASI-provider.
* Voor **OOTS** is de afbakening met de Basisinrichting OOTS explicieter gemaakt.
* Voor **DvTP** zijn de wettelijke randvoorwaarden, toezicht, pseudonimisering, toelating en toestemmingsvoorziening nadrukkelijker als afhankelijkheden opgenomen.
* Een nieuwe uitwerking van de **impact op betrokken partijen** beschrijft de gevolgen voor bronhouders, QTSP's, de Basisinrichting OOTS en private dienstverleners.
* Een nieuwe tabel **Landing in bestaande stelsels en beheerorganisaties** geeft per beheerobject de beoogde governance, beheer- of uitvoeringsrichting en het nog te nemen besluit.
* Een expliciete fasering is toegevoegd:

    1. kaders vaststellen;
    2. profielen ontwerpen;
    3. beproeven;
    4. standaardiseren en beleggen;
    5. productierijp maken;
    6. overdragen en opschalen.

<span style='font-size: small;'>[terug naar overzicht](#samenvatting-in-een-oogopslag)</span>

---

### Open besluiten

* Het oude hoofdstuk **Vraagstukken en ontwerpkeuzes**, met losse inhoudelijke vragen en voorlopige ontwerpkeuzes, is vervangen door **Open besluiten**.
* De open vraagstukken zijn geconsolideerd in een gestructureerd **besluitregister**.
* Ieder besluit heeft:

    * een uniek ID;
    * onderwerp;
    * betrokken stelselfuncties;
    * de te nemen beslissing;
    * een voorkeursrichting vanuit de huidige PSA;
    * de relevante beslissende of coördinerende partijen.

* Het besluitregister bevat onder andere besluiten over:

    * governance van GBO-afspraken;
    * het API-profiel van de bronontsluiting;
    * de dienstencatalogus;
    * PDP-inrichting;
    * policy-governance;
    * toestemming bij DvTP;
    * pseudonieme identiteit;
    * identity matching;
    * het vertrouwensstelsel voor private partijen;
    * logging en burgerinzage;
    * semantische governance;
    * functiegrenzen rond OOTS;
    * PubEAA-uitgifte;
    * ASI-providers;
    * start van attestatie-uitgifte;
    * de GBO-vertaallaag;
    * beheer van referentiecomponenten;
    * terugmelden van fouten;
    * vertegenwoordiging en bevoegdheidsbewijzen.
    
* Voor besluitvorming is een vaste **ADR-werkwijze (Architecture Decision Record)** toegevoegd.
* Een besluit geldt pas als afgerond wanneer de uitkomst ook is verwerkt in de relevante PSA-paragraaf en, indien nodig, in het Globaal Ontwerp en de technische of semantische documentatie.

<span style='font-size: small;'>[terug naar overzicht](#samenvatting-in-een-oogopslag)</span>

---

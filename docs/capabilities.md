# Stelselfuncties

Dit hoofdstuk beschrijft **wat het stelsel moet kunnen** en is een uitwerking van de generieke functies uit de logische architectuur naar afspraken, standaarden en voorzieningen, die als "stelselfuncties" door het stelsel geleverd moeten worden. De term sluit aan op de terminologie van het Federatief Datastelsel (FDS).


## Leeswijzer

Per stelselfunctie is aangegeven:  
- **Type invulling:** afspraak, standaard of voorziening  
- **Beheer:** centraal (NB: als nog niet bekend is waar het beheer komt, is "GBO-stelsel" ingevuld - maar het is de bedoeling dat alle stelselfuncties bij bestaande afsprakenstelsels of beheerorganisaties landen!) of decentraal (bronhouder / afnemer implementeert zelf)  
- **Instantiëring:** gedeelde instantie of eigen instantie per partij  
- **Bestaande invulling:** wat er al is en hergebruikt kan worden  
- **Gap:** wat er nog ontbreekt of nog ingevuld moet worden (apart gemarkeerd met ⚠️)  


De context is GBO, ingebed in NORA/GDI en het Federatief Datastelsel (FDS), met aansluiting op het Europese eIDAS2/ARF kader. Stelselafspraken landen in bestaande afsprakenstelsels zoals FDS en GDI.

De structuur "afspraken boven standaarden boven voorzieningen" is het expliciete uitgangspunt van FDS en wordt hier overgenomen. Waar mogelijk worden bestaande FDS-stelselfuncties hergebruikt.

Naast technische gaps kent dit document ook **juridische randvoorwaarden** (gemarkeerd met ⚖️): stelselfuncties die pas zinvol te realiseren zijn nadat de benodigde wettelijke grondslag is verankerd.

---

## S01 — Toestemmingenregistratie

*Het machineleesbaar vastleggen en raadplegen van de juridische grondslag per gegevensuitvraag (toestemming, wettelijke basis, doelbinding), zodat de autorisatiecomponent deze real-time kan toetsen.*

> ⚖️ **Juridische randvoorwaarde:** Deze stelselfunctie is voor het DvTP-traject pas zinvol te realiseren nadat de Wdo een expliciete bevoegdheid voor bronhouders bevat om op verzoek van de burger gegevens te verstrekken aan private dienstverleners. Zolang sectorale geheimhoudingsplichten (AWR art. 67, Wet SUWI art. 74 e.a.) niet via de Wdo zijn doorbroken, heeft een technisch grondslagregister geen werkende juridische basis. De technische uitwerking van deze stelselfunctie loopt parallel aan het wetgevingstraject, maar kan pas operationeel worden na inwerkingtreding van de Wdo-grondslag en bijbehorende AMvB.

### Afspraken

| Afspraak | Type | Beheer | Invulling |
|---|---|---|---|
| Welke grondslagtypen geldig zijn per traject (toestemming / wettelijke basis / doelbinding) | Stelselafspraak | Centraal — GBO/FDS | ⚠️ Nog te maken; raakt aan AVG-uitwerking in AMvB Wdo |
| Formaat en inhoud van een grondslag-record (minimale attributen, geldigheid, scope) | Stelselafspraak | Centraal — GBO | ⚠️ Nog te maken |
| Intrekkingsrecht burger: termijnen en effect op lopende verwerkingen | Stelselafspraak | Centraal — GBO/FDS, raakvlak AVG | ⚠️ Nog te maken; deels bepaald door AVG art. 7 |
| Aansluiting bronhouders en afnemers op de grondslagregistratie | Toetredingsafspraak (FDS) | Centraal — FDS afsprakenstelsel | ⚠️ Nog te maken als FDS-toetredingseis |

### Standaarden

| Standaard | Beheer | Bestaande invulling |
|---|---|---|
| W3C ODRL (Open Digital Rights Language) — uitdrukken van beleid en toestemming als machineleesbare policy | Internationaal / W3C | Beschikbaar; binnen FDS en DCAT-AP NL al in gebruik voor beleidsbeschrijving |
| REST of GraphQL als raadpleeginterface voor de grondslagregistratie (PIP-interface) | GBO | ⚠️ Nog te standaardiseren als GBO PIP-profiel |

### Voorzieningen

| Voorziening | Type | Beheer | Instantiëring | Bestaande invulling |
|---|---|---|---|---|
| Toestemmingsregister / grondslagregister | Centrale voorziening | Centraal — GBO | Gedeelde instantie | ⚠️ In de zorg gebruikt men Mitz waarvan geleerd kan worden; nog geen generieke GBO-voorziening |
| Inzage- en beheerinterface voor burger (Mijn Toestemmingen) | Centrale voorziening | Centraal — GBO/Logius | Gedeelde instantie | ⚠️ Raakvlak MijnOverheid; nog geen generieke invulling |
| Policy Store (centrale beleidsdefinities overige grondslagen) | Centrale voorziening | Centraal — GBO | Gedeeld | ⚠️ Nog te realiseren - zie ook S05 |

---

## S02 — Toestemmingsportaal (Burger Interactie)

*De burger geeft via een toegankelijke interface geïnformeerde toestemming voor gegevensdeling, authenticeert zich daarvoor op het vereiste niveau, en kan toestemmingen inzien en intrekken. De pseudonimiseringsactie vindt hier plaats.*

> ⚖️ **Juridische randvoorwaarde:** De werking van dit portaal is onlosmakelijk verbonden aan de Wdo-grondslag (zie S01). Bovendien moeten de vrijwilligheidsborging en het gelijkwaardig alternatief wettelijk worden verankerd als aansluiteis voor private dienstverleners, voordat het portaal operationeel zinvol is. Zonder die verankering is niet afdwingbaar dat dienstverleners de digitale route niet als dwingende voorwaarde mogen stellen.

### Afspraken

| Afspraak | Type | Beheer | Invulling |
|---|---|---|---|
| Minimale informatie-eisen voor toestemmingspresentatie aan burger (doel, afnemer, gegevens, geldigheidsduur) | Stelselafspraak | Centraal — GBO, AVG art. 7 als basis | ⚠️ Uitwerking als GBO-UX-richtlijn nog te maken |
| Betrouwbaarheidsniveau authenticatie burger bij toestemming geven | Stelselafspraak | Centraal — GBO/FDS | ⚠️ Nog te bepalen per type gegevens; minimaal eIDAS Substantieel verwacht |
| Pseudonimisering vindt plaats in het portaal op het moment van toestemmingsvastlegging | Architectuurafspraak | Centraal — GBO | ⚠️ Nog te maken als GBO-architectuurprincipe |
| Gelijkwaardig alternatief verplicht: private dienstverleners mogen de digitale toestemmingsroute niet als enige toegangsweg stellen | Aansluiteis (wettelijk te verankeren) | Centraal — Wdo / RDI-toezicht | ⚖️ Moet wettelijk worden verankerd als aansluiteis in Wdo of AMvB; handhaving bij RDI |
| Geen nadeel bij weigering: weigering van toestemming mag niet leiden tot weigering van dienst, vertraging, hogere kosten of slechtere voorwaarden | Aansluiteis (wettelijk te verankeren) | Centraal — Wdo / RDI-toezicht | ⚖️ Moet wettelijk worden verankerd; bewijslast ligt bij de private dienstverlener |
| Transparantie over vrijwilligheid: burger wordt vooraf in begrijpelijke taal geïnformeerd dat de route vrijwillig is en welk alternatief beschikbaar is | Stelselafspraak / UX-eis | Centraal — GBO | ⚠️ Uitwerking als GBO-UX-richtlijn en aansluiteis nog te maken |

### Standaarden

| Standaard | Beheer | Bestaande invulling |
|---|---|---|
| DigiD-aansluiting (SAML 2.0 / OpenID Connect) | Logius | **Beschikbaar**; standaard aansluitprocedure Logius |
| WCAG 2.1 AA — toegankelijkheidseisen overheidswebsites | W3C / Digitoegankelijk | **Verplicht** voor overheidsdiensten |
| OpenID Connect (OIDC) — authenticatieprotocol naar burger | OpenID Foundation | **Beschikbaar**; onderdeel DigiD-aansluiting |

### Voorzieningen

| Voorziening | Type | Beheer | Instantiëring | Bestaande invulling |
|---|---|---|---|---|
| Toestemmingsportaal | Centrale voorziening | Centraal — GBO (of Logius als beheerder) | Gedeelde instantie | ⚠️ Nog te realiseren als GBO-voorziening; raakvlakken MijnOverheid en DvTP-pilot |
| DigiD | Centrale voorziening | Logius | Gedeeld | **Beschikbaar** |
| BSNk Activate (BSN → PI+PP bij eerste toestemmingsregistratie) | Onderdeel BSNk PP | Logius | Gedeeld | **Beschikbaar**; ⚠️ onboarding portaal als BSNk-deelnemer nog te realiseren |

---

## S03 — Burgeridentificatie & Pseudonimisering

*Het vaststellen van de identiteit van de burger op het vereiste betrouwbaarheidsniveau, en het omzetten van het BSN naar partijspecifieke, onomkeerbare pseudoniemen zodat het BSN nooit bij private afnemers terechtkomt als daar geen wettelijke grondslag voor bestaat.*

### Afspraken

| Afspraak | Type | Beheer | Invulling |
|---|---|---|---|
| Het BSN mag private dienstverleners (die hiervoor geen wettelijke grondslag hebben) nooit bereiken; pseudoniem is verplicht voor DvTP-traject | Stelselafspraak | Centraal — GBO, verankerd in AMvB Wdo / Wabvpz | Deels al wettelijk bepaald (Wabvpz); uitwerking in GBO-stelsel nog nodig |
| Koppeling tussen toestemmingsrecord en pseudoniem (consent_id als brug) | Stelselafspraak | Centraal — GBO | ⚠️ Nog te maken |
| Betrouwbaarheidsniveaus per traject (welk eIDAS-niveau vereist voor welk type gegevens) | Stelselafspraak | Centraal — GBO/FDS, raakvlak eIDAS2 | ⚠️ Nog te maken als GBO-beleidsprofiel |
| Onboarding private dienstverleners als BSNk PP-deelnemer (EP-sleuteldistributie) | Toetredingsafspraak | Centraal — Logius/BSNk | Bestaand BSNk-onboardingproces; uitbreiding voor DvTP-partijen nodig |

### Standaarden

| Standaard | Beheer | Bestaande invulling |
|---|---|---|
| eIDAS2 / ARF — wallet-gebaseerde identiteitspresentatie (PID) | Europese Commissie | ARF v2.x beschikbaar; NL implementatie via pilotprogramma eWallet NL |
| OpenID4VP — presentatieprotocol voor wallet naar verifier | OpenID Foundation | Beschikbaar als onderdeel van ARF; aansluiting op GBO nog te realiseren |
| ISO 18013-5 (mDL) — proximity presentatie voor offline scenario's | ISO | Beschikbaar; relevant voor EUDI-Wallet traject |

### Voorzieningen

| Voorziening | Type | Beheer | Instantiëring | Bestaande invulling |
|---|---|---|---|---|
| DigiD | Centrale voorziening | Logius | Gedeeld | Beschikbaar; ondersteunt eIDAS Substantieel; koppeling met GBO via bestaande DigiD-aansluiting |
| eHerkenning | Stelselvoorziening | Logius / markt | Gedeeld (meerdere leveranciers) | Beschikbaar voor organisatie-authenticatie; relevant voor onboarding dienstverleners |
| eIDAS-erkende buitenlandse authenticatiemiddelen | Stelselvoorziening | eIDAS-knooppunt (Logius) | Gedeeld | Beschikbaar via NL eIDAS-knooppunt; relevant voor EUDI-Wallet en OOTS |
| BSNk PP (polymorf pseudonimiseringsstelsel) | Centrale voorziening | Logius | Gedeeld | **Beschikbaar en in productie** (eToegang-stelsel, ~2019); integratiewerk voor GBO/DvTP-traject nog nodig |
| BSNk Activate / Transform / Close | Onderdelen van BSNk PP | Logius | Gedeeld | Beschikbaar; onboarding Toestemmingsportaal als AD/MR-deelnemer en PEP als BSN-geautoriseerde component nog te realiseren |

---

## S04 — Organisatie-authenticatie & Vertrouwensstelsel

*Vaststellen dat een deelnemende organisatie (dienstverlener, bronhouder, EU-lidstaat) is wie zij zegt te zijn, bevoegd is tot deelname, en verifieerbaar verbonden is aan het stelsel.*

> ℹ️ **FDS hergebruik:** De organisatorische stelselfuncties **Poortwachter** (toelating en onboarding van nieuwe deelnemers) en **Marktmeester** (beheer van de deelnemerslijst en naleving van aansluitvoorwaarden) zijn binnen FDS al in opzet gedefinieerd. GBO hergebruikt deze functies voor de toelating van bronhouders en private dienstverleners, aangevuld met GBO-specifieke aansluitvoorwaarden (zie ook S07).

### Afspraken

| Afspraak | Type | Beheer | Invulling |
|---|---|---|---|
| Welke certificaattypen / trust anchors geaccepteerd worden per traject | Stelselafspraak | Centraal — GBO/FDS | PKI Overheid als basis voor binnenlands; eIDAS Trusted List voor grensoverschrijdend; ⚠️ profiel nog te maken |
| Onboardingproces dienstverleners (registratie, contractering, certificaatuitgifte) | Toetredingsafspraak | Centraal — GBO-stelsel, aansluiting FDS | ⚠️ Nog te maken als GBO-toetredingsprocedure |
| Erkenning QTSP-uitgegeven attestaties en gekwalificeerde zegels als vertrouwensanker | Stelselafspraak | Centraal — GBO, verankerd in eIDAS | Basis aanwezig via eIDAS; ⚠️ GBO-specifiek beleidsprofiel voor PDP-verificatie nog te maken |
| Wederzijdse erkenning organisatie-identifiers (OIN, KvK, EIDAS NTRNL) | Stelselafspraak | Centraal — FDS / Logius OIN-register | OIN-register beschikbaar; ⚠️ koppeling KvK ↔ OIN ↔ eIDAS-identifier nog niet gestandaardiseerd |

### Standaarden

| Standaard | Beheer | Bestaande invulling |
|---|---|---|
| PKI Overheid (certificatenbeleid) | Logius | Beschikbaar en verplicht binnen overheid; basis voor FSC-authenticatie |
| eIDAS Trusted Lists (LoTL / nationale TL) | Europese Commissie / RDI | Beschikbaar; NL Trusted List beheerd door RDI |
| ETSI EN 319 412 (certificaatprofielen voor gekwalificeerde zegels en handtekeningen) | ETSI | Beschikbaar; relevant voor QTSP-erkenning en PuBEAA signing |

### Voorzieningen

| Voorziening | Type | Beheer | Instantiëring | Bestaande invulling |
|---|---|---|---|---|
| OIN-register (Organisatie Identificatienummer) | Centrale voorziening | Logius | Gedeeld | Beschikbaar; uitbreiding met KvK-koppeling en eIDAS-identifier gewenst |
| PKI Overheid TSP's (vertrouwensdienstverleners) | Stelselvoorziening | Markt onder toezicht RDI | Gedeeld (meerdere TSP's) | Beschikbaar |
| eIDAS-knooppunt NL | Centrale voorziening | Logius | Gedeeld | Beschikbaar; relevant voor grensoverschrijdende organisatie-authenticatie |
| FSC Directory (contractregister) | Onderdeel FSC-stelsel | RINIS | Gedeeld | Beschikbaar als onderdeel FSC; registratie van actieve contracten tussen partijen |
| FDS Poortwachter (toelating en onboarding deelnemers) | Organisatorische stelselfunctie FDS | Centraal — FDS-beheer / GBO | Gedeeld | **In opzet beschreven als FDS stelselfunctie**; GBO vult deze functie in voor bronhouders en private dienstverleners met GBO-specifieke aansluitvoorwaarden — ⚠️ GBO-aansluitvoorwaarden zelf nog te maken |
| FDS Marktmeester (deelnemerslijst en nalevingsbeheer) | Organisatorische stelselfunctie FDS | Centraal — FDS-beheer / GBO | Gedeeld | **In opzet beschreven als FDS stelselfunctie**; GBO breidt deze functie uit met GBO-specifieke nalevingseisen voor private dienstverleners |

---

## S05 — Autorisatie (PEP/PDP/PIP)

*Iedere gegevensuitvraag wordt getoetst aan machineleesbaar beleid, op basis van de identiteit van de afnemer, de gevraagde gegevens, en de real-time raadpleging van de grondslag. De beslissing is herleidbaar en trajectonafhankelijk.*

### Afspraken

| Afspraak | Type | Beheer | Invulling |
|---|---|---|---|
| Geünificeerde autorisatieketen voor alle trajecten (één PEP/PDP, trajectspecifieke policies) | Architectuurafspraak | Centraal — GBO | ⚠️ Nog te maken als GBO-architectuurprincipe |
| Standaard Subject/Action/Resource/Context vocabulaire voor GBO-autorisatievragen | Stelselafspraak | Centraal — GBO, aansluiting FTV/AuthZEN | ⚠️ Nog te maken als GBO-AuthZEN-profiel |
| Beleidstemplates per traject (wie mag wat opvragen onder welke grondslag) | Stelselafspraak | Centraal beheer, decentrale configuratie per sector of bronhouder | ⚠️ Nog te maken; iWlz-Rego-patronen als vertrekpunt |
| BSN-resolving vindt uitsluitend plaats binnen de PEP, na de beleidsbeslissing | Architectuurafspraak | Centraal — GBO | ⚠️ Nog te maken als GBO-architectuurprincipe |

### Standaarden

| Standaard | Beheer | Bestaande invulling |
|---|---|---|
| AuthZEN NL Gov (draft) — gestandaardiseerde interface tussen PEP en PDP | Logius | Draft-standaard; FTV (Federatieve Toegangsverlening, Logius) loopt pilot |
| OPA/Rego — machineleesbare beleidstaal voor PDP-evaluatie | Open Policy Agent / CNCF | **In productie bij iWlz** (ZIN) voor gevoelige zorgdata; directe precedentwaarde |
| XACML 3.0 — alternatieve PDP-standaard (minder actueel, maar breed ingezet) | OASIS | Beschikbaar; minder geschikt voor fine-grained data-access dan OPA/Rego |
| PBAC (Policy-Based Access Control) als autorisatieparadigma | Conceptueel kader | Beschreven in FTV-architectuur; aansluiting GBO gewenst |

### Voorzieningen

| Voorziening | Type | Beheer | Instantiëring | Bestaande invulling |
|---|---|---|---|---|
| PEP (Policy Enforcement Point) | Decentrale voorziening | Decentraal — per bronhouder geïnstantieerd | Eigen instantie per bronhouder | ⚠️ Nog te realiseren; GBO levert referentie-implementatie / deployable package |
| PDP (Policy Decision Point) | Decentrale voorziening (centraal beheerde policies) | Policies centraal beheerd door GBO; PDP-instantie decentraal bij bronhouder | Eigen instantie per bronhouder | ⚠️ Nog te realiseren; iWlz implementatie OPA/Rego als precedent |
| PIP-interface naar grondslagregistratie | Koppelvlak | Centraal — GBO (grondslagregistratie als PIP) | Gedeeld koppelvlak | ⚠️ Nog te standaardiseren als GBO PIP-profiel (zie S01) |
| Policy Store / PAP | Centrale voorziening | Centraal — GBO | Gedeeld | Zie S06 — Beleidsbeheer & -distributie |

---

## S06 — Beleidsbeheer & -distributie (PAP)

*Het centraal beheren en distribueren van autorisatiebeleid (OPA/Rego-policies) naar de decentrale autorisatiecomponenten (PDP's) van alle aangesloten bronhouders, zodat het stelsel als geheel consistent en bestuurlijk controleerbaar toegang handhaaft.*

> ⚠️ **Nog te ontwerpen:** Deze stelselfunctie is nieuw en heeft geen bestaande invulling. De PAP (Policy Administration Point) is het technisch-bestuurlijke gezagspunt van het stelsel: hij bepaalt wat iedere deelnemer mag opvragen. Vereist een expliciete governance-afspraak over wie policies mag schrijven, wijzigen en goedkeuren.

### Afspraken

| Afspraak | Type | Beheer | Invulling |
|---|---|---|---|
| Governance: wie is bevoegd tot het schrijven, wijzigen en goedkeuren van policies per traject (DvTP, OOTS, EDI) | Stelselafspraak | Centraal — GBO-stelselorganisatie | ⚠️ Nog te maken; raakt aan rolverdeling bronhouder, vakdepartement en GBO-beheer |
| Beleidswijzigingsproces: RFC-procedure voor het aanpassen van gedeelde policies, inclusief testfase en inwerkingtredingsmoment | Stelselafspraak | Centraal — GBO | ⚠️ Nog te maken; analoog aan iWlz RFC-aanpak |
| Policies worden als gesigneerde bundles gedistribueerd; decentrale PDP's halen updates asynchroon op | Architectuurafspraak | Centraal — GBO | ⚠️ Nog te maken als GBO-architectuurprincipe |
| Naast toestemming worden ook toepasbare grondslagen (wettelijke basis, doelbinding) als machineleesbaar beleid centraal beheerd | Stelselafspraak | Centraal — GBO/FDS, raakvlak AVG/Wdo | ⚠️ Nog te maken; ODRL of Rego als taal nog te bepalen |

### Standaarden

| Standaard | Beheer | Bestaande invulling |
|---|---|---|
| OPA Bundle API — mechanisme voor asynchrone distributie van policy-bundles naar decentrale PDP's | Open Policy Agent / CNCF | **Beschikbaar**; onderdeel OPA-ecosysteem; in gebruik bij iWlz |
| OCI (Open Container Initiative) — formaat voor gesigneerde policy-bundles | OCI / CNCF | **Beschikbaar**; standaard container-artefact formaat |
| W3C ODRL — machineleesbare expressie van beleid en grondslagen als aanvulling op Rego | W3C | Beschikbaar; ⚠️ inzet voor GBO-grondslagbeheer nog te bepalen |

### Voorzieningen

| Voorziening | Type | Beheer | Instantiëring | Bestaande invulling |
|---|---|---|---|---|
| Policy Administration Point (PAP) | Centrale voorziening | Centraal — GBO-stelselorganisatie | Gedeelde instantie | ⚠️ Nog te realiseren; beheert en publiceert policy-bundles voor alle trajecten |
| Policy Store (versiebeheer van vastgestelde policies) | Centrale voorziening | Centraal — GBO | Gedeeld | ⚠️ Nog te realiseren; onderdeel PAP of afzonderlijk Git-gebaseerd register |
| Distributie-endpoint (OPA Bundle Server) | Centrale voorziening | Centraal — GBO | Gedeeld | ⚠️ Nog te realiseren; decentrale PDP's pollen dit endpoint voor policy-updates |

---

## S07 — Gegevensontsluiting (Bronontsluiting API)

*Bronhouders stellen gegevens beschikbaar via één generieke, herbruikbare interface. Selectieve uitvraag is structureel mogelijk en afdwingbaar. Geen trajectspecifieke endpoints.*

> ℹ️ **FDS hergebruik:** De FDS-stelselfunctie **Poortwachter** regelt het onboardingproces voor bronhouders als data-aanbieders binnen FDS. GBO hergebruikt dit proces en breidt het uit met GBO-specifieke stappen (BSNk PP-onboarding, query-template registratie, trajectactivatie). De FDS-stelselfunctie **Datadiensten** definieert het kwaliteitskader voor data-aanbod; GBO-bronontsluiting valt hieronder als een specialisatie.

### Afspraken

| Afspraak | Type | Beheer | Invulling |
|---|---|---|---|
| Elke bronhouder realiseert één generieke ontsluiting; geen trajectspecifieke koppelingen | Architectuurafspraak | Centraal — GBO/FDS | ⚠️ Nog te maken als FDS-architectuureis voor GBO-bronhouders |
| Query-registratie: toegestane gegevensvragen per use case zijn vooraf geregistreerd en afdwingbaar | Stelselafspraak | Centraal — GBO (query-catalogus) | ⚠️ Nog te maken |
| Onboarding bronhouders: PKIoverheid-certificaat → FSC-registratie → DCAT-beschrijving → trajectactivatie | Toetredingsafspraak | Centraal — GBO/FDS | ⚠️ Nog te maken als GBO-onboardingprocedure |
| DCAT-AP NL als verplicht formaat voor zelfbeschrijving van bronhouder-datasets | Stelselafspraak | Centraal — FDS (al bestaande FDS-eis) | **Beschikbaar** — FDS mandateert DCAT-AP NL |

### Standaarden

| Standaard | Beheer | Bestaande invulling |
|---|---|---|
| FSC (Federated Service Connectivity) — binnenlands koppelnetwerk voor REST/HTTP | Logius / FSC-community | **Beschikbaar en in gebruik** binnen overheid; standaard voor binnenlands verkeer in FDS |
| GraphQL — selectieve gegevensuitvraag op basis van geregistreerde schema's | GraphQL Foundation | Beschikbaar; **in productie bij iWlz**; nog niet opgenomen in FDS standaardenlandkaart als datadienst-type — ⚠️ positionering als FDS-datadienst-type nog nodig |
| DCAT-AP NL — datacatalogus beschrijving | Geonovum / FDS | **Beschikbaar en verplicht** binnen FDS |
| NL API Strategie / REST API Design Rules | Geonovum / Kennisplatform API's | **Beschikbaar en verplicht** binnen overheid; GraphQL loopt over HTTP en is hiermee verenigbaar |

### Voorzieningen

| Voorziening | Type | Beheer | Instantiëring | Bestaande invulling |
|---|---|---|---|---|
| FSC Inway (per bronhouder) | Decentrale voorziening | Decentraal — bronhouder beheert eigen Inway | Eigen instantie per bronhouder | **Beschikbaar** — FSC Inway referentie-implementatie beschikbaar |
| FSC Outway (per afnemer) | Decentrale voorziening | Decentraal — afnemer beheert eigen Outway | Eigen instantie per afnemer | **Beschikbaar** — FSC Outway referentie-implementatie beschikbaar |
| Query Template Registry (catalogus van geregistreerde gegevensvragen) | Centrale voorziening | Centraal — GBO | Gedeeld | ⚠️ Nog te realiseren als GBO-voorziening |
| GBO Vertaallaag (shared service voor kleine bronhouders zonder eigen GraphQL) | Centrale voorziening | Centraal — GBO | Gedeeld | ⚠️ Nog te realiseren; optioneel voor gemeenten en kleine bronhouders |

---

## S08 — OOTS-adapter (Grensoverschrijdend)

*Verzoeken vanuit andere EU-lidstaten via het OOTS-stelsel worden vertaald naar het binnenlandse GBO-protocol. Bronhouders zien geen EU-specifiek transport. De brug is een EU-rechtelijke verplichting.*

### Afspraken

| Afspraak | Type | Beheer | Invulling |
|---|---|---|---|
| De Basisinrichting OOTS is de enige AS4-toegangspoort; binnenlands verkeer gebruikt FSC direct | Architectuurafspraak | Centraal — GBO | ⚠️ Nog te maken als GBO-architectuurprincipe |
| SMP-registratie van GBO-bronhouders voor OOTS-discovery wordt centraal beheerd door de Basisinrichting OOTS | Stelselafspraak | Centraal — GBO | ⚠️ Nog te maken |
| Autorisatie van OOTS-verzoeken doorloopt dezelfde PEP/PDP-keten als binnenlandse verzoeken | Architectuurafspraak | Centraal — GBO | ⚠️ Nog te maken als GBO-architectuurprincipe |

### Standaarden

| Standaard | Beheer | Bestaande invulling |
|---|---|---|
| eDelivery AS4 (CEF) — transport voor OOTS | Europese Commissie / CEF | **Verplicht** op basis van EU 2018/1724; referentie-implementatie via Domibus |
| OOTS-EDM (Evidence Data Model) — XML-payloadformaat | Europese Commissie / OOTS | **Beschikbaar** als onderdeel OOTS technical design; Schematron-validatieregels beschikbaar |
| SMP 2.1 (Service Metadata Publisher) — discovery van toegangspunten | OASIS / CEF | **Verplicht** als onderdeel OOTS; NAPTR DNS-koppeling |
| SDG Regulation (EU 2018/1724) | EU wetgeving | Juridische verplichting; technische specificaties via EC OOTS Working Group |

### Voorzieningen

| Voorziening | Type | Beheer | Instantiëring | Bestaande invulling |
|---|---|---|---|---|
| Domibus Access Point | Centrale voorziening | Centraal (één NL-instelling voor GBO-bronhouders) | Gedeelde instantie | **Beschikbaar** als open source (EC); ⚠️ operationele inrichting voor GBO nog te doen |
| OOTS Adapter (eDelivery/AS4 ↔ FSC/GraphQL vertaling) | Centrale voorziening | Centraal | Gedeelde instantie | **OOTS-V bestaat al als onderdeel van OOTS Basisinrichting** ⚠️ Nog doorontwikkelen naar GBO specs |
| SMP 2.1 Publisher | Centrale voorziening | Centraal | Gedeelde instantie | ⚠️ Nog te realiseren; configuratie gebaseerd op query-catalogus (zie S07) |

---

## S09 — Logging, Audit & Traceerbaarheid

*Iedere gegevensuitvraag is over de hele keten herleidbaar. Logregels zijn correleerbaar, onweerlegbaar, en zodanig ingericht dat inzagerechten van de burger technisch uitvoerbaar zijn.*

> ℹ️ **iWlz precedent:** Het iWlz-afsprakenstelsel heeft TraceID/SpanID-correlatie (RFC0022a) en LDV-conforme logging als formeel vastgestelde RFC's opgenomen. Dit patroon is daarmee bewezen in productie voor gevoelige zorgdata en direct herbruikbaar als GBO-standaard voor gedistribueerde tracing.

### Afspraken

| Afspraak | Type | Beheer | Invulling |
|---|---|---|---|
| LDV-conforme logging is verplicht voor alle GBO-componenten | Stelselafspraak | Centraal — GBO/FDS | ⚠️ Nog te maken als GBO-aansluiteis; LDV-standaard zelf in consultatie |
| Cross-component correlatie via gestandaardiseerde trace-identifier | Stelselafspraak | Centraal — GBO | ⚠️ Nog te maken als GBO-technisch profiel |
| Burger heeft inzagerecht in verwerkingen; logstructuur maakt dit mogelijk | Stelselafspraak | Centraal — GBO, AVG art. 15 als basis | ⚠️ Inzagevoorziening voor burger nog te ontwerpen |
| Wallet-lokale logs vallen buiten server-side correlatie | Architectuurafspraak | Centraal — GBO | ⚠️ Vast te leggen als GBO-architectuurkeuze |

### Standaarden

| Standaard | Beheer | Bestaande invulling |
|---|---|---|
| Logboek Dataverwerkingen (LDV) | Logius | In publieke consultatie voor vaststelling bij MIDO (consultatie gesloten januari 2026); referentie-implementatie beschikbaar via Digilab; opname op Forum Standaardisatie lijst aanbevolen standaarden wordt beoogd |
| OpenTelemetry — gedistribueerde tracing en correlatie | CNCF | **Beschikbaar**; breed ingezet in overheids-IT; trace-ID als correlatiesleutel over componenten |
| W3C Trace Context — HTTP-header standaard voor trace propagation | W3C | **Beschikbaar**; onderdeel OpenTelemetry-ecosysteem |

### Voorzieningen

| Voorziening | Type | Beheer | Instantiëring | Bestaande invulling |
|---|---|---|---|---|
| LDV-logging per component | Decentrale voorziening | Decentraal — elke component logt conform LDV | Eigen instantie per component | ⚠️ Nog te realiseren per GBO-component |
| Centrale audit-aggregatie (optioneel) | Centrale voorziening | Centraal — GBO | Gedeeld | ⚠️ Nog te bepalen of centraal aggregatiepunt nodig is; privacy-implicaties afwegen |
| Inzageportaal burger (verwerkingsregister) | Centrale voorziening | Centraal — GBO / MijnOverheid | Gedeeld | ⚠️ Raakvlak MijnOverheid/Logius; nog niet gerealiseerd voor GBO |

---

## S10 — Semantiek & Gegevenscatalogus

*Gegevens die via GBO worden uitgewisseld, hebben een eenduidige, beheerde betekenis. Dezelfde canonieke definitie wordt geserialiseerd naar de voor elk traject vereiste uitwisselingsformaten.*

### Afspraken

| Afspraak | Type | Beheer | Invulling |
|---|---|---|---|
| Per bronhouder bestaat een beheerde, GBO-geregistreerde schemabeschrijving | Stelselafspraak | Centraal — GBO (schema-registry) | ⚠️ Nog te maken als GBO-cataloguseis |
| Canonieke schemadefinitie is de enige bron van waarheid; serialisaties zijn afgeleid | Architectuurafspraak | Centraal — GBO | ⚠️ Nog te maken als GBO-architectuurprincipe |
| Mapping naar OOTS Semantic Repository evidence types is verplicht voor OOTS-trajecten | Stelselafspraak | Centraal — GBO, aansluiting EC OOTS | ⚠️ Nog te maken |
| Mapping naar PuBEAA attestatieschema's is verplicht voor EUDI-Wallet traject | Stelselafspraak | Centraal — GBO, aansluiting ARF/EC | ⚠️ Nog te maken |

### Standaarden

| Standaard | Beheer | Bestaande invulling |
|---|---|---|
| DCAT-AP NL — datacatalogus voor zelfbeschrijving datasets | Geonovum / FDS | **Beschikbaar en verplicht** binnen FDS |
| Bestaande sectorale gegevensmodellen (zoals GGM, SGR, ...) | VNG / BKWI / ... |  worden als vertrekpunt gebruikt bij de opstelling van het canonieke schema per bronhouder |
| SHACL (Shapes Constraint Language) — validatie van RDF-data | W3C | Beschikbaar; relevant voor validatie van uitgewisselde gegevens |
| SD-JWT VC — credential-formaat voor wallet-presentaties | IETF | Beschikbaar als onderdeel ARF; ⚠️ GBO-serialisatieprofiel nog te maken |
| OOTS-EDM (Evidence Data Model) | EC / OOTS | **Beschikbaar**; 9 evidence types gedefinieerd in OOTS Semantic Repository |

### Voorzieningen

| Voorziening | Type | Beheer | Instantiëring | Bestaande invulling |
|---|---|---|---|---|
| GBO Schema Registry / Catalogus | Centrale voorziening | Canonieke definitie als leesbare tekst (markdown/HTML) en ook machineleesbaar (RDF/OWL/SHACL), centraal vastgesteld (GBO), decentraal geïnitieerd via RFC-proces. | Gedeeld | ⚠️ Nog te realiseren; bouwt op FDS-datacatalogus infrastructuur |
| Serialisatie-service (canoniek schema → JSON / XML / SD-JWT VC / mdoc) | Centrale voorziening | Centraal — GBO | Gedeeld | ⚠️ Nog te realiseren |
| FDS Datacatalogus (bestaande DCAT-infrastructuur) | Centrale voorziening | FDS / Logius | Gedeeld | **Beschikbaar**; GBO-uitbreiding voor schema-registry gewenst |

---

## S11 — Attesteringsuitgifte (PuBEAA / QEAA)

*Het omzetten van brongegevens uit authentieke overheidsbronnen naar digitaal ondertekende attesteringen die burgers kunnen opslaan in een EUDI-wallet en presenteren aan vertrouwende partijen.*

> ⚖️ **Juridische randvoorwaarde:** De vereisten voor PuBEAA-uitgifte zijn vastgelegd in Uitvoeringsverordening (EU) 2025/1569 en de bijbehorende ETSI-normen. Overheidsorganen die PuBEAA's uitgeven moeten beschikken over een goedgekeurd Conformity Assessment Report (CAR) van een geaccrediteerde Conformity Assessment Body (CAB). De Europese regelgeving op dit punt is nog in ontwikkeling; de uitwerking van GBO op dit vlak loopt parallel aan de nadere invulling van het Europese kader.

> ℹ️ **Scope-afbakening:** GBO overweegt een **centrale PuBEAA-uitgiftedienst** in te richten die namens overheidsbronhouders attesteringen uitgeeft op basis van de generieke bronontsluiting (S07), en een **centrale verificatiedienst** waar vertrouwende partijen de geldigheid van uitgegeven attesteringen kunnen controleren. De keuze of beide voorzieningen centraal worden ingericht, decentraal per bronhouder, of dat de uitgifte elders (buiten GBO) wordt belegd, is nog niet gemaakt en wordt hier als open vraag behandeld.

### Afspraken

| Afspraak | Type | Beheer | Invulling |
|---|---|---|---|
| Welke overheidsbronnen PuBEAA's uitgeven en voor welke attribuuttypen | Stelselafspraak | Centraal — GBO, per bronhouder te activeren | ⚠️ Nog te maken; lijst van attribuuttypen sluit aan op canonieke schema's (C9) |
| Attestation Rulebook per attribuuttype: vereiste gegevens, opmaak, bewijzen, beveiligingseisen, intrekkingsbeleid | Stelselafspraak | Centraal — GBO, aansluiting EC/ARF-rulebooks | ⚠️ Nog te maken per attribuuttype; Europese standaardrulebooks in ontwikkeling |
| Wallet binding: koppeling van uitgifte aan specifieke wallet-instantie van de burger | Architectuurafspraak | Centraal — GBO | ⚠️ Nog te maken als GBO-technisch profiel; conform ARF wallet binding vereisten |
| Intrekkingsbeleid: wanneer een attestering wordt ingetrokken en hoe de statuslijst wordt bijgehouden | Stelselafspraak | Centraal — GBO | ⚠️ Nog te maken; sluit aan op statuslijstmechanisme (Token Status List of OCSP) |
| Opname van de centrale PuBEAA-dienst op de Nederlandse Trusted List (beheerd door RDI) | Toetredingsafspraak | Centraal — RDI / GBO | ⚠️ Vereist CAR-certificering; procedure nog te doorlopen |
| Verificatiedienst: welke partijen de centrale verificatieservice mogen bevragen en onder welke voorwaarden | Stelselafspraak | Centraal — GBO | ⚠️ Nog te maken |

### Standaarden

| Standaard | Beheer | Bestaande invulling |
|---|---|---|
| OpenID4VCI (OpenID for Verifiable Credential Issuance) — protocol voor uitgifte van credentials aan wallet | OpenID Foundation / ARF | **Beschikbaar**; verplicht binnen ARF; implementatierichtlijnen in uitvoeringsverordening 2025/1569 |
| SD-JWT VC (Selective Disclosure JWT Verifiable Credential) — credential-formaat voor wallet-opslag | IETF / ARF | **Beschikbaar**; primair formaat voor PuBEAA in ARF |
| ISO/IEC 18013-5 (mdoc) — alternatief credential-formaat voor proximity-presentatie | ISO / ARF | **Beschikbaar**; relevant voor offline en proximity use cases |
| ETSI EN 319 412 — eisen aan gekwalificeerde zegels voor ondertekening van PuBEAA | ETSI | **Beschikbaar**; ondertekening met QESeal verplicht voor PuBEAA |
| Token Status List (IETF draft) — mechanisme voor statusbeheer van uitgegeven credentials | IETF | Beschikbaar als draft; ⚠️ nog niet definitief vastgesteld als verplichte standaard in ARF |
| OpenID4VP (OpenID for Verifiable Presentations) — protocol voor presentatie van credentials door wallet aan verifier | OpenID Foundation / ARF | **Beschikbaar**; verplicht binnen ARF; relevant voor de verificatiedienst |

### Voorzieningen

| Voorziening | Type | Beheer | Instantiëring | Bestaande invulling |
|---|---|---|---|---|
| Centrale PuBEAA-uitgiftedienst (Credential Issuer) | Centrale voorziening (optie) | Centraal — GBO of Logius als beheerder | Gedeelde instantie namens meerdere bronhouders | ⚠️ Nog te realiseren; vereist CAR-certificering; bouwt op C5 (bronontsluiting) en C2 (burgeridentificatie) |
| CAR-certificering voor de uitgiftedienst | Conformiteitseis | Geaccrediteerde CAB (markt, onder toezicht RDI) | Per uitgiftedienst | ⚠️ Nog te doorlopen; vereiste uit uitvoeringsverordening 2025/1569 |
| Centrale verificatiedienst (Status List / Verifier endpoint) | Centrale voorziening (optie) | Centraal — GBO of Logius | Gedeelde instantie | ⚠️ Nog te realiseren; biedt vertrouwende partijen een gestandaardiseerd endpoint voor intrekkingsstatus en uitgeversketen |
| Opname op Nederlandse Trusted List (LoTE) | Registratie bij RDI | RDI | Eenmalig per erkende uitgevende dienst | ⚠️ Vereist goedgekeurde CAR; procedure loopt via RDI conform eIDAS Trusted List Infrastructure |
| NL Wallet (EUDI Wallet referentie-implementatie NL) | Nationale voorziening | Logius / stelselbeheerder EDI-stelsel | Gedeeld | Beschikbaar als pilotimplementatie; GBO-attesteringen moeten aansluiten op NL Wallet-specificaties |

---

## Overzicht: gaps per stelselfunctie

De gaps zijn onderverdeeld in drie categorieën:  
- ⚖️ **Juridische gap** — vereist wetgeving of AMvB voordat de technische invulling zinvol is  
- ⚠️ **Technische/organisatorische gap** — nog te realiseren binnen bestaand juridisch kader  
- ✅ **Beschikbaar** — bestaande invulling die hergebruikt wordt  

| Stelselfunctie | Juridische gaps ⚖️ | Technische / organisatorische gaps ⚠️ | Bestaande basis ✅ |
|---|---|---|---|
| S01 — Toestemmingenregistratie | Wdo-grondslag DvTP; AMvB doelbinding en gegevenscategorieën | Toestemmingenregister als GBO-voorziening; PIP-interface standaard; stelselafspraken intrekking | W3C ODRL; DCAT-AP NL |
| S02 — Toestemmingsportaal | Wdo-grondslag DvTP; wettelijke verankering vrijwilligheidseis en gelijkwaardig alternatief als aansluiteis | Portaal zelf; BSNk-onboarding portaal; UX-richtlijnen toestemmingspresentatie; transparantie-eis uitwerking | DigiD; BSNk Activate |
| S03 — Burgeridentificatie & Pseudonimisering | — | BSNk PP-integratie voor DvTP (onboarding portaal en PEP); betrouwbaarheidsniveau-beleid per traject | BSNk PP (productie); DigiD; eIDAS-knooppunt |
| S04 — Organisatie-authenticatie & Vertrouwensstelsel | — | GBO-vertrouwensprofiel (welke trust anchors per traject); OIN ↔ KvK ↔ eIDAS-identifier koppeling; GBO-aansluitvoorwaarden | FDS Poortwachter (in opzet); FDS Marktmeester (in opzet); FSC Directory; PKI Overheid; OIN-register |
| S05 — Autorisatie (PEP/PDP/PIP) | — | Volledige PEP/PDP/PIP-keten nog te realiseren; GBO AuthZEN-profiel; BSN-resolving post-decision | OPA/Rego; FTV/AuthZEN (pilot) |
| S06 — Beleidsbeheer & -distributie (PAP) | — | Centrale PAP-voorziening; Policy Store; distributie-endpoint; governance-afspraken beleidswijziging; toepasbare grondslagen als machineleesbaar beleid | OPA Bundle API; OCI (beschikbaar) |
| S07 — Gegevensontsluiting (Bronontsluiting API) | — | Query Template Registry; GraphQL als FDS-datadienst-type positioneren; GBO onboardingprocedure bronhouders | FSC (productie); FDS Poortwachter (in opzet); DCAT-AP NL; iWlz GraphQL-patroon |
| S08 — OOTS-adapter (Grensoverschrijdend) | — | GBO ↔ RINIS REST-koppeling; SMP-beheer; SDG-EDM mapping | RINIS basisinrichting beschikbaar; Domibus (open source, EC); AS4/OOTS-EDM standaarden |
| S09 — Logging, Audit & Traceerbaarheid | — | LDV-profiel per GBO-component; inzagevoorziening burger | LDV (in consultatie, referentie-impl. beschikbaar); OpenTelemetry; iWlz TraceID/SpanID RFC (productie) |
| S10 — Semantiek & Gegevenscatalogus | — | Schema Registry; serialisatie-service; mappings naar OOTS-EDM en PuBEAA | FDS Datacatalogus; DCAT-AP NL; OOTS-EDM |
| S11 — Attesteringsuitgifte (PuBEAA / QEAA) | CAR-certificering uitgiftedienst; opname op NL Trusted List (RDI) | Centrale uitgiftedienst; Attestation Rulebooks per attribuuttype; wallet binding profiel; verificatiedienst; intrekkingsbeleid | OpenID4VCI; SD-JWT VC; ARF; NL Wallet (pilot) |

---

## Bijlage: Afsprakenstelsel

Er is een werkend afsprakenstelsel nodig dat de bovenstaande stelselfuncties verbindt in één samenhangend geheel van afspraken, standaarden en voorzieningen. Het **iWlz-afsprakenstelsel** is hiervoor een goede blauwdruk: het is gelaagd opgebouwd, formeel vastgesteld, en heeft een werkend RFC-proces voor wijzigingen.

De aanbevolen lagenstructuur voor het afsprakenstelsel (analoog aan iWlz):

| Laag | Inhoud voor GBO |
|---|---|
| Organisatiebeleid | Governance, rollen (bronhouder, afnemer, GBO-beheer), ontwerpkeuzes, serviceafspraken, wijzigingsbeheer |
| Proces | Trajectprocessen: DvTP-toestemmingsstroom, OOTS-adapterstroom, EUDI-Wallet uitgifte- en presentatiestroom |
| Informatie | Gegevensmodellen per bronhouder, canonieke schema's, mappings naar OOTS-EDM en PuBEAA |
| Applicatie | Technische afspraken per stelselfunctie: GraphQL profiel, PEP/PDP-keten, FSC-profiel, BSNk PP-integratie, query-templates |
| IT-infrastructuur | Connectiviteit (FSC), certificaten (PKI Overheid), netwerkeisen, SLA's |
| Uitwisselprofielen | Per traject (DvTP, OOTS, EUDI-Wallet): specifieke afspraken aanvullend op de generieke lagen |

Wijzigingen in het afsprakenstelsel verlopen via een formeel RFC-proces, met gepubliceerde versies en expliciete inwerkingtreding per implementatiestap.

NB: De afspraken moeten landen in bestaande afsprakenstelsels en wetgeving.  
Een voorstel hiervoor:  
- Afspraken die uitsluitend overheid-overheid betreffen → landen in het FDS- en/of het GDI-afsprakenstelsel  
- Afspraken waarbij ook private dienstverleners zijn betrokken (toelating dienstverleners, aansluitvoorwaarden, vrijwilligheidseis) → landen in publiek-private afsprakenstelsels zoals het TIP-afsprakenstelsel  
- Wat wettelijk verankerd moet zijn → in Wdo en AMvB

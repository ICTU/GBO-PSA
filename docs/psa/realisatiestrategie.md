# Realisatiestrategie

## Werkwijze

- Er komt geen nieuw stelsel en er komen geen "GBO"-voorzieningen, maar bestaande afspraken, standaarden en voorzieningen worden hergebruikt. Waar afspraken of standaarden aangevuld of aangepast moeten worden of voorzieningen ontworpen of ingericht moeten worden, wordt dit ingebracht bij de bestaande gremia. Voor het uitvoeren van pilots kan het nodig zijn om bepaalde functies tijdens de projectfase onder projectverantwoordelijkheid uit te voeren, maar voor in productiename zullen ook deze functies ondergebracht worden bij een bestaand afsprakenstelsel of een bestaande beheerorganisatie.
Zie ook de paragraaf [Gebruik van bestaande afsprakenstelsels](#gebruik-van-bestaande-afsprakenstelsels) voor een verdere uitwerking hiervan.

- Er wordt gedurende de projectfase al wel pilots gestart waar gewerkt met de gewenste afspraken, standaarden en voorzieningen. Als deze nog niet bestaan, worden voorbeeld implementaties gebruikt die tevens gebruikt worden om het ontwerp te verbeteren. Uiteindelijk worden deze ontwikkelingen als referentie implementaties aangeboden aan de gremia waar het beheer belegd wordt. Dit gaat tot het niveau van "pre-productie": d.w.z. dat de afspraak of voorziening volledig genoeg is uitgewerkt om in productie genomen te kunnen worden. Maar de daadwerkelijke productiegang wordt aan de beoogde beheerder overgelaten. In sommige gevallen kan hier zelfs wet- en regelgeving voor nodig zijn, die in werking moet zijn getreden voor in productie gegaan kan worden.

- De inrichting van de ontbrekende afspraken, standaarden en voorzieningen moet voldoen aan de ontwerpprincipes. Gedurende het traject worden de ontwikkelingen hier periodiek op beoordeeld, waarover zo openbaar mogelijk (maar in elk geval naar de betrokken partijen) wordt gerapporteerd.


## Werkpakketten

De stelselfuncties die nodig zijn om de GBO te kunnen gebruiken voor de drie gewenste toepassingen worden opgedeeld in werkpakketten. Met deze werkpakketten is het mogelijk om de drie toepassingen los van elkaar mogelijk te maken en afhankelijk van de prioriteiten rond de toepassingen te implementeren. Verder bieden de werkpakketten verschillende "deployment-opties" (manieren waarop de stelselfuncties geïmplementeerd en beheerd kunnen worden) waar afhankelijk van de prioriteit en de afnemersvragen voor gekozen kunnen worden.  

Er worden drie werkpakketten onderscheiden, die gekoppeld zijn aan de drie toepassingen. Daarnaast is er een werkpakket dat voor alle toepassingen nodig is: de GBO-basis functies.  

<figure>
``` mermaid
--8<-- "diagrammen/gbo_swimlanes.mmd"
```
<figcaption>De werkpakketten getekend in relatie tot elkaar.<br/>
NB: in deze figuur zijn enkel de voorzieningen geschetst - daarnaast kunnen de werkpakketten ook afspraken of standaarden nodig hebben.<br/>De lichtrode voorzieningen moeten nog ontwikkeld worden. De overige voorzieningen bestaan al - daar moet op aangesloten worden.</figcaption>
</figure>


## Werkpakket GBO Basis

Legt de gemeenschappelijke fundatie voor alle drie de toepassingen: generieke bronontsluiting (GraphQL/FSC), autorisatieketen (PEP/PDP/PIP/PAP), logging en semantische catalogus.

### Onderdelen

| # | Onderdeel | Stelselfunctie | Afspraken (nog te maken) | Standaarden (te kiezen) | Voorzieningen (hergebruiken of ontwikkelen) |
|---|---|---|---|---|---|
| 1 | **Bronontsluiting API** | [S07](capabilities.md#s07-gegevensontsluiting-bronontsluiting-api) | Stelselafspraak (FDS):<br/>- één generieke ontsluiting per bronhouder, geen trajectspecifieke koppelingen<br/>- query-registratie verplicht<br/>- onboardingprocedure bronhouders | - FSC ✅<br/>- GraphQL ✅ (⚠️ positionering in FDS)<br/>- DCAT-AP NL ✅ | FSC Inway ✅<br/>- FSC Outway ✅<br/>- Query Template Registry ⚠️ |
| 2 | **PEP/FTV in FSC + stelselrollen** | [S05](capabilities.md#s05-autorisatie-peppdppip) | Architectuurafspraak:<br/>- geünificeerde PEP/PDP-keten voor alle trajecten<br/>- GBO-AuthZEN-profiel<br/>- BSN-resolving alleen post-decision in PEP | - AuthZEN NL Gov (draft)<br/>- OPA/Rego ✅ (iWlz) | - PEP ⚠️ (ref-impl.)<br/>- PDP ⚠️ (ref-impl.)<br/>- PAP/Policy Store ⚠️ |
| 3 | **Logging & traceerbaarheid** | [S09](capabilities.md#s09-logging-audit-traceerbaarheid) | - LDV-logging verplicht voor alle GBO-componenten<br/>- cross-component correlatie via trace-identifier | - LDV ✅ (ref-impl.)<br/>- OpenTelemetry ✅<br/>- W3C Trace Context ✅ | - LDV-logging per component ⚠️ (decentraal) |
| 4 | **Semantiek & catalogus** | [S10](capabilities.md#s10-semantiek-gegevenscatalogus) | - Canoniek schema verplicht per bronhouder<br/>- serialisaties zijn afgeleid | - DCAT-AP NL ✅<br/>- SHACL ✅ | - GBO Schema Registry ⚠️<br/>- Serialisatie-service ⚠️ |

### Deployment-opties

| Optie | Omschrijving | Wat GBO levert |
|---|---|---|
| **A — Zelf ontwikkeld & beheerd** | Bronhouder bouwt en beheert eigen GraphQL-API + FSC Inway + PEP/PDP. Mogelijke doelarchitectuur voor grote bronhouders (BD, UWV). | Referentie-implementaties, onboardingprocedure, query-templates |
| **B — Referentiecomponenten, eigen beheer** | Bronhouder deployt GBO-packages (containers/Helm charts) voor Inway, PEP, PDP en eventueel GraphQL-wrapper en beheert deze zelf. | Deploybare packages + configuratiegidsen |
| **C — Centrale vertaallaag (overgangstool)** | GBO biedt een centrale service die GraphQL-query's vertaalt naar bestaande REST-JSON of SOAP/XML van de bronhouder. Tijdelijke maatregel. ⚠️ nog te realiseren. | GBO Vertaallaag met configureerbare connectors per bronhouder |

> Optie C is een overgangsmaatregel. Doelarchitectuur blijft eigen GraphQL-API bij de bronhouder (A of B).

---

## Werkpakket EUDI-wallet (EDI)

Maakt het mogelijk dat burgers overheidsgegeven als digitale attestatie (PuB-EAA) in een EUDI-wallet opslaan. Bouwt op GBO Basis.

### Onderdelen

| # | Onderdeel | Stelselfunctie | Afspraken (nog te maken) | Standaarden (te kiezen) | Voorzieningen (hergebruiken of ontwikkelen) |
|---|---|---|---|---|---|
| 1 | **Pub-EAA provider** (centrale uitgifte-dienst) | [S11](capabilities.md#s11-attesteringsuitgifte-pub-eaa-qeaa) | - Attestation Rulebook per attribuuttype<br/>- wallet binding-profiel<br/>- intrekkingsbeleid<br/>- ⚖️ opname op NL Trusted List (RDI)<br/>- ⚖️ CAR-certificering vereist (Uitv.vo. 2025/1569) | - OpenID4VCI ✅<br/>- SD-JWT VC ✅<br/>- mdoc (ISO 18013-5) ✅<br/>- QESeal (ETSI EN 319 412) ✅<br/>- Token Status List ⚠️ | - Centrale Pub-EAA uitgifte-dienst ⚠️<br/>- Opname LoTE ⚠️<br/>- NL Wallet ✅ (pilot) |
| 2 | **Authentic Source Interface** (verificatiedienst) | [S11](capabilities.md#s11-attesteringsuitgifte-pub-eaa-qeaa) | - Welke partijen de verificatieservice mogen bevragen en onder welke voorwaarden? | - OpenID4VP ✅ | - Centrale verificatiedienst ⚠️ |
| 3 | **Mapping GraphQL → EDI-attestaties** | [S10](capabilities.md#s10-semantiek-gegevenscatalogus) | - Mapping naar PuB-EAA attestatieschema's verplicht per bronhouder | - SD-JWT VC / mdoc | - Serialisatie-service ⚠️ (onderdeel [S10](capabilities.md#s10-semantiek-gegevenscatalogus)) |

### Deployment-opties

| Optie | Omschrijving | Kanttekening |
|---|---|---|
| **A — Bronhouder als eigen Pub-EAA provider** | Bronhouder richt zelf uitgifte-dienst in, inclusief CAR-certificering. | Zware beheerslast (vergelijkbaar met Pub TSP)<br/>(realistisch alleen voor grootste bronhouders) |
| **B — Centrale Pub-EAA provider** | Een nog te kiezen organisatie beheert één centrale dienst namens meerdere bronhouders met één CAR-certificering. | Verwachte voorkeursinrichting. ⚠️ nog te realiseren. |
| **C — Enkel ASI-P (verify & retrieve, geen uitgifte van attestaties)** | Naast verplichte verify-dienst ook een retrieve-dienst, waarmee vertrouwende partijen (QTSP's) attestaties kunnen uitgeven. | Lichtere optie, maar afhankelijkheid van QTSP's. |

---

## Werkpakket SDG/OOTS

Maakt het mogelijk dat Europese overheden via OOTS (Once Only Technical System) bewijsstukken opvragen bij Nederlandse bronhouders (SDG-verordening EU 2018/1724). Bouwt op GBO Basis.

### Onderdelen

| # | Onderdeel | Stelselfunctie | Afspraken (nog te maken) | Standaarden (te kiezen) | Voorzieningen (hergebruiken of ontwikkelen) |
|---|---|---|---|---|---|
| 1 | **SDG-OOTS-adapter** (XML ↔ GraphQL) | [S08](capabilities.md#s08-oots-adapter-grensoverschrijdend), [S10](capabilities.md#s10-semantiek-gegevenscatalogus) | Architectuurafspraak:<br/>- Basisinrichting OOTS is enige AS4-toegangspoort<br/>- SMP-registratie centraal beheerd<br/>- OOTS-verzoeken door zelfde PEP/PDP-keten | - eDelivery AS4 ✅<br/>- OOTS-EDM ✅<br/>- SMP 2.1 ✅ | - Domibus Access Point ✅ (⚠️ inrichting)<br/>- OOTS-EDM Adapter ⚠️<br/>- SMP Publisher ⚠️ |
| 2 | **Mapping GraphQL → OOTS-schema's** | [S10](capabilities.md#s10-semantiek-gegevenscatalogus) | - Mapping naar OOTS Semantic Repository evidence types verplicht<br/>- per bronhouder bepalen welke data ontsloten wordt | OOTS-EDM ✅ | Via GBO Schema Registry ([S10](capabilities.md#s10-semantiek-gegevenscatalogus)) |

### Deployment-opties

| Optie | Omschrijving | Kanttekening |
|---|---|---|
| **A — Eigen SDG/OOTS-stroom (bijv. EMREX)** | Bronhouder heeft bestaande bilaterale OOTS-aansluiting (bijv. DUO via EMREX). GBO biedt aanvullende route. | Bestaande stromen worden niet vervangen. |
| **B — GBO-adapter + Basisinrichting** | Bronhouder sluit aan op centrale GBO OOTS-adapter en Domibus; OOTS-EDM-vertaling en SMP-registratie centraal. | Verwachte standaardinrichting voor de meeste bronhouders. |
| **C — Enkel Basisinrichting (RINIS Domibus)** | Bronhouder richt zelf OOTS-EDM-koppeling in op bestaande Basisinrichting OOTS, zonder GBO-adapter. | Vereist trajectspecifieke mapping bij de bronhouder zelf. |

---

## Werkpakket DvTP

Maakt het mogelijk dat private dienstverleners met toestemming van de burger gegevens opvragen bij overheidsbronhouders. Bouwt op GBO Basis en voegt toestemmingsinfrastructuur toe.

> ⚖️ **Juridische randvoorwaarde:** Pas operationeel na inwerkingtreding van de Wdo-grondslag (expliciete bevoegdheid voor bronhouders om op verzoek van de burger gegevens te verstrekken aan private dienstverleners) en bijbehorende AMvB. Technische uitwerking loopt parallel aan het wetgevingstraject.

### Onderdelen

| # | Onderdeel | Stelselfunctie | Afspraken (nog te maken) | Standaarden (te kiezen) | Voorzieningen (hergebruiken of ontwikkelen) |
|---|---|---|---|---|---|
| 1 | **Toestemmingsportaal** | [S02](capabilities.md#s02-toestemmingsportaal-burger-interactie) | - GBO-UX-richtlijnen (doel, afnemer, gegevens, geldigheidsduur)<br/>- ⚖️ gelijkwaardig alternatief verplicht (wettelijk te verankeren in Wdo)<br/>- ⚖️ geen nadeel bij weigering<br/>- architectuurafspraak: pseudonimisering in portaal | - DigiD (SAML/OIDC) ✅<br/>- WCAG 2.1 AA ✅ | - Toestemmingsportaal ⚠️<br/>- BSNk Activate ✅ (⚠️ onboarding portaal) |
| 2 | **Toestemmingsregister** | [S01](capabilities.md#s01-toestemmingenregistratie) | - Grondslagtypen per traject (toestemming/wettelijke basis/doelbinding)<br/>- formaat grondslag-record<br/>- intrekkingsrecht burger<br/>- ⚖️ Wdo-grondslag vereist | - W3C ODRL ✅<br/>- GBO PIP-profiel ⚠️ | - Toestemmingsregister ⚠️<br/>- Policy Store ⚠️ |
| 3 | **Aansluiting BSNk PP** | [S03](capabilities.md#s03-burgeridentificatie-pseudonimisering) | - BSN mag private dienstverleners nooit bereiken (verankerd in AMvB Wdo/Wabvpz)<br/>- onboarding private dienstverleners als BSNk PP-deelnemer |  | - BSNk PP ✅ (productie)<br/>- BSNk Transform/Close ✅ (⚠️ PEP-integratie) |
| 4 | **Aansluiting Stelsel Toegang** | [S04](capabilities.md#s04-organisatie-authenticatie-vertrouwensstelsel) | - Onboardingprocedure private dienstverleners<br/>- welke trust anchors geaccepteerd per traject | - PKI Overheid ✅<br/>- eIDAS Trusted Lists ✅ | - FDS Poortwachter ⚠️<br/>- FDS Marktmeester ⚠️<br/>- eHerkenning ✅ |
| 5 | **Policies voor afnemers o.b.v. dienstenregister** | [S05](capabilities.md#s05-autorisatie-peppdppip), [S06](capabilities.md#s06-beleidsbeheer-distributie-pap) | - Beleidstemplates per traject (wie mag wat opvragen, onder welke grondslag)<br/>- governance beleidswijzigingen<br/>- RFC-procedure analoog aan iWlz | - OPA/Rego ✅<br/>- OPA Bundle API ✅<br/>- W3C ODRL ✅ | - PAP/Policy Store ⚠️<br/>- OPA Bundle Server ⚠️ |

### Deployment-opties

| Optie | Omschrijving | Kanttekening |
|---|---|---|
| **A — Centrale toestemmingsvoorziening** | Eén centraal portaal + register. Alle bronhouders en afnemers sluiten hierop aan. | Efficiëntst; één plek voor burger om toestemmingen te beheren. Verwachte voorkeur. |
| **B — Decentraal portaal, centraal register** | Bronhouders/sectoren bieden eigen portaal aan; toestemmingen worden geregistreerd in het centrale GBO-register. | PDP raadpleegt altijd centraal register als PIP. |
| **C — VP/VI decrypt centraal (in GBO-infrastructuur)** | Versleuteld verzoek van afnemer wordt ontsleuteld binnen de centrale GBO-keten (bijv. als onderdeel PEP/FSC). | Gegevens bereiken afnemer pas na autorisatiecontrole en pseudonimisering. |
| **D — VP/VI decrypt in FSC (bij bronhouder)** | Ontsleuteling en autorisatiecontrole volledig geïntegreerd in FSC Inway van de bronhouder. End-to-end vanuit bronhouder. | GBO-infrastructuur (behalve toestemmingsregister) bevat enkel versleutelde gegevens. |

---

*Legenda: ✅ beschikbaar / in gebruik · ⚠️ nog te realiseren · ⚖️ juridische randvoorwaarde*


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

Het doel van GBO is het ontzorgen van bronhouders bij het bedienen van verschillende gegevensstromen. Het project GBO richt zich daarbij op de gegevensstromen die door burgers geïnitieerd worden: EDI, SDG/OOTS en DvTP. Maar de oplossingsrichting leent zich ook prima voor andere gegevensstromen: door het inrichten van een generieke bronontsluiting (GraphQL) met configureerbare toegangscontrole (FSC met FTV) kan deze voor veel verschillende gegevensstromen gebruikt worden. Die gegevensstromen moeten hun gegevensverzoeken dan via FSC aanbieden in de vorm van een GraphQL-request waarin de gewenste gegevens uitgevraagd worden. Als dat niet rechstreeks kan, is een adapter nodig die het verzoek omzet naar GraphQL en via een FSC Outway aanbiedt.
Iedere gegevensstroom zal wel afspraken vereisen over de gegevenssets die afgenomen mogen worden en wie onder welke voorwaarden deze gegevens mogen opvragen. De vastlegging en toepassing van die afspraken kan echter wel in de bestaande FTV componenten (PEP/PDP, PAP en PIP) gebeuren.

Om een indruk te geven hoe nieuwe gegevensstromen toegevoegd kunnen worden, zijn in de onderstaande figuur twee extra gegevensstromen toegevoegd.

<figure>
``` mermaid
--8<-- "diagrammen/gbo_swimlanes_qerds_g2g.mmd"
```
<figcaption>Mogelijke toekomstige use cases GBO-model. NB: dit is zuiver illustratief en valt buiten de scope van GBO!</figcaption>
</figure>

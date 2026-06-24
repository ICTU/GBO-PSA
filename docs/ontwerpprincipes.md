# Ontwerpprincipes GBO

> Selectie van de meest relevante **ontwerpprincipes** voor de inrichting van de GBO.
> Waar de [architectuurprincipes](./architectuurprincipes.md) de *wat* en *waarom* beschrijven,
> geven deze ontwerpprincipes richting aan het *hoe* — de concrete keuzes bij het bouwen van het stelsel.

---

## Kader 1 — GDI / Gemeenschappelijke Overheidsarchitectuur (GA)

### D-01 · Decentraal wat kan, centraal wat moet

**Betekenis:**  
Taken, bevoegdheden en voorzieningen worden belegd op het laagst mogelijke niveau dat nog doelmatig en doeltreffend is. Centrale voorzieningen worden ingericht als decentrale alternatieven aantoonbaar onvoldoende zijn — bijvoorbeeld vanwege schaalniveau, interoperabiliteitseisen of beveiligingsrisico's. Voor de GBO betekent dit: generieke functies (authenticatie, toegang, bronontsluiting) worden centraal ingericht; domeinspecifieke functies mogen bij de betrokken partij blijven.

**Toelichting voor GBO:**  
Bronhouders beheren zelf hun gegevens. De GBO biedt een centrale *integratielaag*, maar geen centrale *gegevensopslag*. Keuzes voor centrale voorzieningen worden expliciet gemotiveerd, maar kunnen ook op verzoek van bronhouders gemaakt worden.

**Bronnen:**  
- Gemeentewet art. 117 lid 2 / Provinciewet art. 115 lid 2 (subsidiariteitsbeginsel)  
- Code Interbestuurlijke Verhoudingen — "Decentraal wat kan, centraal wat moet"  
- GDI-Meerjarenvisie 2024–2028 (Bureau MIDO / BZK)  
- Architectuur Digitale Overheid 2030  

---

### D-02 · Afspraken gaan boven standaarden, standaarden gaan boven voorzieningen

**Betekenis:**  
De voorkeursvolgorde bij het realiseren van een generieke functie is:  
1. **Afspraken** — onderlinge afspraken tussen partijen zijn de lichtste en meest flexibele vorm;
2. **Standaarden** — als afspraken onvoldoende zijn, wordt een formele standaard vastgesteld;
3. **Voorzieningen** — pas als standaarden niet volstaan, wordt een gedeelde technische voorziening ingericht.

Dit principe voorkomt dat er onnodig zware centrale voorzieningen worden gebouwd die innovatie remmen en afhankelijkheden creëren.

**Toelichting voor GBO:**  
Kies bij elke nieuwe GBO-functie eerst de lichtste adequate oplossing. Sla stappen niet over. Documenteer waarom een hogere trede nodig is.

**Bronnen:**  
- GA Basisprincipes — principe D (NORA Online / Bureau MIDO)  
- MIDO-kader 2024 — principe "afspraken boven standaarden boven voorzieningen"  
- GDI Meerjarenvisie 2024–2028, §4 (principe U)  
- Computable / Manifestgroep: *'Afspraken boven standaarden boven voorzieningen'* (2017)  
- Digitaleoverheid.nl — GDI-beschrijving bouwstenentypen  

---

### D-03 · Gebruik landelijke generieke voorzieningen (GDI-bouwstenen) tenzij…

**Betekenis:**  
Overheidsorganisaties maken bij voorkeur gebruik van beschikbare GDI-bouwstenen (DigiD, eHerkenning, Digikoppeling, MijnOverheid, etc.) in plaats van eigen parallelle voorzieningen te bouwen. Afwijken is alleen toegestaan als de GDI-bouwsteen aantoonbaar niet voldoet aan de functionele of wettelijke eisen, en wordt gemotiveerd conform 'pas toe of leg uit'.

**Toelichting voor GBO:**  
Voor authenticatie: DigiD / eHerkenning / EUDIW. Voor transport: Digikoppeling REST-profiel. Voor gegevensuitwisseling: Digilevering/Digipoort waar van toepassing. Eigen voorzieningen zijn aanvullend, niet vervangend.

**Bronnen:**  
- GDI-Meerjarenvisie 2024–2028 (Bureau MIDO)  
- GDI Programmeringsplan 2024 (Rijksoverheid / MIDO)  
- Digitaleoverheid.nl — GDI-bouwstenoverzicht  
- NORA — gebruik generieke bouwstenen (BP07)  

---

### D-04 · Robuust, modulair en flexibel ontwerp

**Betekenis:**  
Het stelsel is opgebouwd uit losgekoppelde, vervangbare modules met heldere interfaces. Elk component kan onafhankelijk worden doorontwikkeld of vervangen zonder andere componenten te raken. Het stelsel heeft geen single point of failure en is ontworpen op continuïteit.

**Toelichting voor GBO:**  
Pas een gelaagde componentarchitectuur toe conform het NORA Vijflaagsmodel (interactie, procesinrichting, integratie, diensten, gegevensbronnen). Definieer expliciete API-contracten tussen lagen. Sla geen gegevens op die ook real-time bij de bron bevraagd kunnen worden.

**Bronnen:**  
- GA Basisprincipes — principe V (Bureau MIDO)  
- GDI-Meerjarenvisie 2024–2028  
- NORA Vijflaagsmodel (noraonline.nl)  
- GEMMA Informatiearchitectuurprincipes — componentgebaseerd werken (VNG Realisatie)  

---

## Kader 2 — NORA (Nederlandse Overheid Referentie Architectuur)

> De NORA is het overkoepelende architectuurkader voor de gehele Nederlandse overheid en daarmee het primaire inhoudelijke kader voor GBO na GDI. De principes die eerder onder Common Ground (VNG/GEMMA) waren ondergebracht, zijn hier opgenomen: de Common Ground informatiearchitectuurprincipes zijn in 2024/2025 formeel opgegaan in de vernieuwde GEMMA-architectuurprincipes, die onderdeel uitmaken van de NORA-familie. Waar relevant wordt de GEMMA-herkomst van een principe in de bronnen vermeld.

### D-05 · Gegevens bij de bron — geen onnodige kopieën

**Betekenis:**  
Gegevens worden zoveel mogelijk real-time bevraagd bij de bronhouder via API's, in plaats van gekopieerd naar lokale registers of tussenopslagplaatsen. Kopieën zijn tijdelijke uitzonderingen die expliciet worden gemotiveerd (bijv. technische onmogelijkheid van real-time bevraging) en worden beheerst.

**Toelichting voor GBO:**  
GBO fungeert als *integratielaag*, niet als *gegevensmagazijn*. Bronhouders (BRP, Belastingdienst, UWV, DUO, BAG/BRK) worden bevraagd via de gemeenschappelijke bronontsluiting-API. Tussenopslag is alleen toegestaan als performance of beschikbaarheid dit vereist, met expliciete AVG-grondslag.

**Bronnen:**  
- NORA NAP12 — Informeer bij de bron (noraonline.nl)  
- GEMMA Informatiearchitectuurprincipes — eenmalige vastlegging (VNG Realisatie, opgegaan in GEMMA 2024/2025)  
- Haal Centraal-programma (VNG Realisatie) — "bevragen bij de bron"  
- developer.overheid.nl — Vorderingenoverzicht Rijk (casestudy)  

---

### D-06 · Componentgebaseerd werken — herbruikbare bouwstenen

**Betekenis:**  
Functionaliteit wordt opgesplitst in kleine, herbruikbare componenten die elk één verantwoordelijkheid hebben (single responsibility). Componenten zijn interoperabel via gestandaardiseerde API's en kunnen door verschillende afnemers worden hergebruikt zonder afhankelijkheid van één leverancier.

**Toelichting voor GBO:**  
Denk aan afzonderlijke componenten voor: authenticatie, toestemmingsbeheer, bronontsluiting per registratie, pseudoniemvertaling, logging. Elk component heeft een eigen beheerder en een stabiel API-contract.

**Bronnen:**  
- NORA NAP07 — Bouw diensten modulair op (noraonline.nl)  
- NORA Vijflaagsmodel — serviceoriëntatie als leidende architectuurstijl  
- GEMMA Informatiearchitectuurprincipes — componentgebaseerd werken (VNG Realisatie, opgegaan in GEMMA 2024/2025)  

---

### D-07 · Open source tenzij er zwaarwegende redenen zijn om dat niet te doen

**Betekenis:**  
Componenten en standaarden worden bij voorkeur als open source ontwikkeld en gepubliceerd, zodat samenwerking, hergebruik en transparantie worden bevorderd. Hierdoor neemt de kans op vendor lock-in af en kunnen marktpartijen en andere overheden bijdragen.

**Bronnen:**  
- NORA — gebruik open standaarden en open source (noraonline.nl)  
- Werkagenda Waardengedreven Digitaliseren (BZK)  
- GEMMA Realisatieprincipes — "Open Source Software wordt gestimuleerd" (VNG Realisatie)  

---

### D-13 · Standaardiseer waar mogelijk, maak uitzonderingen expliciet en zorg dat deze in bestaande gremia landen

**Betekenis:**  
Hergebruik van bestaande standaarden, patronen en voorzieningen heeft sterk de voorkeur boven het ontwikkelen van nieuwe oplossingen. Als een uitzondering nodig is, wordt deze gedocumenteerd als architectuurbeslissing (ADR — Architecture Decision Record) met een onderbouwde motivatie. Tevens wordt beschreven hoe de uitzondering opgenomen moet worden in een bestaand afsprakenstelsel, in regulier beheer genomen wordt of opgeheven wordt.

**Toelichting voor GBO:**  
Stel een ADR-register bij als onderdeel van de GBO-documentatie. Elke afwijking van een verplichte standaard of een vastgesteld architectuurprincipe krijgt een eigen ADR met: context, beslissing, overwogen alternatieven, en consequenties. Tevens wordt beschreven hoe GBO-specifieke oplossingen overgaan in reguliere afspraken, standaarden of voorzieningen - of uitgefaseerd worden.

**Bronnen:**  
- NORA BP09 — Pas open standaarden toe  
- NORA Architectuurprincipes (noraonline.nl)  
- GA Basisprincipes — principe D & H (Bureau MIDO)  

---

### D-14 · Interoperabiliteit — semantische en technische afstemming

**Betekenis:**  
Gegevens die via GBO worden uitgewisseld, zijn semantisch eenduidig vastgelegd en zijn zoveel mogelijk gebaseerd op bestaande informatiemodellen (waaronder GGM, NEN3610 en IMGeo) en bijbehorende standaarden voor datamodellering en ontologieën (zoals MIM, UML en RDF/SHACL). Technische koppelvlakken zijn gebaseerd op deze informatiemodellen en gespecificeerd volgens de OpenAPI Specification, waardoor afnemers gegevens machineleesbaar kunnen verwerken zonder aanvullende interpretatie.

**Bronnen:**  
- NORA Domeinarchitectuur Gegevensuitwisseling — semantiek & validatie  
- Gemeentelijk Gegevensmodel (GGM) — VNG  
- Forum Standaardisatie — standaarden voor semantische interoperabiliteit  
- EU Interoperabiliteitsraamwerk (EIF) / Interoperable Europe Act  

---

## Kader 3 — Forum Standaardisatie / Kennisplatform API's

### D-08 · Pas toe of leg uit — verplichte open standaarden

**Betekenis:**  
Overheidsorganisaties zijn verplicht de open standaarden op de 'pas toe of leg uit'-lijst van Forum Standaardisatie toe te passen. Afwijken is alleen toegestaan als er een zwaarwegende en gedocumenteerde reden is. Voor GBO gelden in elk geval als verplicht: REST API Design Rules, NL GOV OAuth 2.0-profiel, NL GOV OIDC-profiel, Digikoppeling, MIM, DCAT2, SHACL en — zodra beschikbaar — OpenID4VCI/OpenID4VP.

**Toelichting voor GBO:**  
Neem in het stelselontwerp een expliciete mapping op van GBO-koppelvlakken naar verplichte standaarden. Documenteer elk koppelvlak dat afwijkt van de 'pas toe'-standaard.

**Bronnen:**  
- Forum Standaardisatie — 'Pas toe of leg uit'-lijst  
- Logius API-standaarden: REST API Design Rules, NL GOV OAuth 2.0, NL GOV OIDC  
- GDI-Meerjarenvisie 2024–2028 — collectieve voorzieningen "pas toe of leg uit"  
- NORA BP09 — Pas open standaarden toe  

---

### D-09 · API-first — ontsluiting via gestandaardiseerde API's

**Betekenis:**  
Elke GBO-functie en elke bronontsluiting wordt primair aangeboden als een goed gedocumenteerde, versie-beheerde API. De API is het primaire koppelvlak; gebruikersinterfaces en batchprocessen zijn secundair. API's worden ontworpen conform de NLGov REST API Design Rules.

**Toelichting voor GBO — REST vs. GraphQL:**
De NLGov REST API Design Rules zijn verplicht ('pas toe of leg uit') voor REST-API's. GraphQL valt buiten deze verplichting maar is niet verboden. Een keuze voor GraphQL vereist:  
- Expliciete motivatie (bijv. flexibele selectie van attributen reduceert dataminimalisatierisico's);  
- Aantoonbare naleving van vergelijkbare beveiligings-, autorisatie- en auditprincipes;  
- Documentatie conform OpenAPI Specification of vergelijkbaar schema.  

Overweeg een hybride aanpak: REST-endpoints voor standaard bevragingen (conform verplichte standaard), GraphQL voor flexibele attribuutselectie door afnemers.

**Bronnen:**  
- NLGov REST API Design Rules (Forum Standaardisatie, verplicht 'pas toe of leg uit' — Logius)  
- Kennisplatform API's (developer.overheid.nl)  
- GEMMA Informatiearchitectuurprincipes — "maximaal openstellen voor hergebruik via API's"  
- EU Open Data Richtlijn — API-verplichting voor overheidsdata (art. 5)  

---

## Kader 4 — Informatiebeveiliging &amp; Privacy (BIO / AVG / NIS2)

### D-10 · Informatiebeveiliging en privacy by design

**Betekenis:**  
Beveiligings- en privacymaatregelen worden vanaf het eerste ontwerp ingebakken in het stelsel — niet achteraf toegevoegd als laag. Dit omvat: minimale gegevensverwerking, pseudonimisering, toegangsbeperking op need-to-know-basis, encryptie in transit en at rest, en expliciete beveiligingsarchitectuur per component.

**Toelichting voor GBO:**  
Voer voor elk nieuw component een Data Protection Impact Assessment (DPIA) uit. Stel een expliciete beveiligingsclassificatie vast per gegevenstype. Ontwerp de toegangslaag op basis van zero-trust-principes (geen impliciete vertrouwensrelaties tussen componenten).

**Bronnen:**  
- AVG art. 25 — privacy by design & by default  
- BIO2 (Baseline Informatiebeveiliging Overheid 2) — gebaseerd op ISO/IEC 27001:2022 & 27002:2022  
- GA Basisprincipes — principe H (privacy by design, security by design)  
- NIS2-richtlijn (EU) 2022/2555 — verplichting beveiligingsmaatregelen vitale infrastructuur  
- Cyberbeveiligingswet (Cbw, implementatie NIS2)  

---

### D-11 · Least privilege — toegang op basis van minimale rechten

**Betekenis:**  
Elke afnemer, component en beheerder krijgt uitsluitend de toegang die strikt noodzakelijk is voor de uit te voeren taak. Autorisaties zijn granulaar, tijdgebonden en worden actief ingetrokken als ze niet meer nodig zijn. Er zijn geen statische 'admin'-accounts met brede rechten.

**Toelichting voor GBO:**  
Implementeer OAuth 2.0-scopes per API-endpoint en per gegevenstype. Koppel autorisaties aan grondslag en doelbinding (zie architectuurprincipe P-01). Log elke autorisatiebeslissing.

**Bronnen:**  
- BIO2 — toegangsbeheer (ISO 27002 domein 8)  
- NL GOV Assurance profile for OAuth 2.0 (Logius)  
- AVG art. 5 lid 1 sub b (doelbinding) & sub c (dataminimalisatie)  

---

### D-12 · Aantoonbare veiligheid — audit en pen-testing

**Betekenis:**  
De beveiliging van het stelsel wordt periodiek getoetst door onafhankelijke audits en penetratietests. Bevindingen worden transparant gerapporteerd en aantoonbaar opgevolgd. Het stelsel voldoet aan de BIO2-normen en — voor vitale functies — aan de eisen van de Cyberbeveiligingswet.  
Ook deelnemers moeten aantoonbaar voldoen aan beveiligings- en privacy-eisen bij aansluiting op het stelsel.

**Bronnen:**  
- BIO2 (Baseline Informatiebeveiliging Overheid 2) — risicomanagement & audit  
- NIS2-richtlijn / Cyberbeveiligingswet — zorgplicht en meldplicht  
- ISO/IEC 27001:2022 — ISMS-certificering  

---

## Overzichtstabel

| ID   | Principe                                                        | Cluster                           | Primair kader              |
|------|-----------------------------------------------------------------|-----------------------------------|----------------------------|
| [D-01](#d-01-decentraal-wat-kan-centraal-wat-moet) | Decentraal wat kan, centraal wat moet                           | Governance & organisatie          | GDI / GA / Gemeentewet     |
| [D-02](#d-02-afspraken-gaan-boven-standaarden-standaarden-gaan-boven-voorzieningen) | Afspraken > standaarden > voorzieningen                         | Governance & organisatie          | GDI / GA (MIDO)            |
| [D-03](#d-03-gebruik-landelijke-generieke-voorzieningen-gdi-bouwstenen-tenzij) | Gebruik landelijke GDI-bouwstenen tenzij…                       | Governance & organisatie          | GDI / NORA                 |
| [D-04](#d-04-robuust-modulair-en-flexibel-ontwerp) | Robuust, modulair en flexibel ontwerp                           | Technische architectuur           | GDI / NORA                 |
| [D-05](#d-05-gegevens-bij-de-bron-geen-onnodige-kopieen) | Gegevens bij de bron — geen onnodige kopieën                    | Gegevensarchitectuur              | NORA (NAP12) / GEMMA       |
| [D-06](#d-06-componentgebaseerd-werken-herbruikbare-bouwstenen) | Componentgebaseerd werken — herbruikbare bouwstenen             | Technische architectuur           | NORA (NAP07) / GEMMA       |
| [D-07](#d-07-open-source-tenzij-er-zwaarwegende-redenen-zijn-om-dat-niet-te-doen) | Open source tenzij zwaarwegende redenen                         | Technische architectuur           | NORA / BZK                 |
| [D-08](#d-08-pas-toe-of-leg-uit-verplichte-open-standaarden) | Pas toe of leg uit — verplichte open standaarden                | Standaarden & koppelvlakken       | Forum Standaardisatie      |
| [D-09](#d-09-api-first-ontsluiting-via-gestandaardiseerde-apis) | API-first — NLGov REST API Design Rules (en GraphQL-afweging)  | Standaarden & koppelvlakken       | Forum Standaardisatie / EU |
| [D-10](#d-10-informatiebeveiliging-en-privacy-by-design) | Informatiebeveiliging en privacy by design                      | Beveiliging & privacy             | BIO2 / AVG / NIS2          |
| [D-11](#d-11-least-privilege-toegang-op-basis-van-minimale-rechten) | Least privilege — toegang op basis van minimale rechten         | Beveiliging & privacy             | BIO2 / OAuth / AVG         |
| [D-12](#d-12-aantoonbare-veiligheid-audit-en-pen-testing) | Aantoonbare veiligheid — audit en pen-testing                   | Beveiliging & privacy             | BIO2 / NIS2 / Cbw          |
| [D-13](#d-13-standaardiseer-waar-mogelijk-maak-uitzonderingen-expliciet-en-zorg-dat-deze-in-bestaande-gremia-landen) | Standaardiseer waar mogelijk, uitzonderingen expliciet (ADR)    | Kwaliteit & beheersbaarheid       | NORA / GA                  |
| [D-14](#d-14-interoperabiliteit-semantische-en-technische-afstemming) | Interoperabiliteit — semantische en technische afstemming       | Kwaliteit & beheersbaarheid       | NORA / EIF                 |

---

## Noot: REST vs. GraphQL voor GBO

De NLGov REST API Design Rules (ADR) staan verplicht op de 'pas toe of leg uit'-lijst en zijn van toepassing **als** REST wordt ingezet. De standaard verplicht het gebruik van REST zelf niet — het gebruik van GraphQL is daarmee formeel niet in strijd.

Voor GBO is een **hybride aanpak** verdedigbaar:

| Criterium             | REST (NLGov ADR)                    | GraphQL                                    |
|-----------------------|-------------------------------------|--------------------------------------------|
| Verplichte standaard  | Ja (bij gebruik van REST)           | Nee (geen verplichte NL Gov-standaard)     |
| Dataminimalisatie     | Vaste response-structuur            | Client selecteert exact benodigde velden   |
| Beveiligingsvolwassenheid | Hoog (OAuth 2.0-profiel beschikbaar) | Gemiddeld (vereist extra scope-mapping) |
| Tooling & ecosystem   | Breed beschikbaar                   | Breed, maar minder overheid-specifiek      |

Om GraphQL in zijn volle breedte op een gestandaardiseerde manier te kunnen gebruiken is een GraphQL-profiel op de Digikoppeling-standaard gewenst. Er zijn meer trajecten bij de overheid die het gebruik van GraphQL onderzoeken (doorontwikkeling KArWeI, BKWI) of zelfs al toepassen (iWlz). Daarom zoekt GBO de samenwerking met deze partijen om tot een standaard te komen. Om bronhouders te ontlasten wordt tooling beschikbaar gesteld om met de huidige koppelvlakken aan te sluiten op GBO.

# Architectuurprincipes GBO — Gegevensuitwisseling

> Overzicht van de meest relevante architectuurprincipes voor de GBO,
> gegroepeerd per juridisch/beleids­kader. Bedoeld als basis voor de uitwerking van de oplossingsrichting en het opstellen van de ontwerpprincipes.

---

## Kader 1 — AVG (Algemene Verordening Gegevensbescherming)

### P-01 · Grondslag vóór uitwisseling

**Stelling:** Elke gegevensuitwisseling vereist een expliciete wettelijke grondslag en doelbinding, die vooraf door de afnemer worden vastgesteld en aantoonbaar gemaakt.

**Bronnen:**  
- AVG art. 5 & 6  
- NORA Domeinarchitectuur Gegevensuitwisseling §4.2  
- NORA NAP05 — Nauwkeurig  

---

### P-02 · Minimale gegevensverwerking (dataminimalisatie)

**Stelling:** Er worden niet meer persoonsgegevens uitgewisseld dan strikt noodzakelijk voor het doel. Het stelsel ondersteunt dit door het leveren van attributen of specifieke gegevenssets in plaats van ruwe (basis)registratie-dumps.

**Bronnen:**  
- AVG art. 5 lid 1 sub c  
- NORA NAP07 — Minimale gegevensverwerking  

---

### P-03 · Privacy by design & by default

**Stelling:** Privacybeschermende maatregelen — waaronder pseudonimisering — zijn ingebakken in het ontwerp van het stelsel, niet achteraf toegevoegd. Welke maatregelen nodig zijn kan per situatie verschillen, maar het moet altijd vanaf het ontwerp meegenomen worden.

**Bronnen:**  
- AVG art. 25  
- NORA Domeinarchitectuur Gegevensuitwisseling §4.2  

---

### P-12 · Logging & onweerlegbaarheid van gegevensuitwisselingen

**Stelling:** Elke (poging tot) gegevensuitwisseling wordt gelogd (metadata van verzending en ontvangst) zodat achteraf aantoonbaar is dat uitwisselingen hebben plaatsgevonden en door wie.

**Bronnen:**  
- AVG art. 5 lid 2 (verantwoordingsplicht)  
- NORA Domeinarchitectuur Gegevensuitwisseling §4.2  
- BIO (Baseline Informatiebeveiliging Overheid)  

---

### P-13 · Transparantie & inzage voor de burger

**Stelling:** De burger heeft recht op inzage in welke gegevens over hem / haar zijn uitgewisseld, met wie en op welke grondslag.

**Bronnen:**  
- AVG art. 13–15 (informatieplicht, inzagerecht)  
- Programma Regie op Gegevens (BZK)  
- NORA BP03 — Ontvanger is op de hoogte  

---

## Kader 2 — NORA (Nederlandse Overheids Referentie Architectuur)

### P-08 · Eenmalige vastlegging, meervoudig gebruik (EV-MG)

**Stelling:** Gegevens worden eenmalig bij de bron vastgelegd en vanuit die bron hergebruikt. Het stelsel bevordert gegevensdeling in plaats van gegevens kopiëren.

**Bronnen:**  
- NORA BP08 — Gebruik open standaarden  
- NORA NAP10 — Neem gegevens als fundament  
- FDS-architectuurprincipes  

---

### P-09 · Open standaarden & leveranciersonafhankelijkheid

**Stelling:** Het stelsel maakt gebruik van open standaarden (zoals OAuth 2.0, Digikoppeling, OpenID4VCI/OpenIDVP) van de Forum Standaardisatie 'pas toe of leg uit'-lijst, zodat vendor lock-in wordt voorkomen.

**Bronnen:**  
- NORA Domeinarchitectuur Gegevensuitwisseling §4.2  
- Forum Standaardisatie (lijsten verplichte/aanbevolen standaarden)  
- EU Data Act hfst. VIII (interoperabiliteit)  

---

### P-11 · FAIR-principes voor gegevens

**Stelling:** Gegevens in het stelsel zijn voorzien van metadata die ze vindbaar en herbruikbaar maakt conform de FAIR-principes, inclusief semantische standaarden (GGM, RDF, SHACL).

**Bronnen:**  
- FAIR-principes (Wilkinson et al., 2016)  
- NORA NAP10 — Neem gegevens als fundament  
- FDS-architectuurprincipes  

---

### P-14 · Scheiding van generieke en niet-generieke functies

**Stelling:** De GBO beperkt zich tot generieke functies die overheidsbreed noodzakelijk zijn. Domeinspecifieke functionaliteit is de verantwoordelijkheid van de betreffende sector of partij.

**Bronnen:**  
- NORA subsidiariteitsbeginsel  
- GDI-Architectuur Basisprincipes (Bureau MIDO)  
- Architectuur Digitale Overheid 2030  

---

### P-15 · Ontkoppeling voor wendbaarheid en robuustheid

**Stelling:** Afnemers, de generieke kern en bronhouders zijn technisch ontkoppeld via gestandaardiseerde koppelvlakken, zodat componenten onafhankelijk kunnen worden doorontwikkeld en vervangen.

**Bronnen:**  
- GDI-Architectuur Basisprincipes — "Gebruik van flexibele en ontkoppelde functies"  
- NORA BP09 — Pas open standaarden toe  

---

## Kader 3 — Wet digitale overheid (Wdo) & PKI

### P-05 · Erkende authenticatiemiddelen op passend betrouwbaarheidsniveau

**Stelling:** Toegang tot het stelsel vereist een erkend inlogmiddel (DigiD, eHerkenning, EUDIW) op het betrouwbaarheidsniveau dat past bij het risiconiveau van de dienst.

**Bronnen:**  
- Wet digitale overheid (Wdo) 2023  
- eIDAS Verordening (EU) 2024/1183  
- NORA Authenticatie(middelen)beheer  

---

### P-07 · Vertrouwensstelsel op basis van PKI en erkende toetredingseisen

**Stelling:** Alle deelnemende partijen (bronhouders, afnemers, private partijen) voldoen aan toetredingseisen en zijn aantoonbaar betrouwbaar via PKIoverheid-certificaten en/of bestaande stelsels (zoals sectorale afsprakenstelsels), die door het stelselbeheer voldoende vertrouwd worden. In de toekomst kunnen daar EUDI en/of European Business Wallet bij komen.

**Bronnen:**  
- PKIoverheid-stelsel  
- Wet digitale overheid (Wdo)  
- Afsprakenstelsel Elektronische Toegangsdiensten (eHerkenning)  

---

## Kader 4 — eIDAS2 & Europese digitale identiteit

### P-06 · Ondersteuning van de Europese digitale identiteitswallet (EUDIW)

**Stelling:** Het stelsel is ontworpen om in de toekomst attributen uit te wisselen via de EU Digital Identity Wallet (OpenID4VCI/OpenID4VP), zodat grensoverschrijdende dienstverlening mogelijk is.

**Bronnen:**  
- eIDAS2 Verordening (EU) 2024/1183  
- EU Architecture Reference Framework (ARF)  
- Single Digital Gateway (SDG) Verordening  

---

## Kader 5 — EU Data Governance Act (DGA) & Data Act

### P-10 · Datasoevereiniteit: de bronhouder behoudt regie

**Stelling:** Bronhouders behouden volledige zeggenschap over hun gegevens en de condities waaronder die worden ontsloten. GBO heeft geen eigenaarschap over de data die wordt ontsloten wordt, maar faciliteert deze enkel.

**Bronnen:**  
- EU Data Governance Act (DGA) Verordening 2022/868  
- FDS Design Principles for Data Spaces — principe 1  
- NORA Domeinarchitectuur Gegevensuitwisseling §4.2  

---

### P-16 · Eerlijke en niet-discriminerende toegang voor private partijen

**Stelling:** Private partijen kunnen deelnemen aan het stelsel onder transparante, proportionele en niet-discriminerende toetredingsvoorwaarden, mits zij voldoen aan de gestelde beveiligings- en privacynormen en géén BSN verwerken, behalve als daar een wettelijke grondslag voor bestaat.

**Bronnen:**  
- EU Data Governance Act art. 5 (condities hergebruik)  
- Wabb art. 10 (BSN-verbod private partijen)  
- DvTP-kader (Data delen via Toestemming met Private partijen)  

---

## Kader 6 — Wet algemene bepalingen BSN (Wabb) & Regie op Gegevens

### P-04 · BSN-loos voor private afnemers (pseudonimisering)

**Stelling:** Private partijen mogen het BSN niet verwerken (Wabb art. 10). Het GBO levert aan private afnemers uitsluitend sectorale of context-specifieke pseudoniemen; de BSN-koppeling blijft binnen de vertrouwde kern. NB: als private partijen een wettelijke grondslag hebben om het BSN wel te verwerken, kan dit wel gedeeld worden.

**Bronnen:**  
- Wet algemene bepalingen BSN (Wabb) art. 10  
- AVG art. 25 (pseudonimisering)  
- BSNk / Polymorfe pseudonimisering  

---

## Overzichtstabel

| ID   | Principe                                                        | Cluster                        | Primair kader         |
|------|-----------------------------------------------------------------|--------------------------------|-----------------------|
| [P-01](#p-01-grondslag-voor-uitwisseling) | Grondslag vóór uitwisseling                                     | Privacy & gegevensbescherming  | AVG                   |
| [P-02](#p-02-minimale-gegevensverwerking-dataminimalisatie) | Minimale gegevensverwerking                                     | Privacy & gegevensbescherming  | AVG                   |
| [P-03](#p-03-privacy-by-design-by-default) | Privacy by design & by default                                  | Privacy & gegevensbescherming  | AVG                   |
| [P-04](#p-04-bsn-loos-voor-private-afnemers-pseudonimisering) | BSN-loos voor private afnemers                                  | Privacy & gegevensbescherming  | Wabb / AVG            |
| [P-05](#p-05-erkende-authenticatiemiddelen-op-passend-betrouwbaarheidsniveau) | Erkende authenticatiemiddelen op passend niveau                 | Identiteit & vertrouwen        | Wdo / eIDAS2          |
| [P-06](#p-06-ondersteuning-van-de-europese-digitale-identiteitswallet-eudiw) | Ondersteuning EUDIW                                             | Identiteit & vertrouwen        | eIDAS2 / ARF          |
| [P-07](#p-07-vertrouwensstelsel-op-basis-van-pki-en-erkende-toetredingseisen) | Vertrouwensstelsel PKI & toetredingseisen                       | Identiteit & vertrouwen        | Wdo / PKI             |
| [P-08](#p-08-eenmalige-vastlegging-meervoudig-gebruik-ev-mg) | Eenmalige vastlegging, meervoudig gebruik                       | Gegevensuitwisseling           | NORA / FDS            |
| [P-09](#p-09-open-standaarden-leveranciersonafhankelijkheid) | Open standaarden & leveranciersonafhankelijkheid                | Gegevensuitwisseling           | NORA / Data Act       |
| [P-10](#p-10-datasoevereiniteit-de-bronhouder-behoudt-regie) | Datasoevereiniteit: bronhouder behoudt regie                    | Gegevensuitwisseling           | DGA / Data Act        |
| [P-11](#p-11-fair-principes-voor-gegevens) | FAIR-principes voor gegevens                                    | Gegevensuitwisseling           | NORA / FAIR           |
| [P-12](#p-12-logging-onweerlegbaarheid-van-gegevensuitwisselingen) | Logging & onweerlegbaarheid                                     | Logging, audit & transparantie | AVG / NORA            |
| [P-13](#p-13-transparantie-inzage-voor-de-burger) | Transparantie & inzage voor de burger                           | Logging, audit & transparantie | AVG / Regie op Gegev. |
| [P-14](#p-14-scheiding-van-generieke-en-niet-generieke-functies) | Scheiding generieke en niet-generieke functies                  | Architectuur & governance      | NORA / GDI            |
| [P-15](#p-15-ontkoppeling-voor-wendbaarheid-en-robuustheid) | Ontkoppeling voor wendbaarheid en robuustheid                   | Architectuur & governance      | NORA / GDI            |
| [P-16](#p-16-eerlijke-en-niet-discriminerende-toegang-voor-private-partijen) | Eerlijke toegang voor private partijen                          | Architectuur & governance      | DGA / Wabb / DvTP     |

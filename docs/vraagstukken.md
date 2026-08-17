# Open besluiten

Dit hoofdstuk bevat de architectuurbesluiten die nog nodig zijn voor verdere uitwerking. Detailvragen worden zoveel mogelijk bij de betreffende stelselfunctie behandeld. Na besluitvorming wordt de uitkomst verwerkt in die stelselfunctie en blijft hier alleen een verwijzing naar het besluit bestaan.

## Besluitregister

| ID | Onderwerp | Betrokken stelselfuncties | Te nemen besluit | Voorkeursrichting in deze PSA | Beslissende of coördinerende partijen |
|---|---|---|---|---|---|
| **B-01** | Governance GBO-afspraken | Alle | In welk bestaand stelsel landen GBO-specifieke afspraken en wie ziet toe op naleving? | FDS als basis voor bronontsluiting en generieke gegevensdeling, aangevuld met GDI- en domeingovernance. | BZK, FDS/IBDS, betrokken beheerorganisaties |
| **B-02** | API-profiel bronontsluiting | S07 | Hoe kan GraphQL als voorkeursprofiel voorgesteld en uitgewerkt worden en hoe verhoudt dit zich tot bestaande API-standaarden? | Standaardiseer functionele eisen voor selectieve bevraging; werk GraphQL uit als voorkeursprofiel met een expliciete pas-toe-of-leg-uitroute. | Logius, FDS, Forum Standaardisatie, Kennisplatform API's |
| **B-03** | Dienstencatalogus | S05, S06, S07, S10 | Is de catalogus centraal, federatief of onderdeel van een bestaande FDS-catalogus? | Federatief inhoudsbeheer met een gemeenschappelijk profiel en centrale vindbaarheid. | FDS, domeinen, bronhouders |
| **B-04** | PDP-inrichting | S05 | Wordt besluitvorming per bronhouder, gedeeld of hybride ingericht? | Sta meerdere implementatievarianten toe onder één gestandaardiseerd PEP-PDP-koppelvlak en dezelfde beleidseisen. | Bronhouders, FDS/GDI-governance |
| **B-05** | Policy-governance | S05, S06 | Wie schrijft, beoordeelt en stelt beleid vast en wie beheert de distributie? | Scheid inhoudelijk eigenaarschap van technisch beheer; beleid per dienst onder verantwoordelijkheid van bevoegde publieke partijen. | Vakdepartementen, bronhouders, FDS/GDI |
| **B-06** | Toestemming bij DvTP | S01, S02 | Welke wettelijke grondslag en waarborgen gelden en is een centrale voorziening verplicht? | Centrale of landelijk samenhangende toestemmingsvoorziening, mits wettelijk verankerd en met gelijkwaardig alternatief. | Wetgever, BZK, toezichthouders, bronhouders |
| **B-07** | Pseudonieme identiteit | S01, S03 | Waar worden pseudonieme verwijzingen beheerd en hoe worden zij aan toestemming en diensten gekoppeld? | Geen BSN in het toestemmingsregister; gebruik een beveiligde pseudonieme verwijzing met minimale centrale koppelinformatie. | Logius/BSNk, beheerder toestemmingsvoorziening |
| **B-08** | Identity matching | S03 | Welke functie mag een buitenlandse of walletidentiteit aan een BSN koppelen? | Gebruik een erkende, afzonderlijk bestuurde functie met hoge assurance en expliciete foutafhandeling. | BZK, Logius/RvIG, eIDAS-governance |
| **B-09** | Vertrouwensstelsel private partijen | S04 | Welke partijen mogen deelnemen en welk stelsel beheert toelating en toezicht? | Hergebruik FDS-functies waar mogelijk, aangevuld met een specifiek juridisch en organisatorisch kader voor private dienstverleners. Sluit waar mogelijk aan bij bestaande (sectorale) vertrouwensstelsels. | BZK, FDS, sectoren, toezichthouders |
| **B-10** | Logging en burgerinzage | S09 | Is centrale aggregatie nodig en waar krijgt de burger inzage? | Decentraal loggen, federatief correleren; centrale opslag alleen bij aangetoonde noodzaak. | BZK, Logius, bronhouders, AP |
| **B-11** | Semantische governance | S10 | Wie beheert begrippen, schema's en mappings en hoe worden wijzigingen vastgesteld? | Domeinen beheren inhoud; FDS beheert profielen, vindbaarheid en interoperabiliteitsregels. | Geonovum, FDS, domeinen, bronhouders |
| **B-12** | OOTS-functiegrenzen | S08, S10 | Welke functies liggen in OOTS-V, de OOTS-adapter en de mappingvoorziening? | Houd Europese proces- en transportfuncties in de Basisinrichting OOTS; gebruik GBO voor bronkoppeling en (optionele) semantische transformatie. | BZK/EZK, bNC-SDG |
| **B-13** | PubEAA-uitgiftemodel | S11 | Wordt uitgifte centraal, decentraal of federatief ingericht? | Ondersteun alle varianten via gemeenschappelijke profielen; besluit per attribuuttype en verantwoordelijke bronhouder. | BZK, RDI, bronhouders, nationale EUDI-governance |
| **B-14** | ASI-provider | S11 | Wie biedt verify- en retrievefuncties aan QTSP's en onder welke voorwaarden? | Een of meer gecertificeerde ASI-providers met inhoudelijke verantwoordelijkheid bij bronhouders. | BZK, RDI, bronhouders, QTSP's |
| **B-15** | Start van attestatie-uitgifte | S11 | Start de gebruikersreis bij wallet, bronhouder, QTSP of dienstverlener? | Maak meerdere gestandaardiseerde initiatieroutes mogelijk; voorkom dat één gebruikersinterface architectuurbepalend wordt. | EUDI-Wallet-governance, bronhouders, QTSP's |
| **B-16** | GBO-vertaallaag | S07 | Is de vertaallaag een tijdelijke overgangsvoorziening of structurele gedeelde dienst? | Tijdelijk of optioneel, met expliciete exitcriteria en zonder afhankelijkheid voor de doelarchitectuur. | GBO-project, FDS, bronhouders |
| **B-17** | Beheer referentiecomponenten | Alle | Welke componenten worden overgedragen, ondersteund of uitgefaseerd? | Per component vooraf een landingsplan, acceptatiecriteria en eindverantwoordelijke vaststellen. | GBO-project, beoogde beheerders |
| **B-18** | Terugmelden van fouten of vermoedelijke onjuistheden | EUDI-Wallet, DvTP | Hoe worden fouten en waarschijnlijke onjuistheden terug gemeld aan de bronhouder? | Nog niet uitgewerkt. | Nog vast te stellen |


## Werkwijze voor besluitvorming

Voor ieder besluit wordt een Architecture Decision Record opgesteld met:

- context en probleemstelling;
- toepasselijke principes en wettelijke kaders;
- betrokken rollen en verantwoordelijkheden;
- onderzochte alternatieven;
- keuze en onderbouwing;
- gevolgen voor generieke functies, stelselfuncties en documenten;
- risico's en mitigerende maatregelen;
- eigenaar, datum en heroverwegingsmoment.

Een besluit wordt pas als afgerond beschouwd als het ook is verwerkt in de relevante PSA-paragraaf, het globaal ontwerp indien nodig, en de aansluitende technische of semantische documentatie.

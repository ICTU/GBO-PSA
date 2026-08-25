# Open besluiten

Dit hoofdstuk bevat de architectuurbesluiten die nog nodig zijn voor de verdere uitwerking. De betreffende stelselfunctie behandelt detailvragen zoveel mogelijk zelf. Na een besluit verwerkt de PSA de uitkomst in die stelselfunctie. In dit hoofdstuk blijft daarna alleen een verwijzing naar het besluit staan.

## Besluitregister

| ID | Onderwerp | Betrokken stelselfuncties | Te nemen besluit | Voorkeursrichting in deze PSA | Beslissende of coördinerende partijen |
|---|---|---|---|---|---|
| **B-01** | Governance GBO-afspraken | Alle | In welk bestaand stelsel landen GBO-specifieke afspraken? Wie ziet toe op naleving? | FDS vormt de basis voor bronontsluiting en generieke gegevensdeling. GDI- en domeingovernance vullen dit aan. | BZK, FDS/IBDS, betrokken beheerorganisaties |
| **B-02** | API-profiel bronontsluiting | S07 | Hoe kan GraphQL als voorkeursprofiel worden uitgewerkt? Hoe verhoudt GraphQL zich tot bestaande API-standaarden? | Functionele eisen voor selectieve bevraging worden gestandaardiseerd. GraphQL is het voorkeursprofiel met een expliciete pas-toe-of-leg-uitroute. | Logius, FDS, Forum Standaardisatie, Kennisplatform API's |
| **B-03** | Dienstencatalogus | S05, S06, S07, S10 | Is de catalogus centraal, federatief of onderdeel van een bestaande FDS-catalogus? | Inhoudelijk beheer is federatief. Een gemeenschappelijk profiel zorgt voor centrale vindbaarheid. | FDS, domeinen, bronhouders |
| **B-04** | PDP-inrichting | S05 | Wordt besluitvorming per bronhouder, gedeeld of hybride ingericht? | Meerdere implementatievarianten zijn mogelijk onder één gestandaardiseerd PEP-PDP-koppelvlak en dezelfde beleidseisen. | Bronhouders, FDS/GDI |
| **B-05** | Policy-governance | S05, S06 | Wie schrijft, beoordeelt en stelt beleid vast? Wie beheert de distributie? | Inhoudelijk eigenaarschap en technisch beheer zijn gescheiden. Bevoegde publieke partijen zijn verantwoordelijk voor beleid per dienst. | Vakdepartementen, bronhouders, FDS/GDI |
| **B-06** | Toestemming bij DvTP | S01, S02 | Welke wettelijke grondslag en waarborgen gelden? Is een centrale voorziening verplicht? | Een centrale of landelijk samenhangende toestemmingsvoorziening heeft de voorkeur. Dit vereist wettelijke verankering en een gelijkwaardig alternatief. | Wetgever, BZK, toezichthouders, bronhouders |
| **B-07** | Pseudonieme identiteit | S01, S03 | Waar worden pseudonieme verwijzingen beheerd? Hoe worden zij aan toestemming en diensten gekoppeld? | Het toestemmingsregister bevat geen BSN. Een beveiligde pseudonieme verwijzing bevat zo weinig mogelijk centrale koppelinformatie. | Logius/BSNk, beheerder toestemmingsvoorziening |
| **B-08** | Identity matching | S03 | Welke functie mag een buitenlandse of walletidentiteit aan een BSN koppelen? | Een erkende en afzonderlijk bestuurde functie voert de koppeling uit. Deze functie heeft hoge assurance en expliciete foutafhandeling. | BZK, Logius/RvIG, eIDAS-governance |
| **B-09** | Vertrouwensstelsel private partijen | S04 | Welke partijen mogen deelnemen? Welk stelsel beheert toelating en toezicht? | GBO gebruikt FDS-functies waar mogelijk. Voor private dienstverleners is aanvullend een juridisch en organisatorisch kader nodig.<br>Dit kader sluit waar mogelijk aan op bestaande sectorale vertrouwensstelsels. | BZK, FDS, sectoren, toezichthouders |
| **B-10** | Logging en burgerinzage | S09 | Is centrale aggregatie nodig? Waar krijgt de burger inzage? | Logging is decentraal en correlatie is federatief. Centrale opslag is alleen toegestaan bij een aangetoonde noodzaak. | BZK, Logius, bronhouders, AP |
| **B-11** | Semantische governance | S10 | Wie beheert begrippen, schema's en mappings? Hoe worden wijzigingen, versieovergangen en semantische conflicten vastgesteld en afgehandeld? | Domeinen beheren de inhoud. FDS beheert profielen, vindbaarheid en interoperabiliteitsregels. | Geonovum, FDS, domeinen, bronhouders |
| **B-12** | OOTS-functiegrenzen | S08, S10 | Welke functies liggen in OOTS-V, de OOTS-adapter en de mappingvoorziening? | De Basisinrichting OOTS verzorgt Europese proces- en transportfuncties. GBO verzorgt de bronkoppeling en eventueel de semantische transformatie. | BZK/EZK, bNC-SDG |
| **B-13** | PubEAA-uitgiftemodel | S11 | Wordt uitgifte centraal, decentraal of federatief ingericht? | Gemeenschappelijke profielen ondersteunen alle varianten. Het besluit kan per attribuuttype en verantwoordelijke bronhouder verschillen. | BZK, RDI, bronhouders, nationale EUDI-governance |
| **B-14** | ASI-provider | S11 | Wie biedt verify- en retrievefuncties aan QTSP's? Onder welke voorwaarden gebeurt dat? | Een of meer gecertificeerde ASI-providers bieden deze functies. De inhoudelijke verantwoordelijkheid blijft bij de bronhouders. | BZK, RDI, bronhouders, QTSP's |
| **B-15** | Start van attestatie-uitgifte | S11 | Start de gebruikersreis bij wallet, bronhouder, QTSP of dienstverlener? | Meerdere gestandaardiseerde initiatieroutes blijven mogelijk. Eén gebruikersinterface mag de architectuur niet bepalen. | EUDI-Wallet-governance, bronhouders, QTSP's |
| **B-16** | GBO-vertaallaag | S07 | Is de vertaallaag een tijdelijke overgangsvoorziening of een structurele gedeelde dienst? | De vertaallaag is tijdelijk of optioneel. Expliciete exitcriteria voorkomen afhankelijkheid in de doelarchitectuur. | GBO-project, FDS, bronhouders |
| **B-17** | Beheer referentiecomponenten | Alle | Welke componenten worden overgedragen, ondersteund of uitgefaseerd? | Ieder component krijgt vooraf een landingsplan, acceptatiecriteria en een eindverantwoordelijke. | GBO-project, beoogde beheerders |
| **B-18** | Terugmelden van fouten of vermoedelijke onjuistheden | S10 | Hoe worden fouten en waarschijnlijke onjuistheden terug gemeld aan de bronhouder? | Nog niet uitgewerkt. Voor OOTS is expliciet besloten geen terugmelding in te richten. | Nog vast te stellen |
| **B-19** | Vertegenwoordiging & bevoegdheidsbewijzen | S04, S05, S09, S10 | Hoe toont een actor aan dat deze namens een andere partij handelt? Welke bevoegdheid geldt? Hoe gebruikt de autorisatiebeslissing deze informatie? | Identiteit, vertegenwoordiging en autorisatie blijven gescheiden. Een gemeenschappelijk model ondersteunt meerdere betrouwbare bronnen en bewijsvormen.<br>Gestandaardiseerde verificatie voorkomt afhankelijkheid van één voorziening, leverancier of wallettype. | BZK, GDI/FDS, domeinen, bronhouders en beheerders van relevante vertegenwoordigingsvoorzieningen |

## Werkwijze voor besluitvorming

Voor ieder besluit is een Architecture Decision Record nodig met:

- context en probleemstelling.
- toepasselijke principes en wettelijke kaders.
- betrokken rollen en verantwoordelijkheden.
- onderzochte alternatieven.
- keuze en onderbouwing.
- gevolgen voor generieke functies, stelselfuncties en documenten.
- risico's en mitigerende maatregelen.
- eigenaar, datum en heroverwegingsmoment.

Een besluit is pas afgerond als de relevante PSA-paragraaf het besluit bevat. Werk zo nodig ook het globaal ontwerp en de technische of semantische documentatie bij.

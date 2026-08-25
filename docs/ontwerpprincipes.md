# Ontwerpprincipes

De ontwerpprincipes zijn normerend voor de verdere uitwerking en realisatie van GBO. Zij werken de [architectuurprincipes](architectuurprincipes.md) concreet uit zonder een product of leverancier voor te schrijven.

| ID | Ontwerpprincipe | Normerende toepassing voor GBO |
|---|---|---|
| **D-01** | Decentraal wat kan, centraal wat moet | Gegevens en bronspecifieke logica blijven bij de bronhouder. GBO gebruikt alleen een centrale of gedeelde functie als daar een duidelijke reden voor is.<br>Die reden kan interoperabiliteit, schaal, uniforme burgerinteractie, veiligheid of bestuurlijke beheersing zijn. |
| **D-02** | Afspraken boven standaarden boven voorzieningen | De uitwerking begint met rollen, verantwoordelijkheden en gebruiksafspraken. Standaardisering volgt als interoperabiliteit dat vereist.<br>Een gedeelde voorziening komt alleen in beeld als afspraken en standaarden niet volstaan of als partijen aantoonbaar schaalvoordeel nodig hebben. |
| **D-03** | Hergebruik generieke overheidsvoorzieningen | GBO gebruikt bestaande GDI-, FDS-, eIDAS- en OOTS-bouwstenen als deze aan de eisen voldoen. Een afwijking krijgt een motivering volgens pas-toe-of-leg-uit. |
| **D-04** | Modulair en ontkoppeld | Iedere functionele component heeft één duidelijke verantwoordelijkheid en een gedocumenteerd koppelvlak. Vervanging van een component vereist geen wijzigingen buiten dat koppelvlak. |
| **D-05** | Gegevens bij de bron | GBO maakt geen structureel gegevensmagazijn. Tijdelijke opslag is alleen toegestaan als deze noodzakelijk en rechtmatig is.<br>De bewaartermijn, beveiliging en verwijdering moeten dan zijn vastgelegd. De bronhouder is hiervoor primair verantwoordelijk, niet GBO. |
| **D-06** | Herbruikbare componenten | GBO richt bronontsluiting, autorisatie, beleidsbeheer, logging, semantische mapping en externe adapters in als afzonderlijke, herbruikbare functies. |
| **D-07** | Open source waar passend | Referentiecomponenten en technische profielen worden bij voorkeur open ontwikkeld en gepubliceerd. Een afwijking vereist een motivering vanuit veiligheid, rechtmatigheid, continuïteit of doelmatigheid. |
| **D-08** | Pas open standaarden toe | GBO past verplichte en aanbevolen standaarden van Forum Standaardisatie toe. Voor ieder koppelvlak legt GBO de geldende standaard en het geldende profiel vast. |
| **D-09** | API-first en selectieve gegevensuitvraag | Iedere bronontsluiting en gedeelde functie biedt een versieerbaar, machineleesbaar koppelvlak. De bronontsluiting ondersteunt selectieve gegevensvragen via een gestandaardiseerd API-profiel.<br>GraphQL is de voorgestelde invulling. Alternatieven moeten aan dezelfde eisen voor selectie, beveiliging, autorisatie, schema's en audit voldoen. |
| **D-10** | Privacy en security by design | Het ontwerp beschrijft per functie de gegevensclassificatie, dreigingen, maatregelen, logging, bewaartermijnen en verantwoordelijkheden. |
| **D-11** | Least privilege | Autorisatie is zo fijnmazig mogelijk voor afnemer, dienst, doel, grondslag, gegevensvraag en context. Beheerrechten zijn beperkt, tijdelijk en aantoonbaar toegekend. |
| **D-12** | Aantoonbare veiligheid | Deelnemers en gedeelde voorzieningen tonen aan dat zij aan de toepasselijke beveiligingsnormen voldoen.<br>Aansluit- en beheerafspraken omvatten audits, testen, kwetsbaarheidsbeheer, analyses van Single Points of Failure (SPOF) en incidentafhandeling. |
| **D-13** | Uitzonderingen zijn expliciet en tijdelijk | GBO legt afwijkingen van de doelarchitectuur vast als architectuurbesluit. Dat besluit bevat een eigenaar, einddatum of exitcriteria en een beoogd landingspad. |
| **D-14** | Semantische en technische interoperabiliteit | Gegevensdiensten verwijzen naar beheerde begrippen, informatiemodellen, schema's en kwaliteitsbeschrijvingen. Transformaties naar patroon- of stelselspecifieke formaten zijn expliciet, versieerbaar en testbaar. |

## Aanvullende eisen voor de bronontsluiting-API

Een apart standaardisatietraject stelt het API-profiel vast. Ongeacht de gekozen technologie gelden de volgende eisen:

- een afnemer kan alleen vooraf toegestane gegevensvragen uitvoeren.
- veld- en attribuutselectie draagt aantoonbaar bij aan dataminimalisatie.
- de bronontsluiting kan autorisatiebeslissingen op gegevensniveau afdwingen.
- schema's en wijzigingen ondersteunen versiebeheer.
- beveiliging en authenticatie sluiten aan op de geldende overheidsprofielen.
- logging en foutafhandeling volgen een gestandaardiseerde werkwijze.
- de GBO-vertaallaag ondersteunt bronhouders die het gekozen profiel nog niet rechtstreeks kunnen aanbieden.

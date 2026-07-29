# Ontwerpprincipes

De ontwerpprincipes zijn normerend voor de verdere uitwerking en realisatie van GBO. Zij concretiseren de [architectuurprincipes](architectuurprincipes.md) zonder een product- of leverancierskeuze voor te schrijven.

| ID | Ontwerpprincipe | Normerende toepassing voor GBO |
|---|---|---|
| **D-01** | Decentraal wat kan, centraal wat moet | Gegevens en bronspecifieke logica blijven bij de bronhouder. Een centrale of gedeelde functie wordt alleen ingericht als interoperabiliteit, schaal, uniforme burgerinteractie, veiligheid of bestuurlijke beheersing dit vereist. |
| **D-02** | Afspraken boven standaarden boven voorzieningen | Begin met rollen, verantwoordelijkheden en gebruiksafspraken. Standaardiseer waar interoperabiliteit nodig is. Richt alleen een gedeelde voorziening in als afspraken en standaarden onvoldoende zijn. |
| **D-03** | Hergebruik generieke overheidsvoorzieningen | Gebruik bestaande GDI-, FDS-, eIDAS- en OOTS-bouwstenen als zij aan de eisen voldoen. Afwijkingen worden gemotiveerd volgens pas-toe-of-leg-uit. |
| **D-04** | Modulair en ontkoppeld | Iedere functionele component heeft één duidelijke verantwoordelijkheid en een gedocumenteerd koppelvlak. Vervanging van een component vereist geen wijziging van andere componenten buiten het koppelvlak. |
| **D-05** | Gegevens bij de bron | GBO creëert geen structureel gegevensmagazijn. Tijdelijke opslag is alleen toegestaan als dit noodzakelijk en rechtmatig is en bewaartermijn, beveiliging en verwijdering zijn vastgelegd. |
| **D-06** | Herbruikbare componenten | Bronontsluiting, autorisatie, beleidsbeheer, logging, semantische mapping en externe adapters worden als afzonderlijke, herbruikbare functies ingericht. |
| **D-07** | Open source waar passend | Referentiecomponenten en technische profielen worden bij voorkeur open ontwikkeld en gepubliceerd. Een afwijking wordt gemotiveerd op grond van veiligheid, rechtmatigheid, continuïteit of doelmatigheid. |
| **D-08** | Pas open standaarden toe | Verplichte en aanbevolen standaarden van Forum Standaardisatie worden toegepast. Per koppelvlak wordt vastgelegd welke standaard en welk profiel gelden. |
| **D-09** | API-first en selectieve gegevensuitvraag | Iedere bronontsluiting en gedeelde functie biedt een versieerbaar, machineleesbaar koppelvlak. De bronontsluiting ondersteunt selectieve gegevensvragen via een gestandaardiseerd API-profiel. GraphQL is de voorgestelde invulling; alternatieven moeten dezelfde eisen aan selectie, beveiliging, autorisatie, schema's en audit ondersteunen. |
| **D-10** | Privacy en security by design | Voor iedere functie worden gegevensclassificatie, dreigingen, maatregelen, logging, bewaartermijnen en verantwoordelijkheden expliciet ontworpen. |
| **D-11** | Least privilege | Autorisatie wordt zo fijnmazig mogelijk uitgevoerd op afnemer, dienst, doel, grondslag, gegevensvraag en context. Beheerrechten zijn beperkt, tijdelijk en aantoonbaar toegekend. |
| **D-12** | Aantoonbare veiligheid | Deelnemers en gedeelde voorzieningen voldoen aantoonbaar aan toepasselijke beveiligingsnormen. Audits, testen, kwetsbaarheidsbeheer en incidentafhandeling zijn onderdeel van de aansluit- en beheerafspraken. |
| **D-13** | Uitzonderingen zijn expliciet en tijdelijk | Afwijkingen van de doelarchitectuur worden vastgelegd als architectuurbesluit met eigenaar, einddatum of exitcriteria en een beoogd landingspad. |
| **D-14** | Semantische en technische interoperabiliteit | Gegevensdiensten verwijzen naar beheerde begrippen, informatiemodellen, schema's en kwaliteitsbeschrijvingen. Transformaties naar patroon- of stelselspecifieke formaten zijn expliciet, versieerbaar en testbaar. |

## Aanvullende eisen voor de bronontsluiting-API

De keuze voor het API-profiel wordt in een apart standaardisatietraject vastgesteld. Ongeacht de gekozen technologie geldt dat:

- een afnemer alleen vooraf toegestane gegevensvragen kan uitvoeren;
- veld- en attribuutselectie aantoonbaar bijdraagt aan dataminimalisatie;
- autorisatiebeslissingen op gegevensniveau kunnen worden afgedwongen;
- schema's en wijzigingen versieerbaar zijn;
- beveiliging en authenticatie aansluiten op de geldende overheidsprofielen;
- logging en foutafhandeling gestandaardiseerd zijn;
- bronhouders via de GBO-vertaallaag kunnen aansluiten als zij het gekozen profiel nog niet rechtstreeks ondersteunen.

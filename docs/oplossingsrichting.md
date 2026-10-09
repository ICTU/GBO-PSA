# Vertrekpunt uit het globaal ontwerp

[Hoofdstuk 2 van het globaal ontwerp](https://ictu.github.io/GBO-GO/main/#2-voorgestelde-oplossingsrichting) beschrijft en onderbouwt de oplossingsrichting voor GBO. Dit hoofdstuk herhaalt die beschrijving niet. Het benoemt alleen de architectuurconsequenties die deze PSA normerend uitwerkt.

## Architectuurconsequenties

GBO gaat uit van een gemeenschappelijke bronontsluiting. Een bronhouder richt deze ontsluiting één keer in en gebruikt deze daarna voor meerdere gegevensstromen. De bronhouder beheert daarnaast een bronspecifieke GBO-configuratie, waarmee wordt vastgelegd welke gegevens beschikbaar zijn en hoe deze binnen de verschillende gegevensstromen worden ontsloten. Nieuwe gegevensvragen worden zoveel mogelijk via deze configuratie toegevoegd. Daardoor hoeft een bronhouder niet voor iedere toepassing of afnemer een nieuw bronkoppelvlak te ontwikkelen.

Daaruit volgen de volgende consequenties voor de PSA:

| Consequentie uit het globaal ontwerp | Uitwerking in de PSA |
|---|---|
| Bronhouders bieden één generieke, herbruikbare bronontsluiting aan. | F3, F7 en S07 |
| Bronhouders beheren de configuratie waarmee zij bepalen welke gegevensdiensten beschikbaar zijn en hoe centrale GBO-voorzieningen deze verwerken. | F3, F4, S07 en S10 |
| Gegevensvragen zijn selectief, vooraf beheerd en afdwingbaar. | F3, F4, F6, S05, S06, S07 en S10 |
| Identiteit, grondslag en context bepalen welke gegevens mogen worden geleverd. | F1, F2, F6 en S01 tot en met S06 |
| GBO handelt aansluitingen op externe stelsels buiten de bronhouder af. | S08, S10 en S11 |
| OOTS-verkeer loopt binnen GBO via de Basisinrichting OOTS en OOTS-V. | S08 en S10 |
| Bronhouders of QTSP's kunnen attestaties voor een EUDI-Wallet uitgeven. | S10 en S11 |
| Gegevensdeling met private dienstverleners vereist een geldige grondslag en, waar nodig, pseudonimisering. | S01 tot en met S05 |
| De gegevensuitwisseling is over de hele keten herleidbaar en controleerbaar. | F8 en S09 |
| GBO gebruikt bestaande afsprakenstelsels, standaarden en voorzieningen waar dat mogelijk is. | Ontwerpprincipes en realisatiestrategie |

## Afbakening tussen globaal ontwerp en PSA

Het globaal ontwerp is leidend voor:

- de probleem- en knelpuntenanalyse.
- de gekozen oplossingsrichting.
- de beschrijving en diagrammen van de interactiepatronen.
- de hoofdindeling in generieke functies en stelselfuncties.
- het overzicht van te ontwikkelen componenten en de impact op betrokken partijen.

De PSA is leidend voor:

- de architectuur- en ontwerpprincipes.
- de normerende eisen aan de generieke functies.
- de afspraken, standaarden en functionele voorzieningen per stelselfunctie.
- de vragen over verantwoordelijkheden en beheer.
- de open architectuurbesluiten voor de verdere uitwerking.

## Gebruik van bestaande stelsels

GBO richt geen zelfstandig nieuw afsprakenstelsel in. GBO brengt nieuwe of aangepaste afspraken, standaarden en voorzieningen waar mogelijk onder bij bestaande afsprakenstelsels en beheerorganisaties. Dit geldt vooral voor FDS, GDI, de nationale EUDI-Wallet-governance en de governance rond de Basisinrichting OOTS.

Tijdens de programmafase kan het programma referentiecomponenten of tijdelijke voorzieningen ontwikkelen. Daarmee kan het programma afspraken en standaarden beproeven.

Voor productiegebruik moeten de betrokken partijen vooraf per onderdeel vaststellen:

- welke partij inhoudelijk verantwoordelijk is.
- welk afsprakenstelsel de gebruiks- en toetredingsafspraken beheert.
- welke organisatie de standaard of het profiel beheert.
- welke organisatie het operationele beheer uitvoert.
- hoe continuïteit, financiering en toezicht zijn geregeld.

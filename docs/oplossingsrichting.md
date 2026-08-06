# Vertrekpunt uit het globaal ontwerp

De oplossingsrichting voor GBO is beschreven en onderbouwd in [hoofdstuk 2 van het globaal ontwerp](https://ictu.github.io/GBO-GO/main/#2-voorgestelde-oplossingsrichting). Dit hoofdstuk herhaalt die beschrijving niet, maar benoemt de architectuurconsequenties die in deze PSA normerend worden uitgewerkt.

## Architectuurconsequenties

GBO gaat uit van een gemeenschappelijke bronontsluiting die door bronhouders eenmalig wordt ingericht en voor meerdere gegevensstromen kan worden gebruikt. Nieuwe gegevensvragen worden zoveel mogelijk door configuratie mogelijk gemaakt, zonder voor iedere toepassing of afnemer een nieuw bronkoppelvlak te ontwikkelen.

Daaruit volgen de volgende consequenties voor de PSA:

| Consequentie uit het globaal ontwerp | Uitwerking in de PSA |
|---|---|
| Bronhouders bieden één generieke, herbruikbare bronontsluiting aan. | F3, F7 en S07 |
| Gegevensvragen zijn selectief, vooraf beheerd en afdwingbaar. | F3, F4, F6, S05, S06, S07 en S10 |
| Identiteit, grondslag en context bepalen welke gegevens mogen worden geleverd. | F1, F2, F6 en S01 tot en met S06 |
| Aansluiting op externe stelsels wordt buiten de bronhouder afgehandeld. | S08, S10 en S11 |
| OOTS-verkeer loopt binnen de GBO-oplossing via de Basisinrichting OOTS en OOTS-V. | S08 en S10 |
| Attestaties voor een EUDI-Wallet kunnen door bronhouders of QTSP's worden uitgegeven. | S10 en S11 |
| Gegevensdeling met private dienstverleners vereist een geldige grondslag en, waar nodig, pseudonimisering. | S01 tot en met S05 |
| Gegevensuitwisseling is ketenbreed herleidbaar en controleerbaar. | F8 en S09 |
| Bestaande afsprakenstelsels, standaarden en voorzieningen worden zoveel mogelijk hergebruikt. | Ontwerpprincipes en realisatiestrategie |

## Afbakening tussen globaal ontwerp en PSA

Het globaal ontwerp is leidend voor:

- de probleem- en knelpuntenanalyse;
- de gekozen oplossingsrichting;
- de beschrijving en diagrammen van de interactiepatronen;
- de hoofdindeling in generieke functies en stelselfuncties;
- het overzicht van te ontwikkelen componenten en de impact op betrokken partijen.

De PSA is leidend voor:

- de architectuur- en ontwerpprincipes;
- de normerende eisen aan de generieke functies;
- de afspraken, standaarden en functionele voorzieningen per stelselfunctie;
- de verantwoordelijkheids- en beheervraagstukken;
- de open architectuurbesluiten voor de verdere uitwerking.

## Gebruik van bestaande stelsels

GBO richt geen zelfstandig nieuw afsprakenstelsel in. Nieuwe of aangepaste afspraken, standaarden en voorzieningen worden waar mogelijk ondergebracht bij bestaande afsprakenstelsels en beheerorganisaties, in het bijzonder FDS, GDI, de nationale EUDI-Wallet-governance en de governance rond de Basisinrichting OOTS.

Tijdens de projectfase kunnen referentiecomponenten of tijdelijke voorzieningen worden ontwikkeld om afspraken en standaarden te beproeven. Voor productiegebruik moet per onderdeel vooraf zijn vastgesteld:

- welke partij inhoudelijk verantwoordelijk is;
- welk afsprakenstelsel de gebruiks- en toetredingsafspraken beheert;
- welke organisatie de standaard of het profiel beheert;
- welke organisatie het operationele beheer uitvoert;
- hoe continuïteit, financiering en toezicht zijn geregeld.

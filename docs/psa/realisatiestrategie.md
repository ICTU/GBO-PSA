# Realisatiestrategie

## Werkwijze

- Er komt geen nieuw stelsel en er komen geen "GBO"-voorzieningen, maar bestaande afspraken, standaarden en voorzieningen worden hergebruikt. Waar afspraken of standaarden aangevuld of aangepast moeten worden of voorzieningen ontworpen of ingericht moeten worden, wordt dit ingebracht bij de bestaande gremia.
Zie ook de paragraaf [Gebruik van bestaande afsprakenstelsels](#gebruik-van-bestaande-afsprakenstelsels) voor een verdere uitwerking hiervan.

- Er wordt gedurende de projectfase al wel pilots gestart waar gewerkt met de gewenste afspraken, standaarden en voorzieningen. Als deze nog niet bestaan, worden voorbeeld implementaties gebruikt die tevens gebruikt worden om het ontwerp te verbeteren. Uiteindelijk worden deze ontwikkelingen als referentie implementaties aangeboden aan de gremia waar het beheer belegd wordt. Dit gaat tot het niveau van "pre-productie": d.w.z. dat de afspraak of voorziening volledig genoeg is uitgewerkt om in productie genomen te kunnen worden. Maar de daadwerkelijke productiegang wordt aan de beoogde beheerder overgelaten. In sommige gevallen kan hier zelfs wet- en regelgeving voor nodig zijn, die in werking moet zijn getreden voor in productie gegaan kan worden.

- De inrichting van de ontbrekende afspraken, standaarden en voorzieningen moet voldoen aan de ontwerpprincipes. Gedurende het traject worden de ontwikkelingen hier periodiek op beoordeeld, waarover zo openbaar mogelijk (maar in elk geval naar de betrokken partijen) wordt gerapporteerd.


## Werkpakketten

De stelselfuncties die nodig zijn om de GBO te kunnen gebruiken voor de drie gewenste toepassingen worden opgedeeld in werkpakketten. Met deze werkpakketten is het mogelijk om de drie toepassingen los van elkaar mogelijk te maken en afhankelijk van de prioriteiten rond de toepassingen te implementeren.  
Er worden drie werkpakketten onderscheiden, die gekoppeld zijn aan de drie toepassingen. Daarnaast is er een werkpakket dat voor alle toepassingen nodig is: de basis functies.  

<figure>
``` mermaid
--8<-- "diagrammen/gbo_swimlanes.mmd"
```
<figcaption>De werkpakketten getekend in relatie tot elkaar.  
NB: in deze figuur zijn enkel de voorzieningen geschetst - geen afspraken of standaarden die ook nodig zijn. De lichtrode voorzieningen moeten nog ontwikkeld worden. De overige voorzieningen bestaan al - daar moet op aangesloten worden.</figcaption>
</figure>

### Werkpakket GBO Basis

Nog uitwerken  
- Onderdelen uitgewerkt  
- Deployment opties (bronhouder ontwikkelt & beheert, bronhouder implementeert referentiecomponenten & beheert, bronhouder neemt dienst af van provider)  

### Werkpakket EUDI-wallet

Nog uitwerken
- Onderdelen uitgewerkt  
- Deployment opties (bronhouder als PubEAA-provider, centrale PubEAA-provider(s), enkel ASIp met verify & retrieve)  

### Werkpakket SDG/OOTS

Nog uitwerken  
- Onderdelen uitgewerkt  
- Deployment opties (eigen SDG/OOTS stroom (EMREX), gebruik GBO-adapter & basisinrichting, gebruik enkel basisinrichting)  

### Werkpakket DvTP

Nog uitwerken  
- Onderdelen uitgewerkt  
- Deployment opties (toestemmingsvoorziening/ -register, decrypt VP/VI centraal of lokaal, decrypt VI in FSC)  


## Gebruik van bestaande afsprakenstelsels

Nog uitwerken:  
- GBO-basis componenten GraphQL/PBAC in FSC/FTV  
- GraphQL profiel in Digikoppeling  
- etc.


## Toekomstige ontwikkelingen

Plaatsen t.o.v. GBO als nieuwe "werkpakketten": swimlanes plaatje aangevuld met EBW/QERDS, Overheid-Overheid

<figure>
``` mermaid
--8<-- "diagrammen/gbo_swimlanes_qerds_g2g.mmd"
```
<figcaption>Mogelijke toekomstige use cases GBO-model.</figcaption>
</figure>

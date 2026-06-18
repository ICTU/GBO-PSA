# Voorgestelde oplossingsrichting

Dit hoofdstuk beschrijft de voorgestelde oplossingsrichting voor GBO. Het onderstaande diagram vormt hiervoor de basis.

<figure>
``` mermaid
--8<-- "diagrammen/gbo_swimlanes_simpel.mmd"
```
<figcaption>Figuur : Oplossingsrichting GBO.</figcaption>
</figure>

## Gemeenschappelijke bronontsluiting

De verbinding tussen vragende partij en bron wordt via de **FSC-standaard** tot stand gebracht. Dit is een standaard koppelvlak waarmee de beveiliging van de gegevensuitwisseling gegarandeerd wordt en de noodzakelijke logging vastgelegd wordt.
Bronhouders stellen hun gegevens bloot via een generieke, herbruikbare API. Dit is mogelijk met **GraphQL** - een API die een zo volledig mogelijke set gegevens beschikbaar, waarvan afhankelijk van de toepassing een selectie bevraagd wordt. Dit maakt het inrichten en onderhouden van een groot aantal kleinere REST-API's overbodig. Als er een nieuwe gegevensvraag ontstaat, kan dat via configuratie ingericht worden, in plaats van dat er een nieuwe API ingericht hoeft te worden.  
Om te garanderen dat afnemers alleen die gegevens krijgt waar zij recht op hebben, is autorisatie nodig. Deze autorisatie moet niet alleen controleren of de afnemer toegang heeft tot de bron, maar ook welke set gegevens opgevraagd mag worden en of voldaan wordt aan de grondslag die voor de gegevensvraag geldt. Dat is configurabel in te richten als gewerkt wordt met "Policy Based Access Control" (**PBAC**).  

Deze bouwstenen moeten door de bronhouder ingericht en onderhouden worden. Er bestaat al een referentie-implementatie voor de FSC-componenten onder de naam **OpenFSC** en er wordt vanuit het Federatief Datastelsel gewerkt aan een PBAC implementatie onder de naam Federatieve Toegangsverlening (**FTV**). Om de inrichting van de GraphQL API te standaardiseren zou er een GraphQL profiel in de **Digikoppeling** standaard opgenomen moeten worden.


## Aansluiten op bestaande voorzieningen

De vragende partijen kennen hun eigen standaarden en protocollen. Als deze afwijken van de FSC-standaard met GraphQL API's, dan worden er componenten ontwikkeld om de aansluiting te maken. Voor bronhouders is dit geen zorg; als zij hun gegevens beschikbaarstellen via de gemeenschappelijke bronontsluiting kunnen zij aansluiten. Ook voor de vragende partijen wordt de koppeling eenvoudig: zij kunnen hun standaarden en protocollen blijven gebruiken en krijgen toegang tot alle bronnen die voldoen aan de GBO oplossing.  

In de figuur bovenaan dit hoofdstuk de vereiste centrale voorzieningen voor de drie gegevensstromen die bij GBO in beeld zijn, ingetekend:  
- Voor de EDI-wallet zijn dat een interface waar QTSP's toegang toe krijgen om QEAA's uit te kunnen geven, en een voorziening waarmee overheidsbronnen zelf attestaties (PubEAA's) kunnen uitgeven.
- Voor OOTS is dit een OOTS-adapter waarmee aangesloten wordt op de basisinrichting OOTS, waarvandaan gegevens met buitenlandse overheden gedeeld kunnen worden in het kader van SDG.
- Voor het delen van gegevens via toestemming met private dienstverleners is een toestemmingsvoorziening nodig, en een voorziening om BSN's te pseudonimiseren, zodat deze niet terechtkomen bij partijen die geen BSN mogen verwerken.


## Uitbreidbaar

Het doel van GBO is het ontzorgen van bronhouders bij het bedienen van verschillende gegevensstromen. Het project GBO richt zich daarbij op de gegevensstromen die door burgers geïnitieerd worden: EDI, OOTS en DvTP. Maar de oplossingsrichting leent zich ook prima voor andere gegevensstromen: door het inrichten van een generieke bronontsluiting (GraphQL) met configureerbare toegangscontrole (FSC met FTV) kan deze voor veel verschillende gegevensstromen gebruikt worden. Die gegevensstromen moeten hun gegevensverzoeken dan via FSC aanbieden in de vorm van een GraphQL-request waarin de gewenste gegevens uitgevraagd worden. Als dat niet rechstreeks kan, is een adapter nodig die het verzoek omzet naar GraphQL en via een FSC Outway aanbiedt.
Iedere gegevensstroom zal wel afspraken vereisen over de gegevenssets die afgenomen mogen worden en wie onder welke voorwaarden deze gegevens mogen opvragen. De vastlegging en toepassing van die afspraken kan echter wel in de bestaande FTV componenten (PEP/PDP, PAP en PIP) gebeuren.

Om een indruk te geven hoe nieuwe gegevensstromen toegevoegd kunnen worden, zijn in de onderstaande figuur twee extra gegevensstromen toegevoegd.

<figure>
``` mermaid
--8<-- "diagrammen/gbo_swimlanes_qerds_g2g.mmd"
```
<figcaption>Mogelijke toekomstige use cases GBO-model. NB: dit is zuiver illustratief en valt buiten de scope van GBO!</figcaption>
</figure>

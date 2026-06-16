# Voorgestelde oplossingsrichting

Dit hoofdstuk beschrijft de voorgestelde oplossingsrichting voor GBO. Het onderstaande diagram vormt hiervoor de basis.

<figure>
``` mermaid
--8<-- "diagrammen/gbo_swimlanes.mmd"
```
<figcaption>Figuur : Oplossingsrichting GBO.</figcaption>
</figure>

## Gemeenschappelijke bronontsluiting

Bronhouders stellen hun gegevens bloot via een generieke, herbruikbare GraphQL API. Deze API kan veel gegevens beschikbaarstellen, waarvan telkens een kleine selectie bevraagd wordt. Dit maakt het inrichten en onderhouden van een groot aantal kleinere REST-API's overbodig. Als er een nieuwe gegevensvraag ontstaat, kan dat via configuratie ingericht worden, in plaats van dat er een nieuwe API ingericht hoeft te worden.  
Om te garanderen dat een afnemer alleen die gegevens krijgt waar recht op is, wordt autorisatie in de vorm van Policy Based Access Control (PBAC) ingericht. Iedere gegevensvraag wordt via een Policy Enforcement Point (PEP) aangeboden aan een Policy Decision Point (PDP) die controleert of de vraag voldoet aan de regels. Die regels liggen vast in een centrale Policy Administration Point (PAP), zodat voor alle partijen transparant is welke regels toegepast worden. Indien nodig bevraagt de PDP een Policy Information Point (PIP), waar realtime informatie opgevraagd kan worden die nodig is om de autorisatie te beoordelen. Denk hierbij bijvoorbeeld aan een toestemming die uit een toestemmingsregister gehaald kan worden, of het opzoeken van de vragende partij in een "trusted list" om te zien of de partij het vertrouwen heeft dat nodig is voor de gegevensvraag.  
De verbinding tussen vragende partij en bron wordt via de FSC-standaard tot stand gebracht. Hiermee kan de beveiliging van de gegevensuitwisseling gegarandeerd worden en wordt noodzakelijke logging vastgelegd.

Deze bouwstenen moeten door de bronhouder ingericht en onderhouden worden. Er bestaat al een referentie-implementatie voor de FSC-componenten en er wordt gewerkt aan een PBAC implementatie onder de naam Federatieve Toegangsverlening (FTV). Om de inrichting van de GraphQL API te standaardiseren zou er een GraphQL profiel in de Digikoppeling standaard opgenomen moeten worden.


## Aansluiten op bestaande voorzieningen

De vragende partijen kennen hun eigen standaarden en protocollen. Als deze afwijken van de FSC-standaard met GraphQL API's, dan worden er componenten ontwikkeld om de aansluiting te maken. Voor bronhouders is dit geen zorg; als zij hun gegevens beschikbaarstellen via de gemeenschappelijke bronontsluiting kunnen zij aansluiten. Ook voor de vragende partijen wordt de koppeling eenvoudig: zij kunnen hun standaarden en protocollen blijven gebruiken en krijgen toegang tot alle bronnen die voldoen aan de GBO oplossing.  

In de figuur bovenaan dit hoofdstuk zijn enkele centrale voorziening ingetekend. Welke voorzieningen wanneer ingericht en beschikbaar gesteld worden, is afhankelijk van de vraag.

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

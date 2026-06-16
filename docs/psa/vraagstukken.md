# Vraagstukken en ontwerpkeuzes

## Inleiding

In dit hoofdstuk worden de vraagstukken waarvoor een oplossing gevonden moet worden of waarvoor een keuze gemaakt moet worden besproken.  
Als er een oplossing is gevonden of een keuze is gemaakt, wordt dit in dit hoofdstuk als ontwerpkeuze vastgelegd. De verdere uitwerking vindt plaats in het technisch ontwerp.  


## Onboarding

Deelnemers aan het stelsel moeten aan eisen voldoen, waarbij de eisen kunnen verschillen per deelnemersgroep: bronhouders, afnemers, intermediairs, etc. Om deel te kunnen nemen aan het stelsel doorlopen de deelnemers een onboarding proces. Dat proces moet nog ingericht worden, zowel wat betreft de governance (wie doet wat en is waarvoor verantwoordelijk) als inhoud (waarop worden deelnemers beoordeeld).


## Identificatie & authenticatie intermediairs

Voor systeemherkenning bij gegevensuitwisseling wordt PKIo gebruikt. Maar hoe gaan we om met intermediairs die tussen de bronhouder of afnemer en de stelselvoorziening zit?  
FSC biedt hiervoor oplossingsrichtingen, waar in de uitwerking naar gekeken kan worden.


## Autorisatiearchitectuur: centrale autorisatieserver vs. gedistribueerde PDP

Gaat GBO werken met een "Autorisatieserver" als centraal component, met een bijbehorende "Vertrouwensleverancier" die tokens afgeeft. De Functionele Requirements en het GBO Beschrijvend Document spreken van een autorisatieserver als apart component (component 4).  
**Onterpkeuze**: De PSA en het technisch ontwerp gaan nu uit van een PBAC-oplossing, met een PDP, PEP en een centrale PAP. Of dit voor alle use cases de beste oplossing is, moet nog blijken.  


## Burgeridentificatie en het BSN

Het BSN mag bij private partijen, die daarvoor geen wettelijke grondslag hebben, niet worden doorgegeven. Dit vereist een pseudonimiseringslaag.  
**Ontwerpkeuze**: Voor het pseudonimiseren van het BSN wordt gebruik gemaakt van de BSNk PP voorziening. Deze voorziening gaat uit van een "geactiveerd" BSN - d.w.z. dat er al een pseudoniem voor het BSN bestaat. Deze pseudoniemen worden door GBO aangevraagd via de activatiedienst van BSNk en bijgehouden in het toestemmingenregister. Voordeel van het vastleggen van de pseudoniemen, is dat er geen BSN's in het toestemmingenregister opgeslagen hoeven te worden. Nadeel ia dat GBO als "toegangsdienst" erkend moet worden door BSNk, wat mogelijk extra verantwoording vereist.


## Toestemmingen

Voor DvTP (de gegevensstroom van overheidsbronnen naar private dienstverleners) is een toestemming vereist. Hiervoor is de toestemmingenvoorziening en het toestemmingenregister bedacht, maar hiervoor is nog wetgeving nodig.
Er spelen hierbij enkele vragen:
- Hoe wordt omgegaan met toestemming voor een eenmalige bevraging?
- Is een toestemmingenvoorziening nodig als de gegevens via de burger aan de private dienstverlener beschikbaar worden gesteld (conform de "preview" functie van de Basisinrichting OOTS en de "Authorising Actors" functie van TIP)?


## Vertrouwensstelsel

Welke partijen mogen deelnemen, hoe worden ze geaccrediteerd, welke niveaus van zekerheid gelden per gegevenstype, en hoe verhouden PKI(O), eHerkenning, eIDAS, FDS en bijvoorbeeld TIP-afspraken zich tot elkaar?


## Gekwalificeerde elektronische attesteringen van attributen

Hoe laten we attributen elektronisch kwalificeren? Hoe wordt de "attesteringsuitgifte" ingericht?  
Dit is nodig voor de Wallet, maar mogelijk ook voor de andere use cases. Er is [Europese Wetgeving](https://eur-lex.europa.eu/legal-content/NL/TXT/HTML/?uri=OJ:L_202501569), maar die laat nog ruimte voor de inrichting en wie welke rol invult.  

- Gebruik QEAA / QTSP?  
- Inrichten Pub-EAA?  
- Centrale verificatie- en/of retrievedienst t.b.v. QEAA?  

**Ontwerpkeuze**: Vooralsnog gaan we uit van een centrale Pub-EAA verstrekker en een centrale verificatiedienst t.b.v. QEAA. Daarmee zijn diverse opties mogelijk: bronhouder treedt zelf op als Pub-EAA-verstrekker, bronhouder gebruikt centrale Pub-EAA-verstrekker, QTSP geeft attesteringen uit die bij bronhouder geverifieerd zijn. Als bronhouders ook graag attestaties wil laten uitgeven door QTSP's, kan er een "retrieve" functie toegevoegd worden aan de centrale verificatiedienst (die beide onderdeel zijn van de "Authentic Source Interface").


## Centrale Componenten

Ontwerpprincipe D01 stelt "Decentraal wat kan, centraal wat moet". Dit geldt als uitgangspunt, maar als een centrale voorziening voldoende voordelen biedt, past in de geldende wet- en regelgeving en niet tegn andere ontwerpprincipes ingaat, dan kan ervoor gekozen worden hiervoor te kiezen.  
Bij de volgende voorzieningen die in theorie decentraal ingericht kunnen worden, wordt een centrale inrichting overwogen:

- PuB-EAA dienst waar alle overheidsbronnen gebruik van kunnen maken.
- Verificatiedienst waarmee QTSP's gegevens kunnen verifiëren en waar alle overheidsbronnen gebruik van kunnen maken.
- Vertaalvoorziening om GraphQL verzoeken om te zetten naar REST/API verzoeken voor overheidsbronnen die (nog) geen eigen GraphQL implementatie willen/ kunnen realiseren.

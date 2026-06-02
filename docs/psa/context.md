# Context en aanleiding

## Beleidscontext

Moderne dienstverlening aan burgers, zowel door overheden als private partijen, begint met vertrouwen in actuele en betrouwbare persoonsgegevens. Het beleidsdossier Regie op Gegevens richt zich, naast de regievormen inzage en eenmalige verstrekking, ook op het delen van gegevens: het mogelijk maken dat burgers hun eigen gegevens uit overheidsbronnen digitaal beschikbaar kunnen stellen aan dienstverleners of zichzelf.   

Momenteel lopen er, naast vele andere trajecten, drie omvangrijke ontwikkelingen om het delen van gegevens mogelijk te maken:

- EDI-wallet: Vanuit de eIDAS2-verordening wordt gewerkt aan de Europese Digitale Identiteit (EDIwallet). Met deze digitale portemonnee kunnen burgers zich digitaal identificeren, persoonlijke gegevens veilig delen en documenten digitaal ondertekenen – zowel bij publieke als bij private dienstverleners in Nederland en de rest van de EU.  

- SDG-OOTS: Vanuit de SDGverordening wordt gewerkt aan het Once Only Technical System (OOTS). OOTS maakt het mogelijk dat burgers (en bedrijven) een verklaring van instemming geven aan Europese publieke dienstverleners, waarna benodigde bewijsdocumenten éénmalig automatisch en veilig tussen overheidsorganisaties kunnen worden uitgewisseld.  

- DvTP: Vanuit het beleidsdossier Regie op Gegevens wordt, als reactie op het ongewenste scrapen van persoonlijke omgevingen van burgers binnen overheidswebsites (en daarmee overheidsbronnen), een oplossing ontwikkeld voor het delen van gegevens via toestemming met private dienstverleners (DvTP).  


Deze drie ontwikkelingen hebben elk een eigen oorsprong, doel en reikwijdte. Wat ze gemeen hebben, is dat de gegevensdeling wordt geïnitieerd door de burger en dat daarvoor overheidsbronnen moeten worden ontsloten. Op de korte en middellange termijn staan overheidsorganisaties, de zogenoemde bronhouders, dan ook voor de opgave hun overheidsbronnen toegankelijk te maken voor deze ontwikkelingen.  

Dit speelt zich af in een bredere context waarin bronhouders ook betrokken zijn bij de totstandkoming van het Federatief Datastelsel (FDS). In dit stelsel worden afspraken en standaarden voor gegevensuitwisseling binnen de overheid vastgelegd. Tegelijkertijd krijgt gegevensdeling met private partijen meer aandacht, waarvoor binnen de publiek-private samenwerking Trusted Information Partners (TIP) een afsprakenstelsel is ontwikkeld. Daarnaast maken de introductie van de Nederlandse Digitaliseringsstrategie (NDS) en de inwerkingtreding van de Europese verordening Interoperabel Europa (VIE) duidelijk dat het realiseren van nationale en Europese interoperabiliteit niet langer vrijblijvend is.  

In 2025 is onderzocht of het ontsluiten van overheidsbronnen meer samenhangend en gezamenlijk kan worden opgepakt onder de noemer Gemeenschappelijke Bronontsluiting. Gemeenschappelijk benadrukt hier de collectieve aard van de opgave. Daarbij is gekeken naar één uniforme methode voor ontsluiting ten behoeve van de EDI-wallet, SDG-OOTS en DvTP, in samenhang met de ontwikkeling van FDS, TIP, NDS en (Europese) interoperabiliteit.  



## Probleemstelling

Het delen van persoonsgegevens ondervindt op dit moment de volgende problemen:

- Geheimhoudingsplichten en strikte doelbinding in sectorale wetten

- Ontbreken van een expliciete bevoegdheid om aan private dienstverleners te verstrekken op verzoek van de burger

- Toestemming van de burger is in de overheid-context vaak geen stevige grondslag

- Versnippering van regels en verantwoordelijkheden over sectoren en organisaties

- Omwegen in de praktijk door frictie tussen behoefte en wat juridisch/operationeel kan

- Scraping en vergelijkbare vormen van geautomatiseerd verzamelen vergroten risico’s en zijn juridisch kwetsbaar

- Bronhouders moeten voor verschillende gegevensstromen verschillende technologieën en gegevenssets inrichten en beheren

- Europese wet- en regelgeving legt verplichtingen op aan bronhouders waar zij (individueel) moeilijk aan kunnen voldoen


## Doelstelling

Om de problemen uit de vorige paragraaf op te lossen wordt een stelsel (een verzameling afspraken, standaarden en voorzieningen) voorgesteld, waarin het mogelijk is dat:

- burgers toestemming geven en beheren via een vertrouwde overheidsomgeving, op basis van begrijpelijke informatie over doel, gegevens en ontvanger

- private dienstverleners alleen gegevens opvragen binnen de afgesproken reikwijdte en de burger terugkoppelen welke gegevens zijn ontvangen en gebruikt

- bronhouders via één mechanisme gegevens verstrekken na verificatie van een geldig verzoek en binnen een afgebakend doel

> Hoewel er hier sprake is van een stelsel, is het geenzins de bedoeling een nieuw stelsel in te richten. De afspraken, standaarden en voorzieningen die ontwikkeld / ingericht worden, moeten landen in bestaande afsprakenstelsels.


De doelstellingen van GBO zijn:

- Een lagere implementatielast voor bronhouders

- Het voorkomen van maatwerk en ad-hoc-implementaties

- Effectiever hergebruik van generieke voorzieningen

- Samenhangende afsprakenstelsels die samenwerking tussen stelsels vereenvoudigen

- Meer uniformiteit en interoperabiliteit tussen overheden, en overheid en private partijen


## UBO beproevingen

Het project BronConnect / Uniforme Bronontsluitiung ([UBO](https://digilab.overheid.nl/projecten/beproeving-eenvoudig-en-eenduidig-gegevens-uitwisselen/)) heeft een aantal beproevingen uitgevoerd om te onderzoeken hoe gemeenten op een eenduidige manier kunnen voldoen aan de eisen die SDG/OOTS en de eIDAS-verordening stellen. UBO heeft laten zien dat gemeentelijke bronontsluiting via een integratielaag, Data API, FSC/OpenFSC en een OOTS/eDelivery-adapter werkbaar is.  
GBO bouwt voort op de bevindingen van UBO en maakt daar een productiegericht, breder en generieker stelsel van: meer bronhouders, meer trajecten, rijkere autorisatie, expliciet semantiekbeheer en centrale of gedeelde voorzieningen waar dat schaalvoordeel geeft.

In de bijlage [Lessons Learned UBO](bijlage_UBO_GBO.md) is uitgewerkt hoe de bevindingen van UBO zijn hergebruikt in de opzet en architectuur van GBO.


## Maximaal borgen in bestaande afsprakenstelsels

GBO wordt geen nieuw, losstaand stelsel. De gerealiseerde stelselfuncties worden zoveel mogelijk geborgd binnen bestaande landelijke afsprakenstelsels, zoals het Federatief Datastelsel (FDS) en de Generieke Digitale Infrastructuur (GDI) voor de overheid, en binnen publiek-private afsprakenstelsels zoals Trusted Information Partners (TIP), voor de uitwisseling met private dienstverleners.  
GBO breidt deze bestaande stelsels gericht uit met de afspraken, standaarden en voorzieningen die nodig zijn voor de gestandaardiseerde ontsluiting. Gaandeweg zal blijken of er nog onderdelen zijn die niet binnen bestaande stelsels passen en waar aanvullende invulling nodig is. Daarnaast worden relevante inzichten en feedback teruggekoppeld naar de verdere ontwikkeling van EDI en SDG.

> In dit document wordt nog gesproken over een GBO-stelsel en GBO-voorzieningen, maar dat is enkel om het stuk leesbaar te houden.

De juridische basis wordt gevormd door wettelijke kaders en lagere regelgeving. Zolang deze nog niet in werking zijn getreden, loopt de ontwikkeling van de GBO en de wetgevingstrajecten parallel aan elkaar.

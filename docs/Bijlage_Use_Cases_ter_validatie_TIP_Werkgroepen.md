# Validatie GBO-afwegingskader voor de inzet van (Q)EAA's en (Q)ERDS  
Positionering in het EDI-stelsel en in informatievoorzieningsprocessen

*Versie: conceptnotitie vanuit GBO voor de TIP Werkgroepen Kennis en Techniek*

Datum: 29 juni 2026

> De inzet van (Q)EAA's, (Q)ERDS en API's betreft een gelaagd afwegingsmodel: (Q)EAA's leveren bewijs van rechten, rollen, attributen of machtigingen; (Q)ERDS borgt overdrachtszekerheid; API's ontsluiten actuele brongegevens; en procesdiensten verzorgen de transactionele afhandeling.  
> In deze notitie is sprake van "API" als alternatief voor het beschikbaar stellen van gegevens via (Q)EAA's en (Q)ERDS. De term API is hier niet ideaal: het uitwisselen van gegevens via (Q)EAA's kan ook via API's. Wat bedoeld wordt is de uitwisseling van gegevens zonder tussenliggende partij die de vertrouwelijkheid, betrouwbaarheid en onweerlegbaarheid van de gegevensuitwisseling garandeert. Voor GBO zou dit een FSC-oplossing zijn, zoals dat bij de overheid in het FDS-afsprakenstelsel toegepast wordt. Daar moet nog een betere term dan "API" voor gevonden worden.

## 1\. Doel van de notitie en vraag aan TIP

Deze notitie is opgesteld vanuit het programma Gemeenschappelijke Bronontsluiting (GBO) op verzoek van TIP en wordt ingebracht bij de TIP Werkgroepen Kennis en Techniek. Het doel is om het afwegingskader te laten valideren voor een positionering van (Q)EAA's en (Q)ERDS in bredere informatievoorzieningsprocessen, mede vanuit de context van het EDI-stelsel en GBO use cases. De use-cases zijn niet limitatief en uitsluitend ter illustratie. Als TIP betere use-cases heeft of aanvullingen op deze set heeft dan zien we die uiteraard graag tegemoet.

Een afwegingskader kan helpen om te bepalen in welke situaties (Q)EAA's en (Q)ERDS transactionele, operationele, vertrouwens of dynamische diensten kunnen ondersteunen. De centrale vraag hierbij is welke onderdelen van een digitaal dienstverleningsproces vragen om bewijs, bevoegdheid, machtiging, vertrouwensborging of overdrachtszekerheid, en welke onderdelen juist vragen om actuele bronraadpleging, procesafhandeling of statuswijzigingen via API's.

De use-cases in deze notitie kunnen door TIP gebruikt worden om te valideren of het voorgestelde kader herkenbaar, terminologisch juist, architectuurmatig houdbaar en praktisch toepasbaar is. Het doel is om met elkaar de interoperabiliteit te verbeteren en gegevensbronnen en afnemers van informatie-/gegevensdiensten (publiek-privaat) zo maximaal mogelijk te ontlasten met generieke en geharmoniseerde stelselfuncties<sup>[^1]</sup>.

| **Wat vragen we concreet aan TIP?** | **Gewenste opbrengst**                                                                                                          |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| Valideer de terminologie            | Klopt het gebruik van (Q)EAA's, (Q)ERDS, bewijslaag, proceslaag, datadienst en transactiedienst?                                |
| Valideer het afwegingskader         | Is de splitsing in bewijsfunctie, overdrachtszekerheidsfunctie, gegevensdienstfunctie en proces-/transactiefunctie bruikbaar?   |
| Valideer het architectuurprincipe   | Is het juist om (Q)EAA's en (Q)ERDS primair als ondersteunende of randvoorwaardelijke vertrouwensvoorzieningen te positioneren? |
| Valideer de beslisregels            | Zijn de regels scherp genoeg om te bepalen wanneer (Q)EAA, (Q)ERDS, API/datadienst of een hybride patroon passend is?           |
| Valideer de use-cases               | Zijn de componenten per use-case juist geduid, ontbreken er relevante patronen, of zijn er betere voorbeelden?                  |

Het is verder belangrijk om te weten dat eenzelfde type gegeven in zowel (Q)EAA's en (Q)ERDS als API gebaseerde gegevensuitwisselingen kan voorkomen. Dit is afhankelijk van de functie, bijvoorbeeld: een bewijsfunctie of een gegevensdienst functie

Afbakening: deze notitie bevat geen definitief juridisch oordeel per gegevensdeling. Per use-case blijft een afzonderlijke toets nodig op grondslag, proportionaliteit, doelbinding, dataminimalisatie, bevoegdheid van de bronhouder en sectorspecifieke regelgeving.

## 2\. Wat is GBO en wat beoogt GBO?

GBO ontwikkelt een gestandaardiseerde gemeenschappelijke bronontsluiting waarmee overheidsorganisaties als bronhouder gegevens direct interoperabel en herbruikbaar beschikbaar kunnen stellen aan afnemers. De beoogde afnemende stelsels en voorzieningen zijn onder meer de Europese Digitale Identiteit wallet, het Once-Only Technical System (OOTS) en Delen via Toestemming met Private dienstverleners (DvTP).

GBO beoogt dat overheidsinformatie op een uniforme, veilige en herbruikbare manier kan worden ingezet in publieke en private dienstverlening, uiteraard op basis van een geldige juridische grondslag en met respect voor privacy, doelbinding en dataminimalisatie.

Daarbij is het van belang dat GBO niet wordt gezien als een nieuw inhoudelijk bronsysteem. GBO positioneert zich als gestandaardiseerde ontsluitings- en interoperabiliteitslaag rondom bronhouders en gegevensdiensten zodat de implementatielast bij bronhouders en afnemers kan afnemen. In die rol kan GBO verschillende vormen van gegevensverstrekking en vertrouwensborging ondersteunen.

- **Voor de EDI-wallet:** het beschikbaar stellen van gegevens of attributen die als attestatie kunnen worden gebruikt door de gebruiker/houder.
- **Voor OOTS:** het ondersteunen van once-only gegevensuitwisseling tussen publieke instanties in Europa, waar de bronhouder leidend blijft.
- **Voor DvTP:** het ondersteunen van gegevensdeling met private dienstverleners op basis van een passende grondslag, toestemming/machtiging waar relevant, en gecontroleerde bronontsluiting.

GBO wil afspraken, standaarden en stelselfuncties in landelijke afsprakenstelsels zoals TIP en FDS laten landen zodat ook organisaties buiten de scope van het GBO programma gebaat zijn bij de toenemende harmonisatie en het verbeteren van de hogere interoperabiliteit tussen stelsels. GBO zelf is geen afsprakenstelsel maar een uitvoerend programma. Dit afwegingskader helpt partijen om de inzet van (Q)EAA's en (Q)ERDS scherp en consistent te positioneren: niet als generieke vervanging van API-gebaseerde gegevens- en procesdiensten, maar als vertrouwensvoorzieningen voor bewijs, bevoegdheid, machtiging en overdrachtszekerheid. GBO biedt daarbij een gestandaardiseerde manier om brongegevens betrouwbaar, interoperabel en herbruikbaar te ontsluiten richting onder meer de EDI-wallet, OOTS en private dienstverlening via toestemming wat de implementatielast bij partijen verlaagt en in toenemende mate ingezet kan worden voor het verbeteren van digitale dienstverlening. Het afwegingskader geeft partijen vervolgens een praktisch toetsinstrument om per use-case te bepalen welke onderdelen thuishoren in de bewijslaag, welke in de overdrachtslaag, en welke juist via actuele bronraadpleging, API's of transactionele procesafhandeling moeten worden ingericht.

## 3\. Waarom dit afwegingskader?

In de praktijk komen meerdere mechanismen samen: digitale identiteit, walletfunctionaliteit, gegevensuitwisselingen, elektronische attestaties van attributen, (vertrouwens-)diensten en API-gebaseerde bronontsluiting. In concrete informatievoorzieningsprocessen lopen deze mechanismen gemakkelijk door elkaar heen.

Zonder afwegingskader ontstaat het risico dat (Q)EAA's en (Q)ERDS worden gepositioneerd als alternatief voor transactionele API-diensten, of omgekeerd dat API's worden gebruikt waar juist een herbruikbaar en verifieerbaar bewijsstuk nodig is. Beide benaderingen zijn te grof.

Het kader maakt daarom onderscheid tussen bewijs en proces. (Q)EAA's en (Q)ERDS leveren vertrouwen, bewijsbaarheid en overdrachtszekerheid. Transactionele, operationele en dynamische gegevens- en procesdiensten ondersteunen digitale processen door actuele gegevens, statusinformatie, transacties, reserveringen of proceshandelingen via API's beschikbaar te maken of uit te voeren.

De meest robuuste architectuur is in veel gevallen niet of (Q)EAA/(Q)ERDS of API, maar een gelaagd patroon waarin (Q)EAA's en (Q)ERDS ondersteunend of randvoorwaardelijk zijn aan API-gebaseerde dienstverlening en andersom.

## 4\. Terminologie en scope

Voor de validatie gebruiken we onderstaande terminologie. De schrijfwijze (Q)EAA betekent dat zowel de niet-gekwalificeerde EAA als de gekwalificeerde QEAA bedoeld kan zijn. De schrijfwijze (Q)ERDS betekent dat zowel ERDS als QERDS bedoeld kan zijn.

| **Term**               | **Definitie in deze notitie**                                                                                                                                                                                                                       | **Relevantie voor het kader**                                                                                                                |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| (Q)EAA                 | Electronic Attestation of Attributes en Qualified Electronic Attestation of Attributes: een elektronische, verifieerbare verklaring over een of meer attributen.                                                                                    | Hoort primair in de bewijslaag. Geschikt voor bewijsbare verklaringen over identiteit, recht, rol, bevoegdheid, machtiging of objectkenmerk. |
| (Q)ERDS                | Electronic Registered Delivery Service en Qualified Electronic Registered Delivery Service: een elektronische aangetekende bezorgdienst die bewijs levert over verzending, ontvangst, tijdstip en integriteit van elektronische gegevensoverdracht. | Hoort primair bij overdrachtszekerheid. Relevant wanneer de overdracht zelf bewijswaarde heeft.                                              |
| Bewijslaag             | Laag waarin vertrouwen wordt geborgd via attestaties, bewijsstukken, verificatie, geldigheid, herkomst en eventueel gekwalificeerde vertrouwensdiensten.                                                                                            | Maakt digitale processen betrouwbaar, maar voert het operationele proces niet zelf uit.                                                      |
| Proceslaag             | Laag waarin digitale processen worden uitgevoerd, zoals raadplegen, controleren, reserveren, boeken, wijzigen, registreren, openen, betalen of afhandelen.                                                                                          | Wordt doorgaans ondersteund door applicaties, workflow, API's, notificaties en transactiesystemen.                                           |
| Gegevensdienst/API     | Gestandaardiseerde dienst of API waarmee actuele, historische of afgeleide gegevens uit een bron of registratie kunnen worden opgevraagd.                                                                                                           | Leidend wanneer bronactualiteit, query, status of selectiecriteria doorslaggevend zijn.                                                      |
| Transactiedienst       | Dienst waarmee een proceshandeling of statuswijziging wordt uitgevoerd, bijvoorbeeld een toegangsmoment, reservering, containeropening, parkeeractie of betaling.                                                                                   | Leidend wanneer de dienst niet alleen informatie verstrekt, maar een processtap uitvoert.                                                    |
| Machtiging/autorisatie | Vastlegging dat een persoon, organisatie of systeem namens iemand anders of onder bepaalde voorwaarden mag handelen of gegevens mag raadplegen.                                                                                                     | Kan als bewijscomponent in een (Q)EAA voorkomen en als runtime-controle in een API-proces worden toegepast.                                  |
| Bronhouder/issuer      | Partij die verantwoordelijk is voor de brongegevens of die bevoegd is een attestatie uit te geven.                                                                                                                                                  | Bepaalt de herkomst, kwaliteit en bevoegdheid van de gegevens of attestatie.                                                                 |
| Relying party/afnemer  | Partij die vertrouwt op een attestatie of gegevensdienst om een dienst te leveren of beslissing te nemen.                                                                                                                                           | Moet kunnen bepalen of bewijs, bronraadpleging of procesdata voldoende betrouwbaar en actueel zijn.                                          |

## 5\. Afwegingskader: wanneer (Q)EAA en (Q)ERDS (bewijslaag vs. proceslaag)

Het afwegingskader bestaat uit vier functies. Deze functies kunnen in dezelfde use-case naast elkaar voorkomen. De kern van de validatie is om per use-case te bepalen welke functie op welk onderdeel van toepassing is.

| **Functie**                      | **Kernvraag**                                                                                                              | **Typisch middel**                       | **Voorbeelden**                                                                                 |
| -------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | ----------------------------------------------------------------------------------------------- |
| 1\. Bewijsfunctie                | Kan een partij aantonen dat een attribuut, recht, rol, bevoegdheid of objectkenmerk bestaat?                               | (Q)EAA, wallet, verifieerbare attestatie | Identiteit, eigendom, vergunning, Wmo-recht, beheerrol, machtiging.                             |
| 2\. Overdrachtszekerheidsfunctie | Moet bewezen kunnen worden dat gegevens of documenten zijn verzonden en ontvangen, met behoud van integriteit en tijdstip? | (Q)ERDS                                  | Formele kennisgeving, overdracht dossier, bevestiging aanvraag, verzonden besluit.              |
| 3\. Gegevensdienstfunctie        | Moet een afnemer actuele, historische of afgeleide gegevens uit een bron kunnen raadplegen?                                | API, datadienst, bronontsluiting         | Saldo, status, actuele registratie, sensorwaarde, installatiegegeven, brongegeven op peildatum. |
| 4\. Proces-/transactiefunctie    | Moet een digitale proceshandeling worden uitgevoerd of een status worden gewijzigd?                                        | Procesapplicatie, API, event, workflow   | Reservering, toegangsscan, containeropening, parkeeractie, betaling, melding, wijziging.        |

Deze indeling voorkomt dat een use-case als geheel als "EAA-use-case" of "API-use-case" wordt bestempeld. Informatievoorzieningsprocessen zijn vaak samengesteld. Een parkeerdienst kan bijvoorbeeld een bewijscomponent bevatten voor het recht op parkeren, een API-component voor de actuele parkeeractie en een transactiefunctie voor het starten of beëindigen van een parkeeractie.

## 6\. Architectuurprincipe

**Architectuurprincipe:** gebruik (Q)EAA's voor bewijsbare, herbruikbare en verifieerbare verklaringen over attributen, rechten, rollen, bevoegdheden, machtigingen of objectkenmerken. Gebruik (Q)ERDS wanneer de overdracht van gegevens of documenten zelf bewijswaarde moet hebben. Gebruik API-gebaseerde gegevens- en transactiediensten voor actuele bronraadpleging, procesuitvoering, statuswijzigingen en real-time beslissingen.

Dit principe leidt tot een gelaagd ontwerp:

- **Scheiding van bewijs en actualiteit:** een attestatie bewijst een uitspraak binnen een context of geldigheidsperiode; een API raadpleegt de actuele bron of voert een actuele proceshandeling uit.
- **Bronhouder blijft leidend:** voor zowel actuele gegevens blijft de bron of operationele registratie leidend als voor welke type attributen verstrekt worden. Een attestatie mag geen verouderde kopie van dynamische procesdata worden.
- **Wallet als bewijsdrager:** de wallet is vooral geschikt voor bewijsstukken die de gebruiker kan bewaren, beheren en presenteren, niet voor hoogfrequente runtime-statussen.
- **API als procesmechanisme:** API's zijn onder meer geschikt voor status, saldo, reservering, gebruik, sensorwaarde, actuele controle, events en statuswijzigingen.
- **ERDS als overdrachtsbewijs:** (Q)ERDS is relevant wanneer de formele overdracht van gegevens of documenten aantoonbaar moet zijn. Het is geen algemene vervanging van een API-response.
- **Privacy en grondslag-by-design:** per gegevensdeling blijven grondslag, doelbinding, dataminimalisatie, proportionaliteit, autorisatie en logging randvoorwaardelijk.

## 7\. Beslisregels: wanneer welk mechanisme?

| **Vraag**                                                                                                 | **Als het antwoord ja is**                                                                                 | **Voor de hand liggend mechanisme**                                      |
| --------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| Moet een attribuut, recht, rol, bevoegdheid, machtiging of objectkenmerk bewijsbaar worden gepresenteerd? | Er is een verifieerbare verklaring nodig die door een bevoegde issuer is afgegeven.                        | (Q)EAA                                                                   |
| Moet de gebruiker het bewijs kunnen bewaren, beheren en hergebruiken in de wallet?                        | De gebruiker moet regie hebben over het presenteren van het bewijs aan een relying party.                  | (Q)EAA                                                                   |
| Moet alleen een afgeleide verklaring worden gedeeld in plaats van ruwe brondata?                          | Dataminimalisatie is belangrijk, bijvoorbeeld "heeft recht op voorziening" in plaats van volledig dossier. | (Q)EAA of API met afgeleid antwoord, afhankelijk van actualiteit         |
| Moet bewezen worden dat gegevens of documenten zijn verzonden en ontvangen?                               | Tijdstip, integriteit en verzender/ontvanger zijn juridisch of auditmatig relevant.                        | (Q)ERDS                                                                  |
| Is de actuele bronstatus doorslaggevend?                                                                  | De waarde kan inmiddels gewijzigd zijn of moet direct uit de bron worden vastgesteld.                      | API/datadienst                                                           |
| Dynamisch: wijzigt de waarde vaak of per transactie?                                                      | Voorbeelden zijn saldo, gebruiksmoment, status, sensorwaarde, blokkade of reservering.                     | API/datadienst of transactiedienst                                       |
| Leidt de handeling tot een statuswijziging of proceshandeling?                                            | Bijvoorbeeld boeken, starten, stoppen, openen, betalen, registreren of reserveren.                         | Transactiedienst/API                                                     |
| Zijn zowel bewijs als actuele status nodig?                                                               | Bijvoorbeeld eerst bewijs van recht of machtiging, daarna actuele saldo- of statuscontrole.                | Hybride patroon: (Q)EAA + API, eventueel (Q)ERDS voor formele overdracht |
| Is een audittrail nodig, maar geen aangetekende bezorging?                                                | Er moet gelogd worden wie wat wanneer heeft geraadpleegd of gedaan.                                        | Logging binnen API-/proceslaag; (Q)ERDS als bezorgbewijs nodig is        |

## 8\. Validatieaanpak voor de use-cases

De use-cases zijn hierna opgebouwd als informatievoorzieningsprocessen met meerdere componenten. Per use-case vragen we TIP om te beoordelen of de positionering juist is.

Per use-case hanteren we hetzelfde format:

- Bewijslaag - (Q)EAA's: welke attributen, rechten, rollen, bevoegdheden, machtigingen of objectkenmerken moeten bewijsbaar zijn?
- Overdrachtszekerheid - (Q)ERDS: is aangetekende elektronische aflevering nodig voor formele overdracht of kennisgeving?
- Gegevensdienst/API: welke gegevens vragen actuele of historische bronraadpleging?
- Proces-/transactielaag: welke handelingen wijzigen een status of voeren een digitaal proces uit?
- Voorkeursarchitectuur: is het mechanisme (Q)EAA, (Q)ERDS, API of een hybride patroon?

## 9\. Use-cases ter validatie

De onderstaande use-cases zijn bedoeld als toetsmateriaal. Ze zijn niet limitatief. TIP wordt uitgenodigd om betere of aanvullende use-cases aan te dragen wanneer die de positionering van (Q)EAA's en (Q)ERDS scherper maken t.o.v. API gebaseerde informatie-/gegevensdiensten.

### 9.1. Aankoop van een woning

Dit is een bestaande use-case binnen het DvTP project. Een burger koopt of verkoopt een woning. In het proces zijn onder meer koper, verkoper, makelaar, financieel intermediair, hypotheek-/geldverstrekker, notaris en bronhouders betrokken. De use-case bevat zowel formele bewijscomponenten als actuele gegevens- en procescomponenten. Let op: de voorbeelden van mogelijke gegevensuitwisseling die onderstaand zijn opgenomen zijn ter illustratie en niet gebaseerd op de feitelijke use-case.

| **Component**                  | **In deze use-case**                                                                                                                                                                                                      | **Voorlopige positionering**                                                                                                                              |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Bewijslaag - (Q)EAA's          | Identiteit koper/verkoper; bevoegdheid van makelaar, notaris of vertegenwoordiger; eventueel bewijs van eigendom, burgerlijke staat, inkomen of machtiging, voor zover een bevoegde issuer en grondslag beschikbaar zijn. | Geschikt voor bewijsbare verklaringen die een relying party kan verifieren. Niet bedoeld als volledige kopie van alle brongegevens.                       |
| Overdrachtszekerheid - (Q)ERDS | Formele overdracht van dossierstukken, bevestigingen of documenten tussen partijen wanneer bewijs van verzending, ontvangst, tijdstip en integriteit nodig is.                                                            | Relevant bij formele dossieroverdracht of kennisgeving; niet voor elke gegevensraadpleging.                                                               |
| Gegevensdienst/API             | Actuele bronraadpleging bij Kadaster, BRP, WOZ, BAG of andere bronnen; actuele installatiegegevens, actueel inkomen, onderhoudsstatus, storingshistorie, energieverbruik of teruglevering.                                | API/datadienst blijft leidend wanneer bronactualiteit of dynamische woning-/installatiegegevens nodig zijn.                                               |
| Proces-/transactielaag         | Hypotheekbeoordeling, kooponderzoek, machtigingsproces, dossieropbouw, status van aanvraag, eventuele hercontrole of intrekking van machtiging.                                                                           | Procesapplicaties en API's voeren de workflow uit; bewijsstukken ondersteunen het proces.                                                                 |
| Voorkeursarchitectuur          | Hybride patroon.                                                                                                                                                                                                          | (Q)EAA voor identiteit, recht, rol of machtiging; API voor actuele bron- en installatiegegevens; (Q)ERDS alleen voor formele overdracht met bewijswaarde. |

**Vragen aan TIP:**

- Is het onderscheid tussen formele woning-/persoonsattributen en actuele woning-/installatiegegevens juist gelegd?
- Welke attributen zijn geschikt voor (Q)EAA-uitgifte, en welke moeten altijd via directe bronraadpleging beschikbaar blijven?
- Wanneer is (Q)ERDS in dit proces proportioneel en wanneer volstaat logging in de proceslaag?

### 9.2. Delen van gebouwinformatie

Dit is ook een bestaande use-case binnen het DvTP project. Een eigenaar, beheerder, VvE, woningcorporatie of gemachtigde installateur deelt gebouwinformatie met een private of publieke dienstverlener. Het kan gaan om formele gebouwkenmerken, beheerrollen, vergunningen, inspecties, technische documentatie en actuele operationele data. Let op: de voorbeelden van mogelijke gegevensuitwisseling die onderstaand zijn opgenomen zijn ter illustratie en niet gebaseerd op de feitelijke use-case.

| **Component**                  | **In deze use-case**                                                                                                                                                                                                                               | **Voorlopige positionering**                                                                                                        |
| ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| Bewijslaag - (Q)EAA's          | Formele gebouwidentificatie zoals BAG-ID, adres, gebruiksfunctie, bouwjaar of oppervlakte; bewijs van eigenaarschap of beheerrol; vergunningstatus; bevoegdheid van gemachtigde installateur of technisch beheerder.                               | Geschikt wanneer een formele verklaring of rol bewijsbaar moet zijn.                                                                |
| Overdrachtszekerheid - (Q)ERDS | Formele overdracht van inspectierapporten, brandveiligheidsrapporten, keuringsrapporten of verplichte kennisgevingen.                                                                                                                              | Relevant wanneer de overdracht zelf juridisch of auditmatig bewijswaarde heeft.                                                     |
| Gegevensdienst/API             | Actuele sensordata, energieverbruik, waterverbruik, liftstatus, storingen, luchtkwaliteit, actueel bewijs van eigenaarschap, actuele waarde van de woning, bezettingsgraad, onderhoudsstatus of technische documentatie uit operationele systemen. | API/datadienst is passend voor actuele en vaak wijzigende gebouwdata.                                                               |
| Proces-/transactielaag         | Tijdelijke toegang voor onderhoud, storingsafhandeling, inplannen onderhoud, wijzigen van autorisaties, incidentafhandeling.                                                                                                                       | Proceslaag regelt toegang, workflow en statuswijzigingen.                                                                           |
| Voorkeursarchitectuur          | Hybride patroon.                                                                                                                                                                                                                                   | (Q)EAA voor formele gebouwattributen en bevoegdheden; API voor actuele gebouwdata; (Q)ERDS voor formele rapportage of kennisgeving. |

**Vragen aan TIP:**

- Welke gebouwattributen zijn stabiel genoeg en formeel genoeg voor (Q)EAA's?
- Kan een (Q)EAA een tijdelijke beheer- of onderhoudsbevoegdheid representeren, of hoort dit in runtime-autorisatie?
- Wanneer is sensor- of storingsinformatie te dynamisch voor een attestatie en moet deze via API worden ontsloten?

### 9.3. Stadspas met Wmo-voorzieningen en milieupas

Een inwoner heeft via een stadspas of milieupas recht op voorzieningen, zoals kledingbudget, zwemmen, toegang tot afvalcontainers of toegang tot de milieustraat. De use-case combineert aanspraken, budgetten, transacties, toegangsmomenten en quota.

| **Component**                  | **In deze use-case**                                                                                                                                           | **Voorlopige positionering**                                                                                               |
| ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| Bewijslaag - (Q)EAA's          | Recht op voorziening; doelgroepstatus; geldigheidsperiode; recht op kledingvoorziening; zwemvoorziening; recht om containers of milieustraat te gebruiken.     | Geschikt voor bewijsbare aanspraken en rechten, bij voorkeur dataminimaal.                                                 |
| Overdrachtszekerheid - (Q)ERDS | Formele beschikking, wijziging, intrekking of kennisgeving over het recht op een voorziening.                                                                  | Alleen relevant wanneer formele bezorging bewijswaarde heeft.                                                              |
| Gegevensdienst/API             | Resterend saldo, aantal resterende bezoeken, daglimiet, jaarquotum, actuele blokkade, acceptatievoorwaarden, actuele geldigheid.                               | API/datadienst blijft leidend voor actuele status, saldo en quota.                                                         |
| Proces-/transactielaag         | Aankooptransactie bij winkel; toegangspoort zwembad; containeropening; bezoek milieustraat; registratie van gewicht of afvalcategorie; financiele afhandeling. | Transactielaag voert gebruiksmomenten en statuswijzigingen uit.                                                            |
| Voorkeursarchitectuur          | Hybride patroon.                                                                                                                                               | (Q)EAA voor formeel recht of aanspraak; API voor saldo, gebruik, quota en transacties; (Q)ERDS voor formele beschikkingen. |

**Vragen aan TIP:**

- Is het passend om het recht op een voorziening als (Q)EAA te modelleren, terwijl gebruik en saldo via API worden afgehandeld?
- Moet een toegangsmoment zelf ooit als attestatie worden vastgelegd, of volstaat registratie in de transactielaag?
- Welke dataminimale verklaringen zijn wenselijk, bijvoorbeeld "heeft recht op voorziening X" in plaats van volledige Wmo-context?

### 9.4. Parkeervergunning of bezoekersparkeren

Een inwoner heeft een digitale parkeervergunning of mag bezoekers aanmelden. Handhaving of parkeerapplicaties moeten kunnen bepalen of parkeren op een bepaald moment is toegestaan.

| **Component**                  | **In deze use-case**                                                                                                         | **Voorlopige positionering**                                                                                                                |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| Bewijslaag - (Q)EAA's          | Recht op parkeervergunning; woonadresrelatie; gemeentegebonden recht; eventueel machtiging voor bezoekersparkeren.           | Geschikt voor bewijs van recht of aanspraak, mits attribuut en issuer helder zijn.                                                          |
| Overdrachtszekerheid - (Q)ERDS | Formele verlening, wijziging of intrekking van een parkeervergunning.                                                        | Relevant bij formele beschikkingen of kennisgevingen.                                                                                       |
| Gegevensdienst/API             | Actuele parkeeractie, resterend bezoekerssaldo, begin- en eindtijd, tijdelijke kentekenkoppeling, actuele handhavingsstatus. | API is leidend voor real-time parkeercontrole en actuele parkeerrechten.                                                                    |
| Proces-/transactielaag         | Starten, wijzigen of beeindigen van parkeeractie; aanmelden bezoeker; controle door handhaving.                              | Transactiedienst voert proceshandelingen uit.                                                                                               |
| Voorkeursarchitectuur          | Hybride patroon.                                                                                                             | (Q)EAA voor recht of machtiging; API/transactiedienst voor actuele parkeeractie en handhaving; (Q)ERDS voor formele vergunningcommunicatie. |

**Vragen aan TIP:**

- Is het parkeerecht geschikt als (Q)EAA of is actuele registratie in het parkeerregister leidend?
- Moet het kenteken onderdeel zijn van het bewijsstuk of uitsluitend van de runtime-controle?
- Wanneer is offline bewijs wenselijk en wanneer is real-time API-controle noodzakelijk?

### 9.5. Vergunning voor tijdelijke objecten in de openbare ruimte

Een burger of organisatie heeft een vergunning voor een container, steiger, kraam, terrasuitbreiding of bouwkeet in de openbare ruimte. Naast de formele vergunning spelen actuele plaatsingsstatus, inspecties en omgevingswijzigingen een rol.

| **Component**                  | **In deze use-case**                                                                                                                                  | **Voorlopige positionering**                                                                                           |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| Bewijslaag - (Q)EAA's          | Verleende vergunning; locatie; aanvrager; geldigheidsperiode; voorwaarden; bevoegdheid van uitvoerder of aannemer.                                    | Geschikt als bewijsbare vergunning of bevoegdheid.                                                                     |
| Overdrachtszekerheid - (Q)ERDS | Formele verlening, verlenging, wijziging, intrekking, handhavingsbericht of kennisgeving.                                                             | Relevant wanneer ontvangst en integriteit van de kennisgeving bewijswaarde hebben.                                     |
| Gegevensdienst/API             | Actuele plaatsingsstatus, inspectiestatus, melding van verwijdering, tijdelijke verkeersmaatregelen, gewijzigde omstandigheden in de openbare ruimte. | API/datadienst is passend voor actuele status en operationele omstandigheden.                                          |
| Proces-/transactielaag         | Melden plaatsing, melden verwijdering, aanvragen verlenging, inspectie registreren, handhavingsactie starten.                                         | Proceslaag voert statuswijzigingen en meldingen uit.                                                                   |
| Voorkeursarchitectuur          | Hybride patroon.                                                                                                                                      | (Q)EAA voor vergunningbewijs; API voor actuele status en inspecties; (Q)ERDS voor formele besluiten en kennisgevingen. |

**Vragen aan TIP:**

- Is een vergunningbewijs als (Q)EAA bruikbaar voor controle in de openbare ruimte?
- Welke actuele omstandigheden mogen niet in de attestatie worden opgenomen maar moeten via API beschikbaar zijn?
- Wanneer is (Q)ERDS nodig voor formele communicatie met vergunninghouder of handhaving?

### 9.6. Evenementenvergunning en real-time crowd management

Een organisator heeft een vergunning voor een evenement en deelt operationele informatie met gemeente, politie, brandweer of GHOR. De formele vergunning verschilt wezenlijk van real-time operationele informatie tijdens het evenement.

| **Component**                  | **In deze use-case**                                                                                                                                           | **Voorlopige positionering**                                                                                                               |
| ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| Bewijslaag - (Q)EAA's          | Vergunde status; organisator; locatie; geldigheidsperiode; maximale capaciteit; veiligheidsvoorwaarden; bevoegdheid van organisator of veiligheidscoordinator. | Geschikt voor formele vergunningstatus en bevoegdheden.                                                                                    |
| Overdrachtszekerheid - (Q)ERDS | Formele verlening of wijziging van vergunning, veiligheidsinstructie, noodbevel, kennisgeving aan organisator of ketenpartners.                                | Relevant waar formele aflevering en ontvangst aantoonbaar moeten zijn.                                                                     |
| Gegevensdienst/API             | Actuele bezoekersaantallen, crowd density, calamiteitenstatus, gewijzigde routes, tijdelijke afsluitingen, inzetinformatie.                                    | API/eventstromen zijn leidend voor real-time operationele informatie.                                                                      |
| Proces-/transactielaag         | Bijstellen crowd-managementmaatregel, activeren route, escaleren incident, informeren hulpdiensten, sluiten toegangspoort.                                     | Proceslaag ondersteunt operationele besluitvorming en statuswijzigingen.                                                                   |
| Voorkeursarchitectuur          | Hybride patroon.                                                                                                                                               | (Q)EAA voor vergunning en bevoegdheid; API/eventstromen voor real-time crowd management; (Q)ERDS voor formele besluiten of kennisgevingen. |

**Vragen aan TIP:**

- Is de scheiding tussen vergunningbewijs en operationele crowd-data voldoende scherp?
- Zijn er situaties waarin een momentopname achteraf als bewijsstuk moet worden afgegeven?
- Welke gegevensstromen vragen API/eventmechanismen in plaats van walletgebaseerde attestaties?

## 10\. Validatiematrix samengevat en conclusie

Onderstaande matrix vat de voorlopige positionering samen. Algemene conclusie is dat in de praktijk hybride toepassing wenselijk is om ervoor te zorgen dat stelsels voldoende kunnen functioneren. Langs het GBO traject willen we tot geharmoniseerde afspraken, standaarden en stelselfuncties komen om de implementatielast bij partijen te verlagen.

| **Use-case**           | **(Q)EAA - bewijslaag**                    | **(Q)ERDS - overdracht**                        | **API/datadienst**                                  | **Proces-/transactie**                 | **Voorlopige duiding** |
| ---------------------- | ------------------------------------------ | ----------------------------------------------- | --------------------------------------------------- | -------------------------------------- | ---------------------- |
| Aankoop woning         | Identiteit, machtiging, formele attributen | Dossierstukken waar formele aflevering nodig is | Actuele brongegevens, inkomen, installatiegegevens  | Hypotheek-, koop- en overdrachtsproces | Hybride                |
| Gebouwinformatie       | Gebouwattributen, beheerrol, vergunning    | Inspectie- of veiligheidsrapporten              | Sensoren, storingen, eigendom, bezetting, onderhoud | Onderhoud en autorisatieproces         | Hybride                |
| Stadspas/Wmo/milieupas | Recht/aanspraak, doelgroepstatus           | Beschikking, wijziging, intrekking              | Saldo, quota, blokkade, geldigheid                  | Transactie, toegang, containeropening  | Hybride                |
| Parkeren               | Parkeerrecht, woonadresrelatie             | Vergunningverlening of intrekking               | Actuele parkeeractie en saldo                       | Start/stop parkeeractie, handhaving    | Hybride                |
| Tijdelijke objecten    | Vergunning, locatie, voorwaarden           | Besluit, kennisgeving, handhaving               | Plaatsings- en inspectiestatus                      | Melding, verlenging, inspectie         | Hybride                |
| Evenementen            | Vergunning, organisator, capaciteit        | Vergunningwijziging, noodbevel                  | Crowd-data, routes, calamiteitenstatus              | Operationele maatregelen en escalatie  | Hybride                |

## 11\. Gewenste terugkoppeling van TIP

GBO vraagt TIP om de terugkoppeling bij voorkeur te structureren langs onderstaande punten:

- Terminologie: zijn (Q)EAA's, (Q)ERDS en de begrippen bewijslaag/proceslaag juist en herkenbaar gebruikt?
- Kader: is de vierfuncties-indeling volledig en bruikbaar voor informatievoorzieningsprocessen?
- Architectuurprincipe: is de positionering van (Q)EAA's en (Q)ERDS als vertrouwensvoorzieningen rondom API-gebaseerde dienstverlening juist?
- Beslisregels: zijn de beslisregels scherp genoeg, of ontbreken uitzonderingen of randvoorwaarden?
- Use-cases: zijn de componenten per use-case juist ingedeeld, en welke aanvullende use-cases zijn nodig?
- Stelselimplicaties: welke afspraken, standaarden, profielen of governance-keuzes zijn nodig binnen het EDI-stelsel en GBO om dit patroon uitvoerbaar te maken?

We zijn benieuwd naar jullie zienswijze en opmerkingen/aanvullingen.

## 12\. Referentiekaders

Voor de terminologie en architectuurpositionering sluiten we aan bij onderstaande referentiekaders. De verwijzingen zijn bedoeld als context voor validatie en niet als uitputtende onderbouwing.

| **Referentie**                                                                     | **Relevantie**                                                                                                                                  | **URL**                                                                                                                     |
| ---------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| eIDAS-verordening en wijziging door Verordening (EU) 2024/1183                     | Kader voor Europese Digitale Identiteit, EDI-wallets, elektronische attestaties van attributen en vertrouwensdiensten.                          | <https://eur-lex.europa.eu/eli/reg/2024/1183/oj>                                                                            |
| Europese Commissie - Trust services under the European Digital Identity Regulation | Toelichting op EAA, QEAA en andere vertrouwensdiensten.                                                                                         | <https://digital-strategy.ec.europa.eu/en/faqs/questions-answers-trust-services-under-european-digital-identity-regulation> |
| NORA Vijflaagsmodel                                                                | Architectuurinvalshoeken voor grondslagen, organisatie, informatie, applicatie en infrastructuur.                                               | <https://www.noraonline.nl/wiki/NORA_Vijflaagsmodel>                                                                        |
| NORA - Leveren en gebruiken van datadiensten                                       | Kader voor het opvragen van actuele en historische data via datadiensten/API's.                                                                 | <https://www.noraonline.nl/wiki/Leveren_en_gebruiken_van_datadiensten>                                                      |
| NORA - API                                                                         | Definitie en positionering van API's als koppelvlak voor communicatie tussen applicaties.                                                       | <https://www.noraonline.nl/wiki/API>                                                                                        |
| GEMMA/Common Ground vijflaagsmodel                                                 | Gemeentelijke informatiearchitectuur met nadruk op gestandaardiseerde API's en gebruik van bronregistraties.                                    | <https://www.gemmaonline.nl/wiki/Common_Ground_vijflaagsmodel>                                                              |
| Wet hergebruik van overheidsinformatie                                             | Artikel 5a. Beschikbaarstelling specifieke hoogwaardige gegevenssets (lid a)<br><br>Artikel 5c. Beschikbaarstelling dynamische gegevens (lid b) | <https://wetten.overheid.nl/BWBR0036795/>                                                                                   |


[^1]: Zie ook globaal ontwerp en PSA: <https://ictu.github.io/GBO-PSA/latest/oplossingsrichting/>.

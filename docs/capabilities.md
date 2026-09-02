# Stelselfuncties

Dit hoofdstuk werkt de stelselfuncties uit die het [globaal ontwerp](https://ictu.github.io/GBO-GO/latest/#4-generieke-functies-en-stelselfuncties) koppelt aan de generieke functies. De uitwerking richt zich op normerende eisen, afspraken, standaarden, functionele voorzieningen, verantwoordelijkheden en open besluiten.

Iedere genoemde voorziening is een functionele component. De PSA schrijft geen product of specifieke referentie-implementatie voor.

## Overzicht

| Stelselfunctie | Generieke functie(s) | Kern van de uitwerking |
|---|---|---|
| [S01 — Toestemmingsregistratie](#s01-toestemmingsregistratie) | [F2](generieke-functies.md#f2-toegang-interactie), [F6](generieke-functies.md#f6-grondslag-beleid) | Geldige toestemming machineleesbaar vastleggen en actueel raadplegen. |
| [S02 — Toestemmingsportaal](#s02-toestemmingsportaal) | [F2](generieke-functies.md#f2-toegang-interactie) | Begrijpelijke burgerinteractie voor verlenen, inzien en intrekken. |
| [S03 — Burgeridentificatie & Pseudonimisering](#s03-burgeridentificatie-pseudonimisering) | [F1](generieke-functies.md#f1-identiteit-vertrouwen) | Burger identificeren en BSN afschermen voor onbevoegde afnemers. |
| [S04 — Organisatie-authenticatie & Vertrouwensstelsel](#s04-organisatie-authenticatie-vertrouwensstelsel) | [F1](generieke-functies.md#f1-identiteit-vertrouwen) | Deelnemers toelaten, identificeren en vertrouwen. |
| [S05 — Autorisatie](#s05-autorisatie) | [F2](generieke-functies.md#f2-toegang-interactie), [F6](generieke-functies.md#f6-grondslag-beleid) | Iedere gegevensvraag toetsen en de beslissing afdwingen. |
| [S06 — Beleidsbeheer & -distributie](#s06-beleidsbeheer-distributie) | [F2](generieke-functies.md#f2-toegang-interactie), [F6](generieke-functies.md#f6-grondslag-beleid) | Beleid bestuurlijk beheren en gecontroleerd beschikbaar stellen. |
| [S07 — Gegevensontsluiting](#s07-gegevensontsluiting) | [F3](generieke-functies.md#f3-gegevensvoorziening), [F7](generieke-functies.md#f7-orkestratie-integratie) | Eén generieke bronontsluiting-API en een dienstencatalogus. |
| [S08 — OOTS-adapter](#s08-oots-adapter) | [F3](generieke-functies.md#f3-gegevensvoorziening), [F7](generieke-functies.md#f7-orkestratie-integratie) | Aansluiting op OOTS-V en mapping naar OOTS-EDM. |
| [S09 — Logging, Audit & Traceerbaarheid](#s09-logging-audit-traceerbaarheid) | [F8](generieke-functies.md#f8-beheer-continuiteit) | Ketenbrede herleidbaarheid en verantwoording. |
| [S10 — Semantiek & Gegevenscatalogus](#s10-semantiek-gegevenscatalogus) | [F4](generieke-functies.md#f4-semantiek-eenheid-van-taal), [F5](generieke-functies.md#f5-gegevenskwaliteit-validatie) | Begrippen, schema's, kwaliteit en mappings beheren. |
| [S11 — Attesteringsuitgifte](#s11-attesteringsuitgifte) | [F3](generieke-functies.md#f3-gegevensvoorziening), [F7](generieke-functies.md#f7-orkestratie-integratie) | PubEAA-uitgifte en ondersteuning van QEAA-uitgifte via een ASI. |

## S01 — Toestemmingsregistratie

**Doel**  
Geldige toestemming en de bijbehorende doelbinding machineleesbaar vastleggen en actueel beschikbaar maken voor autorisatie.

**Normerende eisen**

- een toestemmingsrecord bevat minimaal een betrokkene of pseudonieme verwijzing, afnemer, dienst, doel, gegevensscope, tijdstip, geldigheidsduur, status en bewijs van de interactie.
- de registratie ondersteunt verlening, wijziging, intrekking en verloop.
- de autorisatie controleert de actuele status op het moment van de gegevensvraag.
- het register bevat geen BSN als een pseudonieme identificatie volstaat.
- alleen de burger en bevoegde componenten hebben toegang tot toestemming. Deze componenten gebruiken de informatie voor autorisatie of verantwoording.
- bewaartermijnen en verwijdering sluiten aan op juridische eisen en auditeisen.

**Afspraken en standaarden**

- geldige grondslagtypen en toepassingsvoorwaarden per gegevensstroom.
- gemeenschappelijk gegevensmodel voor toestemming en grondslag.
- gestandaardiseerd PIP-koppelvlak voor raadpleging.
- regels voor intrekking, verloop, bewijsbaarheid en conflictbehandeling.
- aansluiting op bestaande standaarden voor machineleesbare rechten- of beleidsbeschrijvingen waar dat passend is.

**Functionele voorzieningen**

- toestemmingsregister.
- raadpleeginterface voor autorisatiecomponenten.
- beheer- en auditinterface voor bevoegde beheerders.
- interface voor het toestemmingsportaal.

**Verantwoordelijkheden**

De beleidsverantwoordelijke bepaalt wanneer toestemming een geldige grondslag is. De beheerder van het register borgt beschikbaarheid, integriteit en auditbaarheid. De afnemer blijft verantwoordelijk voor rechtmatige verwerking na ontvangst.

**Open besluiten**

- wettelijke grondslag en reikwijdte voor DvTP.
- centrale of federatieve inrichting van het register.
- beheerorganisatie en toezicht.
- definitief toestemmings- en PIP-profiel.

## S02 — Toestemmingsportaal

**Doel**  
De burger geïnformeerd toestemming laten verlenen. De burger kan bestaande toestemmingen ook inzien en, waar van toepassing, intrekken.

**Normerende eisen**

- de burger ziet in begrijpelijke taal de afnemer, dienst, doel, gegevensscope, duur en gevolgen.
- de authenticatie heeft een passend betrouwbaarheidsniveau.
- de burger ontvangt een bevestiging van de gemaakte keuze.
- het toestemmingsregister verwerkt een intrekking zonder onnodige vertraging.
- de interactie voldoet aan toegankelijkheidseisen en werkt op gangbare apparaten.
- de inrichting biedt een gelijkwaardig alternatief als wetgeving of beleid dat vereist.
- pseudonimisering en technische identifiers zijn transparant voor de burger. De interface presenteert deze niet als inhoudelijke keuze.

**Afspraken en standaarden**

- UX-richtlijnen voor toestemming.
- betrouwbaarheidsniveaus per dienst of gegevenscategorie.
- toegankelijkheidsstandaarden.
- authenticatieprofielen voor erkende middelen.
- regels voor vrijwilligheid, een alternatief en het voorkomen van nadeel bij weigering.

**Functionele voorzieningen**

- toestemmingsportaal.
- aansluiting op erkende authenticatiemiddelen.
- koppeling met het toestemmingsregister.
- inzage- en intrekkingsfunctie.

**Open besluiten**

- één centraal portaal of meerdere interoperabele portalen.
- aansluiting op bestaande burgerportalen.
- model voor toezicht en handhaving op vrijwilligheid en een gelijkwaardig alternatief.

## S03 — Burgeridentificatie & Pseudonimisering

**Doel**  
De burger op een passend niveau identificeren en voorkomen dat onbevoegde afnemers het BSN ontvangen.

**Normerende eisen**

- alleen componenten en organisaties met een geldige grondslag verwerken het BSN.
- een private afnemer zonder wettelijke BSN-bevoegdheid ontvangt een partijspecifieke identiteit of pseudoniem.
- pseudoniemen voor verschillende partijen of contexten zijn niet onderling koppelbaar.
- de inrichting voert identiteitsvertaling alleen uit voor een toegestane dienst en gegevensvraag.
- de inrichting beheert identiteitsgegevens en sleutelmateriaal volgens hoge beveiligingseisen.
- als een erkend buitenlands of wallet-gebaseerd middel geen BSN bevat, gebruikt de inrichting eerst een gecontroleerd identity-matchingproces. Pas daarna kan de bron persoonsgegevens bevragen.

**Afspraken en standaarden**

- betrouwbaarheidsniveaus en toegestane authenticatiemiddelen.
- aansluitprofiel voor de pseudonimiseringsvoorziening.
- regels voor sleutelbeheer, partijbinding en levenscyclus.
- eisen aan identity matching, inclusief foutafhandeling en eventuele menselijke tussenkomst.

**Functionele voorzieningen**

- erkende burgerauthenticatie.
- BSNk PP of een functioneel gelijkwaardige erkende pseudonimiseringsvoorziening.
- identity-matchingfunctie waar noodzakelijk.
- veilige omzetting aan de kant van de bronhouder.

**Open besluiten**

- beheer van pseudonieme verwijzingen en koppeling met toestemming.
- positie en governance van identity matching.
- betrouwbaarheidsprofiel per interactiepatroon.

## S04 — Organisatie-authenticatie & Vertrouwensstelsel

**Doel**  
Vaststellen dat deelnemende organisaties en systemen de juiste identiteit hebben en bevoegd zijn om deel te nemen. Ook moeten zij blijvend aan de aansluitvoorwaarden voldoen. Waar nodig tonen zij aan in welke rol en namens welke partij zij handelen.

**Normerende eisen**

- deelname vereist een voorafgaande toelatingsbeslissing.
- organisaties en systemen gebruiken erkende identifiers en certificaten.
- de inrichting koppelt de technische identiteit aan de toegelaten juridische organisatie en rol.
- vertrouwensankers en deelnemersstatus zijn machineleesbaar controleerbaar.
- schorsing of beëindiging leidt tijdig tot intrekking van de toegang.
- buitenlandse, publieke en private deelnemers kunnen verschillende toelatingsregimes hebben. Zij gebruiken waar mogelijk dezelfde verificatiepatronen.
- de inrichting behandelt technische identiteit en toelatingsstatus apart van de rol en bevoegdheid in een concrete interactie.
- als een organisatie of systeem namens een andere partij handelt, is de vertegenwoordigingscontext verifieerbaar. Deze context bevat minimaal vertegenwoordiger, vertegenwoordigde partij, rol of hoedanigheid, reikwijdte en geldigheid.
- een technische intermediair voor alleen transport of connectiviteit krijgt door die rol geen bevoegdheid om namens een andere partij te handelen.

**Afspraken en standaarden**

- aansluitvoorwaarden per deelnemersgroep.
- certificaat- en trust-anchorprofielen.
- koppeling tussen OIN, KvK-nummer en Europese identifiers waar nodig.
- periodieke herbeoordeling, toezicht, schorsing en beëindiging.
- hergebruik van FDS Poortwachter en Marktmeester waar deze functies beschikbaar en passend zijn.
- gemeenschappelijk model voor uitwisseling en verificatie van vertegenwoordigings- en bevoegdheidscontext.
- regels voor herkomst, geldigheid, intrekking en verificatie van bevoegdheidsbewijzen.

**Functionele voorzieningen**

- deelnemersregister.
- erkende certificaat- en vertrouwenslijsten.
- proces voor aansluiting en wijzigingen.
- verificatie-interface voor deelnemersstatus.

**Open besluiten**

- stelsel en beheerorganisatie voor private dienstverleners.
- verdeling van verantwoordelijkheden tussen FDS, GDI, sectorale stelsels en Europese governance.
- eenduidige koppeling van organisatie-identifiers.

## S05 — Autorisatie

**Doel**  
Iedere gegevensvraag toetsen aan identiteit, dienst, doel, grondslag, gegevensscope en context. De bron moet de uitkomst van deze toets afdwingen.

**Normerende eisen**

- iedere gegevensvraag doorloopt een PEP-PDP-keten of een functioneel gelijkwaardige scheiding tussen afdwinging en besluitvorming.
- de autorisatievraag gebruikt een gestandaardiseerd vocabulaire voor subject, actie, resource en context.
- als een actor namens een andere partij handelt, gebruikt de autorisatiebeslissing zowel de handelende actor als de vertegenwoordigde partij. De beslissing gebruikt ook rol, reikwijdte en geldigheid van de bevoegdheid.
- de PDP kan relevante informatiebronnen raadplegen. Voorbeelden zijn deelnemersstatus, dienstencatalogus, toestemmingsregister en informatie over vertegenwoordiging en bevoegdheid.
- de beslissing kan afzonderlijke gegevens of velden toestaan of weigeren.
- logging legt de beleidsversie, relevante context en beslissing vast.
- een PEP weigert standaard bij ontbrekende of onbetrouwbare beslisinformatie.
- de interface en het beleid zijn productonafhankelijk.

**Afspraken en standaarden**

- AuthZEN NLGov-profiel (NLgov Profile for OpenID AuthZEN Authorization API 1.0.0) of een gelijkwaardig open PEP-PDP-profiel.
- 
- gemeenschappelijk autorisatievocabulaire.
- regels voor foutafhandeling, time-outs en fail-safe gedrag.
- aansluiting van PIP-bronnen.
- verificatie- en testregels voor beleidsbeslissingen.

**Functionele voorzieningen**

- PEP bij of voor de bronontsluiting.
- PDP per bronhouder of gedeeld, zolang verantwoordelijkheden en beschikbaarheid zijn geborgd.
- PIP-koppelvlakken naar relevante registers en catalogi.

**Open besluiten**

- centrale, decentrale of hybride PDP-inrichting.
- definitief GBO-profiel voor autorisatievragen en beslissingen.
- locatie van identiteitsvertaling ten opzichte van de beleidsbeslissing.

## S06 — Beleidsbeheer & -distributie

**Doel**  
Autorisatiebeleid bestuurlijk beheren, testen, vaststellen en publiceren. Autorisatiecomponenten moeten het vastgestelde beleid gecontroleerd kunnen gebruiken.

**Normerende eisen**

- beleid is machineleesbaar, versieerbaar en niet gebonden aan één specifieke policytaal of implementatie.
- ieder beleid heeft een inhoudelijke eigenaar, goedkeurder, ingangsdatum en wijzigingshistorie.
- tests valideren wijzigingen vóór publicatie. De tests omvatten positieve, negatieve en regressietests.
- de ontvanger kan de authenticiteit en integriteit van gepubliceerde beleidssets controleren.
- autorisatiecomponenten kunnen betrouwbaar een geldige beleidsversie verkrijgen. Bij storingen vallen zij gecontroleerd terug.
- een spoedprocedure en terugrolprocedure zijn beschikbaar.

**Afspraken en standaarden**

- governance voor beleidsvorming en goedkeuring.
- formeel wijzigingsproces.
- open formaat en distributieprofiel voor gesigneerde beleidssets.
- regels voor versiecompatibiliteit, activering en terugrol.
- een menselijk leesbare publicatie die uit dezelfde vastgestelde beleidsbron is afgeleid.

**Functionele voorzieningen**

- Policy Administration Point.
- beleidsrepository.
- distributie-interface.
- test- en validatievoorziening.

**Open besluiten**

- eigenaar van inhoudelijke policy-governance.
- operationele beheerder.
- definitieve taal, verpakking en distributiestandaard.
- ruimte voor aanvullend bronhouder- of sectorspecifiek beleid.

## S07 — Gegevensontsluiting

**Doel**  
Bronhouders gegevens laten aanbieden via één generieke en herbruikbare bronontsluiting-API die selectieve gegevensvragen ondersteunt.

**Normerende eisen**

- een bronhouder gebruikt voor de GBO-interactiepatronen één logisch koppelvlak.
- de API ondersteunt vooraf geregistreerde, selectieve gegevensvragen.
- iedere gegevensvraag verwijst eenduidig naar een dienst in de dienstencatalogus.
- het koppelvlak ondersteunt de autorisatie- en loggingeisen van S05 en S09.
- gepubliceerde informatie beschrijft schema's, versies, foutmeldingen en beschikbaarheidskenmerken.
- de bronhouder kan nieuwe diensten in beginsel via schema, dienstregistratie en beleid toevoegen.
- de GBO-vertaallaag is optionele en vervangbare ondersteuning. De vertaallaag is geen verplichte centrale route.

**Afspraken en standaarden**

- FSC voor veilige federatieve connectiviteit waar passend.
- een vastgesteld API-profiel voor selectieve bevraging, met GraphQL als voorgestelde invulling.
- DCAT-AP-NL voor catalogusbeschrijvingen waar van toepassing.
- aansluitvoorwaarden, serviceniveaus en versiebeleid.
- registratieproces voor diensten en toegestane gegevensvragen.

**Functionele voorzieningen**

- bronontsluiting-API.
- connectiviteitscomponenten bij bronhouder en afnemer.
- dienstencatalogus.
- optionele GBO-vertaallaag.

**Open besluiten**

- formele standaardisering van het API-profiel.
- beheer van de dienstencatalogus.
- eisen en exitstrategie voor de GBO-vertaallaag.
- verhouding tussen centrale en sectorspecifieke dienstregistratie.

## S08 — OOTS-adapter

**Doel**  
De generieke bronontsluiting binnen GBO aansluiten op de Basisinrichting OOTS, vooral op OOTS-V. Bronhouders hoeven daardoor geen OOTS-specifieke techniek te gebruiken.

**Normerende eisen**

- de OOTS-adapter koppelt aan het nationale koppelvlak van OOTS-V.
- OOTS-verzoeken gebruiken dezelfde generieke autorisatie- en loggingfuncties als andere gegevensvragen.
- de Basisinrichting OOTS blijft verantwoordelijk voor transport, discovery en Europese procesinteractie.
- de adapter of mappingfunctie vertaalt expliciet tussen brongegevens en OOTS-EDM.
- bronhouders zijn niet afhankelijk van implementatiedetails van AS4/e-Delivery.
- sectorale of eigen OOTS-aansluitingen vallen buiten GBO. GBO sluit deze aansluitingen technisch niet uit.

**Afspraken en standaarden**

- SDG-verordening en OOTS Technical Design Documents.
- OOTS-EDM.
- AS4/e-Delivery en discoveryprofielen aan de kant van de Basisinrichting OOTS.
- nationaal koppelvlak tussen OOTS-V en de GBO-bronontsluiting.
- beheerafspraken voor mappings en gegevensdiensten.

**Functionele voorzieningen**

- Basisinrichting OOTS en OOTS-V als bestaande externe voorziening.
- uitbreiding van OOTS-V met het GBO-koppelvlak.
- semantische mappings via S10.

**Open besluiten**

- precieze grens tussen OOTS-V en semantische mapping.
- beheer en financiering van de aanpassing.
- beheer van discovery- en dienstinformatie.

## S09 — Logging, Audit & Traceerbaarheid

**Doel**  
Gegevensvragen en relevante beslissingen over de hele keten herleidbaar maken. De logging ondersteunt wettelijke verantwoording en inzage.

**Normerende eisen**

- iedere gegevensvraag krijgt een verzoekidentificator die over de hele keten bruikbaar is.
- iedere component legt de gebeurtenissen vast die voor zijn verantwoordelijkheid relevant zijn.
- logging bevat niet meer persoonsgegevens dan noodzakelijk.
- autorisatiebeslissingen verwijzen naar de toegepaste beleidsversie en relevante informatie over de grondslag.
- maatregelen beschermen loggegevens tegen ongeautoriseerde wijziging en verwijdering.
- afspraken regelen bewaartermijnen, toegang, inzage en vernietiging expliciet.
- centrale aggregatie is alleen toegestaan als noodzaak, grondslag en privacymaatregelen zijn aangetoond.

**Afspraken en standaarden**

- Logboek Dataverwerkingen als functioneel kader.
- Authorization Decision Log voor vastleggen autorisatiebeslissingen.
- gestandaardiseerde correlatie- en tracecontext.
- uniform gebeurtenismodel en minimale auditset.
- afspraken voor tijdsynchronisatie, integriteit, bewaartermijnen en incidentonderzoek.

**Functionele voorzieningen**

- decentrale logging per component.
- veilige zoek- en auditfunctie voor bevoegde partijen.
- eventueel een privacybewuste correlatie- of inzagefunctie.

**Open besluiten**

- centraal of federatief inzagemodel voor burgers.
- noodzaak en inrichting van centrale auditaggregatie.
- definitief GBO-profiel op LDV en tracecontext.

## S10 — Semantiek & Gegevenscatalogus

**Doel**  
Gegevens, begrippen, schema's, kwaliteit en mappings beheerd beschrijven. Daardoor kunnen verschillende interactiepatronen gegevens eenduidig interpreteren en valideren.

**Normerende eisen**

- iedere gegevensdienst verwijst naar een beheerd schema en begrippenkader.
- bronhouders en domeinen zijn verantwoordelijk voor inhoud en kwaliteit van hun modellen.
- catalogusbeschrijvingen, schema's en mappings zijn machineleesbaar en versieerbaar.
- de beschrijvingen bevatten kwaliteitskenmerken en herkomstinformatie.
- de inrichting past validatieregels vóór uitlevering toe waar dat technisch en juridisch passend is.
- mappings naar OOTS-EDM en attestatieschema's zijn expliciet. Zij zijn herleidbaar naar de gebruikte bron- en doelversies.
- ook begrippen voor identificatie en autorisatie krijgen waar nodig een beheerde en eenduidige beschrijving. Voorbeelden zijn rol, vertegenwoordiger, vertegenwoordigde partij, bevoegdheid en reikwijdte.
- de catalogus beschrijft ook de voorwaarden voor gebruik van een dienst. De catalogus dupliceert het autorisatiebeleid niet.

**Afspraken en standaarden**

- NL-SBB voor begrippen.
- MIM voor informatiemodellen waar passend.
- DCAT-AP-NL voor catalogusbeschrijvingen.
- RDF, SKOS, SHACL, JSON Schema, GraphQL-schema's en XML Schema waar passend.
- kwaliteit en herkomst volgens toepasselijke NORA- en W3C-kaders.

**Functionele voorzieningen**

- gegevens- en dienstencatalogus.
- schema- en mappingrepository.
- validatievoorzieningen.
- optionele serialisatie- of mappingservice.
- gestandaardiseerde procedure voor het terugmelden van fouten of vermoedelijke onjuistheden aan de bronhouder.

**Open besluiten**

- federatieve of centrale inrichting van catalogus en schema-repository.
- inhoudelijke en technische beheerverantwoordelijkheden.
- positionering van mapping- en serialisatieservices.
- wijzigingsproces tussen bronhouders, domeinen en externe stelsels.
- inrichting van de terugmeldprocedure voor fouten of vermoedelijke onjuistheden.

## S11 — Attesteringsuitgifte

**Doel**  
Brongegevens beschikbaar maken als PubEAA voor een EUDI-Wallet. Ook ondersteunt deze functie QTSP's bij QEAA-uitgifte via een Authentic Source Interface.

**Normerende eisen**

- de bronhouder blijft juridisch en inhoudelijk verantwoordelijk voor de uitgegeven publieke attributen, tenzij wet- en regelgeving een andere rolverdeling bepaalt.
- GBO kan de technische functie van PubEAA-verstrekker ondersteunen. Deze ondersteuning maakt GBO niet automatisch de juridische uitgevende instantie.
- een ASI-provider biedt gestandaardiseerde verify- en, waar toegestaan, retrievefuncties aan QTSP's.
- uitgifte, verificatie en retrieval gebruiken passende authenticatie, autorisatie en logging.
- attestaties volgen een vastgesteld attestation rulebook en schema.
- afspraken regelen binding aan burger en wallet, signing, status, intrekking en geldigheid.
- centrale, decentrale en federatieve varianten blijven mogelijk als zij aan dezelfde koppelvlakken en eisen voldoen.

**Afspraken en standaarden**

- eIDAS2, uitvoeringshandelingen en ARF.
- OpenID4VCI voor uitgifte.
- OpenID4VP voor presentatie of verificatie waar relevant.
- SD-JWT VC en mdoc waar voorgeschreven of passend.
- ETSI TS 119 478 V1.1.1 voor de inrichting van de ASI-provider voor QTSP's.
- ETSI-profielen voor gekwalificeerde zegels en vertrouwensdiensten.
- attestation rulebooks en profielen voor status en intrekking.

**Functionele voorzieningen**

- PubEAA-verstrekker.
- ASI-provider met verify- en eventueel retrievefunctie.
- signing- en statusvoorzieningen.
- aansluiting op relevante vertrouwenslijsten en catalogi.
- semantische mapping via S10.

**Open besluiten**

- centraal, decentraal of federatief uitgiftemodel.
- beheerder van generieke technische voorzieningen.
- verdeling van verantwoordelijkheden tussen bronhouder, PubEAA-verstrekker, ASI-provider en QTSP.
- certificering en opname in vertrouwenslijsten.
- voorwaarden voor attestatie-uitgifte op basis van claims die zijn afgeleid van authentieke brongegevens. Dit omvat eigenaarschap, versiebeheer van de regel en verantwoordelijkheid voor de resulterende claim.
- startpunt en gebruikersreis voor de uitgifte.

## Samenvatting van belangrijkste open punten

| Stelselfunctie | Belangrijkste juridische of bestuurlijke gap | Belangrijkste open punt voor standaardisatie of realisatie |
|---|---|---|
| S01 | Grondslag en governance voor toestemming bij DvTP | Toestemmingsmodel, PIP-profiel en beheerder |
| S02 | Vrijwilligheid, alternatief en toezicht | Portaalinrichting en UX-profiel |
| S03 | Governance identity matching | Pseudonimiserings- en identity-matchingintegratie |
| S04 | Toelatingsmodel private partijen en governance van vertegenwoordiging | Vertrouwensprofiel, identifierkoppeling en verificatie van bevoegdheidsbewijzen |
| S05 | Verantwoordelijkheid voor beslisbeleid | GBO-autorisatieprofiel en componentinrichting |
| S06 | Eigenaarschap van policy-governance | Open policyformaat, distributie en beheer |
| S07 | Beheer van diensten en aansluitvoorwaarden | API-profiel, dienstencatalogus en vertaallaag |
| S08 | Verdeling van verantwoordelijkheden met OOTS-governance | Koppelvlak OOTS-V en mappingbeheer |
| S09 | Inzage- en verantwoordingsmodel | LDV- en traceprofiel |
| S10 | Federatieve semantische governance | Catalogus, schema- en mappingbeheer |
| S11 | Juridische rolverdeling en certificering | PubEAA-/ASI-profielen en technische voorzieningen |

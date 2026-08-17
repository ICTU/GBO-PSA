# Stelselfuncties

Dit hoofdstuk werkt de stelselfuncties uit die in het [globaal ontwerp](https://ictu.github.io/GBO-GO/latest/#4-generieke-functies-en-stelselfuncties) zijn gekoppeld aan de generieke functies. De nadruk ligt op normerende eisen, afspraken, standaarden, functionele voorzieningen, verantwoordelijkheden en open besluiten.

Een genoemde voorziening is een functionele component. De PSA schrijft geen product of specifieke referentie-implementatie voor.

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
Een geldige toestemming en de bijbehorende doelbinding machineleesbaar vastleggen en actueel raadpleegbaar maken voor autorisatie.

**Normerende eisen**

- een toestemmingsrecord bevat ten minste betrokkene of pseudonieme verwijzing, afnemer, dienst, doel, gegevensscope, tijdstip, geldigheidsduur, status en bewijs van de interactie;
- de registratie ondersteunt verlening, wijziging, intrekking en verloop;
- de actuele status wordt op het moment van de gegevensvraag gecontroleerd;
- het register bevat geen BSN als een pseudonieme identificatie volstaat;
- toegang tot toestemming is beperkt tot de burger en componenten die de informatie voor autorisatie of verantwoording nodig hebben;
- bewaartermijnen en verwijdering worden op juridische en auditvereisten afgestemd.

**Afspraken en standaarden**

- geldige grondslagtypen en toepassingsvoorwaarden per gegevensstroom;
- gemeenschappelijk gegevensmodel voor toestemming en grondslag;
- gestandaardiseerd PIP-koppelvlak voor raadpleging;
- regels voor intrekking, verloop, bewijsbaarheid en conflictbehandeling;
- aansluiting op bestaande standaarden voor machineleesbare rechten- of beleidsbeschrijvingen waar passend.

**Functionele voorzieningen**

- toestemmingsregister;
- raadpleeginterface voor autorisatiecomponenten;
- beheer- en auditinterface voor bevoegde beheerders;
- interface voor het toestemmingsportaal.

**Verantwoordelijkheden**

De beleidsverantwoordelijke bepaalt wanneer toestemming een geldige grondslag is. De beheerder van het register borgt beschikbaarheid, integriteit en auditbaarheid. De afnemer blijft verantwoordelijk voor een rechtmatige verwerking na ontvangst.

**Open besluiten**

- wettelijke grondslag en reikwijdte voor DvTP;
- centrale of federatieve inrichting van het register;
- beheerorganisatie en toezicht;
- definitief toestemmings- en PIP-profiel.

## S02 — Toestemmingsportaal

**Doel**  
De burger in staat stellen geïnformeerd toestemming te verlenen en bestaande toestemmingen in te zien en, waar toepasselijk, in te trekken.

**Normerende eisen**

- de burger ziet in begrijpelijke taal de afnemer, dienst, doel, gegevensscope, duur en gevolgen;
- de authenticatie heeft een passend betrouwbaarheidsniveau;
- de burger ontvangt een bevestiging van de gemaakte keuze;
- intrekking wordt zonder onnodige vertraging verwerkt in het toestemmingsregister;
- de interactie voldoet aan toegankelijkheidseisen en is bruikbaar op gangbare apparaten;
- de inrichting ondersteunt een gelijkwaardig alternatief als dit juridisch of beleidsmatig vereist is;
- pseudonimisering en technische identifiers zijn voor de burger transparant en worden niet als inhoudelijke keuze gepresenteerd.

**Afspraken en standaarden**

- UX-richtlijnen voor toestemming;
- betrouwbaarheidsniveaus per dienst of gegevenscategorie;
- toegankelijkheidsstandaarden;
- authenticatieprofielen voor erkende middelen;
- regels voor vrijwilligheid, alternatief en het voorkomen van nadeel bij weigering.

**Functionele voorzieningen**

- toestemmingsportaal;
- aansluiting op erkende authenticatiemiddelen;
- koppeling met het toestemmingsregister;
- inzage- en intrekkingsfunctie.

**Open besluiten**

- centrale of meerdere interoperabele portalen;
- aansluiting op bestaande burgerportalen;
- toezichts- en handhavingsmodel voor vrijwilligheid en gelijkwaardig alternatief.

## S03 — Burgeridentificatie & Pseudonimisering

**Doel**  
De burger op passend niveau identificeren en voorkomen dat het BSN terechtkomt bij afnemers die het niet mogen verwerken.

**Normerende eisen**

- het BSN blijft binnen componenten en organisaties die het rechtmatig mogen verwerken;
- een private afnemer zonder wettelijke BSN-bevoegdheid ontvangt een partijspecifieke identiteit of pseudoniem;
- pseudoniemen voor verschillende partijen of contexten zijn niet onderling koppelbaar;
- identiteitsvertaling wordt alleen uitgevoerd voor een toegestane dienst en gegevensvraag;
- identiteitsgegevens en sleutelmateriaal worden volgens hoge beveiligingseisen beheerd;
- als een erkend buitenlands of wallet-gebaseerd middel geen BSN bevat, wordt een gecontroleerd identity-matchingproces toegepast voordat persoonsgegevens bij de bron worden bevraagd.

**Afspraken en standaarden**

- betrouwbaarheidsniveaus en toegestane authenticatiemiddelen;
- aansluitprofiel voor de pseudonimiseringsvoorziening;
- regels voor sleutelbeheer, partijbinding en levenscyclus;
- eisen aan identity matching, inclusief foutafhandeling en eventuele menselijke tussenkomst.

**Functionele voorzieningen**

- erkende burgerauthenticatie;
- BSNk PP of een functioneel gelijkwaardige erkende pseudonimiseringsvoorziening;
- identity-matchingfunctie waar noodzakelijk;
- veilige omzetting aan bronhouderszijde.

**Open besluiten**

- beheer van pseudonieme verwijzingen en koppeling met toestemming;
- positie en governance van identity matching;
- betrouwbaarheidsprofiel per interactiepatroon.

## S04 — Organisatie-authenticatie & Vertrouwensstelsel

**Doel**  
Vaststellen dat deelnemende organisaties en systemen zijn wie zij zeggen te zijn, bevoegd zijn tot deelname en blijvend aan de aansluitvoorwaarden voldoen, en waar nodig kunnen aantonen in welke rol en namens welke partij zij handelen.

**Normerende eisen**

- deelname vereist een voorafgaande toelatingsbeslissing;
- organisaties en systemen gebruiken erkende identifiers en certificaten;
- de technische identiteit wordt gekoppeld aan de toegelaten juridische organisatie en rol;
- vertrouwensankers en deelnemersstatus zijn machineleesbaar controleerbaar;
- schorsing en beëindiging leiden tijdig tot intrekking van toegang;
- buitenlandse, publieke en private deelnemers kunnen verschillende toelatingsregimes hebben, maar gebruiken waar mogelijk dezelfde verificatiepatronen;
- de technische identiteit en toelatingsstatus van een deelnemer worden onderscheiden van de rol en bevoegdheid waarmee deze in een concrete interactie handelt;
- als een organisatie of systeem namens een andere persoon of organisatie handelt, is de relevante vertegenwoordigingscontext verifieerbaar, waaronder ten minste de vertegenwoordiger, de vertegenwoordigde partij, de rol of hoedanigheid, de reikwijdte en de geldigheid;
- een technische intermediair die uitsluitend transport- of connectiviteitsdiensten levert, verkrijgt door die rol geen bevoegdheid om namens een bronhouder, afnemer of betrokkene te handelen.

**Afspraken en standaarden**

- aansluitvoorwaarden per deelnemersgroep;
- certificaat- en trust-anchorprofielen;
- koppeling tussen OIN, KvK-nummer en Europese identifiers waar nodig;
- periodieke herbeoordeling, toezicht, schorsing en beëindiging;
- hergebruik van FDS Poortwachter en Marktmeester waar deze functies beschikbaar en passend zijn;
- gemeenschappelijk model voor het uitwisselen en verifiëren van vertegenwoordigings- en bevoegdheidscontext;
- regels voor de herkomst, geldigheid, intrekking en verificatie van bevoegdheidsbewijzen.

**Functionele voorzieningen**

- deelnemersregister;
- erkende certificaat- en vertrouwenslijsten;
- onboarding- en wijzigingsproces;
- verificatie-interface voor deelnemersstatus.

**Open besluiten**

- stelsel en beheerorganisatie voor private dienstverleners;
- verdeling van verantwoordelijkheden tussen FDS, GDI, sectorale stelsels en Europese governance;
- eenduidige koppeling van organisatie-identifiers.

## S05 — Autorisatie

**Doel**  
Iedere gegevensvraag toetsen aan identiteit, dienst, doel, grondslag, gegevensscope en context, en de beslissing bij de bron afdwingen.

**Normerende eisen**

- iedere gegevensvraag doorloopt een PEP-PDP-keten of een functioneel gelijkwaardige scheiding tussen afdwinging en besluitvorming;
- de autorisatievraag gebruikt een gestandaardiseerd vocabulaire voor subject, actie, resource en context;
- als een actor namens een andere partij handelt, betrekt de autorisatiebeslissing zowel de identiteit van de handelende actor als de vertegenwoordigde partij, rol, reikwijdte en geldigheid van de bevoegdheid;
- de PDP kan relevante informatiebronnen raadplegen, waaronder deelnemersstatus, dienstencatalogus, toestemmingsregister en, waar van toepassing, informatie voor de verificatie van vertegenwoordiging en bevoegdheid;
- de beslissing is fijnmazig genoeg om afzonderlijke gegevens of velden toe te staan of te weigeren;
- de beleidsversie, relevante context en beslissing worden gelogd;
- een PEP weigert standaard bij ontbrekende of onbetrouwbare beslisinformatie;
- de interface en het beleid zijn productonafhankelijk.

**Afspraken en standaarden**

- AuthZEN of een gelijkwaardig open PEP-PDP-profiel;
- gemeenschappelijk autorisatievocabulaire;
- regels voor foutafhandeling, time-outs en fail-safe gedrag;
- aansluiting van PIP-bronnen;
- verificatie- en testregels voor beleidsbeslissingen.

**Functionele voorzieningen**

- PEP bij of voor de bronontsluiting;
- PDP per bronhouder of gedeeld, zolang verantwoordelijkheden en beschikbaarheid zijn geborgd;
- PIP-koppelvlakken naar relevante registers en catalogi.

**Open besluiten**

- centrale, decentrale of hybride PDP-inrichting;
- definitief GBO-profiel voor autorisatievragen en beslissingen;
- locatie van identiteitsvertaling ten opzichte van de beleidsbeslissing.

## S06 — Beleidsbeheer & -distributie

**Doel**  
Autorisatiebeleid bestuurlijk beheersen, testen, vaststellen, publiceren en gecontroleerd beschikbaar stellen aan autorisatiecomponenten.

**Normerende eisen**

- beleid is machineleesbaar, versieerbaar en niet gebonden aan één specifieke policytaal of implementatie;
- beleid heeft een inhoudelijke eigenaar, goedkeurder, ingangsdatum en wijzigingshistorie;
- wijzigingen worden vóór publicatie gevalideerd met positieve, negatieve en regressietests;
- gepubliceerde beleidssets zijn authentiek en integer verifieerbaar;
- autorisatiecomponenten kunnen een geldige beleidsversie betrouwbaar verkrijgen en bij storingen gecontroleerd terugvallen;
- een spoedprocedure en terugrolprocedure zijn beschikbaar.

**Afspraken en standaarden**

- governance voor beleidsvorming en goedkeuring;
- formeel wijzigingsproces;
- open formaat en distributieprofiel voor gesigneerde beleidssets;
- regels voor versiecompatibiliteit, activering en terugrol;
- menselijk leesbare publicatie afgeleid van dezelfde vastgestelde beleidsbron.

**Functionele voorzieningen**

- Policy Administration Point;
- beleidsrepository;
- distributie-interface;
- test- en validatievoorziening.

**Open besluiten**

- eigenaar van inhoudelijke policy-governance;
- operationele beheerder;
- definitieve taal, verpakking en distributiestandaard;
- ruimte voor aanvullend bronhouder- of sectorspecifiek beleid.

## S07 — Gegevensontsluiting

**Doel**  
Bronhouders gegevens laten aanbieden via één generieke, herbruikbare en selectief bevraagbare bronontsluiting-API.

**Normerende eisen**

- een bronhouder gebruikt voor de GBO-interactiepatronen één logisch koppelvlak;
- de API ondersteunt vooraf geregistreerde, selectieve gegevensvragen;
- een gegevensvraag verwijst eenduidig naar een dienst in de dienstencatalogus;
- het koppelvlak ondersteunt de autorisatie- en loggingvereisten van S05 en S09;
- schema's, versies, foutmeldingen en beschikbaarheidskenmerken zijn gepubliceerd;
- nieuwe diensten kunnen in beginsel via schema, dienstregistratie en beleid worden toegevoegd;
- de GBO-vertaallaag is een optionele, vervangbare ondersteuning en geen verplichte centrale route.

**Afspraken en standaarden**

- FSC voor veilige federatieve connectiviteit waar passend;
- een vastgesteld API-profiel voor selectieve bevraging, met GraphQL als voorgestelde invulling;
- DCAT-AP NL voor catalogusbeschrijvingen waar van toepassing;
- aansluitvoorwaarden, servicelevels en versiebeleid;
- registratieproces voor diensten en toegestane gegevensvragen.

**Functionele voorzieningen**

- bronontsluiting-API;
- connectiviteitscomponenten bij bronhouder en afnemer;
- dienstencatalogus;
- optionele GBO-vertaallaag.

**Open besluiten**

- formele standaardisering van het API-profiel;
- beheer van de dienstencatalogus;
- eisen en exitstrategie voor de GBO-vertaallaag;
- verhouding tussen centrale en sectorspecifieke dienstregistratie.

## S08 — OOTS-adapter

**Doel**  
Binnen de GBO-oplossing de generieke bronontsluiting aansluiten op de Basisinrichting OOTS, in het bijzonder OOTS-V, zonder OOTS-specifieke techniek bij bronhouders te vereisen.

**Normerende eisen**

- de OOTS-adapter koppelt aan het nationale koppelvlak van OOTS-V;
- verzoeken via OOTS doorlopen dezelfde generieke autorisatie- en loggingfuncties als andere gegevensvragen;
- transport, discovery en Europese procesinteractie blijven verantwoordelijkheid van de Basisinrichting OOTS;
- de adapter of bijbehorende mappingfunctie vertaalt expliciet tussen brongegevens en OOTS-EDM;
- bronhouders worden niet afhankelijk van AS4/eDelivery-implementatiedetails;
- sectorale of eigen OOTS-aansluitingen vallen buiten GBO, maar worden niet technisch uitgesloten.

**Afspraken en standaarden**

- SDG-verordening en OOTS Technical Design Documents;
- OOTS-EDM;
- AS4/eDelivery en discoveryprofielen aan de zijde van de Basisinrichting OOTS;
- nationaal koppelvlak tussen OOTS-V en de GBO-bronontsluiting;
- beheerafspraken voor mappings en gegevensdiensten.

**Functionele voorzieningen**

- Basisinrichting OOTS en OOTS-V als externe bestaande voorziening;
- uitbreiding van OOTS-V met het GBO-koppelvlak;
- semantische mappings via S10.

**Open besluiten**

- precieze grens tussen OOTS-V en semantische mapping;
- beheer en financiering van de aanpassing;
- beheer van discovery- en dienstinformatie.

## S09 — Logging, Audit & Traceerbaarheid

**Doel**  
Gegevensvragen en relevante beslissingen over de hele keten herleidbaar maken en wettelijke verantwoording en inzage ondersteunen.

**Normerende eisen**

- iedere gegevensvraag krijgt een ketenbreed bruikbare verzoekidentificator;
- iedere component legt de voor zijn verantwoordelijkheid relevante gebeurtenis vast;
- logging bevat niet meer persoonsgegevens dan noodzakelijk;
- autorisatiebeslissingen verwijzen naar de toegepaste beleidsversie en relevante grondslaginformatie;
- loggegevens zijn beschermd tegen ongeautoriseerde wijziging en verwijdering;
- bewaartermijnen, toegang, inzage en vernietiging zijn expliciet geregeld;
- een centrale aggregatie is alleen toegestaan als noodzaak, grondslag en privacymaatregelen zijn aangetoond.

**Afspraken en standaarden**

- Logboek Dataverwerkingen als functioneel kader;
- gestandaardiseerde correlatie- en tracecontext;
- uniform gebeurtenismodel en minimale auditset;
- afspraken voor tijdsynchronisatie, integriteit, bewaartermijnen en incidentonderzoek.

**Functionele voorzieningen**

- decentrale logging per component;
- veilige zoek- en auditfunctie voor bevoegde partijen;
- eventueel een privacybewuste correlatie- of inzagefunctie.

**Open besluiten**

- centraal of federatief inzagemodel voor burgers;
- noodzaak en inrichting van centrale auditaggregatie;
- definitief GBO-profiel op LDV en tracecontext.

## S10 — Semantiek & Gegevenscatalogus

**Doel**  
Gegevens, begrippen, schema's, kwaliteit en mappings beheerd beschrijven, zodat gegevens in verschillende interactiepatronen eenduidig kunnen worden geïnterpreteerd en gevalideerd.

**Normerende eisen**

- iedere gegevensdienst verwijst naar een beheerd schema en begrippenkader;
- bronhouders en domeinen zijn verantwoordelijk voor inhoud en kwaliteit van hun modellen;
- catalogusbeschrijvingen, schema's en mappings zijn machineleesbaar en versieerbaar;
- kwaliteitskenmerken en herkomstinformatie zijn opgenomen;
- validatieregels worden vóór uitlevering toegepast waar dit technisch en juridisch passend is;
- mappings naar OOTS-EDM en attestatieschema's zijn expliciet en herleidbaar naar bron- en doelversies;
- begrippen en relaties die als context voor identificatie en autorisatie worden gebruikt, zoals rol, vertegenwoordiger, vertegenwoordigde partij, bevoegdheid en reikwijdte, worden waar nodig eveneens beheerd en eenduidig beschreven;
- de catalogus beschrijft tevens de voorwaarden waaronder een dienst kan worden gebruikt, zonder het autorisatiebeleid te dupliceren.

**Afspraken en standaarden**

- NL-SBB voor begrippen;
- MIM voor informatiemodellen waar passend;
- DCAT-AP NL voor catalogusbeschrijvingen;
- RDF, SKOS, SHACL, JSON Schema, GraphQL-schema's en XML Schema waar passend;
- kwaliteit en herkomst conform toepasselijke NORA- en W3C-kaders.

**Functionele voorzieningen**

- gegevens- en dienstencatalogus;
- schema- en mappingrepository;
- validatievoorzieningen;
- optionele serialisatie- of mappingservice;
- gestandaardiseerde procedure voor het terugmelden van fouten of vermoedelijke onjuistheden aan de bronhouder.

**Open besluiten**

- federatieve of centrale inrichting van catalogus en schema-repository;
- inhoudelijke en technische beheerverantwoordelijkheden;
- positionering van mapping- en serialisatieservices;
- wijzigingsproces tussen bronhouders, domeinen en externe stelsels;
- inrichting terugmeldprocedure voor fouten of vermoedelijke onjuistheden.

## S11 — Attesteringsuitgifte

**Doel**  
Brongegevens beschikbaar maken als PubEAA voor een EUDI-Wallet en QTSP's ondersteunen bij QEAA-uitgifte via een Authentic Source Interface.

**Normerende eisen**

- de bronhouder blijft juridisch en inhoudelijk verantwoordelijk voor de uitgegeven publieke attributen, tenzij wet- en regelgeving een andere rolverdeling bepaalt;
- de GBO-oplossing kan de technische functie van PubEAA-verstrekker ondersteunen, maar wordt daardoor niet automatisch de juridische uitgevende instantie;
- een ASI-provider biedt gestandaardiseerde verify- en, waar toegestaan, retrievefuncties aan QTSP's;
- uitgifte, verificatie en retrieval doorlopen passende authenticatie, autorisatie en logging;
- attestaties volgen een vastgesteld attestation rulebook en schema;
- binding aan burger en wallet, signing, status, intrekking en geldigheid zijn geregeld;
- centrale, decentrale en federatieve varianten blijven mogelijk zolang zij aan dezelfde koppelvlakken en eisen voldoen.

**Afspraken en standaarden**

- eIDAS2, uitvoeringshandelingen en ARF;
- OpenID4VCI voor uitgifte;
- OpenID4VP voor presentatie of verificatie waar relevant;
- SD-JWT VC en mdoc waar voorgeschreven of passend;
- ETSI TS 119 478 V1.1.1 standaard voor de inrichting van de ASI-Provider ten behoeve van QTSP's;
- ETSI-profielen voor gekwalificeerde zegels en vertrouwensdiensten;
- attestation rulebooks, status- en intrekkingsprofielen.

**Functionele voorzieningen**

- PubEAA-verstrekker;
- ASI-provider met verify- en eventueel retrievefunctie;
- signing- en statusvoorzieningen;
- aansluiting op relevante vertrouwenslijsten en catalogi;
- semantische mapping via S10.

**Open besluiten**

- centraal, decentraal of federatief uitgiftemodel;
- beheerder van generieke technische voorzieningen;
- verdeling van verantwoordelijkheden tussen bronhouder, PubEAA-verstrekker, ASI-provider en QTSP;
- certificering en opname in vertrouwenslijsten;
- voorwaarden waaronder uit authentieke brongegevens afgeleide claims als attestatie kunnen worden uitgegeven, inclusief eigenaarschap en versiebeheer van de toegepaste regel en verantwoordelijkheid voor de resulterende claim;
- startpunt en gebruikersreis voor de uitgifte.

## Samenvatting van belangrijkste gaps

| Stelselfunctie | Belangrijkste juridische of bestuurlijke gap | Belangrijkste standaardisatie- of realisatiegap |
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

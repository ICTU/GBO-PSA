# Interactiepatronen

[Hoofdstuk 3 van het globaal ontwerp](https://ictu.github.io/GBO-GO/main/#3-interactiepatronen) beschrijft de drie interactiepatronen van GBO. De PSA herhaalt de procesbeschrijvingen en sequencediagrammen niet.

Dit hoofdstuk beschrijft welke stelselfuncties voor ieder patroon relevant zijn. Ook benoemt het de aandachtspunten die de PSA verder uitwerkt.

| Patroon | Grondslag en context | Primair betrokken stelselfuncties | PSA-aandachtspunten |
|---|---|---|---|
| **A — Burger gebruikt EUDI-Wallet** | De burger vraagt een attestatie van attributen op voor een EUDI-Wallet. Een bronhouder kan zelf of via een andere partij een PubEAA uitgeven. Een QTSP kan een QEAA uitgeven. | [S03](capabilities.md#s03-burgeridentificatie-pseudonimisering), [S04](capabilities.md#s04-organisatie-authenticatie-vertrouwensstelsel), [S05](capabilities.md#s05-autorisatie), [S07](capabilities.md#s07-gegevensontsluiting), [S09](capabilities.md#s09-logging-audit-traceerbaarheid), [S10](capabilities.md#s10-semantiek-gegevenscatalogus) en [S11](capabilities.md#s11-attesteringsuitgifte) | Identificatie van de burger.<br>Autorisatie van uitgifte, verificatie en retrieval.<br>Attestation rulebooks en semantische mapping.<br>Signing, status en intrekking.<br>Verdeling van verantwoordelijkheden tussen bronhouder, PubEAA-verstrekker, ASI-provider en QTSP. |
| **B — Grensoverschrijdend verzoek via OOTS** | Een publieke instantie in een andere lidstaat vraagt bewijsgegevens op bij een Nederlandse bronhouder op grond van de SDG-verordening. Binnen GBO loopt dit verzoek via de Basisinrichting OOTS, vooral via de OOTS-V-component. | [S04](capabilities.md#s04-organisatie-authenticatie-vertrouwensstelsel), [S05](capabilities.md#s05-autorisatie), [S07](capabilities.md#s07-gegevensontsluiting), [S08](capabilities.md#s08-oots-adapter), [S09](capabilities.md#s09-logging-audit-traceerbaarheid) en [S10](capabilities.md#s10-semantiek-gegevenscatalogus) | Aansluiting van OOTS-V op de bronontsluiting-API.<br>Autorisatie via dezelfde keten als andere gegevensvragen.<br>Mapping naar OOTS-EDM.<br>Centraal beheer van discovery- en aansluitgegevens.<br>Logging over de hele keten. |
| **C — Gegevensverzoek private dienstverlener** | Een private dienstverlener vraagt gegevens op bij een bronhouder op basis van een geldige juridische grondslag. Als toestemming nodig is, legt de toestemmingsvoorziening deze specifiek, geïnformeerd en aantoonbaar vast. | [S01](capabilities.md#s01-toestemmingsregistratie) tot en met S07, [S09](capabilities.md#s09-logging-audit-traceerbaarheid) en [S10](capabilities.md#s10-semantiek-gegevenscatalogus) | Juridische grondslag en burgerinteractie.<br>Registratie, raadpleging en intrekking van toestemming.<br>Pseudonimisering als de afnemer geen BSN mag verwerken.<br>Toelating van dienstverleners.<br>Registratie van diensten en toegestane gegevensvragen. |

## Gemeenschappelijke eisen

Voor alle interactiepatronen gelden de volgende eisen:

- de bronhouder biedt geen patroon- of afnemerspecifiek bronkoppelvlak aan.
- de autorisatie toetst iedere gegevensvraag aan identiteit, grondslag, doel, gegevensvraag en relevante context.
- alle patronen gebruiken dezelfde generieke autorisatieketen, met patroon- of dienstspecifiek beleid.
- expliciete, beheerde functies buiten het bronsysteem voeren semantische en protocoltransformaties uit.
- iedere gegevensuitwisseling is over de hele keten herleidbaar.
- beleid, schema's, mappings of configuratie leggen afwijkingen en patroonafhankelijke eisen vast, niet hardgecodeerde implementatielogica.

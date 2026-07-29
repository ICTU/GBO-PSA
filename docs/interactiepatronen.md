# Interactiepatronen

De drie interactiepatronen van GBO zijn beschreven in [hoofdstuk 3 van het globaal ontwerp](https://ictu.github.io/GBO-GO/main/#3-interactiepatronen). De procesbeschrijvingen en sequencediagrammen worden in de PSA niet herhaald.

Dit hoofdstuk legt alleen vast welke stelselfuncties voor ieder patroon relevant zijn en welke aanvullende aandachtspunten in de PSA worden uitgewerkt.

| Patroon | Grondslag en context | Primair betrokken stelselfuncties | PSA-aandachtspunten |
|---|---|---|---|
| **A — Burger gebruikt EUDI-Wallet** | De burger vraagt een attestatie van attributen op voor opname in een EUDI-Wallet. Uitgifte kan als PubEAA door of namens een bronhouder plaatsvinden, of als QEAA via een QTSP. | S03, S04, S05, S07, S09, S10 en S11 | Identificatie van de burger; autorisatie van uitgifte, verificatie en retrieval; attestation rulebooks; semantische mapping; signing, status en intrekking; verantwoordelijkheidsverdeling tussen bronhouder, PubEAA-provider, ASI-provider en QTSP. |
| **B — Grensoverschrijdend verzoek via OOTS** | Een publieke instantie in een andere lidstaat vraagt bewijsgegevens op bij een Nederlandse bronhouder in het kader van de SDG-verordening. Binnen de GBO-oplossing verloopt dit via de Basisinrichting OOTS en OOTS-V. | S04, S05, S07, S08, S09 en S10 | Aansluiting van OOTS-V op de bronontsluiting-API; autorisatie via dezelfde keten als andere gegevensvragen; mapping naar OOTS-EDM; centraal beheer van discovery- en aansluitgegevens; ketenbrede logging. |
| **C — Gegevensverzoek private dienstverlener** | Een private dienstverlener vraagt gegevens op bij een bronhouder op basis van een wettelijk geldige grondslag. Als toestemming vereist is, wordt deze specifiek, geïnformeerd en aantoonbaar vastgelegd. | S01 tot en met S07, S09 en S10 | Juridische grondslag; burgerinteractie; registratie, raadpleging en intrekking van toestemming; pseudonimisering als de afnemer geen BSN mag verwerken; toelating van dienstverleners; registratie van diensten en toegestane gegevensvragen. |

## Gemeenschappelijke eisen

Ongeacht het interactiepatroon gelden de volgende eisen:

- de bronhouder biedt geen patroon- of afnemerspecifiek bronkoppelvlak aan;
- iedere gegevensvraag wordt getoetst aan identiteit, grondslag, doel, gegevensvraag en relevante context;
- dezelfde generieke autorisatieketen wordt gebruikt, met patroon- of dienstspecifiek beleid;
- semantische en protocoltransformaties vinden plaats in expliciete, beheerde functies buiten het bronsysteem;
- iedere gegevensuitwisseling is ketenbreed herleidbaar;
- afwijkingen en patroonafhankelijke eisen worden als beleid, schema, mapping of configuratie beheerd en niet als hardgecodeerde implementatielogica.

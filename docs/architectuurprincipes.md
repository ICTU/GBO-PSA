# Architectuurprincipes

De architectuurprincipes geven richting aan de uitwerking van de generieke functies en stelselfuncties. De tabel bevat per principe de concrete consequentie voor GBO. Algemene toelichtingen op de onderliggende wet- en beleidskaders worden niet herhaald.

| ID | Principe | Consequentie voor GBO | Primair kader |
|---|---|---|---|
| **P-01** | Grondslag vóór uitwisseling | Iedere gegevensvraag bevat of verwijst naar een controleerbare grondslag, doelbinding en afnemerscontext. Zonder geldige grondslag wordt niet geleverd. | AVG, sectorale wetgeving |
| **P-02** | Minimale gegevensverwerking | De bronontsluiting ondersteunt selectieve gegevensvragen. Alleen gegevens die voor de geregistreerde dienst en het doel noodzakelijk zijn, kunnen worden geleverd. | AVG |
| **P-03** | Privacy by design en by default | Pseudonimisering, doelbinding, minimale gegevensselectie en beperkte bewaartermijnen worden in afspraken, beleid en koppelvlakken ingebouwd. | AVG, NORA |
| **P-04** | Geen BSN voor onbevoegde afnemers | Afnemers zonder wettelijke bevoegdheid verwerken geen BSN. Zij ontvangen een partijspecifieke identiteit of pseudoniem dat niet buiten de bedoelde context kan worden gekoppeld. | Wabb, AVG |
| **P-05** | Passend betrouwbaarheidsniveau | Burgers, organisaties en systemen authenticeren zich op een niveau dat past bij de dienst, de gegevens en het risico. | Wdo, eIDAS |
| **P-06** | Ondersteuning van de EUDI-Wallet | GBO ondersteunt de uitgifte, verificatie en waar nodig retrieval van attestaties conform eIDAS2 en het Architecture and Reference Framework. | eIDAS2, ARF |
| **P-07** | Vertrouwen door erkende toetreding en trust anchors | Deelnemers worden vooraf toegelaten en zijn technisch verifieerbaar via erkende certificaten, registers en vertrouwenslijsten. | Wdo, PKIoverheid, eIDAS |
| **P-08** | Eenmalige vastlegging, meervoudig gebruik | Gegevens worden bij de bron beheerd en via één generieke bronontsluiting voor meerdere interactiepatronen hergebruikt. | NORA, FDS |
| **P-09** | Open standaarden en leveranciersonafhankelijkheid | Koppelvlakken en gegevensformaten zijn gebaseerd op open standaarden. Product- of leveranciersspecifieke interfaces mogen geen verplichte stelselafhankelijkheid vormen. | NORA, Forum Standaardisatie |
| **P-10** | Bronhouder behoudt regie | De bronhouder blijft verantwoordelijk voor de gegevens, gegevenskwaliteit en voorwaarden waaronder gegevens worden geleverd. GBO faciliteert ontsluiting en transformatie, maar wordt geen eigenaar van de brongegevens. | DGA, Data Act, FDS |
| **P-11** | Vindbare en herbruikbare gegevensbeschrijvingen | Gegevensdiensten, schema's, begrippen, kwaliteit en voorwaarden zijn machineleesbaar en versieerbaar beschreven. | FAIR, NORA, FDS |
| **P-12** | Herleidbare en onweerlegbare gegevensuitwisseling | Iedere poging tot gegevensuitwisseling en iedere relevante autorisatiebeslissing wordt zodanig vastgelegd dat de keten achteraf kan worden gereconstrueerd. | AVG, BIO, NORA |
| **P-13** | Transparantie voor de burger | De inrichting ondersteunt inzage in relevante toestemmingen en verwerkingen en maakt correctie of intrekking mogelijk waar de wet dat vereist. | AVG, Regie op Gegevens |
| **P-14** | Scheiding van generieke en domeinspecifieke functies | GBO levert generieke kaders en functies. Domeinen blijven verantwoordelijk voor domeinbegrippen, gegevensmodellen, inhoudelijke kwaliteit en sectorspecifieke regels. | GDI, NORA |
| **P-15** | Ontkoppeling en vervangbaarheid | Bronhouders, centrale functies en afnemers zijn gekoppeld via stabiele, gestandaardiseerde interfaces. Functionele componenten kunnen onafhankelijk worden vervangen. | GDI, NORA |
| **P-16** | Transparante toegang voor private partijen | Toetredingseisen voor private dienstverleners zijn objectief, proportioneel en controleerbaar. De toegestane dienst, grondslag en gegevensvraag zijn vooraf geregistreerd. | DGA, Wabb, DvTP-kader |

## Toepassing

De principes worden toegepast bij:

- het opstellen en beoordelen van afspraken en standaarden;
- het ontwerpen van voorzieningen en koppelvlakken;
- het vaststellen van aansluitvoorwaarden;
- het beoordelen van uitzonderingen en tijdelijke oplossingen;
- het nemen van de open besluiten in deze PSA.

Afwijkingen worden als architectuurbesluit vastgelegd, inclusief aanleiding, alternatieven, risico's, mitigerende maatregelen en de wijze waarop de afwijking wordt beëindigd of in regulier beheer wordt opgenomen.

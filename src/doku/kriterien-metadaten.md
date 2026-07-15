---
title: "II. Metadaten-Standard von Ausspielformat"
layout: "layouts/page.njk"
tags: "doku"
order: 2
description: "Metadaten-Standards für OER (LOM, AMB, Dublin Core)"
---

<< ------------------


## Allgemeines
Open Educational Resources werden von verschiedenen Akteuren im Web veröffentlicht. Um diese Ressourcen bündeln, durchsuchen und plattformübergreifend nutzen zu können, braucht es Absprachen und technische Modelle zur Austauschbarkeit von Metadaten. 

Für den Schulbereich in Deutschland gibt es derzeit keinen "besten" Metadatenstandard; stattdessen existieren verschiedene Initiativen und Empfehlungen, die auf bestehenden internationalen Standards aufbauen. 

Die gängige Praxis basiert meist auf angepassten Profilen des [LOM-Standards](#anker_id1) (Learning Object Metadata) oder auf Dublin Core (DC), da diese die Grundlage für die meisten Austauschplattformen bilden. 

## Format und Bereitstellung

Die Metadaten einer Bildungsressource werden durch ein JSON-Dokument repräsentiert. Dieses JSON-Dokument MUSS einige obligatorische und KANN zusätzlich optionale Schlüssel/Werte-Paare des Profils beinhalten. Die Form des JSON-Dokuments MUSS den Vorgaben dieser Spezifikation und des enthaltenen JSON Schemas entsprechen.

### Empfohlene Standards und Profile
Anstelle eines einzelnen Standards wird in Deutschland die Entwicklung und Nutzung von spezifischen Profilen innerhalb der OER-Community und von relevanten Akteuren (z.B. [Kompetenzzentrum Interoperable Metadaten, KIM](https://dini.de/standards) vorangetrieben, um die Interoperabilität sicherzustellen. 

**LOM-Standard:** Der wichtigste Standard für OER im deutschsprachigen Raum ist LOM (Learning Object Metadata), ein international genutzter Standard mit besonderem Fokus auf eLearning-Objekten.

**AMB (Allgemeines Metadatenprofil für Bildungsressourcen)

**HS-OER-LOM-Profil**: Obwohl dieses Profil speziell für den Hochschulbereich entwickelt wurde, dient es oft als Referenz und Vorlage für Anpassungen in anderen Bildungsbereichen, da es in der deutschen OER-Community breit abgestimmt ist.


**Dublin Core (DC)**: Dieser Standard ist einfacher und bietet ein grundlegendes Set an Elementen (Titel, Autor, Thema etc.). Er wird oft ergänzend oder in einfacheren Systemen verwendet, da er leicht zu implementieren ist.

**Initiativen auf Länderebene**: Verschiedene Bundesländer und ihre Bildungsserver entwickeln *eigene Metadatenschemata, oft basierend auf LOM oder DC*, um den Austausch innerhalb ihrer spezifischen Infrastrukturen zu gewährleiste


## Gängige Metadatenstandards und Anforderungen (Detail)

### <a id="anker_id1">**1. LOM (Learning Object Metadata)**</a>

Der LOM-Standard ist weit verbreitet, da er didaktische Metadaten wie Zielgruppe, Altersstufe und Interaktivität sehr detailliert abbildet, was für schulische Materialien besonders nützlich ist.

**Struktur**: Die Grundstruktur besteht aus neun Kategorien: General, Lifecycle, Meta-Metadata, Technical, Educational, Rights, Relation, Annotation, Classification


**Pflichtfelder gemäß LOM-Profil**:
- Mindestens ein contribute-Element mit Angabe der Autoren
- Titel und Beschreibung
- Sprache
- Lizenzangabe
- Fachzuordnung



### **2. AMB (Allgemeines Metadatenprofil für Bildungsressourcen)**
In Deutschland hat sich jüngst das *Kompetenzzentrum Interoperable Metadaten (KIM)* sich als praxisorientiertes Forum zur Kommunikation über geteilte OER-Metadatenpraktiken etabliert. Jüngst hat die Gruppe die erste offizielle Version des Allgemeinen Metadatenprofils für Bildungsressourcen (AMB) veröffentlicht.
Ein auf schema.org/LRMI und SKOS basierendes Metadatenprofil für die Beschreibung von (Open) Educational Resources mit Fokus auf den deutschsprachigen Raum.
Jetzt kann aus einer auf GitHub gepflegten HTML/Markdown-Datei eine übersichtliche Spezifikation gebaut werden. [Ein anschauliches Beispiel ist die Spezifikation für das Allgemeine Metadatenprofil für Bildungsressourcen (AMB)](https://dini-ag-kim.github.io/amb/latest/).

**--> [Artikel auf OERInfo - 04/2024](https://open-educational-resources.de/tag/allgemeines-metadatenprofil-fuer-bildungsressourcen-amb/)**

**--> [Site der Entwickler zu Kontext & Stand](https://dini-ag-kim.github.io/amb/draft/)**

### **Verwendete Klassifikationen**

- **Fächersystematik**: Systematik der Fächergruppen, Studienbereiche und Studienfächer des Statistischen Bundesamtes
- **Ressourcentypen**: Hochschulcampus Ressourcentypen-Vokabular für Typen von Lernressourcen

### 3. OERSI - https://oersi.org/resources/pages/de/about/
Suchmaschine, die nach offenen Bildungsmaterialien (OER) für die Hochschullehre sucht. Sie steht für „Open Educational Resources Search Index“ und sammelt die Metadaten verschiedenster Repositorien, um eine zentrale Suchfunktion zu ermöglichen, anstatt selbst Inhalte zu hosten. Betrieben wird OERSI vom Hochschulbibliothekszentrum Nordrhein-Westfalen (hbz) und der Technischen Informationsbibliothek (TIB). 

**Funktion:**
OERSI fungiert als eine Meta-Suchmaschine. Sie durchsucht landesweite Initiativen, institutionelle Repositorien von Univ

**Zweck:** Sie ermöglicht eine einheitliche Suche nach freien, digitalen Lehrmaterialien wie Videos, Texten, Präsentationen und mehr.

**Vorteil:** Durch die Zentralisierung der Suche wird es Nutzern erleichtert, relevante Materialien zu finden, ohne mehrere Quellen einzeln durchsuchen zu müssen.

**Betrieb:** OERSI ist ein Open-Source-basierter Dienst, der von der TIB und dem hbz gemeinsam entwickelt und betrieben wird, um eine Suche nach OER-Materialien in Deutschland zu erleichtern.

**--> [Metadaten-Generator](https://oersi.gitlab.io/metadata-form/metadata-generator.html)**


---
###### <a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons Lizenzvertrag" style="border-width:0; float:left; margin:12px" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">Diese Handreichung ist im Rahmen von OpenHistory von dem [Historischen Museum Frankfurt](https://historisches-museum-frankfurt.de/de/) intiiert worden und wird als Open Educational Ressources (OER) bereitgestellt. Dieses  Material ist lizenziert unter einer <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Namensnennung 4.0 International Lizenz</a>. D.h. das Werk darf sowohl für nicht-kommerzielle als auch für kommerzielle Zwecke verbreitet und verändert werden, sofern die Urheber:innen des Originals wie oben beschrieben genannt werden.

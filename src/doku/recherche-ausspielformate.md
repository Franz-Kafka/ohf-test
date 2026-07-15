---
title: "III. OpenHistory: Recherche Ausspielformate"
layout: "layouts/page.njk"
tags: "doku"
order: 4
description: "Recherche zu Ausspielformaten und Autorentools für OER"
---


# Syntax

## Markdown 
Markdown ist eine spezifische, standardisierte Sprache, die speziell für die Lesbarkeit im Quelltext entwickelt wurde. Sie ist eine leicht lesbare Auszeichnungssprache, mit der man Text einfach formatieren kann, indem man simple Zeichen wie Sternchen und Hashtags verwendet. Ein Markdown-Parser kann die Rohdaten in andere Formate wie HTML umwandeln, sodass die Inhalte auf verschiedenen Geräten einheitlich dargestellt werden können

## Wikisyntax
Ist nicht standardisiert, da es je nach Wiki (z. B. MediaWiki, DokuWiki) unterschiedliche Varianten gibt.
Viele Wikisysteme unterstützen Markdown-Funktionen nicht nativ und erfordern eine Erweiterung, um sie zu nutzen.
Viele Wiki-Systeme haben spezielle Syntax für Links (z. B. [[Link]]), die sich von der Markdown-Syntax ([Link](URL)) unterscheidet. 


### HTML
HTML, die Abkürzung für Hypertext Markup Language, ist die standardisierte Auszeichnungssprache, die das Grundgerüst und die Struktur von Webseiten bildet. Sie verwendet spezielle Tags (in spitzen Klammern), um Inhalte wie Text, Bilder und Links zu kennzeichnen und dem Webbrowser mitzuteilen, wie diese angezeigt werden sollen. HTML ist keine Programmiersprache, sondern dient der Strukturierung von Webinhalten und wird oft durch CSS und JavaScript ergänzt, um das Aussehen und die Funktionalität zu verbessern

-----------------

# Tools -- Autorenwerkzeuge

## 1. LiaScript

### Beschreibung
LiaScript ist eine Open-Source-Auszeichnungssprache, die es ermöglicht, mit einfachen Markdown-Texten interaktive Online-Kurse zu erstellen. Es ist eine Erweiterung von Markdown, die Funktionen wie Animationen, Quizze, interaktive Tabellen und die Einbindung von Multimedia ermöglicht, ohne dass umfangreiche Programmierkenntnisse erforderlich sind. 
Kurse werden in Echtzeit *im Browser geparst und gerendert*, sodass keine zusätzliche Software oder Server benötigt wird. Die Inhalte können als Markdown-Dokumente etwa in Git-Repositorien veröffentlicht, geteilt und von anderen weiterverarbeitet werden.[

LiaScript wird hauptsächlich für die Erstellung von Bildungsressourcen wie Selbstlernmodulen und Vorlesungsunterlagen verwendet. 

### Besonderheiten
- [ ] ***Multimedia-Integration***: Multimedia-Inhalte wie Videos und Audios können eifach eingebunden und mit eigenen interaktiven Inhalten überlagert werden; es können entweder Verweise auf eine mp3, avi, etc. direkt gesetzt werden oder Seiten wie YouTube oder Soundcloud, via URL genutzt werden.
- [ ] ***Barrierefreiheit***: Es unterstützt Funktionen zur Verbesserung der Zugänglichkeit, wie automatische Sprachausgabe (Text-to-Speech) oder automatische Schriftgrößenanpassung durch den individeullen Browser
- [ ] ***Sprachausgaben***: Die derzeitige Standard-Sprachausgabe ist auf Deutsch Female eingestellt. Für die Sprachausgabe wird die API von https://responsivevoice.org verwendet. Alle dort aufgeführten Sprecher können in LiaScript genutzt werden.
- [ ] ***Open-Source***: Das Projekt ist quelloffen und kostenlos verfügbar.
- [ ] ***Einbindung*** beliebiger JavaScript-Funktionalität
- [ ] ***Makro-System*** für wiederverwendbare Komponenten
- [ ] ***Export*** LiaScript ermöglicht den Export von Kursen in verschiedene Formate, wie etwa SCORM oder IMS, um die Nutzung in unterschiedlichen Lernmanagementsystemen (LMS) zu gewährleisten.

### Beispiele und Demos

[Unterschiedliche Beispiele / Kurse](https://liascript.github.io/LiveEditor/examples.html)

[LiaScript Tutorial](https://liascript.github.io/LiveEditor/?/show/file/https://raw.githubusercontent.com/LiaBooks/LiaScript-Tutorial/main/README.md) - Dieser Kurs soll einen interaktiven Einstieg in die Entwicklung von interaktiven online-Kursen mit LiaScript geben. Im ersten Teil werden die Grundlagen von Markdown erläutert , dieser Teil bildet das Grundgerüst für Textformatierungen, Blöcke und die Strukturierung von Dokumenten. Der zweite Teil geht auf die interaktiven LiaScript-Erweiterungen und deren Einsatz/Konfiguration ein.

URL-Demo: https://liascript.github.io/LiveEditor/?/edit/Xrp69YGOqSrVaE0MVqqMoCoZ/websocket



--> Artikel auf OERinfo: https://open-educational-resources.de/warum-braucht-offene-bildung-eine-eigene-sprache-warum-liascript/

------------------

## 2. Hedgedoc/ Markdown

HedgeDoc (früher bekannt als CodiMD) ist ein Open-Source, webbasierter und kollaborativer Markdown-Editor, der es mehreren Nutzern ermöglicht, gleichzeitig in Echtzeit an Dokumenten zu arbeiten. Es ist eine beliebte Alternative zu kommerziellen Tools wie Google Docs für Benutzer, die Wert auf Datenkontrolle und Open-Source-Lösungen legen. 

### Hauptmerkmale
* ***Echtzeit-Kollaboration***: Mehrere Benutzer können dasselbe Dokument gleichzeitig bearbeiten und Änderungen sofort sehen, indem sie einfach einen Link teilen.
* **Live-Vorschau** der formatierten Inhalte in einer zweiten Bildschirmhälfte angezeigt werden ("Buch-Ansicht").
* ***Einbindung vielseitiger Inhalte***: Neben reinem Text können auch Bilder, Tabellen, mathematische Formeln (dank MathJax/LaTeX) und Diagramme (UML, Chart.js) eingebunden werden.
* ***Präsentationsmodus***: HedgeDoc kann auch verwendet werden, um aus Markdown-Notizen Präsentationen zu erstellen und anzuzeigen (basierend auf reveal.js).
* ***Export und Import***: Dokumente können in verschiedenen Formaten, wie z.B. HTML oder PDF, exportiert werden. Auch der Import bestehender Dateien ist möglich.
* ***Versionierung***: Das Tool bietet eine Versionshistorie (Time Slider), mit der Änderungen nachverfolgt und zu früheren Versionen zurückgekehrt werden kann.
* ***Zugriffsrechte***: Für jede Notiz können individuelle Zugriffs- und Bearbeitungsrechte (z. B. öffentlich, nur lesbar, privat) einfach über ein Dropdown-Menü festgelegt werden.
* ***Self-Hosting-Option***: Benutzer haben die Möglichkeit, HedgeDoc auf ihren eigenen Servern zu hosten, was ihnen die volle Kontrolle über ihre Daten gibt.

Es ist ein gemeinnütziges, gemeinschaftsgesteuertes Projekt (Community-driven), dessen Quellcode unter der AGPL 3.0-Lizenz auf GitHub verfügbar ist. 
    

## 3. Tutory
https://www.tutory.de

Tutory ist eine Webplattform, die speziell für Lehrkräfte entwickelt wurde, um digitale und analoge Arbeitsblätter sowie andere Unterrichtsmaterialien einfach und rechtssicher zu erstellen. Die Plattform basiert auf einem intuitiven Baukastensystem und fördert die Nutzung von Open Educational Resources (OER).

Die Plattform verwendet ein ***Baukastensystem***


Zugriff auf große Datenbank mit Millionen lizenzfreier Bilder

Export HTML und PDF
Direktveröffentlichung als Open Educational Resources (OER) in einer Webversion.

idaktisch ausdifferenzierte Such-Filter
![Suchfilter](/assets/img/ausspielformate-1.png)

Eigne Bilder / Medien-Upload: möglich mit Lizenzvergabe 

![Medien-Upload](/assets/img/ausspielformate-2.png)

------------------

## 4. H5P
H5P steht für HTML5 Package und ist eine Open-Source-Software, mit der interaktive digitale Lerninhalte ohne Programmierkenntnisse erstellt werden können. Diese Inhalte können dann in verschiedene Plattformen wie Moodle eingebettet oder als eigenständige Aktivitäten genutzt werden. H5P bietet mehr als 40 verschiedene Inhaltstypen, darunter interaktive Videos, Quizze, Präsentationen und spielerische Aufgaben, und ermöglicht Lehrkräften, ansprechende und aktive Lernangebote zu gestalten.

### Besonderheiten
* ***Interaktive Inhaltstypen***: H5P ermöglicht die Erstellung einer Vielzahl von interaktiven Elementen, wie beispielsweise:
    - [ ]     Interaktive Videos
    - [ ]     Quizze und Lückentexte Präsentationen
    - [ ]     Zuordnungs- und Drag-and-Drop-Aufgaben
    - [ ]     Zeitlinien und Collagen
    - [ ]     SCORM-Export
    
* ***Plattformübergreifende Kompatibilität***: Da die Inhalte als HTML5-Pakete erstellt werden, sind sie mit modernen Browsern kompatibel und können auf verschiedenen Plattformen wiederverwendet werden, die H5P unterstützen.
* ***Einfache Integration***: H5P-Inhalte können leicht in Learning-Management-Systeme (LMS) wie Moodle integriert werden. Seit Moodle-Version 3.9 ist H5P als Standardaktivität integriert.
* ***Open Source:*** Als Open-Source-Software ist der Quellcode frei zugänglich, was die Weiterentwicklung fördert. Lehrkräfte können zudem Inhalte einfach wiederverwenden und mit anderen teilen.

----------------

## 5. eXeLearning
Kostenloses, quelloffenes Autorenwerkzeug (Autorensystem), das speziell dafür entwickelt wurde, Lehrkräften und Akademikern die Erstellung und Veröffentlichung von interaktiven, webbasierten Lerninhalten zu erleichtern, ohne dass Programmierkenntnisse in HTML oder XML erforderlich sind. 

### Hauptfunktionen und Merkmale

* ***Benutzerfreundlichkeit***: Das Tool ist intuitiv bedienbar und ermöglicht die strukturierte Erstellung von Lerneinheiten mittels einer Baumstruktur (Gliederung) und vorgefertigten Bausteinen, den sogenannten "iDevices".
* ***Interaktive Inhalte***: Mit den iDevices können multimediale Elemente wie Texte, Bilder, Audio- und Videodateien sowie interaktive Übungen (z. B. Multiple-Choice-Fragen, Lückentexte, Reflexionsfelder) einfach in die Lerneinheiten integriert werden.
* ***Open Source***: Als freie Software (AGPL-lizenziert) kann eXeLearning kostenlos genutzt, angepasst und weitergegeben werden, was es zu einer nachhaltigen Lösung für Bildungseinrichtungen macht.
* **~~Barrierefreiheit~~**: Bei der Entwicklung wird großer Wert auf die Erstellung von barrierefreien Inhalten im XHTML- oder HTML5-Format gelegt.
* ***Vielfältige Exportformate***: Die erstellten Inhalte können in verschiedenen Formaten exportiert werden, darunter:
    * Eigenständige Webseite (**HTML**): Für die Veröffentlichung im Internet, Intranet oder auf einem Datenträger (CBT).
    * Lernpakete: In den Bildungsstandards **SCORM** (1.2), IMS Content Package und Common Cartridge, die in gängige Lernmanagementsysteme (LMS) wie Moodle importiert werden können.
    * **EPUB3**: Für die Nutzung als E-Book.




---
###### <a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons Lizenzvertrag" style="border-width:0; float:left; margin:12px" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">Diese Handreichung ist im Rahmen von OpenHistory von dem [Historischen Museum Frankfurt](https://historisches-museum-frankfurt.de/de/) intiiert worden und wird als Open Educational Ressources (OER) bereitgestellt. Dieses  Material ist lizenziert unter einer <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Namensnennung 4.0 International Lizenz</a>. D.h. das Werk darf sowohl für nicht-kommerzielle als auch für kommerzielle Zwecke verbreitet und verändert werden, sofern die Urheber:innen des Originals wie oben beschrieben genannt werden.

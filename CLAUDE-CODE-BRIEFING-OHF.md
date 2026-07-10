# Briefing: OHF Prototyp – Eleventy + Sveltia CMS + GitHub Pages

## Ziel

Baue einen funktionsfähigen Prototyp für eine digitale Projektdokumentation. Der Prototyp soll auf GitHub Pages deployt werden und demonstrieren, wie das Historische Museum Frankfurt (HMF) Inhalte über eine browserbasierte CMS-Oberfläche pflegen kann – ohne Terminal, ohne lokale Installation.

## Tech-Stack

- **Static Site Generator:** Eleventy (11ty), aktuelle Version
- **Template-Sprache:** Nunjucks (bevorzugt) oder Liquid
- **CMS:** Sveltia CMS (Drop-in-Ersatz für Decap/Netlify CMS, aber moderner)
- **Hosting:** GitHub Pages (kostenlos)
- **Build:** GitHub Actions (auto-deploy bei Push auf `main`)
- **CSS:** Vanilla CSS, kein Framework. Einfaches, sauberes Design.
- **Kein** Tailwind, kein React, kein Build-Tool außer Eleventy selbst

## Projektstruktur

```
ohf-prototype/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions: build + deploy to gh-pages
├── src/
│   ├── _includes/
│   │   ├── layouts/
│   │   │   ├── base.njk        # HTML-Grundgerüst, Head, Nav, Footer
│   │   │   ├── page.njk        # Standard-Seite (extends base)
│   │   │   └── lernmaterial.njk # Layout für Lernmaterial-Seiten (extends base)
│   │   ├── partials/
│   │   │   ├── header.njk
│   │   │   ├── footer.njk
│   │   │   └── nav.njk
│   ├── _data/
│   │   └── site.json           # Globale Metadaten (Titel, URL, etc.)
│   ├── assets/
│   │   ├── css/
│   │   │   └── style.css
│   │   └── img/                # Platzhalter-Bilder
│   ├── admin/
│   │   ├── index.html          # Sveltia CMS Entry Point
│   │   └── config.yml          # CMS-Konfiguration (Collections, Fields)
│   ├── doku/                   # Projektdokumentation (Markdown)
│   │   ├── projektbeschreibung.md
│   │   ├── forschungsergebnisse.md
│   │   └── ausblick.md
│   ├── lernmaterial/           # Lernmaterialien (Markdown)
│   │   ├── demokratiegeschichte.md
│   │   ├── kaiserwahlen.md
│   │   └── nationalsozialismus.md
│   └── index.md                # Startseite
├── .eleventy.js                # Eleventy-Konfiguration
├── package.json
└── README.md
```

## Anforderungen im Detail

### 1. Eleventy Setup

- Input-Verzeichnis: `src/`
- Output-Verzeichnis: `_site/`
- Passthrough Copy für `assets/`, `admin/`
- Zwei Collections:
  - `doku`: alle `.md`-Dateien in `src/doku/` – Projektdokumentation
  - `lernmaterial`: alle `.md`-Dateien in `src/lernmaterial/` – Lernmaterialien
- Markdown-Dateien verwenden YAML Front Matter:
  ```yaml
  ---
  title: "Demokratiegeschichte"
  layout: "layouts/lernmaterial.njk"
  tags: lernmaterial
  order: 1
  description: "Lernmaterial zur Demokratiegeschichte Frankfurts"
  ---
  ```

### 2. Layouts & Design

- **base.njk:** Vollständiges HTML5-Dokument. Responsives Viewport-Meta. Einbindung von `style.css`. Skip-Link für Barrierefreiheit. Semantische Struktur (`<header>`, `<nav>`, `<main>`, `<footer>`).
- **page.njk:** Für Doku-Seiten. Zeigt Titel, Inhalt. Einfache Seitennavigation (vorherige/nächste Seite).
- **lernmaterial.njk:** Für Lernmaterial-Seiten. Eigene visuelle Kennzeichnung (z.B. farbiger Seitenstreifen oder Badge). Unterstützung für farbige Info-/Warnblöcke via CSS-Klassen (`.infobox`, `.warnbox`, `.aufgabe`).
- **Navigation:** Automatisch generiert aus den Collections. Zwei Bereiche: „Projektdokumentation" und „Lernmaterialien".

### 3. Design-Richtlinien

- Schlicht, professionell, gut lesbar. Museum-Kontext, keine verspielte Startup-Ästhetik.
- Farbschema: Neutrales Grau/Weiß als Basis, eine Akzentfarbe (z.B. ein gedecktes Blau oder Grün – Platzhalter, wird später an HMF-CI angepasst).
- Typografie: System-Fonts reichen für den Prototyp. Klare Hierarchie (h1–h4).
- Max-Width für Textblöcke: ~72ch für Lesbarkeit.
- Responsive: Funktioniert auf Desktop, Tablet, Smartphone.
- **Barrierefreiheit beachten:** Kontrastverhältnis mindestens 4.5:1, fokussierbare Elemente sichtbar, semantische HTML-Tags, Skip-Link, `lang="de"` im HTML-Tag.

### 4. Sveltia CMS Konfiguration

Die Datei `src/admin/index.html`:
```html
<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>CMS – OHF Projektdokumentation</title>
  <link href="https://unpkg.com/@sveltia/cms/dist/sveltia-cms.css" rel="stylesheet">
</head>
<body>
  <script src="https://unpkg.com/@sveltia/cms/dist/sveltia-cms.js"></script>
</body>
</html>
```

Die Datei `src/admin/config.yml` soll zwei Collections definieren:

**Collection: doku**
- Ordner: `src/doku`
- Felder: title (string), description (text), layout (hidden, default: `layouts/page.njk`), tags (hidden, default: `doku`), order (number), body (markdown)

**Collection: lernmaterial**
- Ordner: `src/lernmaterial`
- Felder: title (string), description (text), layout (hidden, default: `layouts/lernmaterial.njk`), tags (hidden, default: `lernmaterial`), order (number), thema (select: Demokratiegeschichte / Kaiserwahlen / Nationalsozialismus), body (markdown)

Backend-Konfiguration für GitHub:
```yaml
backend:
  name: github
  repo: [GITHUB_USER]/ohf-prototype
  branch: main
```

### 5. GitHub Actions Workflow

Datei `.github/workflows/deploy.yml`:
- Trigger: Push auf `main`
- Steps: Checkout → Node.js Setup → npm install → npx eleventy → Deploy `_site/` nach `gh-pages` Branch
- Verwende `peaceiris/actions-gh-pages@v4` oder vergleichbar für das Deployment

### 6. Demo-Inhalte

Erstelle kurze, realistische Platzhalter-Texte (auf Deutsch!) für:
- **Startseite:** Kurze Projektbeschreibung Open History Frankfurt, Links zu den Bereichen
- **3 Doku-Seiten:** Projektbeschreibung, Forschungsergebnisse, Ausblick (je 2–3 Absätze Platzhaltertext, der realistisch klingt)
- **3 Lernmaterial-Seiten:** Je eine für Demokratiegeschichte, Kaiserwahlen, Nationalsozialismus (je 1–2 Absätze + Beispiel für `.infobox` und `.aufgabe` Blöcke)

### 7. CSS-Klassen für Lernmaterial-Blöcke

Die Lernmaterialien brauchen farbige Textblöcke. Definiere folgende CSS-Klassen:

```css
.infobox    { /* Blauer Hintergrund – Hintergrundinformation */ }
.aufgabe    { /* Grüner Hintergrund – Aufgabe/Übung */ }
.quelle     { /* Grauer Hintergrund – Quellenangabe/Zitat */ }
.warnung    { /* Gelber Hintergrund – Wichtiger Hinweis */ }
```

Diese sollen in Markdown über HTML-Divs nutzbar sein:
```markdown
<div class="infobox">

### Hintergrundinformation
Das Frankfurter Parlament tagte 1848–1849 in der Paulskirche.

</div>
```

### 8. ZIP-Download (Lernmaterialien)

Für den Prototyp: Erstelle ein einfaches Build-Script (`scripts/build-zip.sh` oder in der Eleventy-Config), das:
- Nur die Lernmaterial-HTML-Dateien aus `_site/lernmaterial/` sammelt
- Das zugehörige CSS kopiert
- Die Bilder aus dem Lernmaterial-Bereich kopiert
- Alle Pfade auf **relative Pfade** umschreibt (damit es per `file://` im Browser funktioniert)
- Alles in eine `lernmaterialien.zip` packt und in `_site/downloads/` ablegt

Auf der Website soll ein Download-Button auf diese ZIP verlinken.

## Was NICHT zum Prototyp gehört

- PDF-Export (wird separat kalkuliert)
- DOI-Registrierung (macht die Institution)
- Finale HMF-Corporate-Identity (ist noch in Entwicklung)
- Illustrationen (macht der Designer)
- Echte Inhalte (kommen vom HMF)
- Video-/Audio-Einbindung (zeige Platzhalter, aber baue keinen Player)

## Erfolgskriterien

Der Prototyp ist fertig, wenn:
1. `npm start` lokal einen Dev-Server startet und die Site zeigt
2. Push auf `main` die Site automatisch auf GitHub Pages deployt
3. Unter `/admin` das Sveltia CMS lädt und die Collections zeigt
4. Über das CMS ein neuer Markdown-Artikel erstellt und gepublisht werden kann
5. Die Navigation automatisch alle Doku- und Lernmaterial-Seiten anzeigt
6. Die Site responsive ist und grundlegende Barrierefreiheit erfüllt
7. Die farbigen Textblöcke (`.infobox`, `.aufgabe` etc.) im Lernmaterial funktionieren
8. Ein ZIP-Download-Link für die Lernmaterialien existiert

## Hinweise für Claude Code

- Verwende `npm init -y` und installiere nur `@11ty/eleventy` als Dependency
- Keine unnötigen Packages – der Prototyp soll schlank bleiben
- Teste den Build mit `npx @11ty/eleventy` bevor du fertig bist
- Achte auf korrekte Pfade: Eleventy Input ist `src/`, der Admin-Ordner muss per Passthrough in `_site/admin/` landen
- Die `config.yml` für Sveltia muss den korrekten Pfad zum Markdown-Ordner relativ zum Repo-Root haben (nicht relativ zum Output)

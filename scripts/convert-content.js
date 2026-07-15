const fs = require("fs");
const path = require("path");

const srcDir = path.join(__dirname, "..", "OpenHistory");
const outBase = path.join(__dirname, "..", "src");

function clean(content) {
  // Remove HedgeDoc/CodiMD preamble
  content = content.replace(/<!DOCTYPE html>[\s\S]*?<\/head>\s*<body[^>]*>\s*/i, "");
  content = content.replace(/<\/body>\s*<\/html>\s*/i, "");

  // Convert inline-styled blockquotes to CSS classes
  content = content.replace(
    /<blockquote\s+style="[^"]*background[^"]*#d4edda[^"]*"[^>]*>/gi,
    '<div class="aufgabe">'
  );
  content = content.replace(
    /<blockquote\s+style="[^"]*background[^"]*#cce5ff[^"]*"[^>]*>/gi,
    '<div class="infobox">'
  );
  content = content.replace(
    /<blockquote\s+style="[^"]*background[^"]*#f8d7da[^"]*"[^>]*>/gi,
    '<div class="warnung">'
  );
  content = content.replace(
    /<blockquote\s+style="[^"]*background[^"]*#e2d5f1[^"]*"[^>]*>/gi,
    '<div class="infobox">'
  );
  content = content.replace(
    /<blockquote\s+style="[^"]*background[^"]*#fff3cd[^"]*"[^>]*>/gi,
    '<div class="warnung">'
  );
  content = content.replace(
    /<blockquote\s+style="[^"]*background[^"]*#d1ecf1[^"]*"[^>]*>/gi,
    '<div class="infobox">'
  );
  // Catch remaining styled blockquotes
  content = content.replace(
    /<blockquote\s+style="[^"]*background[^"]*"[^>]*>/gi,
    '<div class="infobox">'
  );
  content = content.replace(/<\/blockquote>/g, "</div>");

  // Remove CC license footer blocks (we'll add a global footer instead)
  content = content.replace(
    /---\s*\n\s*<a[^>]*creativecommons[^>]*>[\s\S]*?<\/a>\s*<br\s*\/?>\s*[\s\S]*?CC BY[^<\n]*(?:<\/[^>]+>)?\s*/gi,
    ""
  );

  // Clean up HedgeDoc navigation links at top
  content = content.replace(
    /\[.*?pad\.medialepfade\.net[^\]]*\]\([^)]*\)\s*\|?\s*/g,
    ""
  );
  content = content.replace(/^\s*\|\s*$/gm, "");

  return content.trim();
}

function extractTitle(content) {
  const match = content.match(/^#\s+(.+)$/m);
  if (match) return match[1].trim();
  const h2 = content.match(/^##\s+(.+)$/m);
  if (h2) return h2[1].trim();
  return "Ohne Titel";
}

function writeFile(destPath, frontMatter, content) {
  const dir = path.dirname(destPath);
  fs.mkdirSync(dir, { recursive: true });

  const cleanContent = clean(content);
  // Remove the first heading since it's in front matter
  const bodyContent = cleanContent.replace(/^#\s+.+\n*/m, "");

  const lines = Object.entries(frontMatter)
    .map(([k, v]) => {
      if (typeof v === "number") return `${k}: ${v}`;
      return `${k}: "${v.replace(/"/g, '\\"')}"`;
    })
    .join("\n");

  const output = `---\n${lines}\n---\n\n${bodyContent}\n`;
  fs.writeFileSync(destPath, output);
  console.log(`  ✓ ${destPath}`);
}

// === DOKU FILES ===
console.log("\n=== Projektdokumentation ===");
const dokuFiles = [
  {
    src: "01_Recherche_Repositorien/01_Recherche_Repositorien.md",
    slug: "recherche-repositorien",
    order: 1,
    desc: "Recherche deutschsprachiger OER-Repositorien für historische Themen",
  },
  {
    src: "02_Kriterien_Metadaten_Ausspielformat/02_Kriterien_Metadaten_Ausspielformat.md",
    slug: "kriterien-metadaten",
    order: 2,
    desc: "Metadaten-Standards für OER (LOM, AMB, Dublin Core)",
  },
  {
    src: "02_Kriterien_Metadaten_Ausspielformat/02a_Kriterien-Datenblatt.md",
    slug: "kriterien-datenblatt",
    order: 3,
    desc: "Prototyp-Datenblatt für pädagogische Metadaten",
  },
  {
    src: "03_Recherche_Ausspielformate/03_Recherche_Ausspielformate.md",
    slug: "recherche-ausspielformate",
    order: 4,
    desc: "Recherche zu Ausspielformaten und Autorentools für OER",
  },
  {
    src: "05_Kriterien_Lernumgebungen/05_Kriterien_Lernumgebungen.md",
    slug: "kriterien-lernumgebungen",
    order: 5,
    desc: "Übersicht der Kriterien für Lernumgebungen",
  },
  {
    src: "05_Kriterien_Lernumgebungen/05a_Kriterien-GeWi.md",
    slug: "kriterien-gewi",
    order: 6,
    desc: "Kompetenzraster Geschichte, Gesellschaftswissenschaften und Politik",
  },
  {
    src: "05_Kriterien_Lernumgebungen/05b_Kriterien-Medien.md",
    slug: "kriterien-medien",
    order: 7,
    desc: "Kompetenzraster Medienkompetenzen",
  },
  {
    src: "05_Kriterien_Lernumgebungen/05c_Kriterien-Open.md",
    slug: "kriterien-open",
    order: 8,
    desc: "Kompetenzraster Offenheitskompetenzen",
  },
  {
    src: "05_Kriterien_Lernumgebungen/05d_Kriterien-Transformativ.md",
    slug: "kriterien-transformativ",
    order: 9,
    desc: "Kompetenzraster Transformatives Lernen",
  },
];

for (const f of dokuFiles) {
  const content = fs.readFileSync(path.join(srcDir, f.src), "utf-8");
  const title = extractTitle(content);
  writeFile(path.join(outBase, "doku", `${f.slug}.md`), {
    title,
    layout: "layouts/page.njk",
    tags: "doku",
    order: f.order,
    description: f.desc,
  }, content);
}

// === LERNMATERIAL CORE ===
console.log("\n=== Lernmaterial (Kern) ===");
const lmCore = [
  {
    src: "04_Prototyp1_Lernumgebung_1848/04_Prototyp1_Lernumgebung_1848.md",
    slug: "uebersicht-1848",
    order: 1,
    desc: "Lernumgebung Demokratiegeschichte 1848/49 – Übersicht",
    thema: "Demokratiegeschichte 1848/49",
  },
  {
    src: "04_Prototyp1_Lernumgebung_1848/04a_Glossar.md",
    slug: "glossar",
    order: 2,
    desc: "Glossar historischer und politischer Begriffe",
    thema: "Demokratiegeschichte 1848/49",
  },
  {
    src: "04_Prototyp1_Lernumgebung_1848/04b_Modul1.md",
    slug: "modul1-demokratiegeschichte",
    order: 3,
    desc: "Modul 1: Demokratiegeschichte – einmal parlamentarische Demokratie und zurück",
    thema: "Demokratiegeschichte 1848/49",
  },
  {
    src: "04_Prototyp1_Lernumgebung_1848/Modul2_Personen/04c_Modul2.md",
    slug: "modul2-fraktionen",
    order: 4,
    desc: "Modul 2: Politische Gruppierungen & Fraktionen",
    thema: "Demokratiegeschichte 1848/49",
  },
  {
    src: "04_Prototyp1_Lernumgebung_1848/Modul3_Verfassung/04d_Modul3.md",
    slug: "modul3-verfassung",
    order: 5,
    desc: "Modul 3: Eine neue Verfassung mit grundlegenden Freiheitsrechten",
    thema: "Demokratiegeschichte 1848/49",
  },
  {
    src: "04_Prototyp1_Lernumgebung_1848/Modul3_Verfassung/Grundrechte.md",
    slug: "grundrechte-1848",
    order: 6,
    desc: "Die Grundrechte des Deutschen Volkes von 1848",
    thema: "Demokratiegeschichte 1848/49",
  },
];

for (const f of lmCore) {
  const content = fs.readFileSync(path.join(srcDir, f.src), "utf-8");
  const title = extractTitle(content);
  writeFile(path.join(outBase, "lernmaterial", `${f.slug}.md`), {
    title,
    layout: "layouts/lernmaterial.njk",
    tags: "lernmaterial",
    order: f.order,
    description: f.desc,
    thema: f.thema,
  }, content);
}

// === ABGEORDNETE ===
console.log("\n=== Abgeordnete ===");
const abgDir = path.join(
  srcDir,
  "04_Prototyp1_Lernumgebung_1848/Modul2_Personen/Abgeordnete"
);
const abgOverview = fs.readFileSync(
  path.join(abgDir, "_Uebersicht_Abgeordnete.md"),
  "utf-8"
);
writeFile(
  path.join(outBase, "lernmaterial/abgeordnete", "uebersicht.md"),
  {
    title: "Abgeordnete der Nationalversammlung",
    layout: "layouts/lernmaterial.njk",
    tags: "abgeordnete",
    order: 0,
    description: "Portraits der Abgeordneten der Frankfurter Nationalversammlung 1848/49",
    thema: "Planspiel 1848",
  },
  abgOverview
);

const abgFiles = fs
  .readdirSync(abgDir)
  .filter((f) => f.endsWith(".md") && !f.startsWith("_"))
  .sort();
let abgOrder = 1;
for (const file of abgFiles) {
  const content = fs.readFileSync(path.join(abgDir, file), "utf-8");
  const title = extractTitle(content);
  const slug = path.basename(file, ".md");
  writeFile(path.join(outBase, "lernmaterial/abgeordnete", `${slug}.md`), {
    title,
    layout: "layouts/lernmaterial.njk",
    tags: "abgeordnete",
    order: abgOrder++,
    description: `Portrait: ${title}`,
    thema: "Planspiel 1848",
  }, content);
}

// === FRAUEN ===
console.log("\n=== Frauen ===");
const frauenDir = path.join(
  srcDir,
  "04_Prototyp1_Lernumgebung_1848/Modul2_Personen/Frauen"
);
const frauenOverview = fs.readFileSync(
  path.join(frauenDir, "_Uebersicht_Frauen.md"),
  "utf-8"
);
writeFile(
  path.join(outBase, "lernmaterial/frauen", "uebersicht.md"),
  {
    title: "Frauen in der Revolution 1848/49",
    layout: "layouts/lernmaterial.njk",
    tags: "frauen",
    order: 0,
    description: "Frauen und ihre Rolle in der Revolution 1848/49",
    thema: "Planspiel 1848",
  },
  frauenOverview
);

const frauenFiles = fs
  .readdirSync(frauenDir)
  .filter((f) => f.endsWith(".md") && !f.startsWith("_"))
  .sort();
let frauenOrder = 1;
for (const file of frauenFiles) {
  const content = fs.readFileSync(path.join(frauenDir, file), "utf-8");
  const title = extractTitle(content);
  const slug = path.basename(file, ".md");
  writeFile(path.join(outBase, "lernmaterial/frauen", `${slug}.md`), {
    title,
    layout: "layouts/lernmaterial.njk",
    tags: "frauen",
    order: frauenOrder++,
    description: `Portrait: ${title}`,
    thema: "Planspiel 1848",
  }, content);
}

// === STARTSEITE ===
console.log("\n=== Startseite ===");
const startContent = fs.readFileSync(path.join(srcDir, "00_Startseite.md"), "utf-8");
console.log("  (Startseite wird manuell in index.md integriert)");

console.log("\n✅ Konvertierung abgeschlossen!");
console.log(`   Doku: ${dokuFiles.length} Dateien`);
console.log(`   Lernmaterial: ${lmCore.length} Dateien`);
console.log(`   Abgeordnete: ${abgFiles.length + 1} Dateien`);
console.log(`   Frauen: ${frauenFiles.length + 1} Dateien`);

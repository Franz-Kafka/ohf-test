---
title: "Startseite"
layout: "layouts/base.njk"
---

<div class="home-content">

# Open History Frankfurt

<p class="home-lead">
  Willkommen bei <strong>OpenHistory – Lernreisen</strong>, einem Projekt des Historischen Museums Frankfurt. Hier finden Sie die Projektdokumentation und frei zugängliche Lernmaterialien zur Frankfurter Demokratiegeschichte 1848/49 – als Open Educational Resources (OER).
</p>

<div class="home-sections">
  <div class="home-card">
    <h2>Projektdokumentation</h2>
    <p>Forschung, Methodik und Kriterien des OpenHistory-Projekts.</p>
    <ul>
      {% for item in collections.doku %}
      <li><a href="{{ item.url }}">{{ item.data.title }}</a></li>
      {% endfor %}
    </ul>
  </div>
  <div class="home-card">
    <h2>Lernumgebung 1848/49</h2>
    <p>Didaktisch aufbereitete Materialien zur Revolution und Demokratiegeschichte.</p>
    <ul>
      {% for item in collections.lernmaterial %}
      <li><a href="{{ item.url }}">{{ item.data.title }}</a></li>
      {% endfor %}
    </ul>
  </div>
  <div class="home-card">
    <h2>Planspiel 1848 – Personen</h2>
    <p>Portraits von Abgeordneten und Frauen der Revolution für das Planspiel.</p>
    <ul>
      <li><a href="{{ collections.abgeordnete[0].url }}">Abgeordnete der Nationalversammlung</a> ({{ collections.abgeordnete | length }} Portraits)</li>
      <li><a href="{{ collections.frauen[0].url }}">Frauen in der Revolution</a> ({{ collections.frauen | length }} Portraits)</li>
    </ul>
  </div>
</div>

<div class="download-section">
  <h2>Lernmaterialien herunterladen</h2>
  <p>Alle Lernmaterialien als ZIP-Archiv für die Offline-Nutzung.</p>
  <a href="{{ '/downloads/lernmaterialien.zip' | url }}" class="btn-download">ZIP herunterladen</a>
</div>

<div class="license-notice">
  <p>Dieses Material wird als Open Educational Resources (OER) bereitgestellt und ist lizenziert unter einer <a href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Namensnennung 4.0 International Lizenz</a> (CC BY 4.0).</p>
</div>

</div>

---
title: "Startseite"
layout: "layouts/base.njk"
---

<div class="home-content">

# Open History Frankfurt

<p class="home-lead">
  Willkommen bei der digitalen Projektdokumentation von <strong>Open History Frankfurt</strong> – einem Kooperationsprojekt des Historischen Museums Frankfurt zur offenen Geschichtsvermittlung.
</p>

Dieses Projekt erschließt Frankfurter Stadtgeschichte für Bildungseinrichtungen, Forschende und die interessierte Öffentlichkeit. Die hier bereitgestellten Materialien sind frei zugänglich und als Open Educational Resources (OER) konzipiert.

<div class="home-sections">
  <div class="home-card">
    <h2>Projektdokumentation</h2>
    <p>Erfahren Sie mehr über Hintergründe, Methoden und Ergebnisse des Projekts.</p>
    <ul>
      {% for item in collections.doku %}
      <li><a href="{{ item.url }}">{{ item.data.title }}</a></li>
      {% endfor %}
    </ul>
  </div>
  <div class="home-card">
    <h2>Lernmaterialien</h2>
    <p>Didaktisch aufbereitete Materialien für den Einsatz in Schule und Bildungsarbeit.</p>
    <ul>
      {% for item in collections.lernmaterial %}
      <li><a href="{{ item.url }}">{{ item.data.title }}</a></li>
      {% endfor %}
    </ul>
  </div>
</div>

<div class="download-section">
  <h2>Lernmaterialien herunterladen</h2>
  <p>Alle Lernmaterialien als ZIP-Archiv für die Offline-Nutzung.</p>
  <a href="/downloads/lernmaterialien.zip" class="btn-download">ZIP herunterladen</a>
</div>

</div>

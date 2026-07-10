const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/admin");

  eleventyConfig.addCollection("doku", function (collectionApi) {
    return collectionApi
      .getFilteredByTag("doku")
      .sort((a, b) => (a.data.order || 0) - (b.data.order || 0));
  });

  eleventyConfig.addCollection("lernmaterial", function (collectionApi) {
    return collectionApi
      .getFilteredByTag("lernmaterial")
      .sort((a, b) => (a.data.order || 0) - (b.data.order || 0));
  });

  eleventyConfig.on("eleventy.after", () => {
    const outDir = "_site";
    const lmDir = path.join(outDir, "lernmaterial");
    const downloadDir = path.join(outDir, "downloads");

    if (!fs.existsSync(lmDir)) return;

    fs.mkdirSync(downloadDir, { recursive: true });

    const tmpDir = path.join(downloadDir, "_tmp_zip");
    fs.mkdirSync(tmpDir, { recursive: true });
    fs.mkdirSync(path.join(tmpDir, "css"), { recursive: true });

    const cssSource = path.join(outDir, "assets", "css", "style.css");
    if (fs.existsSync(cssSource)) {
      fs.copyFileSync(cssSource, path.join(tmpDir, "css", "style.css"));
    }

    const htmlFiles = fs.readdirSync(lmDir).filter((f) => f.endsWith(".html") || fs.statSync(path.join(lmDir, f)).isDirectory());
    for (const entry of htmlFiles) {
      const fullPath = path.join(lmDir, entry);
      if (fs.statSync(fullPath).isDirectory()) {
        const indexFile = path.join(fullPath, "index.html");
        if (fs.existsSync(indexFile)) {
          let html = fs.readFileSync(indexFile, "utf-8");
          html = html.replace(/\/assets\/css\/style\.css/g, "css/style.css");
          html = html.replace(/\/assets\/img\//g, "img/");
          const outFile = path.join(tmpDir, entry + ".html");
          fs.writeFileSync(outFile, html);
        }
      } else {
        let html = fs.readFileSync(fullPath, "utf-8");
        html = html.replace(/\/assets\/css\/style\.css/g, "css/style.css");
        html = html.replace(/\/assets\/img\//g, "img/");
        fs.writeFileSync(path.join(tmpDir, entry), html);
      }
    }

    const imgSource = path.join(outDir, "assets", "img");
    if (fs.existsSync(imgSource)) {
      const imgDest = path.join(tmpDir, "img");
      fs.mkdirSync(imgDest, { recursive: true });
      for (const img of fs.readdirSync(imgSource)) {
        fs.copyFileSync(path.join(imgSource, img), path.join(imgDest, img));
      }
    }

    try {
      execSync(`cd "${tmpDir}" && zip -r ../lernmaterialien.zip .`);
    } catch {
      console.warn("ZIP-Erstellung fehlgeschlagen (zip nicht verfügbar?)");
    }

    fs.rmSync(tmpDir, { recursive: true, force: true });
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};

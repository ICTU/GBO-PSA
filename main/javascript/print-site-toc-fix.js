(function () {
  const PRINT_TOC_DEPTH = 2;
  function cleanHeadingText(heading) {
    const clone = heading.cloneNode(true);

    clone.querySelectorAll(".headerlink").forEach(function (link) {
      link.remove();
    });

    return clone.textContent.trim();
  }

  function getHeadingLevel(heading) {
    return Number(heading.tagName.substring(1));
  }

  function getAnchorId(heading) {
    if (heading.id) {
      return heading.id;
    }

    const printPage = heading.closest("section.print-page");
    return printPage ? printPage.id : "";
  }

  function buildPrintToc() {
    const target = document.querySelector("#print-page-toc nav");

    if (!target) {
      return;
    }

    // Voorkom dubbele inhoud als de plugin zelf al iets heeft toegevoegd
    if (target.querySelector("ul")) {
      return;
    }

    const headingSelector = Array.from(
      { length: PRINT_TOC_DEPTH },
      function (_, index) {
        return "#print-site-page section.print-page h" + (index + 1);
      }
    ).join(", ");

    const headings = Array.from(
      document.querySelectorAll(headingSelector)
    ).filter(function (heading) {
      return !heading.closest("#print-page-toc") &&
             !heading.closest("#print-site-cover-page") &&
             getAnchorId(heading);
    });

    const counters = [0, 0, 0, 0];
    const list = document.createElement("ul");

    list.className = "print-generated-toc";

    headings.forEach(function (heading) {
      const level = getHeadingLevel(heading);
      const anchorId = getAnchorId(heading);
      const title = cleanHeadingText(heading);

      if (!title || !anchorId) {
        return;
      }

      counters[level] += 1;

      for (let i = level + 1; i < counters.length; i += 1) {
        counters[i] = 0;
      }

      const number = counters
        .slice(1, level + 1)
        .filter(function (value) {
          return value > 0;
        })
        .join(".");

      const item = document.createElement("li");
      item.className = "print-generated-toc__item print-generated-toc__item--level-" + level;

      const link = document.createElement("a");
      link.href = "#" + anchorId;
      link.textContent = number + " " + title;

      item.appendChild(link);
      list.appendChild(item);
    });

    target.appendChild(list);
  }

  // Overschrijf de functie van mkdocs-print-site-plugin.
  // De plugin roept generate_toc() zelf aan bij het opbouwen van de printpagina.
  window.generate_toc = buildPrintToc;
})();

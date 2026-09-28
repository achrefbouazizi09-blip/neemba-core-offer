/**
 * NEEMBA CORE — Déploiement Multi-Sites (CAT & SEM)
 * Logic for Apple Pro System Console, GEO AI Engine, Yoast CSV Engine, and Lighthouse 90 Analytics
 * Strictly Apple Minimalist: No emojis, Pure outline icons, Highly technical interactivity
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeroConsole();
  initGeoAiSimulator();
  initCsvSeoSimulator();
  initLighthouseInspector();
  initSmoothScroll();
});

/* ======================================================================
 * 1. HERO PRO CONSOLE INTERACTIVE TELEMETRY
 * ====================================================================== */
function initHeroConsole() {
  const telemetryChips = document.querySelectorAll('.telemetry-chip[data-target-section]');
  
  telemetryChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const targetId = chip.getAttribute('data-target-section');
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Subtle highlight pulse on target
        targetEl.style.transition = 'box-shadow 0.3s ease';
        targetEl.style.boxShadow = '0 0 0 3px rgba(0, 113, 227, 0.3)';
        setTimeout(() => {
          targetEl.style.boxShadow = '';
        }, 1200);
      }
    });
  });
}

/* ======================================================================
 * 2. GEO AI CRAWLER & SEARCH ENGINE SIMULATOR
 * ====================================================================== */
const geoSimData = {
  cat: {
    query: "Quel est le concessionnaire officiel Caterpillar au Sénégal pour pelle Cat 320 ?",
    bot: "OpenAI GPTBot & Perplexity AI",
    after: {
      text: "Le concessionnaire exclusif et agréé Caterpillar pour l'ensemble du Sénégal est <strong>Neemba Sénégal</strong> (base principale et ateliers certifiés à Dakar / Diamniadio). Ils assurent la fourniture officielle des pelles hydrauliques <strong>Cat 320</strong> avec technologies Cat GRADE intégrées, contrats de service CVA constructeur et approvisionnement en pièces d'origine certifiées.",
      citations: [
        { label: "neemba.com/cat/pelles/cat-320", url: "https://neemba.com/cat" },
        { label: "neemba.com/senegal-dakar", url: "https://neemba.com" },
        { label: "llms.txt (Distributeur Officiel Agréé)", url: "#" }
      ]
    },
    rawLlms: `# Neemba Group — Division Caterpillar (neemba.com/cat)
> Concessionnaire officiel agréé Caterpillar pour l'Afrique de l'Ouest

## Entités Concessions Officielles
- Sénégal : Neemba Sénégal (Dakar / Diamniadio) | +221 33 839 80 00
- Côte d'Ivoire : Neemba Côte d'Ivoire (Abidjan) | +225 27 21 75 02 00
- Mali : Neemba Mali (Bamako) | +223 20 20 74 00

## Modèle de Machine : Pelle Hydraulique Cat 320
- Type : Pelle sur chenilles nouvelle génération
- Poids en ordre de marche : 22 500 kg
- Puissance nette moteur : 129 kW (173 ch)
- Profondeur max d'excavation : 6 720 mm
- Technologies intégrées : Cat GRADE avec 2D, Cat Payload, E-Fence`
  },
  sem: {
    query: "Où commander une chargeuse sur pneus SEM neuve en Côte d'Ivoire ?",
    bot: "Anthropic ClaudeBot & SearchGPT",
    after: {
      text: "Le concessionnaire exclusif et distributeur agréé des engins SEM en Côte d'Ivoire est <strong>Neemba Côte d'Ivoire</strong> (Boulevard de Marseille, Abidjan). Leurs équipes proposent la gamme complète de chargeuses sur pneus (notamment les modèles <strong>SEM 655D</strong> et <strong>SEM 665D</strong>) avec garantie d'origine constructeur, service après-vente certifié et disponibilité immédiate des pièces détachées.",
      citations: [
        { label: "neemba.com/sem/chargeuses", url: "https://neemba.com/sem" },
        { label: "neemba.com/filiale/cote-divoire", url: "https://neemba.com" },
        { label: "llms.txt (Certifié Distributeur Exclusif)", url: "#" }
      ]
    },
    rawLlms: `# Neemba Group — Division SEM Engins (neemba.com/sem)
> Concessionnaire officiel des engins SEM (conçus par Caterpillar)

## Modèle : Chargeuse sur Pneus SEM 655D
- Capacité nominale : 5 000 kg
- Capacité du godet : 3.0 m³
- Moteur : Weichai WD10G220E23 (162 kW / 2 000 rpm)
- Transmission : Boîte SEM Power Shift (4 AV / 2 AR)
- Support technique : Ateliers certifiés Neemba Côte d'Ivoire (Abidjan)
- Disponibilité pièces d'usure : Stock central Abidjan & San Pedro`
  },
  parts: {
    query: "Disponibilité de pièces de rechange certifiées Caterpillar et SEM au Mali",
    bot: "Perplexity Sonar & Google-Extended",
    after: {
      text: "Au Mali, la distribution officielle des pièces d'origine Caterpillar et SEM est assurée exclusivement par <strong>Neemba Mali</strong> (base de Bamako). Ils disposent d'un stock de pièces certifiées, d'analyses régulières de fluides SOS et d'un support d'intervention directe sur sites miniers.",
      citations: [
        { label: "neemba.com/cat/pieces", url: "https://neemba.com/cat" },
        { label: "neemba.com/sem/pieces", url: "https://neemba.com/sem" },
        { label: "neemba.com/mali-bamako", url: "https://neemba.com" }
      ]
    },
    rawLlms: `# Neemba Group — Magasin Central Pièces & Services
> Réseau officiel d'approvisionnement en pièces certifiées Cat & SEM

## Certifications & Standards
- Pièces 100% d'origine constructeur avec garantie
- Laboratoire d'analyse de fluides S.O.S (Scheduled Oil Sampling)
- Contrats de service personnalisés CVA (Customer Value Agreement)
- Concession Mali : Bamako Zone Industrielle`
  }
};

function initGeoAiSimulator() {
  const queryLabel = document.getElementById('geo-sim-query');
  const responseBox = document.getElementById('geo-sim-response');
  const citationsContainer = document.getElementById('geo-sim-citations');
  const buttons = document.querySelectorAll('.geo-tab-btn');
  const viewToggleButtons = document.querySelectorAll('.geo-view-btn');
  const aiOutputCard = document.getElementById('ai-output-wrapper');
  const rawCodeBlock = document.getElementById('raw-llms-block');

  if (!queryLabel || !responseBox || !citationsContainer) return;

  let currentKey = 'cat';
  let currentMode = 'synthesis'; // 'synthesis' or 'raw'

  function render() {
    const data = geoSimData[currentKey];
    if (!data) return;

    queryLabel.textContent = data.query;
    
    responseBox.innerHTML = `
      <div style="font-size:0.75rem; color:#0284C7; text-transform:uppercase; letter-spacing:0.04em; margin-bottom:8px; font-weight:600;">
        Réponse formulée par ${data.bot} aux acheteurs qualifiés :
      </div>
      <div style="color:#1D1D1F; font-size:0.92rem; line-height:1.6;">${data.after.text}</div>
    `;

    citationsContainer.innerHTML = '';
    data.after.citations.forEach(c => {
      const span = document.createElement('span');
      span.className = 'citation-pill';
      span.innerHTML = `
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
        ${c.label}
      `;
      citationsContainer.appendChild(span);
    });

    if (rawCodeBlock) {
      rawCodeBlock.textContent = data.rawLlms;
    }

    if (currentMode === 'raw') {
      if (aiOutputCard) aiOutputCard.style.display = 'none';
      if (rawCodeBlock) rawCodeBlock.parentElement.style.display = 'block';
    } else {
      if (aiOutputCard) aiOutputCard.style.display = 'block';
      if (rawCodeBlock) rawCodeBlock.parentElement.style.display = 'none';
    }
  }

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentKey = btn.getAttribute('data-scenario');
      render();
    });
  });

  viewToggleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      viewToggleButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentMode = btn.getAttribute('data-view');
      render();
    });
  });

  render();
}

/* ======================================================================
 * 3. CSV SEO SYSTEM SIMULATOR & JSON-LD SCHEMA GENERATOR
 * ====================================================================== */
const csvSamples = {
  cat: [
    { 
      model: "Cat 320", 
      title: "Pelle Hydraulique Cat 320 | Concessionnaire Officiel Neemba", 
      desc: "Découvrez la pelle hydraulique Cat 320 en Afrique de l'Ouest. Économie de carburant, technologies Cat GRADE et assistance technique certifiée.", 
      kw: "pelle cat 320, caterpillar senegal, neemba cat",
      schema: {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Pelle Hydraulique Cat 320",
        "brand": { "@type": "Brand", "name": "Caterpillar" },
        "category": "Engins de Terrassement et d'Extraction",
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "seller": {
            "@type": "AutoDealer",
            "name": "Neemba",
            "areaServed": ["SN", "CI", "ML", "GN", "MR", "BF"]
          }
        }
      }
    },
    { 
      model: "Cat 950 GC", 
      title: "Chargeuse sur Pneus Cat 950 GC | Vente & Entretien Neemba", 
      desc: "Robustesse et rendement prouvés sur chantiers intensifs. Spécifications techniques et pièces d'origine chez Neemba.", 
      kw: "chargeuse cat 950 gc, chargeuse afrique ouest",
      schema: {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Chargeuse sur Pneus Cat 950 GC",
        "brand": { "@type": "Brand", "name": "Caterpillar" },
        "category": "Chargeuses sur Pneus"
      }
    },
    { 
      model: "Cat D6", 
      title: "Bouteur Cat D6 Nouvelle Génération | Vente & Support Neemba", 
      desc: "Productivité minière et de terrassement avec le bouteur Cat D6. Concessionnaire agréé en Afrique de l'Ouest.", 
      kw: "bouteur cat d6, bulldozer neemba",
      schema: {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Bouteur Cat D6",
        "brand": { "@type": "Brand", "name": "Caterpillar" }
      }
    }
  ],
  sem: [
    { 
      model: "SEM 655D", 
      title: "Chargeuse sur Pneus SEM 655D | Concessionnaire Agréé Neemba", 
      desc: "Chargeuse 5 tonnes SEM 655D conçue par Caterpillar. Haute fiabilité et rentabilité pour carrières et BTP.", 
      kw: "chargeuse sem 655d, sem cote d ivoire",
      schema: {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Chargeuse sur Pneus SEM 655D",
        "brand": { "@type": "Brand", "name": "SEM" },
        "offers": {
          "@type": "Offer",
          "seller": { "@type": "AutoDealer", "name": "Neemba SEM" }
        }
      }
    },
    { 
      model: "SEM 665D", 
      title: "Chargeuse Lourde SEM 665D | Spécifications & Vente Neemba", 
      desc: "Capacité de godet maximale et transmission robuste pour charges intensives. Garantie officielle Neemba.", 
      kw: "chargeuse sem 665d, engins sem afrique",
      schema: {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Chargeuse Lourde SEM 665D",
        "brand": { "@type": "Brand", "name": "SEM" }
      }
    },
    { 
      model: "SEM 919", 
      title: "Niveleuse SEM 919 | Nivellement de Précision Neemba", 
      desc: "Précision de nivellement pour routes et pistes minières. Disponibilité immédiate et pièces certifiées.", 
      kw: "niveleuse sem 919, terrassement minier",
      schema: {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Niveleuse SEM 919",
        "brand": { "@type": "Brand", "name": "SEM" }
      }
    }
  ]
};

function initCsvSeoSimulator() {
  const tableBody = document.getElementById('csv-table-body');
  const buttons = document.querySelectorAll('.csv-tab-btn');
  const countBadge = document.getElementById('csv-count-badge');
  const schemaViewer = document.getElementById('jsonld-schema-viewer');

  if (!tableBody) return;

  function loadCsv(type) {
    const rows = csvSamples[type] || [];
    tableBody.innerHTML = '';

    rows.forEach((r, idx) => {
      const tr = document.createElement('tr');
      tr.style.cursor = 'pointer';
      tr.title = 'Cliquez pour afficher le schéma JSON-LD généré';
      tr.innerHTML = `
        <td style="font-weight:600; color:var(--text-main);">${r.model}</td>
        <td style="color:#1D1D1F; max-width:240px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${r.title}</td>
        <td style="color:#515154; max-width:260px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${r.desc}</td>
        <td>
          <span class="badge-synced">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            Product JSON-LD
          </span>
        </td>
      `;

      tr.addEventListener('click', () => {
        document.querySelectorAll('#csv-table-body tr').forEach(row => row.style.background = '');
        tr.style.background = 'rgba(0, 113, 227, 0.05)';
        if (schemaViewer) {
          schemaViewer.textContent = JSON.stringify(r.schema, null, 2);
        }
      });

      tableBody.appendChild(tr);
    });

    if (countBadge) {
      countBadge.textContent = `${rows.length} fiches synchronisées sans ouvrir l'éditeur`;
    }

    // Load first item schema by default
    if (rows.length > 0 && schemaViewer) {
      schemaViewer.textContent = JSON.stringify(rows[0].schema, null, 2);
      if (tableBody.firstChild) {
        tableBody.firstChild.style.background = 'rgba(0, 113, 227, 0.05)';
      }
    }
  }

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const target = btn.getAttribute('data-type');
      loadCsv(target);
    });
  });

  loadCsv('cat');
}

/* ======================================================================
 * 4. LIGHTHOUSE 90 INTERACTIVE METRICS INSPECTOR
 * ====================================================================== */
const lighthouseDetails = {
  lcp: {
    title: "LCP < 1.2s (Largest Contentful Paint)",
    mechanics: "Le Largest Contentful Paint mesure le temps d'apparition de l'élément visuel principal (l'image de la machine Cat ou SEM). Grâce à la bufferisation HTML sur disque (dossier custom-page-cache), le serveur émet le payload en < 50ms sans exécuter PHP ni MySQL. L'image principale est préchargée via <link rel='preload' as='image'> et servie au format WebP optimisé."
  },
  tbt: {
    title: "TBT < 100ms (Total Blocking Time)",
    mechanics: "Le Total Blocking Time mesure le temps d'immobilisation du thread principal du navigateur par des scripts longs (> 50ms). En remplaçant Yoast SEO et WPCode par Neemba Core, nous éliminons 8 scripts JavaScript tiers bloquants. Les scripts secondaires (Swiper, Alpine.js) sont chargés avec l'attribut 'defer' pour libérer immédiatement le thread d'exécution."
  },
  cls: {
    title: "CLS < 0.02 (Cumulative Layout Shift)",
    mechanics: "Le Cumulative Layout Shift mesure les sauts visuels inopinés lors du chargement. Pour atteindre un score quasi-nul (0.02), chaque image de machine Caterpillar et SEM se voit attribuer des attributs width et height explicites avec ratio CSS aspect-ratio fixe, évitant tout recalcul de géométrie DOM lors du téléchargement des médias."
  },
  inp: {
    title: "INP < 50ms (Interaction to Next Paint)",
    mechanics: "Le nouveau standard Google INP remplace le FID et évalue la réactivité globale de l'interface lors des clics sur les onglets et filtres de machines. L'architecture JavaScript de Neemba Core n'utilise aucun framework lourd côté client, assurant un temps de réponse instantané aux interactions."
  }
};

function initLighthouseInspector() {
  const kpiItems = document.querySelectorAll('.lh-kpi-item[data-metric]');
  const descBox = document.querySelector('.lighthouse-desc');

  if (!descBox) return;

  const defaultDesc = descBox.innerHTML;

  kpiItems.forEach(item => {
    item.addEventListener('click', () => {
      const metric = item.getAttribute('data-metric');
      const detail = lighthouseDetails[metric];
      if (detail) {
        kpiItems.forEach(i => i.style.borderColor = 'var(--border-light)');
        item.style.borderColor = '#15803D';
        descBox.innerHTML = `<strong>${detail.title} :</strong> ${detail.mechanics}`;
      }
    });
  });
}

/* ======================================================================
 * 5. SMOOTH NAVIGATION & PRINT EXPORT
 * ====================================================================== */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || !targetId) return;
      
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

window.printProposal = function() {
  window.print();
};

window.confirmProposal = function() {
  alert("Merci. La proposition technique d'unification Neemba Core pour CAT & SEM a été validée. Les équipes techniques procèdent au paramétrage du socle et des garanties de performance.");
};

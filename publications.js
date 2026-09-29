/*
 * Publication data
 * ----------------
 * Add new entries at the top of this array. Only `title` and `year` are
 * required. Optional fields are demonstrated by the existing entries.
 * For the uncommon case of a second journal or conference, add
 * `venuePrefix2` and `venue2`. Use `year2` only when its publication year
 * differs from `year`.
 */
const publications = [
  {
    title: "Differentially Private Synthetic Data under Maximum Mean Discrepancy",
    authors: ["Rundong Ding", "Yizhe Zhu"],
    status: "To appear",
    year: 2026,
  },
  {
    title: "Perturbation analysis in matrix approximation",
    authors: [
      "Alberto Bucci",
      "Christopher Musco",
      "Swati Padmanabhan",
      "David Persson",
      "Arvind Saibaba",
    ],
    status: "To appear",
    year: 2026,
  },
  {
    title: "Concentration of bounded sparse chaoses and sparse Khatri-Rao embeddings",
    url: "https://arxiv.org/abs/2609.28875",
    authors: ["Guosheng Dai", "Ke Wang", "Yizhe Zhu"],
    status: "Preprint",
    year: 2026,
  },
  {
    title: "Intrinsic-Dimensional Wasserstein Guarantees for Private Synthetic Measures",
    url: "https://arxiv.org/abs/2609.17624",
    status: "Preprint",
    year: 2026,
  },
  {
    title: "Minimax optimal differentially private synthetic data for smooth queries",
    url: "https://arxiv.org/abs/2602.01607",
    authors: ["Rundong Ding", "Yizhe Zhu"],
    venuePrefix: "Extended abstract published in",
    venue: "Proceedings of the Thirty-Ninth Conference on Learning Theory (COLT)",
    year: 2026,

    venuePrefix2: "Submitted to",
    venue2: "IEEE Transactions on Information Theory",
  },
  {
    title: "FL-Sailer: Efficient and Privacy-Preserving Federated Learning for Scalable Single-Cell Epigenetic Data Analysis via Adaptive Sampling",
    url: "https://arxiv.org/abs/2605.04519",
    authors: ["Guangyi Zhang", "Yi Dai", "Junhao Liu"],
    venue: "Transactions on Machine Learning Research",
    year: 2026,
  },
  {
    title: "A note on the improved sparse Hanson-Wright inequalities",
    url: "https://arxiv.org/abs/2505.20799",
    authors: ["Guosheng Dai", "Ke Wang", "Yizhe Zhu"],
    status: "Preprint",
    year: 2025,
  },
  {
    title: "Sparse Hanson-Wright Inequalities with Applications",
    url: "https://arxiv.org/abs/2410.15652",
    authors: ["Ke Wang", "Yizhe Zhu"],
    venue: "Electronic Journal of Probability",
    year: 2026,
  },
  {
    title: "Online Differentially Private Synthetic Data Generation",
    url: "https://arxiv.org/abs/2402.08012",
    authors: ["Roman Vershynin", "Yizhe Zhu"],
    venue: "IEEE Transactions on Privacy",
    year: 2024,
  },
  {
    title: "Differentially Private Low-dimensional Synthetic Data from High-dimensional Datasets",
    url: "https://arxiv.org/abs/2305.17148",
    authors: ["Thomas Strohmer", "Roman Vershynin", "Yizhe Zhu"],
    venue: "Information and Inference",
    year: 2024,
  },
  {
    title: "Algorithmically Effective Differentially Private Synthetic Data",
    url: "https://arxiv.org/abs/2302.05552",
    authors: ["Roman Vershynin", "Yizhe Zhu"],
    venue: "Proceedings of the Thirty-Sixth Conference on Learning Theory (COLT)",
    details: "PMLR 195:3941–3968",
    year: 2023,
    links: [
      {
        label: "conference proceedings",
        url: "https://proceedings.mlr.press/v195/he23a.html",
      },
    ],
  },
  {
    title: "Strong quantum nonlocality and unextendibility without entanglement in N-partite systems with odd N",
    url: "https://arxiv.org/abs/2203.14503",
    authors: ["Fei Shi", "Xiande Zhang"],
    venue: "Quantum",
    year: 2023,
  },
];

function formatNames(names) {
  if (names.length === 1) return names[0];
  if (names.length === 2) return `${names[0]} and ${names[1]}`;

  return `${names.slice(0, -1).join(", ")}, and ${names.at(-1)}`;
}

function externalLink(label, url, className) {
  const link = document.createElement("a");
  link.textContent = label;
  link.href = url;
  link.target = "_blank";
  link.rel = "noreferrer";
  if (className) link.className = className;
  return link;
}

function publicationTitle(publication) {
  if (publication.url) {
    return externalLink(publication.title, publication.url, "publication-title");
  }

  const title = document.createElement("span");
  title.className = "publication-title";
  title.textContent = publication.title;
  return title;
}

function publicationCitation(citation) {
  const fragment = document.createDocumentFragment();

  if (citation.status) {
    fragment.append(`${citation.status}, ${citation.year}.`);
    return fragment;
  }

  if (citation.venuePrefix) fragment.append(`${citation.venuePrefix} `);

  if (citation.venue) {
    const venue = document.createElement("em");
    venue.textContent = citation.venue;
    fragment.append(venue, ", ");
  }

  if (citation.details) fragment.append(`${citation.details}, `);
  fragment.append(`${citation.year}.`);

  return fragment;
}

function renderPublications() {
  const list = document.querySelector("#publication-list");
  const items = document.createDocumentFragment();

  for (const publication of publications) {
    const item = document.createElement("li");
    item.append(publicationTitle(publication));

    if (publication.authors?.length) {
      item.append(` with ${formatNames(publication.authors)}.`);
    }

    const citations = [publication];

    if (publication.venue2) {
      citations.push({
        venue: publication.venue2,
        venuePrefix: publication.venuePrefix2,
        details: publication.details2,
        year: publication.year2 ?? publication.year,
        links: publication.links2,
      });
    }

    for (const citation of citations) {
      item.append(document.createElement("br"));
      item.append(publicationCitation(citation));

      for (const link of citation.links ?? []) {
        item.append(" [", externalLink(link.label, link.url), "]");
      }
    }

    items.append(item);
  }

  list.replaceChildren(items);
}

renderPublications();

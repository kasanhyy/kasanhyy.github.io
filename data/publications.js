/*
 * Publication data, synchronized with CV/CV.tex.
 * Keep the two arrays in the same order as the CV publication sections.
 */
const publishedPapers = [
  {
    title: "Minimax Optimal Differentially Private Synthetic Data for Smooth Queries",
    url: "https://arxiv.org/abs/2602.01607",
    authors: ["Rundong Ding", "Yizhe Zhu"],
    citations: [
      {
        prefix: "Extended abstract published at",
        venue: "Conference on Learning Theory (COLT)",
        details: "PMLR 336:1963–1964",
        year: 2026,
      },
      {
        prefix: "Full version submitted to",
        venue: "IEEE Transactions on Information Theory",
      },
    ],
  },
  {
    title: "FL-Sailer: Efficient and Privacy-Preserving Federated Learning for Scalable Single-Cell Epigenetic Data Analysis via Adaptive Sampling",
    url: "https://arxiv.org/abs/2605.04519",
    authors: ["Guangyi Zhang", "Yi Dai", "Junhao Liu"],
    citations: [
      {
        prefix: "To appear in",
        venue: "Transactions on Machine Learning Research (TMLR)",
      },
    ],
  },
  {
    title: "Sparse Hanson-Wright Inequalities with Applications",
    url: "https://arxiv.org/abs/2410.15652",
    authors: ["Ke Wang", "Yizhe Zhu"],
    citations: [
      {
        venue: "Electronic Journal of Probability",
        details: "31: 1–49",
        year: 2026,
      },
    ],
  },
  {
    title: "Differentially private low-dimensional synthetic data from high-dimensional datasets",
    url: "https://arxiv.org/abs/2305.17148",
    authors: ["Thomas Strohmer", "Roman Vershynin", "Yizhe Zhu"],
    citations: [
      {
        venue: "Information and Inference: A Journal of the IMA",
        details: "14(1): iaae034",
        year: 2025,
      },
    ],
  },
  {
    title: "Online Differentially Private Synthetic Data Generation",
    url: "https://arxiv.org/abs/2402.08012",
    authors: ["Roman Vershynin", "Yizhe Zhu"],
    citations: [
      {
        venue: "IEEE Transactions on Privacy",
        details: "1: 19–30",
        year: 2024,
      },
    ],
  },
  {
    title: "Strong quantum nonlocality and unextendibility without entanglement in N-partite systems with odd N",
    url: "https://arxiv.org/abs/2203.14503",
    authors: ["Fei Shi", "Xiande Zhang"],
    citations: [
      {
        venue: "Quantum",
        details: "8: 1349",
        year: 2024,
      },
    ],
  },
  {
    title: "Algorithmically Effective Differentially Private Synthetic Data",
    url: "https://arxiv.org/abs/2302.05552",
    authors: ["Roman Vershynin", "Yizhe Zhu"],
    citations: [
      {
        venue: "Conference on Learning Theory (COLT)",
        details: "PMLR 195:3941–3968",
        year: 2023,
        links: [
          {
            label: "conference proceedings",
            url: "https://proceedings.mlr.press/v195/he23a.html",
          },
        ],
      },
    ],
  },
];

const preprintsAndManuscripts = [
  {
    title: "Perturbation bounds for low-rank matrix approximation algorithms",
    authors: [
      "Alberto Bucci",
      "Christopher Musco",
      "Swati Padmanabhan",
      "David Persson",
      "Arvind Saibaba",
    ],
    citations: [
      { text: "In preparation, expected to be posted in November 2026." },
    ],
  },
  {
    title: "Differentially Private Synthetic Data via Generalized Moment Matching",
    url: "https://arxiv.org/abs/2610.30196",
    authors: ["Rundong Ding", "Yizhe Zhu"],
    citations: [
      {
        prefix: "Submitted to",
        venue: "International Conference on Algorithmic Learning Theory",
        year: 2027,
      },
    ],
  },
  {
    title: "Concentration of bounded sparse chaoses and sparse Khatri-Rao embeddings",
    url: "https://arxiv.org/abs/2609.28875",
    authors: ["Guozheng Dai", "Ke Wang", "Yizhe Zhu"],
    citations: [
      {
        prefix: "Submitted to",
        venue: "International Conference on Algorithmic Learning Theory",
        year: 2027,
      },
    ],
  },
  {
    title: "Intrinsic-Dimensional Wasserstein Guarantees for Private Synthetic Measures",
    url: "https://arxiv.org/abs/2609.17624",
    citations: [
      {
        prefix: "Submitted to",
        venue: "Information and Inference: A Journal of the IMA",
        year: 2026,
      },
    ],
  },
  {
    title: "A Note on the Improved Sparse Hanson-Wright Inequalities",
    url: "https://arxiv.org/abs/2505.20799",
    authors: ["Guozheng Dai", "Ke Wang", "Yizhe Zhu"],
    citations: [
      {
        prefix: "Submitted to",
        venue: "Latin American Journal of Probability and Mathematical Statistics",
        year: 2025,
      },
    ],
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

  if (citation.text) {
    fragment.append(citation.text);
    return fragment;
  }

  if (citation.prefix) fragment.append(`${citation.prefix} `);

  const venue = document.createElement("em");
  venue.textContent = citation.venue;
  fragment.append(venue);

  const details = [citation.details, citation.year].filter(Boolean);
  if (details.length) fragment.append(`, ${details.join(", ")}`);
  fragment.append(".");

  return fragment;
}

function renderPublicationList(selector, publications) {
  const list = document.querySelector(selector);
  const items = document.createDocumentFragment();

  for (const publication of publications) {
    const item = document.createElement("li");
    item.append(publicationTitle(publication));

    if (publication.authors?.length) {
      item.append(` with ${formatNames(publication.authors)}.`);
    }

    for (const citation of publication.citations) {
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

renderPublicationList("#published-list", publishedPapers);
renderPublicationList("#preprint-list", preprintsAndManuscripts);

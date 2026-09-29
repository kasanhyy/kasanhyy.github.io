/*
 * Travel data
 * -----------
 * Add new entries at the top of this array. The renderer joins all defined
 * fields with commas, so `organization` may be omitted when it is not needed.
 */
const travelEvents = [
  {
    date: "Jul 13–17, 2026",
    event: "Fairness and Foundations in Machine Learning Workshop",
    organization: "American Institute of Mathematics",
    location: "Pasadena, CA",
  },
  {
    date: "Jun 16–27, 2026",
    event: "Random Matrix Theory Summer School",
    organization: "University of Michigan",
    location: "Ann Arbor, MI",
  },
  {
    date: "Jan–May, 2026",
    event: "Stochastic and Randomized Algorithms in Scientific Computing: Foundations and Applications",
    organization: "ICERM",
    location: "Providence, RI",
  },
  {
    date: "Dec 8–12, 2025",
    event: "Desert Discrete Math Workshop III",
    organization: "Anza-Borrego Desert Research Center of UCI",
    location: "Borrego Springs, CA",
  },
  {
    date: "Sep 8–12, 2025",
    event: "Random Matrix Theory Summer School",
    location: "Kyoto, Japan",
  },
  {
    date: "Apr 20–26, 2025",
    event: "Desert Discrete Math Workshop II",
    organization: "Anza-Borrego Desert Research Center of UCI",
    location: "Borrego Springs, CA",
  },
  {
    date: "Oct 26–27, 2024",
    event: "AMS Western Sectional Meeting",
    organization: "University of California",
    location: "Riverside, CA",
  },
  {
    date: "Aug 6–15, 2024",
    event: "Princeton Machine Learning Theory Summer School",
    organization: "Princeton University",
    location: "Princeton, NJ",
  },
  {
    date: "Jun 17–28, 2024",
    event: "Random Matrix Theory Summer School",
    organization: "University of Michigan",
    location: "Ann Arbor, MI",
  },
  {
    date: "May 20–22, 2024",
    event: "Random Matrices and Applications Workshop",
    organization: "ICERM",
    location: "Providence, RI",
  },
  {
    date: "Apr 27, 2024",
    event: "Southern California Applied Mathematics Symposium",
    organization: "University of California",
    location: "San Diego, CA",
  },
  {
    date: "Feb 25–28, 2024",
    event: "The 35th International Conference on Algorithmic Learning Theory (ALT 2024)",
    location: "San Diego, CA",
  },
  {
    date: "Feb 18–23, 2024",
    event: "Information Theory and Applications Workshop (ITA 2024)",
    location: "San Diego, CA",
  },
  {
    date: "Jan 21–27, 2024",
    event: "Desert Discrete Math Workshop",
    organization: "Anza-Borrego Desert Research Center of UCI",
    location: "Borrego Springs, CA",
  },
  {
    date: "Jan 3–6, 2024",
    event: "Joint Mathematics Meeting",
    location: "San Francisco, CA",
  },
  {
    date: "Jul 12–15, 2023",
    event: "36th Annual Conference on Learning Theory (COLT 2023)",
    location: "Bangalore, India",
  },
  {
    date: "Jun 26–30, 2023",
    event: "Princeton Machine Learning Theory Summer School",
    organization: "Princeton University",
    location: "Princeton, NJ",
  },
  {
    date: "May 22–26, 2023",
    event: "Summer School on Random Matrix Theory and Its Applications",
    organization: "the Ohio State University",
    location: "Columbus, OH",
  },
  {
    date: "Apr 22, 2023",
    event: "Southern California Applied Mathematics Symposium",
    organization: "University of California",
    location: "Irvine, CA",
  },
  {
    date: "Apr 13–14, 2023",
    event: "UCLA Synthetic Data Workshop",
    location: "Los Angeles, CA",
  },
  {
    date: "Feb 12–17, 2023",
    event: "Information Theory and Applications Workshop (ITA 2023)",
    location: "San Diego, CA",
  },
  {
    date: "Jun 13–24, 2022",
    event: "Random Matrix Theory Summer School",
    organization: "University of Michigan",
    location: "Ann Arbor, MI",
  },
  {
    date: "May 23–27, 2022",
    event: "Workshop in Convexity and High-Dimensional Probability",
    organization: "Georgia Institute of Technology",
    location: "Atlanta, GA",
  },
  {
    date: "Jul 17–Aug 13, 2016",
    event: "Tsinghua Yau's Mathcamp",
    organization: "Tsinghua University",
    location: "Beijing, China",
  },
];

function renderTravelEvents() {
  const list = document.querySelector("#travel-list");
  const items = document.createDocumentFragment();

  for (const travelEvent of travelEvents) {
    const item = document.createElement("li");
    const fields = [
      travelEvent.date,
      travelEvent.event,
      travelEvent.organization,
      travelEvent.location,
    ];

    item.textContent = fields.filter(Boolean).join(", ");
    items.append(item);
  }

  list.replaceChildren(items);
}

renderTravelEvents();

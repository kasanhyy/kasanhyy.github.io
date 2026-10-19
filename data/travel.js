/*
 * Talks and travel data
 * ---------------------
 * Add new entries at the top of the relevant array. The renderers join all
 * defined fields with commas, so optional fields may be omitted.
 */
const talkEvents = [
  {
    event: "Computational and Applied Mathematics Seminar, NC State University",
    date: "Sept 2026",
  },
  {
    event: "Fairness and Foundations in Machine Learning Workshop, AIM, California Institute of Technology",
    date: "Jul 2026",
    videoUrl: "https://vimeo.com/1235203028",
  },
  {
    event: "Probability Seminar, Fields Institute, University of Toronto",
    date: "May 2026",
  },
  {
    event: "Probability Seminar, Brown University",
    date: "Apr 2026",
  },
  {
    event: "ICERM Graduate Seminar, ICERM, Brown University",
    date: "Feb 2026",
  },
  {
    event: "Probability Seminar, University of California, San Diego",
    date: "Jan 2025",
  },
  {
    event: "Joint Mathematics Meetings, Seattle, WA",
    date: "Jan 2025",
  },
  {
    event: "Probability Seminar, University of Southern California",
    date: "Aug 2024",
  },
  {
    event: "Group Seminar of Prof. Deanna Needell, University of California, Los Angeles",
    date: "May 2024",
  },
  {
    event: "Southern California Applied Mathematics Symposium",
    date: "Apr 2024",
  },
  {
    event: "Probability Seminar, University of Washington",
    date: "Apr 2024",
  },
  {
    event: "Joint Mathematics Meetings, San Francisco, CA",
    date: "Jan 2024",
  },
  {
    event: "Conference on Learning Theory",
    date: "Jul 2023",
  },
  {
    event: "Southern California Applied Mathematics Symposium",
    date: "Apr 2023",
  },
];

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
    date: "Jul 14–25, 2025",
    event: "International Congress of Basic Science",
    location: "Beijing, China",
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

function createDatedItem(details, date, videoUrl) {
  const item = document.createElement("li");
  const entry = document.createElement("span");
  const detailsElement = document.createElement("span");
  const dateElement = document.createElement("span");

  entry.className = "dated-entry";
  detailsElement.className = "event-details";
  dateElement.className = "event-date";
  detailsElement.textContent = details;
  dateElement.textContent = date;

  if (videoUrl) {
    const videoLink = document.createElement("a");
    videoLink.href = videoUrl;
    videoLink.target = "_blank";
    videoLink.rel = "noreferrer";
    videoLink.textContent = videoUrl;
    detailsElement.append(
      document.createElement("br"),
      "Video available: ",
      videoLink,
    );
  }

  entry.append(detailsElement, dateElement);
  item.append(entry);
  return item;
}

function renderTalkEvents() {
  const list = document.querySelector("#talk-list");
  const items = document.createDocumentFragment();

  for (const talkEvent of talkEvents) {
    items.append(
      createDatedItem(talkEvent.event, talkEvent.date, talkEvent.videoUrl),
    );
  }

  list.replaceChildren(items);
}

function renderTravelEvents() {
  const list = document.querySelector("#travel-list");
  const items = document.createDocumentFragment();

  for (const travelEvent of travelEvents) {
    const fields = [
      travelEvent.event,
      travelEvent.organization,
      travelEvent.location,
    ];

    items.append(
      createDatedItem(fields.filter(Boolean).join(", "), travelEvent.date),
    );
  }

  list.replaceChildren(items);
}

renderTalkEvents();
renderTravelEvents();

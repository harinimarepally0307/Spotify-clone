// ================= Podcast data (placeholders - replace with your own) =================
const podcasts = [
  { title: "The Daily Tech",     tags: ["technology", "news", "daily"],          img: "./assest/card1img.jpeg", info: "Top tech stories in 10 minutes." },
  { title: "Startup Stories",    tags: ["business", "startup", "interviews"],    img: "./assest/card2img.jpeg", info: "Founders share how they began." },
  { title: "Code Chai",          tags: ["technology", "coding", "career"],       img: "./assest/card3img.jpeg", info: "Conversations about learning to code." },
  { title: "Mind Matters",       tags: ["health", "wellness", "mindfulness"],    img: "./assest/card4img.jpeg", info: "Simple habits for a calmer mind." },
  { title: "True Crime Tonight", tags: ["crime", "mystery", "storytelling"],     img: "./assest/card5img.jpeg", info: "Unsolved cases, told well." },
  { title: "Laugh Track",        tags: ["comedy", "entertainment"],              img: "./assest/card6img.jpeg", info: "Stand-up and funny chats." },
  { title: "History Unfolded",   tags: ["history", "education", "storytelling"], img: "./assest/card1img.jpeg", info: "Big events, small details." },
  { title: "Music Behind Songs", tags: ["music", "interviews", "entertainment"], img: "./assest/card2img.jpeg", info: "Artists talk about their songs." }
];

// ================= Elements =================
const searchInput = document.getElementById("podcast-search");
const clearBtn    = document.getElementById("clear-search");
const resultsBox  = document.getElementById("podcast-results");
const noResults   = document.getElementById("no-results");
const resultCount = document.getElementById("result-count");
const tagBox      = document.getElementById("tag-filters");
const searchNav   = document.getElementById("nav-search");

let activeTag = null; // currently selected tag chip

// ================= Rendering =================
function renderCards(list) {
  resultsBox.innerHTML = "";

  list.forEach(p => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${p.img}" class="card-img" alt="${p.title}">
      <p class="card-title">${p.title}</p>
      <p class="card-info">${p.info}</p>
      <p class="card-tags">${p.tags.map(t => "#" + t).join(" ")}</p>
    `;
    resultsBox.appendChild(card);
  });

  noResults.style.display = list.length === 0 ? "block" : "none";
  resultCount.textContent = `${list.length} podcast${list.length === 1 ? "" : "s"} found`;
}

function renderTagChips() {
  const allTags = [...new Set(podcasts.flatMap(p => p.tags))].sort();
  tagBox.innerHTML = "";

  allTags.forEach(tag => {
    const chip = document.createElement("button");
    chip.className = "tag-chip";
    chip.textContent = tag;
    chip.dataset.tag = tag;
    chip.addEventListener("click", () => {
      activeTag = (activeTag === tag) ? null : tag; // click again to unselect
      updateChipStyles();
      applyFilters();
    });
    tagBox.appendChild(chip);
  });
}

function updateChipStyles() {
  document.querySelectorAll(".tag-chip").forEach(chip => {
    chip.classList.toggle("active", chip.dataset.tag === activeTag);
  });
}

// ================= Filtering logic =================
function applyFilters() {
  const query = searchInput.value.trim().toLowerCase();
  const terms = query.split(/\s+/).filter(Boolean);

  const filtered = podcasts.filter(p => {
    const title = p.title.toLowerCase();

    // every typed word must match the title or at least one tag
    const matchesSearch = terms.every(term =>
      title.includes(term) || p.tags.some(tag => tag.includes(term))
    );

    // the selected chip must be one of the podcast's tags
    const matchesTag = !activeTag || p.tags.includes(activeTag);

    return matchesSearch && matchesTag;
  });

  renderCards(filtered);
  clearBtn.style.display = query ? "block" : "none";
}

// ================= Events =================
searchInput.addEventListener("input", applyFilters);

clearBtn.addEventListener("click", () => {
  searchInput.value = "";
  activeTag = null;
  updateChipStyles();
  applyFilters();
  searchInput.focus();
});

// sidebar "Search" option focuses the search box
if (searchNav) {
  searchNav.addEventListener("click", e => {
    e.preventDefault();
    searchInput.focus();
  });
}

// press "/" anywhere to jump to search
document.addEventListener("keydown", e => {
  if (e.key === "/" && document.activeElement !== searchInput) {
    e.preventDefault();
    searchInput.focus();
  }
});

// ================= Init =================
renderTagChips();
applyFilters();
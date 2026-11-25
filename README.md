# Spotify Clone

A frontend project inspired by Spotify's web player, built to practise creating an interactive interface with HTML, CSS and JavaScript. It focuses on music discovery, helping users find content easily instead of scrolling through long lists.

## Features

- **Podcast search:** type in the search bar to filter podcasts by title or tags. Each word you type must match a title or a tag, and only the matching results are shown.
- **Tag filters:** click a tag chip to narrow the results, and click it again to remove the filter.
- **Live feedback:** the page shows a result count and a "No podcasts match your search" message.
- **Keyboard shortcut:** press `/` anywhere on the page to jump to the search box.
- **Spotify-style layout:** sidebar with library, sticky top bar, content cards, and a bottom music player bar. The layout is responsive for tablet and mobile screens.

## AI Concepts (Design Only)

Two UI concepts are included as static design mockups. They are **not implemented** and are planned for future integration with an AI API:

- **AI Song Explainer:** would explain a song's meaning, storyline and hidden references.
- **AI Talent Finder:** would boost visibility for underrated artists.

## Tech Stack

- HTML
- CSS
- JavaScript
- Font Awesome (icons) and Google Fonts (Montserrat)

## Project Structure


spotify-clone/
├── 1_index.html     # page structure
├── 1_style.css      # styling and layout
├── script.js        # podcast search and tag filtering
└── assest/          # images and icons


## How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/harinimarepally0307/spotify-clone2.git
   ```
2. Open the folder and double-click `1_index.html` to open it in your browser.
3. Alternatively, use the **Live Server** extension in VS Code.

An internet connection is needed for the icons and fonts to load.

## What I Learned

- Handling events in JavaScript (`input` and `click` listeners)
- Writing filtering logic with `filter`, `every` and `some`
- Generating page content dynamically from data
- Designing features from the user's point of view

## Limitations

- The music player controls (play, next, progress bar, volume) are a visual layout only and have no playback yet.
- The podcast data in `script.js` is placeholder content.

## Author

**Harini Marepally**
GitHub: [@harinimarepally0307](https://github.com/harinimarepally0307)# Spotify-clone

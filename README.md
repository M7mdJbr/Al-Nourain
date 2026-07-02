<div align="center">
  <img src="https://raw.githubusercontent.com/M7mdJbr/Al-Nourain/main/public/favicon.png" alt="Al-Nourain Logo" width="100"/>
  <h1>النورين &mdash; Al-Nourain</h1>
  <p><strong>القرآن والسنة &bull; The Quran and Sunnah</strong></p>
  <p>A bilingual (Arabic/English) Islamic web application for reading and listening to the Quran, browsing hadith, and streaming Islamic radio.</p>
  <p>
    <a href="https://al-nourain.vercel.app/#/"><strong>Live Demo &raquo;</strong></a>
  </p>
  <br/>
</div>

---

## Features

- **Quran Audio Recitations** &mdash; Browse and search over 100+ reciters, select a surah, and listen with a full-featured audio player.
- **Quran Text Reader** &mdash; Read all 114 surahs verse-by-verse with authentic Arabic script and proper Quranic fonts.
- **Hadith Browser** &mdash; Browse major hadith books with Arabic text, English translation, and pagination.
- **Islamic Radio** &mdash; Stream live Islamic radio stations from around the world.
- **Dark Mode** &mdash; Toggle between light and dark themes (persisted to localStorage).
- **Responsive Design** &mdash; Fully responsive with mobile hamburger menu and adaptive grid layouts.
- **Arabic-First UI** &mdash; RTL layout with custom Quranic fonts optimized for Arabic rendering.

## Built With

| Technology | Purpose |
|---|---|
| [React 19](https://react.dev/) | UI framework |
| [Vite 8](https://vitejs.dev/) | Build tool & dev server |
| [Tailwind CSS 4](https://tailwindcss.com/) | Utility-first styling |
| [React Router v7](https://reactrouter.com/) | Client-side routing (HashRouter) |
| [react-h5-audio-player](https://github.com/lhz516/react-h5-audio-player) | Audio playback |
| [Font Awesome 6](https://fontawesome.com/) | Icons |
| [gh-pages](https://github.com/tschaub/gh-pages) | Deployment |

## Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
git clone https://github.com/M7mdJbr/Al-Nourain.git
cd Al-Nourain
npm install
```

### Development

Start the dev server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint |
| `npm run deploy` | Build & deploy to GitHub Pages |

## Project Structure

```
Al-Nourain/
  index.html                  # Entry HTML
  vite.config.js              # Vite configuration
  eslint.config.js            # ESLint flat config
  public/
    favicon.png               # Site favicon
    _redirects                # Netlify SPA redirect rule
    fonts/
      HafsSmart.woff          # Quranic Arabic font
  src/
    main.jsx                  # App entry with HashRouter
    App.jsx                   # Route definitions
    index.css                 # Global styles & Tailwind
    context/
      ThemeContext.jsx         # Dark/Light theme provider
    components/
      Navbar.jsx              # Responsive navigation bar
      Footer.jsx              # Page footer
      ThemeToggle.jsx         # Dark mode toggle button
      SurahDetails.jsx        # Verse-by-verse surah reader
    pages/
      Home.jsx                # Landing page with live radio
      Quran.jsx               # Reciter & surah selection
      AudioPlayerPage.jsx     # Full audio player
      QuranText.jsx           # Surah list for reading
      Sunnah.jsx              # Hadith books browser
      Radio.jsx               # Islamic radio stations
```

## APIs

| API | Usage |
|---|---|
| [mp3quran.net](https://mp3quran.net/) | Reciters list & audio files |
| [alquran.cloud](https://alquran.cloud/) | Surah list & verse text |
| [hadithapi.com](https://hadithapi.com/) | Hadith books & hadiths (API key required) |

## Deployment

### GitHub Pages

The project is pre-configured for GitHub Pages deployment:

```bash
npm run deploy
```

Make sure to set the `homepage` field in `package.json` to your GitHub Pages URL.

### Netlify

The `public/_redirects` file handles SPA routing for Netlify. Simply connect your repo to Netlify with:

- Build command: `npm run build`
- Publish directory: `dist`

## License

Distributed under the MIT License. See `LICENSE` for more information.

---

<div align="center">
  Made with ❤️ for the Muslim community
</div>

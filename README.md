<div align="center">

<img src="public/logo.png" width="130" alt="Jayant Olhyan Neon JO Logo" style="border-radius: 28px; box-shadow: 0 0 45px rgba(0, 255, 65, 0.45);" />

# 🖥️ Jayant Olhyan | Portfolio OS

> An interactive web-based macOS Sequoia desktop and Zsh terminal developer portfolio.

[![Live Demo](https://img.shields.io/badge/🚀_LIVE_PORTAL-jayant--olhyan--portfolio--2.netlify.app-00FF41?style=for-the-badge&logo=netlify&logoColor=black)](https://jayant-olhyan-portfolio-2.netlify.app/)
[![React 19](https://img.shields.io/badge/React-v19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite 8](https://img.shields.io/badge/Vite-v8.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4.2-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

</div>

---

## 📖 Overview

**Portfolio OS** is a highly interactive, client-side web application built to simulate a macOS Sequoia desktop environment and Zsh terminal. It serves as a developer portfolio for Jayant Olhyan, showcasing projects, skills, and hackathon achievements in a gamified CLI format.

## 🎯 Why This Project Exists

Traditional static portfolios often lack engagement. This project replaces a standard scrolling website with an immersive desktop environment to demonstrate frontend engineering capabilities, specifically complex state management, physics-based animations, and responsive UI design without sacrificing performance.

## ✨ Features

- **macOS Window Management:** Draggable, resizable, minimizable, and maximizable terminal windows with traffic light controls.
- **Interactive Zsh CLI:** Command executor with autocomplete, history (`↑`/`↓`), and instant routing.
- **Physics-Based Dock:** 120 FPS spring-physics magnification dock using Framer Motion.
- **3D Spotlight Cards:** Mouse-following radial glow overlays using CSS coordinates.
- **Dynamic Theming:** Switch between 5 visual modes (Cyber Mountains, Retro CRT, etc.).
- **PWA & Offline Support:** Service worker implementation for offline caching and installation.
- **Easter Eggs:** Built-in `/matrix` digital rain and `/confetti` particle animations.

## 🏗️ Architecture

```text
User
 ↓
Web Browser
 ↓
React Router (Routing)
 ↓
MainLayout.jsx (Desktop Environment Wrapper)
 ↓
useTerminal.js (Terminal State Machine)
 ↓
Component Sections (About, Projects, Hackathons, etc.)
```

## 🛠️ Tech Stack

### Frontend
- **Framework:** React 19.2
- **Build Tool:** Vite 8.0
- **Styling:** Tailwind CSS 4.2
- **Animations:** Framer Motion 12.38
- **Icons:** Lucide React & Custom SVG Sprites
- **Routing:** React Router v7

*(Note: This is a purely client-side static application. There is no backend server or database.)*

## 📁 Repository Structure

```text
.
├── public/                 # Static assets, PWA manifest, and Service Worker
│   ├── sw.js               # Service Worker for offline caching
│   ├── icons.svg           # Vector badge sprite
│   └── ...
├── src/
│   ├── components/
│   │   ├── sections/       # Interactive terminal views (About, Work, Skills, etc.)
│   │   ├── skeletons/      # Loading skeletons
│   │   └── ui/             # Reusable UI elements (MacMenuBar, MacDock, Wallpaper)
│   ├── data/
│   │   ├── commands.js     # CLI command definitions
│   │   └── portfolioData.js# Static JSON data for projects, skills, etc.
│   ├── hooks/
│   │   ├── useOnlineStatus.js
│   │   └── useTerminal.js  # Core terminal logic and state machine
│   ├── layouts/
│   │   └── MainLayout.jsx  # Primary desktop UI wrapper
│   ├── App.jsx             # React root & Router configuration
│   └── main.jsx            # Entry point
├── eslint.config.js        # ESLint flat config
├── package.json            # Dependencies and scripts
└── vite.config.js          # Vite configuration
```

## ⚙️ Prerequisites

- **Node.js**: v18.0.0 or higher
- **npm** (or yarn/pnpm)

## 🚀 Installation & Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/JayantOlhyan/Jayant-Olyan-Portfolio-2-.git
   cd Jayant-Olyan-Portfolio-2-
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   *The application will be available at `http://localhost:5173/`.*

4. **Linting and Building:**
   ```bash
   npm run lint     # Run ESLint
   npm run build    # Build for production
   npm run preview  # Preview the production build
   ```

## 🔐 Environment Variables

This project does not require any environment variables to run locally. All data is statically bundled.

## 💾 Database & API

**Not applicable.** This project operates entirely on the client side using statically defined JSON data (`src/data/portfolioData.js`). It does not connect to a database or external REST APIs.

## 🛡️ Security

As a static frontend application without user input storage or authentication, the primary security measures involve:
- No exposure of sensitive tokens (none are used).
- Basic XSS prevention handled natively by React's rendering engine.

## 🧪 Testing

> **Not yet implemented.** 

Currently, there are no automated tests (unit, integration, or E2E) configured in the repository.

## ⚡ Performance

- **Code Splitting:** Configured in `vite.config.js` to separate vendor chunks (`vendor-react`, `vendor-motion`, `vendor-icons`).
- **Offline Caching:** Utilizes a Service Worker (`public/sw.js`) to cache the application shell.
- **Animations:** Hardware-accelerated animations using Framer Motion to maintain high frame rates.

## 🌍 Deployment

The project is configured for deployment on Netlify, confirmed by the presence of a `netlify.toml` file.

**Build Command:** `npm run build`  
**Publish Directory:** `dist/`

## ⌨️ CLI / Command Reference

Available commands within the terminal UI:

| Command | Purpose |
| ------- | ------- |
| `/about` | Bio, education & background |
| `/work` | Featured projects & live apps |
| `/skills` | Tech stack & AI models |
| `/hackathons` | 25x Hackathon track record |
| `/social` | GitHub, LinkedIn, Twitter & Discord |
| `/contact` | Email, phone & hire info |
| `/ecosystem` | Academic & partner network |
| `/articles` | Technical articles & RAG guides |
| `/testimonials`| Teammate & mentor reviews |
| `/philosophy`| Core engineering principles |
| `/neofetch` | macOS system specs & Apple ASCII |
| `/themes` | Switch visual wallpapers |
| `/matrix` | Matrix digital rain easter egg |
| `/confetti` | Trigger celebration stream |
| `/clear` | Clear terminal screen buffer |
| `/exit` | Lock terminal / process termination |
| `/help` | List all available commands |

## 🚧 Known Limitations

- **No Backend:** All content is hardcoded; updating content requires a code deployment.
- **No Automated Tests:** The repository currently lacks a testing suite.
- **Mobile Experience:** While responsive, complex desktop paradigms (like draggable windows) can be clunky on touch interfaces.
- **Accessibility (a11y):** The custom terminal input and draggable elements may not be fully optimized for screen readers or keyboard-only navigation.

## 🗺️ Roadmap

### Completed
- Core macOS UI and Terminal emulation
- Routing and state management
- Static content integration
- PWA setup

### Planned
- Automated testing (Vitest/Playwright)
- Improved mobile touch interactions
- Accessibility (a11y) audits and improvements
- Dynamic content fetching (CMS integration)

## 🤝 Contributing

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -m "Add my feature"`
4. Push to the branch: `git push origin feature/my-feature`
5. Open a Pull Request.

## 🤖 AI / Developer Orientation

If you are an AI coding agent or a new developer modifying this codebase:

- **State Management:** The core terminal logic, command history, and theme state are managed in `src/hooks/useTerminal.js`. Modify this file to add new commands or change routing logic.
- **UI Architecture:** `src/layouts/MainLayout.jsx` is the master wrapper containing the Dock, MenuBar, and the Terminal Window. 
- **Content:** All text, projects, and skills are statically defined in components inside `src/components/sections/` and `src/data/`.
- **Styling:** The project uses Tailwind CSS v4. Complex animations use `framer-motion`.

## 📜 License

This project is licensed under the **MIT License**.

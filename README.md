# Hero Section

## Setup & Run

Make sure you have **Node.js 18+** installed. Then:

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
```

Then open http://localhost:5173 in your browser.

## Project Structure

```
hero-project/
├── index.html              # Entry HTML (loads Inter font)
├── package.json            # Dependencies
├── vite.config.js          # Vite + React plugin
├── tailwind.config.js      # Tailwind config
├── postcss.config.js       # PostCSS config
└── src/
    ├── main.jsx            # React root
    ├── index.css           # Tailwind directives + reset
    └── HeroSection.jsx     # The hero component
```

## Dependencies

- React 18
- Framer Motion
- Lucide React
- Tailwind CSS 3
- Vite (dev server + bundler)

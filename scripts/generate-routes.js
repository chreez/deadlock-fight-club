import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Extract script and link tags from built index.html
function extractAssetTags(indexHtmlPath) {
  const html = fs.readFileSync(indexHtmlPath, 'utf-8');

  // Extract script tag: <script type="module" crossorigin src="/assets/index-[hash].js"></script>
  const scriptMatch = html.match(/<script[^>]*src="\/assets\/[^"]+\.js"[^>]*><\/script>/);
  const scriptTag = scriptMatch ? scriptMatch[0] : '<script type="module" src="/src/main.tsx"></script>';

  // Extract CSS link: <link rel="stylesheet" crossorigin href="/assets/index-[hash].css">
  const cssMatch = html.match(/<link[^>]*href="\/assets\/[^"]+\.css"[^>]*>/);
  const cssTag = cssMatch ? cssMatch[0] : '';

  return { scriptTag, cssTag };
}

// Route configurations with meta tags
const routes = {
  'december-patch': {
    title: 'December Patch Breakdown - Deadlock Fight Club',
    description: 'Full breakdown of Deadlock\'s last patch of 2024. Patron defense buffs, hero nerfs, movement reverts, and economy changes explained.',
    url: 'https://deadlock-fights.netlify.app/december-patch',
    image: 'https://deadlock-fights.netlify.app/assets/heroes/bebop.png'
  },
  'laning-guide': {
    title: '6 Laning Mistakes You\'re Making Every Game - Deadlock Fight Club',
    description: 'Stop losing lanes to "bad luck." Learn the 6 biggest laning mistakes players make every match, from ignoring matchups to wasting pressure and buying wrong items.',
    url: 'https://deadlock-fights.netlify.app/laning-guide',
    image: 'https://deadlock-fights.netlify.app/assets/heroes/bebop.png'
  },
  'macro-guide': {
    title: 'Advanced Macro Guide - Deadlock Fight Club',
    description: 'Their jungle. Your souls. Master lane splitting strategies that starve enemies of resources. Learn when to use 2-2-2, 1-3-2, 1-1-4, and extreme comeback plays when behind.',
    url: 'https://deadlock-fights.netlify.app/macro-guide',
    image: 'https://img.youtube.com/vi/1r9tIZ3IYYk/maxresdefault.jpg'
  },
  'counter-guide': {
    title: 'Counter-Building Guide - Deadlock Fight Club',
    description: 'Stop memorizing 1v1 matchups. Learn which items counter ENTIRE team compositions at once. Build smarter with universal counters that work against most enemies you face.',
    url: 'https://deadlock-fights.netlify.app/counter-guide',
    image: 'https://deadlock-fights.netlify.app/assets/heroes/bebop.png'
  },
  'midgame-guide': {
    title: 'Midgame Guide - Deadlock Fight Club',
    description: 'Lane phase ends. Towers fall. Chaos begins. Master the 5-minute combat cycle, understand power spikes, and learn when Deadlock stops being a shooter and becomes a MOBA.',
    url: 'https://deadlock-fights.netlify.app/midgame-guide',
    image: 'https://deadlock-fights.netlify.app/assets/heroes/bebop.png'
  },
  'counter-cheatsheet': {
    title: 'Counter Cheatsheet - Deadlock Fight Club',
    description: 'Instant hero counter lookup. Type any hero name, get the exact items that shut them down. No fluff, just the counters you need mid-match.',
    url: 'https://deadlock-fights.netlify.app/counter-cheatsheet',
    image: 'https://deadlock-fights.netlify.app/assets/heroes/bebop.png'
  },
  'guides': {
    title: 'Strategy Guides - Deadlock Fight Club',
    description: 'In-depth Deadlock strategy guides: counter-building, macro play, midgame transitions, and quick counter lookups. Skip the fluff, learn what actually wins games.',
    url: 'https://deadlock-fights.netlify.app/guides',
    image: 'https://deadlock-fights.netlify.app/assets/heroes/bebop.png'
  }
};

// HTML template generator
function generateHTML(route, config, scriptTag, cssTag) {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="${config.description}" />

    <!-- Open Graph / Discord -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${config.url}" />
    <meta property="og:title" content="${config.title}" />
    <meta property="og:description" content="${config.description}" />
    <meta property="og:image" content="${config.image}" />

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="${config.url}" />
    <meta name="twitter:title" content="${config.title}" />
    <meta name="twitter:description" content="${config.description}" />
    <meta name="twitter:image" content="${config.image}" />

    <link rel="icon" type="image/png" href="/assets/heroes/bebop.png" />
    <title>${config.title}</title>
    ${scriptTag}
    ${cssTag}
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
`;
}

// Generate HTML files for each route
const distDir = path.join(__dirname, '..', 'dist');
const indexHtmlPath = path.join(distDir, 'index.html');

console.log('🚀 Generating static HTML files for routes...\n');

// Extract asset tags from built index.html
const { scriptTag, cssTag } = extractAssetTags(indexHtmlPath);
console.log('📦 Extracted asset references from build\n');

Object.entries(routes).forEach(([route, config]) => {
  const routeDir = path.join(distDir, route);
  const htmlPath = path.join(routeDir, 'index.html');

  // Create directory if it doesn't exist
  if (!fs.existsSync(routeDir)) {
    fs.mkdirSync(routeDir, { recursive: true });
  }

  // Write HTML file with correct asset references
  fs.writeFileSync(htmlPath, generateHTML(route, config, scriptTag, cssTag));
  console.log(`✅ Generated /${route}/index.html`);
});

console.log('\n✨ Route generation complete!\n');

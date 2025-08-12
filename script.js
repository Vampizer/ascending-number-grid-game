/* styles.css */

/* --- Base Styles (Simulating Tailwind Utilities) --- */
/* These provide basic styling without the full Tailwind CDN */
*, ::before, ::after {
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: #e5e7eb; /* light-gray-200 */
}

::before, ::after {
  --tw-content: '';
}

html {
  line-height: 1.5;
  -webkit-text-size-adjust: 100%;
  -moz-tab-size: 4;
  tab-size: 4;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-feature-settings: normal;
}

body {
  margin: 0;
  line-height: inherit;
}

hr {
  height: 0;
  color: inherit;
  border-top-width: 1px;
}

abbr:where([title]) {
  text-decoration: underline dotted;
}

h1, h2, h3, h4, h5, h6 {
  font-size: inherit;
  font-weight: inherit;
}

a {
  color: inherit;
  text-decoration: inherit;
}

b, strong {
  font-weight: bolder;
}

code, kbd, samp, pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-size: 1em;
}

small {
  font-size: 80%;
}

sub, sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

table {
  text-indent: 0;
  border-color: inherit;
  border-collapse: collapse;
}

button, input, optgroup, select, textarea {
  font-family: inherit;
  font-size: 100%;
  font-weight: inherit;
  line-height: inherit;
  color: inherit;
  margin: 0;
  padding: 0;
}

button, select {
  text-transform: none;
}

button, [type='button'], [type='reset'], [type='submit'] {
  -webkit-appearance: button;
  background-color: transparent;
  background-image: none;
}

:-moz-focusring {
  outline: auto;
}

:-moz-ui-invalid {
  box-shadow: none;
}

progress {
  vertical-align: baseline;
}

::-webkit-inner-spin-button, ::-webkit-outer-spin-button {
  height: auto;
}

[type='search'] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}

::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}

summary {
  display: list-item;
}

blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol, ul, menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

textarea {
  resize: vertical;
}

input::placeholder, textarea::placeholder {
  opacity: 1;
  color: #9ca3af; /* gray-400 */
}

button, [role="button"] {
  cursor: pointer;
}

:disabled {
  cursor: default;
}

img, svg, video, canvas, audio, iframe, embed, object {
  display: block;
  vertical-align: middle;
}

img, video {
  max-width: 100%;
  height: auto;
}

[hidden] {
  display: none;
}

/* --- Utility Classes --- */
.flex { display: flex; }
.hidden { display: none; }
.items-center { align-items: center; }
.justify-center { justify-content: center; }
.justify-between { justify-content: space-between; }
.gap-2 { gap: 0.5rem; }
.gap-4 { gap: 1rem; }
.text-center { text-align: center; }
.text-lg { font-size: 1.125rem; line-height: 1.75rem; }
.text-xl { font-size: 1.25rem; line-height: 1.75rem; }
.text-2xl { font-size: 1.5rem; line-height: 2rem; }
.text-4xl { font-size: 2.25rem; line-height: 2.5rem; }
.text-5xl { font-size: 3rem; line-height: 1; }
.font-bold { font-weight: 700; }
.font-extrabold { font-weight: 800; }
.rounded-lg { border-radius: 0.5rem; }
.rounded-xl { border-radius: 0.75rem; }
.rounded-full { border-radius: 9999px; }
.shadow-lg { box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); }
.shadow-xl { box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04); }
.shadow-inner { box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06); }
.p-2 { padding: 0.5rem; }
.p-3 { padding: 0.75rem; }
.p-4 { padding: 1rem; }
.p-6 { padding: 1.5rem; }
.px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
.py-3 { padding-top: 0.75rem; padding-bottom: 0.75rem; }
.pt-4 { padding-top: 1rem; }
.m-0 { margin: 0; }
.mb-4 { margin-bottom: 1rem; }
.mb-6 { margin-bottom: 1.5rem; }
.mt-4 { margin-top: 1rem; }
.mx-auto { margin-left: auto; margin-right: auto; }
.w-auto { width: auto; }
.w-full { width: 100%; }
.h-6 { height: 1.5rem; }
.h-12 { height: 3rem; }
.h-auto { height: auto; }
.min-h-screen { min-height: 100vh; }
.max-w-2xl { max-width: 42rem; }
.max-w-sm { max-width: 24rem; }
.max-w-[600px] { max-width: 600px; }
.aspect-square { aspect-ratio: 1 / 1; }
.object-cover { object-fit: cover; }
.overflow-hidden { overflow: hidden; }
.transition { transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; }
.transition-transform { transition-property: transform; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; }
.transform { transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)); }
.hover\:scale-105:hover { --tw-scale-x: 1.05; --tw-scale-y: 1.05; transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)); }
.hover\:scale-110:hover { --tw-scale-x: 1.1; --tw-scale-y: 1.1; transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)); }
.bg-gray-100 { background-color: #f3f4f6; }
.bg-white { background-color: #ffffff; }
.bg-gradient-to-r { background-image: linear-gradient(to right, var(--tw-gradient-stops)); }
.from-teal-500 { --tw-gradient-from: #0d9488; --tw-gradient-to: #0d948800; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to); }
.to-blue-600 { --tw-gradient-to: #2563eb; }
.text-gray-600 { color: #4b5563; }
.text-gray-800 { color: #1f2937; }
.text-white { color: #ffffff; }
.text-transparent { color: transparent; }
.bg-clip-text { -webkit-background-clip: text; background-clip: text; }
.border { border-width: 1px; }
.border-gray-300 { border-color: #d1d5db; }
.focus\:outline-none:focus { outline: 2px solid transparent; outline-offset: 2px; }
.focus\:ring-2:focus { --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color); --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color); box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000); }
.focus\:ring-blue-500:focus { --tw-ring-opacity: 1; --tw-ring-color: rgb(59 130 246 / var(--tw-ring-opacity)); }
.cursor-pointer { cursor: pointer; }
.cursor-default { cursor: default; }
.user-select-none { user-select: none; }

/* Dark Mode Classes (Tailwind-like) */
.dark .dark\:bg-gray-700 { background-color: #374151; }
.dark .dark\:bg-gray-800 { background-color: #1f2937; }
.dark .dark\:bg-gray-900 { background-color: #111827; }
.dark .dark\:text-gray-100 { color: #f3f4f6; }
.dark .dark\:text-gray-200 { color: #e5e7eb; }
.dark .dark\:text-gray-300 { color: #d1d5db; }
.dark .dark\:border-gray-600 { border-color: #4b5563; }
.dark .from-teal-400 { --tw-gradient-from: #2dd4bf; --tw-gradient-to: #2dd4bf00; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to); }
.dark .to-blue-500 { --tw-gradient-to: #3b82f6; }


/* --- Custom Game Styles --- */
:root {
    --bg-color: #f3f4f6; /* light-gray-100 */
    --text-color: #1f2937; /* gray-800 */
    --cell-bg-color: #e5e7eb; /* light-gray-200 */
    --cell-hover-color: #d1d5db; /* light-gray-300 */
    --grid-bg-color: #ffffff;
    --header-color: #0d9488; /* teal-600 */
}

.dark-mode {
    --bg-color: #111827; /* dark-gray-900 */
    --text-color: #f3f4f6; /* light-gray-100 */
    --cell-bg-color: #374151; /* dark-gray-700 */
    --cell-hover-color: #4b5563; /* dark-gray-600 */
    --grid-bg-color: #1f2937;
    --header-color: #2dd4bf; /* teal-400 */
}

body {
    background-color: var(--bg-color);
    color: var(--text-color);
    transition: background-color 0.3s, color 0.3s;
}

#game-grid {
    display: grid;
    gap: 4px;
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    aspect-ratio: 1 / 1;
    background-color: var(--grid-bg-color);
    border-radius: 1rem;
    padding: 8px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.grid-cell {
    background-color: var(--cell-bg-color);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--text-color);
    border-radius: 0.5rem;
    transition: all 0.1s ease-in-out;
    user-select: none;
    cursor: pointer;
}

.grid-cell:hover:not(.correct) {
    transform: scale(1.05);
    background-color: var(--cell-hover-color);
}

.grid-cell.correct {
    background-color: #10b981; /* green-500 */
    color: white;
    cursor: default;
    transform: scale(1.05);
    box-shadow: 0 0 10px rgba(16, 185, 129, 0.5);
}

.grid-cell.incorrect {
    animation: shake 0.3s ease-in-out;
    background-color: #ef4444; /* red-500 */
    color: white;
}

@keyframes shake {
    0%, 100% { transform: translateX(0); }
    20%, 60% { transform: translateX(-5px); }
    40%, 80% { transform: translateX(5px); }
}

#confetti-canvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
    pointer-events: none;
}

/* Ensure Tailwind classes don't override our custom cell styles */
.grid-cell {
    /* Force Tailwind's flexbox */
    @apply flex items-center justify-center;
}
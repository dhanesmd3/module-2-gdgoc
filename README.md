# Personal Portfolio — React + TypeScript

Continued from Module 1 (static HTML/CSS) — now a React + TypeScript
single-page application with client-side routing, styled with Tailwind,
and backed by a Zustand store.

## Progress

- [x] Project setup with Vite + React + TypeScript
- [x] React Router installed and configured
- [x] 3 pages created: HomePage, ProjectsPage, AboutPage
- [x] Client-side routing (no full page refresh)
- [x] Typed `ProjectCard` component with project data
- [x] Bonus: custom hook with generics (`useLocalStorage<T>`)
- [x] Bonus: TailwindCSS migration
- [x] Bonus: Zustand state management

## Tech
- React 19 + TypeScript
- Vite
- React Router v6
- TailwindCSS
- Zustand

## Getting Started

```bash
npm install
npm run dev
```

## Project Structure

```
src/
  components/
    Navbar.tsx        # typed props (darkMode, onToggleDarkMode)
    Footer.tsx
    ProjectCard.tsx    # typed with the Project interface
  pages/
    HomePage.tsx
    ProjectsPage.tsx   # reads from the Zustand store
    AboutPage.tsx
  hooks/
    useLocalStorage.ts # generic custom hook
  store/
    useProjectsStore.ts # Zustand store for the projects list
  types/
    project.ts          # Project interface (id, title, description, techStack, liveUrl?, githubUrl)
  data/
    projects.ts          # initial project data, typed as Project[]
```

## Bonus 1 — Custom Hook: `useLocalStorage<T>`

A generic hook that syncs any serializable value with `localStorage`:

```ts
function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void]
```

Used in `App.tsx` to persist the dark mode preference:

```ts
const [darkMode, setDarkMode] = useLocalStorage<boolean>('dark-mode', false)
```

Because it's generic, the same hook can be reused for any future feature that
needs persisted state (e.g. a saved draft, a "recently viewed" list) without
writing a new hook each time — only the type parameter `T` changes.

## Bonus 2 — TailwindCSS Migration

All component styling was migrated from a single `styles.css` file (Module 1)
to Tailwind utility classes directly in JSX.

**Reasoning:**
- Utility classes keep styling colocated with the markup, so there's no more
  jumping between a `.tsx` file and a separate `.css` file to see how
  something looks.
- Tailwind's built-in reset (Preflight) replaced our manual
  `* { box-sizing: border-box; margin: 0; padding: 0; }` reset, so that's one
  less thing to maintain by hand.
- The design tokens (colors, fonts) from Module 1 were **kept as CSS custom
  properties** in `index.css` and mapped into `tailwind.config.js`
  (e.g. `primary: 'var(--color-primary)'`). This preserves a single source of
  truth for the palette while still getting Tailwind's utility-class workflow
  — changing a color in one place updates it everywhere.
- Dark mode changed from the Module 1 approach (a hidden checkbox + CSS
  `:has()` selector, pure CSS with no JavaScript) to **Tailwind's `class`
  strategy**: a `dark` class is toggled on `<html>` based on the
  `useLocalStorage` state. This is the more idiomatic approach once Tailwind
  is in the picture, and — as a bonus — it means the dark mode preference now
  **persists across page reloads**, which the pure-CSS version could not do.

## Bonus 3 — Zustand State Management

The projects list moved from a plain static import (`import { projects } from
'../data/projects'`) to a Zustand store (`useProjectsStore`), which exposes
`projects` and an `addProject` action.

**Comparison with plain `useState`:**

| | `useState` in a component | Zustand store |
|---|---|---|
| Where the data lives | Inside one component; must be passed down via props (or lifted up) to be shared | In a single global store, importable from any component directly |
| Sharing across pages | Needs prop drilling or Context if multiple pages need it | `useProjectsStore()` can be called from any page/component with no extra plumbing |
| Boilerplate | Minimal for a single component | Slightly more setup (defining the store), but pays off once more than one component needs the same data |
| Best fit here | Fine if only `ProjectsPage` ever needed the list | Better fit since a future feature (e.g. a "Featured Projects" section on `HomePage`) could read the same store without lifting state through `App.tsx` |

For this small app the difference isn't huge, but Zustand avoids prop drilling
if the projects list needs to be read or modified from more than one page
later on — which is likely as this portfolio grows in future modules.

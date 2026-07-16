# Personal Portfolio — React + TypeScript

Continued from Module 1 (static HTML/CSS) — now converted into a React +
TypeScript single-page application with client-side routing.

## Progress

- [x] Project setup with Vite + React + TypeScript
- [x] React Router installed and configured
- [x] 3 pages created: HomePage, ProjectsPage, AboutPage
- [x] Client-side routing (no full page refresh)
- [x] Typed `ProjectCard` component with project data
- [ ] Bonus: custom hook with generics
- [ ] Bonus: TailwindCSS migration
- [ ] Bonus: Zustand state management

## Tech
- React 19 + TypeScript
- Vite
- React Router v6

## Getting Started

```bash
npm install
npm run dev
```

## Project Structure

```
src/
  components/
    Navbar.tsx
    Footer.tsx
    ProjectCard.tsx   # typed with the Project interface
  pages/
    HomePage.tsx
    ProjectsPage.tsx  # maps over projects data and renders ProjectCard
    AboutPage.tsx
  types/
    project.ts         # Project interface (id, title, description, techStack, liveUrl?, githubUrl)
  data/
    projects.ts         # sample project data, typed as Project[]
```

## Notes
- Dark mode toggle carried over from Module 1, still pure CSS (`:has()`), no
  JavaScript needed for the theme switch.
- Navbar uses `<Link>` from `react-router-dom` instead of `<a>` tags so
  navigating between pages does not trigger a full page reload.
- `ProjectCard` props are typed directly from the `Project` interface
  (`type ProjectCardProps = Project`), so any change to the data shape is
  automatically reflected in the component's type checking — no duplicate
  type definitions to keep in sync.
- `liveUrl` is optional in the interface since not every project has a
  live deployment; the component only renders the "Live Demo" link when
  `liveUrl` is present.

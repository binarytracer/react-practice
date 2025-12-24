# React Essentials

> A practice repo for learning core React concepts, built while completing the [Udemy Course](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)

**🚀 Live Demo:** [react-practice-eosin-sigma.vercel.app](https://react-practice-eosin-sigma.vercel.app/)

## Tech Stack

- **React 18** with TypeScript
- **Vite** — Fast dev server & build tool
- **Vitest** — Unit testing
- **ESLint** — Code linting

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:3000)
npm run dev
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm test` | Run tests once |
| `npm run test:watch` | Run tests in watch mode |
| `npm run lint` | Run ESLint |

## Project Structure

```
src/
├── components/     # React components
├── assets/         # Images and static files
├── data.ts         # Core concepts data
├── main.tsx        # App entry point
├── App.tsx         # Root component
└── App.test.tsx    # Tests
```

## CI/CD

This project uses GitHub Actions for continuous integration:

- **Lint** — Runs ESLint on all TypeScript files
- **Test** — Runs Vitest test suite
- **Build** — Builds production bundle (only after lint & test pass)

Triggered on pushes and pull requests to `main`/`master`.

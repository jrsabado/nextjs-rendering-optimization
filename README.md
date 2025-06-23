# Distance Assessment - Task 1: Optimize a Slow Component

---

## Project Overview

This project is built using Next.js and TypeScript. The goal was to simulate a slow-rendering component and apply modern optimization techniques to improve performance. I created a contact list search application that generates and handles 50,000 random contacts to simulate heavy real-world UI processing.

---

## The Problem (Before Optimization)

- Each time the user typed into the search box, the full list of 50,000 contacts was filtered immediately.
- This triggered expensive filtering and string operations on every keystroke.
- The repeated computation caused noticeable lag while typing.
- Random data generation at the top level led to React hydration mismatch errors because server-side and client-side rendered different datasets.

---

## Debugging & Profiling

Using Chrome DevTools Performance tab:

- I recorded app behavior while typing into the search input.
- The profiling clearly showed long scripting times corresponding to every keystroke.
- Heavy CPU work was caused by repeatedly filtering the large dataset.

---

## Root Cause

- Filtering was executed directly on every input change without throttling or caching.
- Every keystroke triggered full re-filtering of 50,000 items.
- Random data generation happened both on the server and client, leading to inconsistent rendering during hydration.

---

## Optimizations Applied

- **Client-Side Data Generation** — Moved data generation inside a client-only hook to ensure it runs after hydration, resolving hydration mismatch errors.
- **Memoization** — Cached the filtering computation to avoid unnecessary recalculations and ensure filtering only runs when search input changes.
- **Debounced Input Handling** — Delayed filtering while the user is still typing, reducing the number of filtering calls during rapid typing.
- **Component Separation & Design** — Split into reusable components for maintainability, and applied clean responsive design using TailwindCSS.

---

## Profiling After Optimization

- Filtering now runs far less frequently and more efficiently.
- Typing performance is smooth even with 50,000 contacts.
- Hydration issues are fully resolved.

---

## Getting Started

### Installation & Running Locally

1. Install dependencies:

- `npm install`

2. Run the development server:

- `npm run dev`

3. Open your browser and navigate to:

- `http://localhost:3000`

---

## Technologies Used

- Next.js (App Router with TypeScript)
- Faker.js for generating fake data
- Lodash Debounce for optimized input handling
- React Hooks for state management and optimizations
- TailwindCSS for styling

---

## Task 1 Completed

This solution demonstrates:

- Performance bottleneck simulation
- Debugging and profiling using Chrome DevTools
- Application of modern React optimization techniques
- Hydration handling with Next.js App Router
- Clean, scalable, component-based architecture

---

## Potential Future Improvement

- Virtualization using react-window to optimize rendering for even larger datasets.

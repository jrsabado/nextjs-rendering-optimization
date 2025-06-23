# Task 1 - Requirement #2: Visualizing Performance Bottlenecks

---

## Tools Used

- Chrome DevTools — Performance Tab

---

## Recording Setup

- The application was launched locally at `http://localhost:3000`.
- Chrome DevTools Performance tab was opened to profile the app's rendering behavior.

---

## Profiling Before Optimization

- Recording started while actively typing into the search input field.
- Each keystroke triggered filtering across the full dataset of 50,000 contacts.
- The recording timeline showed multiple long scripting blocks (purple sections) corresponding to every input event.
- The scripting blocks indicated significant CPU usage due to repeated filtering operations.

---

## Observations

- The most expensive operations were:
  - Array filtering (`Array.filter`)
  - String manipulation (`String.toLowerCase`)
- The app re-executed the filtering logic on every keystroke without any throttling or memoization, which led to performance degradation and noticeable typing lag.

---

## Profiling After Optimization

- After applying `useMemo` for memoization and `debounce` to delay filtering while typing:
  - The same profiling steps were repeated.
  - Scripting time significantly reduced.
  - Filtering occurred less frequently.
  - Typing responsiveness improved substantially.
- Hydration issues caused by server/client random data mismatch were also fully resolved.

---

## Visual Evidence

The following screenshots have been captured to support the analysis:

- **Before Optimization:**  
  - Long scripting blocks are observed during continuous typing.
  - Total scripting time: approximately **378 ms**.
  - Shows repeated filtering operations with heavy CPU usage on every keystroke.

- **After Optimization:**  
  - Scripting blocks are significantly reduced.
  - Total scripting time: approximately **127 ms**.
  - Filtering occurs less frequently due to memoization and debouncing.
  - Typing responsiveness is noticeably improved.

Screenshots are provided in the `/screenshots/` folder.

---



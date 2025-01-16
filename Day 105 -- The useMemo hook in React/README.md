- The useMemo hook should be used __only when necessary__ to optimize performance in specific scenarios where recalculating values on every render is costly.

- Use the `useMemo` hook __when you have an expensive computation__ or **derived data** that shouldn't be recalculated on every render. Only use it if:
```
    1. The computation is resource-intensive (e.g., filtering, sorting, or complex calculations).
        
    2. You want to avoid unnecessary re-renders by memoizing values passed to child components.

    3. You are creating large objects or arrays that don't need to change on every render.
```
- ## [useMemo Hook Explained](https://chatgpt.com/share/677e3380-3eb0-8011-96a1-e5db2d64b91f)

- ## [Map function explanation](https://chatgpt.com/share/677e33f0-6900-8011-a316-2d675252506b)
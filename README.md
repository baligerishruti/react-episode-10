# react-episode-10
Episode 10: Application Visual improvements styling

- tailwindcss
    - npm i -D tailwindcss @tailwindcss/postcss postcss
    - postcss is a tool for transforming CSS along with javascript
    - add Tailwind through PostCSS instead of `npx tailwindcss init`
        - Tailwind v4 does not expose the old `tailwindcss` init executable

    - advantages
        - apply styling directly in HTML using pre-built classes will help in fast prototyping
        - avoides the overiding css properties
        - it helps to use design theming css class supports
        - it avoids time constraints
        - Tiny Production Bundles: When deployed, Tailwind automatically strips out all unused CSS, resulting in incredibly small, optimized files.
        - if any class is used multiple times in app, only one time renders the code.
        - If tailwindcss intellisense plugin installed in VS code reduces the development time by giving suggestions.
    - disadvantages
        - classes are heavily chained, so hard to read at a glance
        - Steep Learning Curve : initial understanding for writing class names for the beginers.
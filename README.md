# Frontend Example APP

The exercise consists of developing a basic frontend app to fetch users from an API and display them in a grid of cards with a name filter. The filter should display only the card with names including the search.

## UI requirements:
- User must be displayed as a card, with a rounded avatar picture. You may copy designs from the internet (e.g. like dribbble)
- The grid must be responsive (e.g. 1 column on mobile, 2-3 column on tablets, 4+ column on desktop)

You can use a fake user API like this one:
https://jsonplaceholder.typicode.com/users

You may also use a service to generate random pictures:
https://i.pravatar.cc/300?u=some-random-id

## Code requirements:
- It will be tested in latest Chrome only.
- It must be a React app. You can use any tool to create the project (create-react-app, next.js, ...)
- You can use any css solution you want (class based styles, css modules, react style prop, css-in-js). We recommend a css-in-js solution like `styled-components` or `emotion`.
- You should not use a component library (e.g. tailwind UI, KendoUI...), the goal is to design the card from scratch with css
- You can use an icon library if needed. We recommend Heroicons because you can simply paste the icon svg (and manage the `width` and `height` in css to avoid dependency on tailwind).

## What will be evaluated:
- The app should work
- The design of the user card (no alignement issues, margin problems)
- Code organization: even if it's a small project, different responsibilities should be obvious (fetching users, managing a grid, user card design)
- Commit names should be clean (we do not expect 50 commits, but avoid WIP commits in the history) 
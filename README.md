# Steps to run

- `yarn`
- `yarn dev`

# Decisions

- React - easy to setup SPA, component architecture, reusability of components, hooks
- React Router - easy integration with react library
- State management - for the scope of this mini project covering UI only, minor prop drilling is enough
- Google Identity Service - easy to implement, free for authentication, google managed signin page
  - used local storage to store user's JWT token
- Material UI - grid & flex design available, easy to use components, responsiveness, icons & charts available too
- Styled Components - css in js allows for using theming & other props in for conditional rendering
- Prettier & Eslint setup - for keep the code styling uniform on all devices/ide by running
  - `npx prettier --write .`
  - `npx eslint --fix .`
- updated font & colors for branding, can we further tweaked from single place - _theme.js_

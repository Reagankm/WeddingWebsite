# Wedding Website based on Mantine Next.js template

### Build and dev scripts

- `yarn dev` - run the app with hot reloading of changes
- `yarn build` - bundle app
- `yarn start` - run app from the bundle that was built

### Deployment

Just push to the main branch on Github and Vercel will start serving the new content.

### Troubleshooting

If you get a hydration error locally, make sure the addblocker and darkmode are turned off. If they alter local HTML it can cause an issue where the code thinks the local and client versions of the HTML don't match.

### Things it started with that might not be accurate

- `yarn dev` – start dev server
- `build` – bundle application for production
- `export` – exports static website to `out` folder
- `analyze` – analyzes application bundle with [@next/bundle-analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)

### Testing scripts

- `typecheck` – checks TypeScript types
- `lint` – runs ESLint
- `prettier:check` – checks files with Prettier
- `jest` – runs jest tests
- `jest:watch` – starts jest watch
- `test` – runs `jest`, `prettier:check`, `lint` and `typecheck` scripts

### Other scripts

- `storybook` – starts storybook dev server
- `storybook:build` – build production storybook bundle to `storybook-static`
- `prettier:write` – formats all files with Prettier

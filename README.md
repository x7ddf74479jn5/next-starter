# Next.js starter template

- Next.js
- TypeScript
- ESLint
- Prettier
- Jest
- Storybook
- MSW
- Hygen
- Google Analytics

## Omit

- Jest

```shell
rimraf jest jest.config.js
yarn remove @swc/core @swc/jest @testing-library/jest-dom @testing-library/react @testing-library/react-hooks @types/jest @types/react-test-renderer @types/testing-library__react identity-obj-proxy jest jest-watch-typeahead react-test-renderer
sed -i -e '/jest/d' package.json
```

- Storybook

```shell
rimraf .storybook .github/workflow/storybook.yml
yarn remove @storybook/addon-a11y @storybook/addon-a11y @storybook/react storybook-addon-performance
sed -i -e '/storybook/d' package.json
```

- MSW

```shell
rimraf mocks/msw mockServiceWorker.js
yarn remove msw
```

- Hygen

```shell
rimraf .hygen .hygen.js
yarn remove hygen
sed -i -e '/hygen/d' package.json
```

- Google Analytics

```shell
rimraf src/lib/gtag.tsx src/types/gtm-evet.d.ts
yarn remove @types/gtag.js
```

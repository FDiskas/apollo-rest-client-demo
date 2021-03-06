## Apollo react state

### Create boilerplate

1. `yarn create next-app --example with-typescript .`
1. `git init`
1. `yarn dev` 🌟 check if it works

### Add tools

1. `npm i -g mrm` https://mrm.js.org
1. `mrm editorconfig -i`
1. `mrm eslint`
1. `mrm prettier -i`
1. `yarn add -D eslint-plugin-prettier` https://github.com/prettier/eslint-plugin-prettier
1. Update `.eslintrc.json` file

   ```json
     ...
     "plugins": ["prettier", ...],
     ...
     "env": {
       "es6": true,
       "browser": true,
       "node": true
     },
     "rules": {
       "prettier/prettier": "error"
     }
     ...
   ```

1. `mrm license -i`
1. `mrm stylelint`
1. Change vscode settings - format on save

### Add styles

1. `yarn add -D sass`
1. `yarn add tailwindcss -D`
1. create file `postcss.config.js`
1. `yarn add postcss-preset-env -D`

   ```js
   module.exports = {
     plugins: ['tailwindcss', 'postcss-preset-env']
   };
   ```

1. Install vscode plugin https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss
1. Edit `.stylelintrc`

   ```json
     "rules": {
       "at-rule-no-unknown": [
         true,
         {
           "ignoreAtRules": [
             "tailwind",
             "apply",
             "responsive",
             "variants",
             "screen"
           ]
         }
       ]
     }
   ```

1. Create VSCode settings file `.vscode/settings.json`

   ```json
   {
     "stylelint.enable": true,
     "scss.validate": false,
     "editor.formatOnSave": true
   }
   ```

1. initialize TailWind `yarn tailwind init`

   ```js
   module.exports = {
     ...
     purge:
       process.env.NODE_ENV === "production"
         ? {
             mode: "all",
             content: ["./src/**/*.tsx"],
           }
         : false,
     ...
   };
   ```

1. Restart IDE

### Reorganize folder structure

1. Move to `src` dir
   - pages
   - components
   - interfaces
   - utils
1. Create global style `src/styles/main.scss`

   ```scss
   /* purgecss start ignore */
   @tailwind base;
   @tailwind screens;
   @tailwind components;

   /* purgecss end ignore */

   @tailwind utilities;
   ```

1. create file `src/pages/_app.tsx`

   ```tsx
   import { AppProps } from 'next/dist/next-server/lib/router/router';
   import '../styles/main.scss';

   export default function MyApp({ Component, pageProps }: AppProps) {
     return <Component {...pageProps} />;
   }
   ```

1. check if it works try add to `<nav>` element thous classes

   ```html
   <nav
     className="fixed z-50 w-full bg-white top-0 flex flex-wrap items-center gap-2 px-2 py-3 shadow-lg"
   />
   ```

### Setup apollo

1. Install apollo

   ```sh
   yarn add @apollo/client
   ```

1. Install apollo-link-rest

   ```sh
   yarn add apollo-link-rest apollo-link graphql graphql-anywhere qs
   ```

1. Because we are preparing to have SSR (server side rendering) `fetch` method should be supported also for node

   ```sh
   yarn add isomorphic-unfetch
   ```

### Setup the basic infrastructure

1. Create `.env` file with environment variables and expose them to the browser also

   > **Note:** If you have some secret variables add them to `.env.local` file and do not commit to the repo (ignored by default). More info at [NextJs Docs](https://nextjs.org/docs/basic-features/environment-variables#exposing-environment-variables-to-the-browser)

   ```sh
   NEXT_PUBLIC_REST_ENDPOINT=https://jsonplaceholder.typicode.com
   ```

1. Create Apollo client `src/gql/client.ts`
1. Create queries file `src/gql/query.ts`
1. Update `tsconfig.json`

```json
  "compilerOptions": {
    ...,
    "baseUrl": "./"
  }
```

# Use of JS classes with Pinia Persisted State

Example of use of reactive class instances with Pinia store. I use pinia-plugin-persistedstate to persist the data on reloads and custom serialization/deserialization as the defaults use JSON parse/stringify and don't work properly with class instances or nested references. Zod is used for validating the persisted data. I also created a composable that allows to use an object decoupled from the original that contained it while mantaining reactivity between the two.

For this project I created a quiz with multiple alternative questions. I created the classes `Quiz` and `Question`, with `Quiz` containing an array type `Question[]`. The composable `useQuestion` allows to use a question decoupled from the original `Quiz` object while mantaining reactivity and synchronization between both.

The use of classes in Vue is straightforward, as it uses proxies for reactivity and relies on assignments of field's values instead of variables.

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

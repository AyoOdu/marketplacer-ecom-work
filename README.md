# Marketplacer Ecommerce

![Hero Image](https://i.ibb.co/MNGgRkw/Screen-Shot-2022-10-09-at-7-58-17-pm.png)

## Getting Started

First, install all required dependencies:

```bash
Yarn install
# or
yarn
```

Second, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Additional Local Workflow

- Add VSCode workspace config below to enable formatting on save for JS files
  
```json
{
  "editor.tabSize": 2,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
}
```

- Run manual JS files lint audit
  
```bash
yarn lint
```

- Run manual Style files lint audit, and auto formatter
  
```bash
yarn style-lint
```

## Features

- Home Page: List all available products, i.e. [http://localhost:3000/](http://localhost:3000/)
- Product Page: Displays individual product, i.e. [http://localhost:3000/product/1411](http://localhost:3000/product/1411)
- Shopping Cart: List all items in cart, and shows total price with applied discount i.e. [http://localhost:3000/cart](http://localhost:3000/cart)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

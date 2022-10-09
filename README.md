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
  - Rendering Mode: The selected rendering mode for this page is Next's Incremental Static Regeneration (ISR). ISR ensures that the page is kept fresh every 30 seconds using [stale-while-revalidate](https://www.rfc-editor.org/rfc/rfc5861#section-3)
  - ISR also ensure the page has a better Time to First Byte **(TTFB)** when compared with an SSR'ed page.
  - ISR is also beneficial in terms of SEO. It rendered all the required SEO markup at build time.
- Product Page: Displays individual product, i.e. [http://localhost:3000/product/1411](http://localhost:3000/product/1411)
  - Rendering Mode: The selected rendering mode for this page is Next's Incremental Static Regeneration (ISR). ISR ensures that the page is kept fresh every 30 seconds using [stale-while-revalidate](https://www.rfc-editor.org/rfc/rfc5861#section-3)
  - ISR also ensure the page has a better Time to First Byte **(TTFB)** when compared with an SSR'ed page.
  - ISR is also beneficial in terms of SEO. It rendered all the required SEO markup at build time.
- Shopping Cart: List all items in cart, and shows total price with applied discount i.e. [http://localhost:3000/cart](http://localhost:3000/cart)
  - Rendering Mode: The selected rendering mode for this page is Client-Side (CSR).
  - A dedicated serverless function was implemented at `url: api/products Method: 'POST'` to serve the required data.
  - The Cart is suited for CSR for three main reasons:
    - The Cart page doesn't have much SEO benefit, so pre-rendered/static HTML has little use here.
    - The Cart page is usually UI intensive, with activities such as updating/customizing product selection. All these activities will feel faster without needed to fetch additional JS, or HTML from the server.
    - More importantly, unlike the product listing page, the Cart requires fresh product data always. Products that are longer available should be indicated to the user here before proceeding through the payment flow. For this reason, CSR fetches the very latest product list, and should highlight stale/unavailable products in the cart.


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

import Card from '../../app/components/card/card'
import { fetchProductData } from '../../app/api/fetch-product-data'

const Products = ({ product }) => {
  const { uuid } = product

  return <Card key={uuid} product={product} />
}

// This function gets called at build time
export async function getStaticPaths() {
  // Call API endpoint to get products
  const { products } = await fetchProductData()

  // Get the paths we want to pre-render based on product
  const paths = products.map((product) => ({
    params: { uuid: `${product.uuid}` },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: blocking } will server-render pages
  // on-demand if the path doesn't exist.
  return { paths, fallback: 'blocking' }
}

// This function gets called at build time
export async function getStaticProps({ params }) {
  // Call API endpoint to get product
  const { product } = await fetchProductData(params.uuid)

  // By returning { props: { products } }, the Card
  // will receive `product` as a prop at build time
  return {
    props: {
      product,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 30 seconds
    revalidate: 30, // In seconds
  }
}

export default Products

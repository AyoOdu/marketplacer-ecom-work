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
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

// This function gets called at build time
export async function getStaticProps({ params }) {
  // Call API endpoint to get product
  const { product } = await fetchProductData(params.uuid)

  // By returning { props: { products } }, the Blog component
  // will receive `products` as a prop at build time
  return {
    props: {
      product,
    },
  }
}

export default Products

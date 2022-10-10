import Card from '../../app/components/card/card'
import { fetchProductData } from '../../app/api/fetch-product-data'

const Products = ({ product }) => {
  const { uuid } = product

  return <Card key={uuid} product={product} />
}

export async function getStaticPaths() {
  const { products } = await fetchProductData()

  const paths = products.map((product) => ({
    params: { uuid: `${product.uuid}` },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: blocking } will server-render pages
  // on-demand if the path doesn't exist.
  return { paths, fallback: 'blocking' }
}

export async function getStaticProps({ params }) {
  const { product } = await fetchProductData(params.uuid)

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

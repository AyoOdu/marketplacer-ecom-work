import Cards from '../app/components/cards/cards'
import { fetchProductData } from '../app/api/fetch-product-data'

const Home = ({ products }) => {
  return <Cards products={products} />
}

// This function gets called at build time
export async function getStaticProps() {
  // Call API endpoint to get product
  const { products } = await fetchProductData()

  // By returning { props: { products } }, the Cards component
  // will receive `products` as a prop at build time
  return {
    props: {
      products,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 30 seconds
    revalidate: 30, // In seconds
  }
}

export default Home

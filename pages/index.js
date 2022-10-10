import Cards from '../app/components/cards/cards'
import { fetchProductData } from '../app/api/fetch-product-data'

const Home = ({ products }) => {
  return <Cards products={products} />
}

export async function getStaticProps() {
  const { products } = await fetchProductData()

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

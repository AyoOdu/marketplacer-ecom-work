import '../app/shared-styles/globals.scss'
import Layout from '../app/components/layouts/layout'
import { CartProvider } from '../app/store'

const MyApp = ({ Component, pageProps }) => {
  return (
    <CartProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartProvider>
  )
}

export default MyApp

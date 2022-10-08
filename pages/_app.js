import '../app/shared-styles/globals.scss'
import Layout from '../app/components/layouts/layout'

const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp

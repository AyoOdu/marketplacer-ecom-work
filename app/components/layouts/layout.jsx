import Head from 'next/head'
import PropTypes from 'prop-types'
import Navbar from '../navbar/navbar'
import Footer from '../footer/footer'
import styles from './layout.module.scss'
import utilityStyles from '../../shared-styles/utility.module.scss'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Marketplacer E-Commerce</title>
        <meta name="description" content="Marketplacer E-Commerce | Buy and Sell Sydney" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles['flex-wrapper']}>
        <div>
          <Navbar />
          <main className={`${utilityStyles.container} ${styles.main}`}>{children}</main>
        </div>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
}

export default Layout

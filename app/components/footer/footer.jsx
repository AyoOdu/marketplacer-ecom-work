import Link from 'next/link'
import styles from './footer.module.scss'
import utilityStyles from '../../shared-styles/utility.module.scss'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <ul className={`${utilityStyles.container} ${styles['list-wrapper']}`}>
        <li className={styles['link-wrapper']}>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li className={styles['link-wrapper']}>
          <Link href="/cart">
            <a>Checkout</a>
          </Link>
        </li>
        <li className={styles['link-wrapper']}>
          <Link href="/">
            <a>Privacy</a>
          </Link>
        </li>
        <li className={styles['link-wrapper']}>
          <Link href="/">
            <a>Disclaimer</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Footer

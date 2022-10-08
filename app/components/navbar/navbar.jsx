import Link from 'next/link'
import ButtonLink from '../button-link/button-link'
import styles from './navbar.module.scss'
import utilityStyles from '../../shared-styles/utility.module.scss'

const Navbar = () => {
  return (
    <ul className={`${utilityStyles.container} ${styles['nav-wrapper']}`}>
      <li>
        <Link href="/">
          <div className={styles['nav-link']}>
            <a>Home</a>
            <div className={styles['icon-wrapper']}>
              <span className={styles['icon']} />
              <span className={styles['icon']} />
              <span className={styles['icon']} />
            </div>
          </div>
        </Link>
      </li>
      <li className={styles['counter-wrapper']}>
        <ButtonLink size="large" to="/" linkContent="Checkout">
          <span className={utilityStyles['cart-counter']}>{2}</span>
        </ButtonLink>
      </li>
    </ul>
  )
}

export default Navbar

import Link from 'next/link'
import ButtonLink from '../button-link/button-link'
import styles from './navbar.module.scss'
import utilityStyles from '../../shared-styles/utility.module.scss'
import { useSyncState } from '../../hooks/hook-use-sync-state'
import { useCart } from '../../store'

const Navbar = () => {
  const { state } = useCart()

  // sync api, an local state on mount
  useSyncState()

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
        <ButtonLink size="large" to="/cart" linkContent="Checkout">
          <span className={utilityStyles['cart-counter']}>{state.length}</span>
        </ButtonLink>
      </li>
    </ul>
  )
}

export default Navbar

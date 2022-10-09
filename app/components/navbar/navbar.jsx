import { useEffect } from 'react'
import Link from 'next/link'
import ButtonLink from '../button-link/button-link'
import styles from './navbar.module.scss'
import utilityStyles from '../../shared-styles/utility.module.scss'
import { useCart } from '../../store'
import types from '../../store/types'

const Navbar = () => {
  const { state, dispatch } = useCart()

  useEffect(() => {
    dispatch({ type: types.INIT_CART })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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

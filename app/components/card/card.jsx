import PropTypes from 'prop-types'
import Image from 'next/image'
import { useRouter } from 'next/router'
import ButtonLink from '../button-link/button-link'
import styles from './card.module.scss'
import utilityStyles from '../../shared-styles/utility.module.scss'
import { getCurrencyString } from '../../helpers/functions/get-currency-string'

const Card = ({ product }) => {
  const { pathname } = useRouter()
  const { uuid, name, price } = product
  const isProductPage = pathname.includes('product')

  return (
    <div className={styles['card-wrapper']}>
      <div className={styles['image-wrapper']}>
        <Image layout="fill" src="/placeholder-image.jpeg" alt="Card placeholder image" />
        {!isProductPage && <ButtonLink size="small" to={`product/${uuid}`} linkContent="Details" />}
      </div>
      <div className={styles['content-wrapper']}>
        <div className={styles['text-wrapper']}>
          {name && (
            <p>
              <strong>Item Name:&nbsp;</strong>
              {name}
            </p>
          )}
          {price && (
            <p>
              <strong>Price:&nbsp;</strong>
              {getCurrencyString(price)}
            </p>
          )}
        </div>
        <div className={styles['card-button-wrapper']}>
          <ButtonLink size="large" to="/" linkContent="Update Cart" isButton>
            <span className={utilityStyles['cart-counter']}>{`+` || `-`}</span>
          </ButtonLink>
        </div>
      </div>
    </div>
  )
}

Card.propTypes = {
  product: PropTypes.oneOfType([PropTypes.object]).isRequired,
}

export default Card

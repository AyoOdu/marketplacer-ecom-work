import PropTypes from 'prop-types'
import Card from '../card/card'
import styles from './cards.module.scss'

const Cards = ({ products }) => {
  return (
    <div className={styles['cards-wrapper']}>
      {products.map((product) => (
        <Card key={product.uuid} product={product} />
      ))}
    </div>
  )
}

Cards.propTypes = {
  products: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
}

export default Cards

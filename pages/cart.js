import { useSwrFetcher } from '../app/hooks/hook-use-swr'
import { all_products_url } from '../app/constants/constants-api-url'
import { useCart } from '../app/store'
import { getCurrencyString } from '../app/helpers/get-currency-string'
import { getDiscountedTotalPrice } from '../app/helpers/get-discounted-total-price'

const Cart = () => {
  const { state } = useCart()
  const body = JSON.stringify({ uuid: state })
  const { validProducts, isError, isLoading } = useSwrFetcher([all_products_url, body])

  // Handle loading and error states
  const FallbackMessage = () => <h1>There are no items in cart</h1>
  if (isError) return <FallbackMessage />
  if (isLoading) return <h1>Loading...</h1>

  // get required discount and total price
  const hasValidItemsInCart = Array.isArray(validProducts) && validProducts.length > 0
  const { discountPrice, rules } = hasValidItemsInCart ? getDiscountedTotalPrice(validProducts) : {}

  return hasValidItemsInCart ? (
    <>
      {validProducts.map(({ uuid, name, price }, index) => (
        <div key={uuid}>
          {(name || price) && (
            <p>
              <strong>{`${index + 1})`}</strong>&nbsp;{name}&nbsp;&mdash;&nbsp;{getCurrencyString(price)}
            </p>
          )}
        </div>
      ))}
      {rules && (
        <p>
          <strong>Discount applied:</strong>&nbsp;{rules}
        </p>
      )}
      <p>
        <strong>TOTAL:</strong>&nbsp;{getCurrencyString(discountPrice)}
      </p>
    </>
  ) : (
    <FallbackMessage />
  )
}

export default Cart

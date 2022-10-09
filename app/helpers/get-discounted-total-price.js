const rules = [
  '10% off on total greater than $20',
  '15% off on total greater than $50',
  '20% off on total greater than $100',
]
export const getDiscountedTotalPrice = (products) => {
  const totalProductPrice = products.reduce((accumulator, product) => {
    const { price } = product
    return accumulator + +price
  }, 0)

  // get discounted price
  if (totalProductPrice > 100) return { discountPrice: totalProductPrice * 0.8, rules: rules[2] }
  if (totalProductPrice > 50) return { discountPrice: totalProductPrice * 0.85, rules: rules[1] }
  if (totalProductPrice > 20) return { discountPrice: totalProductPrice * 0.9, rules: rules[0] }
  return { discountPrice: totalProductPrice, rules: '' }
}

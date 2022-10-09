import { discountRules } from '../constants/constants-discount-rules'

export const getDiscountedTotalPrice = (products) => {
  const totalProductPrice = products.reduce((accumulator, product) => {
    const { price } = product
    return accumulator + +price
  }, 0)

  // get discounted price
  if (totalProductPrice > 100) return { discountPrice: (totalProductPrice * 0.8).toFixed(2), rules: discountRules[100] }
  if (totalProductPrice > 50) return { discountPrice: (totalProductPrice * 0.85).toFixed(2), rules: discountRules[50] }
  if (totalProductPrice > 20) return { discountPrice: (totalProductPrice * 0.9).toFixed(2), rules: discountRules[20] }
  return { discountPrice: totalProductPrice, rules: '' }
}

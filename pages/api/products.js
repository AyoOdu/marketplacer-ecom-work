import { fetchProductData } from '../../app/api/fetch-product-data'
// get list of uuid from request object, and respond with a list of corresponding product data
export default async function handler(req, res) {
  const { uuid: uuidArray } = req.body
  const { products } = await fetchProductData()
  if (Array.isArray(uuidArray) && uuidArray[0]) {
    const validProducts = products.filter(({ uuid }) => uuidArray.includes(uuid))
    const validProductsUuid = validProducts.map(({ uuid }) => uuid)

    return res.status(200).json({ validProducts, validProductsUuid })
  }
  return res.status(200).json({ validProducts: [], validProductsUuid: [] })
}

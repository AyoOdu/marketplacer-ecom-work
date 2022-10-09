import { fetchProductData } from '../../app/api/fetch-product-data'

export default async function handler(req, res) {
  const { uuid: uuidArray } = req.body
  const { products } = await fetchProductData()
  if (Array.isArray(uuidArray) && uuidArray[0]) {
    const selectedProducts = products.filter(({ uuid }) => uuidArray.includes(uuid))
    return res.status(200).json({ products: selectedProducts })
  }
  return res.status(200).json({ products: [] })
}

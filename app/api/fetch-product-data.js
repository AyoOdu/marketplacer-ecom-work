import path from 'path'
import { promises as fs } from 'fs'

export const fetchProductData = async (productId) => {
  // read and parse product data
  const productDirectory = path.join(process.cwd(), 'app', 'data')
  const productsJsonData = await fs.readFile(productDirectory + '/products.json', 'utf8')
  const parsedProductData = JSON.parse(productsJsonData)
  // return single product data
  if (productId) {
    const selectedProduct = parsedProductData.find(({ uuid }, index) => `${uuid}` === productId)
    if (selectedProduct) return { product: selectedProduct }
    return { product: null }
  }
  // return all product data
  return { products: parsedProductData }
}

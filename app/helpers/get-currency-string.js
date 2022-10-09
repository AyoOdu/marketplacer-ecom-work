export const getCurrencyString = (value) => {
  const isNumeric = !isNaN(value)

  if (isNumeric) return `$${value}`
  return `$0`
}

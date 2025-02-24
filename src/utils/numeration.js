export default function getPagesArray(pagesAmount) {
  const pagesArray = []
  for (let i = 1; i <= pagesAmount; i++) {
    pagesArray.push(i)
  }
  return pagesArray
}
export default function addThreeDots(pagesArray, currentPage) {
  let pagesWithDots
  if (pagesArray.length < 5){
    return pagesArray
  } else {
    if ( currentPage === 1 || currentPage === pagesArray.length ) {
      pagesWithDots = [
        1, 
        2,
        '...', 
        pagesArray[pagesArray.length-2], 
        pagesArray[pagesArray.length-1]
      ]
    } else if (currentPage === 2) {
      pagesWithDots = [
        1,
        2,
        3,
        '...',
        pagesArray[pagesArray.length-1]
      ]
    } else if (currentPage === pagesArray.length - 1) {
      pagesWithDots = [
        1,
        '...',
        pagesArray[pagesArray.length-3],
        pagesArray[pagesArray.length-2],
        pagesArray[pagesArray.length-1]
      ]
    }
    else {
      pagesWithDots = [
        1,
        '...',
        pagesArray[currentPage - 2],
        pagesArray[currentPage - 1],
        pagesArray[currentPage],
        '...',
        pagesArray[pagesArray.length-1]
      ]
    }
    return pagesWithDots
  }
  
}
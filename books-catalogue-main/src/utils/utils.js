export const uniqueValues = (arr) => {
  return ['all', ...new Set(arr.map((item) => item.genre).flat())]
}

export function searchAuthors(arr, search) {
  let i = arr.length
  while (i--) {
    if (arr[i].toLowerCase().includes(search.toLowerCase())) {
      return true
    }
  }
  return false
}
export function searchGenres(arr, search) {
  let i = arr.length
  while (i--) {
    if (arr[i].toLowerCase() === search.toLowerCase()) {
      return true
    }
  }
  return false
}

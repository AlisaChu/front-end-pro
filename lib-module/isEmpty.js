export function isEmpty (data) {
  if (data === null || data === undefined) {
    return true
  }
  if (typeof data === 'string') {
    return  data.trim() === ''
  }

  return false;
}
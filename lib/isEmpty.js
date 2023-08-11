function isEmpty (data) {
  if (data === null || data === undefined) {
    return true
  }

  return data.trim() === ''
}
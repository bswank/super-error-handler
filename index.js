module.exports = function handleError(error) {
  const query = encodeURI(error.message)
  console.error(`https://stackoverflow.com/search?q=${query}`)
}

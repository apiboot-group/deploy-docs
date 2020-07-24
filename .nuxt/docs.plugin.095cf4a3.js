export default (ctx, inject) => {
  const $docs = {
    get (path) {
      return fetch('http://localhost:3001' + path).then((response) => {
        if (!response.ok) {
          const error = new Error(response.statusText)
          error.response = response
          throw error
        }
        return response.json()
      })
    }
  }
  inject('docs', $docs)
  ctx.$docs = $docs
}

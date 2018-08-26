export default () => {
  let query = window.location.search.substr(
    1,
    window.location.search.length - 1
  )
  let params = new URLSearchParams(query)
  let code = params.get('code')
  let state = params.get('state')

  return fetch('https://gh-auth-code-rklziitwat.now.sh/auth/' + code, {
    method: 'POST'
  }).then(res => res.json())
}

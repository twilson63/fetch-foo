/**
 * list repos
 *
 * this challenge requires an access_token to be passed to
 * use the data in this endpoint
 *
 * GET https://api.github.com/user/repos
 *
 * headers
 *   Authorization: 'Bearer [token]'
 *
 */
export default token =>
  Promise.resolve([{ name: 'No List', html_url: 'http://example.com' }])

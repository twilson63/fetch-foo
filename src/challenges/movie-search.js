/**
 * movie search
 *
 *
 * Go to http://www.omdbapi.com/ and create a free api key
 *
 * Then use fetch to make a rest call to the omdbapi using a url like this:
 *
 *   http://www.omdbapi.com/?apikey=[:apikey]&s=[:q]
 *
 * For example, if your apikey is 1234 and you are searching for star wars.
 *
 *   http://www.omdbapi.com/?apikey=1234&s=star+wars
 *
 */

const apikey = '[Add your key here]'
export default q =>
  Promise.resolve({ Search: [{ Title: 'TODO: No Movie Found' }] })

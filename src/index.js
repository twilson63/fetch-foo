import navaid from 'navaid'
import callback from './lib/callback'

import Start from './start.svelte'
import Dogs from './dogs.svelte'
import Movies from './movies.svelte'
import News from './news.svelte'
import Github from './github.svelte'

const options = { target: document.getElementById('app') }
const router = navaid('/')
let token = null

const go = Component => () => {
  document.getElementById('app').innerHTML = ''
  if (token) {
    options.data = { token }
  }
  new Component(options)
}

router
  .on('/', go(Start))
  .on('/dogs', go(Dogs))
  .on('/movies', go(Movies))
  .on('/news', go(News))
  .on('/github', go(Github))
  .on('/callback', () => {
    callback().then(result => {
      token = result.access_token
      router.route('/github', true)
    })
  })

router.listen()

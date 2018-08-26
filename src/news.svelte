<div class="pa4 center mw8 ba br2 avenir black-80 mt4">
  <a class="fr f1 dim" href="/">🏠</a>
  <h1>Challenge - Top News</h1>
  <p>In this challenge, we will be getting the top news headlines from the newsapi.com</p>
  <p>You want to get your free api key from http://newsapi.com</p>

  <div>
    <button class="ba br2 pa2 dim" on:click='getTopNews()'>Get News</button>
  </div>

  {#if headlines }
  <article class="pa3 pa5-ns">
    <h1 class="f4 bold center mw6">Headlines</h1>

    <ul class="list pl0 ml0 center mw6 ba b--light-silver br2">
        {#each headlines as article}
        <li class="ph3 pv3 bb b--light-silver">{article.title}</li>
        {/each}
      </ul>
  </article>
  
  {/if} 

  {#if error}
    <p class="bg-red white pa4 ba br2">{error}</p>
  {/if}
</div>

<script>
  import getNews from './challenges/news'

  export default {
    data() {
      return { headlines: null, error: null }
    },
    methods: {
      getTopNews() {
        getNews()
          .then(result => {
            if (result.status === 'ok') {
              this.set({ headlines: result.articles })
            } else {
              this.set({ error: result.message || 'Unknown error occured!' })
            }

          })
      }
    }
  }
</script>
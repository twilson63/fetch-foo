<h1>Challenge - Top News</h1>
<p>In this challenge, we will be getting the top news headlines from the newsapi.com</p>
<p>You want to get your free api key from http://newsapi.com</p>

<div>
  <button on:click='getTopNews()'>Get News</button>
</div>
{#if headlines }
<ul>
  {#each headlines as article}
  <li>{article.title}</li>
  {/each}
</ul>
{/if} 

{#if error}
  <p>{error}</p>
{/if}

<a href="/">Home</a>

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
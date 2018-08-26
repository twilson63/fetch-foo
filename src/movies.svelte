<div class="pa4 center mw8 ba br2 avenir black-80 mt4">
    <a class="fr f1 dim" href="/">🏠</a>
  
<h1>Challenge - Movie Search</h1>
<p>In this challenge, you will use fetch to search for movies.</p>
<form on:submit='handleSubmit(event)'>
  <input bind:value='query' type="text" placeholder="search for movie">
  <button>Search</button>
</form>
<h2>Search for {query}</h2>
{#if movies}
<article class="pa3 pa5-ns">
  <h1 class="f4 bold center mw6">Movies</h1>
<ul class="list pl0 ml0 center mw6 ba b--light-silver br2">
  {#each movies as movie}
  <li class="ph3 pv3 bb b--light-silver">{movie.Title}</li>
  {/each}
</ul>
</article>
{/if}
</div>
<script>
  import search from './challenges/movie-search'
  export default {
    data() {
      return {
        movies: null,
        query: ''
      }
    },
    methods: {
      handleSubmit(event) {
        event.preventDefault()
        const { query } = this.get()
        search(query).then(result => {
          this.set({ movies: result.Search })
        })
      }
    }
  }
</script>
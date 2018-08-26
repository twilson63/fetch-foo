<h1>Challenge - Movie Search</h1>
<p>In this challenge, you will use fetch to search for movies.</p>
<form on:submit='handleSubmit(event)'>
  <input bind:value='query' type="text" placeholder="search for movie">
  <button>Search</button>
</form>

<h2>Search for {query}</h2>
{#if movies}
<ul>
  {#each movies as movie}
  <li>{movie.Title}</li>
  {/each}
</ul>
{/if}
<a href="/">Home</a>
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
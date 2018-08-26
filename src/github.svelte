<h1>Challenge Github</h1>
<p>First we have to establish a session with a user:</p>

{#if !token}
  <button on:click="authorize()">login</button>
{:else}
  <button on:click="list()">List Repos</button>
{/if}

{#if repos} 
  <ul>
    {#each repos as repo}
      <li><a href="{repo.html_url}" target="_blank">{repo.name}</a></li>
    {/each}
  </ul>
{/if}

<a href="/">Home</a>

<script>
  import repos from './challenges/repos'
  import authUrl from './lib/auth-url'

  export default {
    data() {
      return {
        repos: null
      }
    },
    methods: {
      authorize() {
        window.location.href = authUrl()
      },
      list() {
        const {token} = this.get()
        repos(token).then(items => {
          this.set({repos: items})
        })
      }
    }
  }
</script>
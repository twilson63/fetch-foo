<div class="pa4 center mw8 ba br2 avenir black-80 mt4">
    <a class="fr f1 dim" href="/">🏠</a>

<h1>Challenge Github</h1>
<p>First we have to establish a session with a user:</p>

{#if !token}
  <button class="ba br2 pa2 dim" on:click="authorize()">login</button>
{:else}
  <button class="ba br2 pa2 dim" on:click="list()">List Repos</button>
{/if}

{#if repos} 
  <article class="pa3 pa5-ns">
    <h1 class="f4 bold center mw6">Repos</h1>
  <ul class="list pl0 ml0 center mw6 ba b--light-silver br2">
    {#each repos as repo}
      <li class="ph3 pv3 bb b--light-silver"><a href="{repo.html_url}" target="_blank">{repo.name}</a></li>
    {/each}
  </ul>
  </article>
{/if}

</div>

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
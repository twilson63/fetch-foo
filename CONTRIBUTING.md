# Contributing

Welcome, thank you for your interest in contributing to fetch-foo. In order to create a new challenge, you will need to create the following:

`challenges/[name].js`
`[name].svelte`

In the challenge module export your function:

```js
export default () => Promise.resolve({ ok: true })
```

In the `svelte` endpoint may look like this:

```html
<h1>Challenge: List Dog Breeds</h1>
<p>
  In this challenge, you will use the fetch function to get all the breeds listed on dog.ceo.
</p>
<p>
  You will write your function in the challenges/dog-breeds.js file. When you are ready, simply click the Get Dog Breeds button
  and watch them paint on the screen.
</p>
<div>
  <button on:click='getDogBreeds()'>Get Dog Breeds</button>
</div>
{#if breeds }
<ul>
  {#each breeds as breed}
  <li>{breed}</li>
  {/each}
</ul>
{/if}

<a href="/">Home</a>

<script>
  import getBreeds from './challenges/dog-breeds'


  export default {
    data() {
      return { breeds: null }
    },
    methods: {
      getDogBreeds() {
        getBreeds().then(results => {
          this.set({ breeds: Object.keys(results.message) })
        })
      }
    }
  }
</script>
```

Finally, you need to modify the `index.js` and `start.svelte` files to add the new challenge to the project.

Submit a pull request

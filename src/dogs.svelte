<div class="pa4 center mw8 ba br2 avenir black-80 mt4">
  <a class="fr f1 dim" href="/">🏠</a>
  <h1>Challenge: List Dog Breeds</h1>
  <p>
    In this challenge, you will use the fetch function to get all the breeds listed on dog.ceo.
  </p>
  <p>
    You will write your function in the challenges/dog-breeds.js file. When you are ready, simply click the Get Dog Breeds button
    and watch them paint on the screen.
  </p>
  <div>
    <button class="ba br2 pa2 dim" on:click='getDogBreeds()'>Get Dog Breeds</button>
  </div>
  {#if breeds }
  <article class="pa3 pa5-ns">
    <h1 class="f4 bold center mw6">Dog Breeds</h1>
    <ul class="list pl0 ml0 center mw6 ba b--light-silver br2">
      {#each breeds as breed}
      <li class="ph3 pv3 bb b--light-silver">{breed}</li>
      {/each}
    </ul>
  </article>
  {/if}

</div>
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
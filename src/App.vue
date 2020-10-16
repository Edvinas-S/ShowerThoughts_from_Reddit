<template>
  <div id="app">
    <div v-if="isLoaded">
      <full-page :options="options" id="fullpage">
        <div class="section" v-for="showerThought in showerThoughts" :key="showerThought.data.id">
          <img src="./assets/Showerthoughts_400x400.png" alt="showerthought logo" width="150px">
          <div class="quote-symbol">&#8220;</div>
          <p class="quote"><a :href="showerThought.data.url" target="_blank" rel="noopener noreferrer">{{ showerThought.data.title }}</a></p>
          <div class="details">
            <div class="author">Author: {{ showerThought.data.author }}</div>
            <div class="stats">{{ showerThought.data.ups }} Upvotes | {{ showerThought.data.num_comments }} Comments | Created: {{ moment.unix(showerThought.data.created).format('MMMM Do YYYY, h:mm:ss a') }}</div>
          </div>
          <div>
            <Mouse/>
          </div>
        </div>
      </full-page>  
    </div>
    <div v-else>
      <Loading_spiner/>
    </div>  
  </div>
</template>


<script>
import Loading_spiner from './components/Loading_spiner.vue'
import Mouse from './components/Mouse.vue'

export default {
  name: 'App',
  components: {
    Loading_spiner,
    Mouse
  },
  created() {
    fetch('https://www.reddit.com/r/Showerthoughts.json?limit=15')
    .then(response => response.json())
    .then(data => {
      this.showerThoughts = data.data.children
      this.showerThoughts.shift()
      this.isLoaded = true
    })
  },
  data () {
    return {
      isLoaded: false,
      showerThoughts: [],
      options: {
        navigation: true,
        navigationTooltips: ['1-quote', '2-quote', '3-quote', '4-quote', '5-quote', '6-quote', '7-quote', '8-quote', '9-quote', '10-quote', '11-quote', '12-quote', '13-quote', '14-quote', '15-quote'],
        scrollOverflow: true,
        loopBottom: true,
        anchors: ['1-quote', '2-quote', '3-quote', '4-quote', '5-quote', '6-quote', '7-quote', '8-quote', '9-quote', '10-quote', '11-quote', '12-quote', '13-quote', '14-quote', '15-quote'],
        sectionsColor: ['#41b883', '#ff5f45', '#0798ec', '#fec401', '#1bcee6', '#ee1a59', '#DB9700', '#ba5be9', '#b4b8ab', '#41b883', '#ff5f45', '#0798ec', '#fec401', '#1bcee6', '#ee1a59']
      }
    }
  },
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
    color: #333;
  }

  body {
    margin: 0;
    padding: 0;
  }

  .quote a {
    text-decoration: none;
    font-size: 2em;
    color: #fff;
  }

  .quote-symbol {
    font-size: 64px;
    line-height: 0;
    margin-top: 50px;
    color: #fff;
  }
</style>


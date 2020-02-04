<template>
  <div id="app">
    <person v-if="isPopPerson"
    @cancelPerson="isPopPerson = false"></person>
    <button @click="PopPerson">点击弹出</button>
  </div>
</template>

<script>
import person from '@/components/person.vue'
export default {
  name: 'app',
  components: {
    person
  },
  data () {
    return {
      isPopPerson: true
    }
  },
  methods: {
    PopPerson () {
      this.isPopPerson = true
    }
  }
}
</script>

<style lang="less">
*{margin:0;padding:0}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  overflow: auto;
}
html,body {
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
ul li {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>

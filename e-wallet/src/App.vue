<template>
  <div id="app">
    <router-view v-on:funk="jodå"/>
  </div>
</template>

<script>
export default {
    methods: {
    home() {
      this.$router.push('/home')
    }
  },
  mounted() {
    this.home()
  }
}
</script>

<style>
body {
  display: flex;
  justify-content: center;
  background: gray;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  height: 100vh;
  width: 40vw;
  background: white;
  display: flex;
  justify-content: center;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

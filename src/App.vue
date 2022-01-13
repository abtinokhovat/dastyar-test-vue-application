<template>
  <Tasks/>
</template>

<script>
import Tasks from './components/Tasks/Tasks.vue'

export default {
  name: 'App',
  components: {
    Tasks
  }
}
</script>

<style>

:root {
  --fontfamily: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Apple Color Emoji, Helvetica, Arial, sans-serif, Segoe UI Emoji, Segoe UI Symbol;
  --borderColor: #DDDDDD;
  --buttonHover: #EEEEEE;
  --borderRadius: 0.25rem;
  --dark-red: #DD4B39;
}

*:focus {
  outline: none;
}

textarea {
  font-family: var(--fontfamily);
}


#app {
  font-family: var(--fontfamily);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <Tasks/>
</template>

<script>
import Tasks from './components/Tasks/Tasks.vue'
import ErrorSpan from "@/components/EventNotification/Notification";

export default {
  name: 'App',
  components: {
    ErrorSpan,
    Tasks
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

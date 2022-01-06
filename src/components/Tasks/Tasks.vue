<template>
  <ul>
    <li v-for="task in this.$store.state.tasks" v-show="!task.isDone" :key="task.name">
      <Task v-bind:task=task></Task>
    </li>
  </ul>

</template>

<script>
import Task from './Task'


export default {
  name: "Tasks.vue",
  components: {Task},
  mounted() {
    //get tasks on load of application
    this.$store.dispatch('getTasks')
        .then(() => this.tasks = this.$store.state.tasks)
  }
}
</script>

<style scoped>
ul {
  list-style: none;
}
</style>
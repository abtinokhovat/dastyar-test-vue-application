<template>
  <ul>
    <li v-for="task in this.$store.state.tasks" v-show="!task.isDone" :key="task.name">
      <task v-bind:task=task></task>
    </li>
    <li>
      <new-task-button text="Add task"/>
    </li>
  </ul>

</template>


<script>
import Task from './Task'
import NewTaskButton from "@/components/NewTask/NewTaskButton";

export default {
  name: "Tasks.vue",
  components: {Task, NewTaskButton},
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
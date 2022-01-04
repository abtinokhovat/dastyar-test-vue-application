<template>
  <ul>
    <li v-for="task in tasks" :key="task.name">
      <Task v-bind:task=task></Task>
    </li>
  </ul>

</template>

<script>
import axios from 'axios'
import Task from './Task'


export default {
  name: "Tasks.vue",
  components: {Task},
  data() {
    return {
      tasks: undefined
    }
  },
  methods: {
    async getTasks() {
      try {
        const resp = await axios.get("http://localhost:5119/api/Task");
        this.tasks = resp.data.response;
        resp.data.response.sort((a, b) => {
              if (a.order < b.order)
                return -1;
              if (a.order > b.order)
                return 1;
              return 0;
            }
        )
      } catch (err) {
        console.error(err);
      }
    }
  },
  mounted() {
    this.getTasks();
  }
}
</script>

<style scoped>
ul {
  list-style: none;
}
</style>
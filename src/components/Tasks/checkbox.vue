<template>
  <div :style="priorityStyles(priority)"
       class="check-box"
       @click="checkBoxClick(priority)"
       @mouseleave="hover = false"
       @mouseover="hover = true"
  >
    <svg v-if="hover" class="tick" height="24" width="24">
      <path
          d="M11.23 13.7l-2.15-2a.55.55 0 0 0-.74-.01l.03-.03a.46.46 0 0 0 0 .68L11.24 15l5.4-5.01a.45.45 0 0 0 0-.68l.02.03a.55.55 0 0 0-.73 0l-4.7 4.35z"
          fill="currentColor"></path>
    </svg>

  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "checkbox.vue",
  props: ['isDone', 'priority'],
  data() {
    return {
      hover: false,
      completed: this.isDone,
      defaultStyles: {
        backgroundColor: 'hsla(0, 0%, 50.2%, .1)',
        borderColor: 'gray',
        color: 'gray'
      },
      lowStyles: {
        backgroundColor: 'rgba(209, 69, 59, .1)',
        borderColor: '#d1453b',
        color: '#d1453b'
      },
      mediumStyles: {
        backgroundColor: 'rgba(235, 137, 9, .1)',
        borderColor: '#eb8909',
        color: '#eb8909'
      },
      highStyles: {
        backgroundColor: 'rgba(36, 111, 224, .1)',
        borderColor: '#246fe0',
        color: '#246fe0'
      }
    }
  },
  methods: {
    //style check boxes by the priority of the tasks
    priorityStyles(priority) {
      switch (priority) {
        case 0:
          return this.defaultStyles
        case 1:
          return this.lowStyles
        case 2:
          return this.mediumStyles
        case 3:
          return this.highStyles
      }
    },
    //update button style after click
    updateStyleOnClick(priority) {
      switch (priority) {
        case 0:
          this.defaultStyles.backgroundColor = this.defaultStyles.color
          this.defaultStyles.color = 'white'
          break
        case 1:
          this.lowStyles.backgroundColor = this.lowStyles.color
          this.lowStyles.color = 'white'
          break
        case 2:
          this.mediumStyles.backgroundColor = this.mediumStyles.color
          this.mediumStyles.color = 'white'
          break
        case 3:
          this.highStyles.backgroundColor = this.highStyles.color
          this.highStyles.color = 'white'
          break
      }
    },
    checkBoxClick(priority) {
      //update checkbox style
      this.updateStyleOnClick(priority)
      //get clicked task id
      const id = this.$parent.$data.taskObject.id;
      this.completeTask(id).then(res => {
        //reload tasks
        this.$store.dispatch('getTasks')
            //updating state with new data
            .then(() => this.tasks = this.$store.state.tasks)
      })
    },
    async completeTask(id) {
      try {
        //update a task status to completed
        const resp = await axios.patch(`http://localhost:5119/api/Task/Complete/${id}`);
        return resp.data;
      } catch (err) {
        console.error(err);
      }
    }


  }

}
</script>

<style scoped>
.check-box {
  position: relative;
  top: 7px;
  cursor: pointer;
  width: 15px;
  height: 15px;
  border: 2px solid grey;
  border-radius: 50%;
  background-color: hsla(0, 0%, 50.2%, .1);
  color: grey;
}

.tick {
  display: block;
  position: relative;
  right: 5px;
  bottom: 5px;
}

</style>
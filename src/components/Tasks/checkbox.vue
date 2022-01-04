<template>
  <!--  <input v-model="completed" :style="[priority == 0 ? priority == 1 : {}]" type="checkbox">-->
  <div :class=priorityEnum(priority)
       class="check-box"
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
export default {
  name: "checkbox.vue",
  props: ['isDone', 'priority'],
  data() {
    return {
      hover: false,
      completed: this.isDone
    }
  },
  methods: {
    priorityEnum(priority) {
      switch (priority) {
        case 0:
          return 'none'
        case 1:
          return 'low'
        case 2:
          return 'medium'
        case 3:
          return 'high'
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

.low {
  background-color: rgba(209, 69, 59, .1);
  border-color: #d1453b;
  color: #d1453b;
}

.medium {
  background-color: rgba(235, 137, 9, .1);
  border-color: #eb8909;
  color: #eb8909;

}

.high {
  background-color: rgba(36, 111, 224, .1);
  border-color: #246fe0;
  color: #246fe0;
}
</style>
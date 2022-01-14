<template>
  <span class="svg-button" @click="changePopperVisibility">
    <svg-flag :color="findColor()"></svg-flag>
  </span>
  <priority-context v-if="popper" :priorities="priorities"></priority-context>
</template>

<script>
import SvgFlag from "@/components/Svg/SvgFlag";
import PriorityContext from "@/components/NewTask/Priority/PriorityContext";

export default {
  name: "Priority",
  components: {PriorityContext, SvgFlag},
  emits: ['update-priority'],
  data() {
    return {
      popper: false,
      selected: 4,
      priorities: [
        {
          number: 1,
          color: "#d1453b",
        },
        {
          number: 2,
          color: "#EB8909"
        },
        {
          number: 3,
          color: "#246fe0"
        },
        {
          number: 4,
          color: ""
        }
      ]
    }
  },
  methods: {
    changePopperVisibility() {
      this.popper = !this.popper;
    },
    findColor() {
      return this.priorities.find(found => found.number === this.selected).color
    }
  }
}
</script>

<style scoped>

span {
  position: relative;
  margin-left: 10px;
  display: inline-block;
  width: 24px;
  height: 24px;
  cursor: pointer;
  background-color: white;
}

span:hover {
  border-radius: 0.25rem;
  background-color: var(--buttonHover);
}


</style>
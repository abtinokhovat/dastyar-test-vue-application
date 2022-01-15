<template>
  <div class="contextmenu">
    <ul>
      <li v-for="priority in priorities" :key="priority.number" @click="changePriority(priority.number)">
        <svg-flag :color="priority.color"></svg-flag>
        <div>Priority {{ priority.number }}</div>
        <svg-tick v-show="this.selected === priority.number" class="tick" color="#DD4B39"></svg-tick>
      </li>
    </ul>
  </div>
</template>

<script>
import SvgFlag from "@/components/Svg/SvgFlag";
import SvgTick from "@/components/Svg/SvgTick";

export default {
  name: "PriorityContext",
  components: {SvgTick, SvgFlag},
  props: {
    priorities: {
      number: Number,
      color: String
    },
    selected: Number
  },
  methods: {
    changePriority(id) {
      this.$parent.popper = false
      this.$parent.selected = id
      this.$parent.$emit('update-priority', id)
    }
  }
}
</script>

<style scoped>

.contextmenu {
  padding: 0;
  position: absolute;
  margin-right: 10px;
  background-color: white;
  min-width: 200px;
  width: auto;
  height: auto;
  border: 1px solid;
  border-color: var(--borderColor);
  border-radius: var(--borderRadius);
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 8%);
}

ul {
  padding: 0;
  list-style: none;
}

li {
  padding: 5px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid;
  border-color: var(--borderColor);
}

li:hover {
  background-color: var(--buttonHover);
  cursor: pointer;
}

ul li div {
  flex-grow: 1;
  padding: 2px 0 0 5px;
  font-size: 13px;
}

.tick {
  position: relative;
  top: 6px;
  right: 5px;
}
</style>
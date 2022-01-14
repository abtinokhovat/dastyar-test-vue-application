<template>
  <div v-if="showButton" class="new-task"
       @click="unHideTemplate"
       @mouseleave="mouseLeave()"
       @mouseover="mouseOver()"
  >
    <div id="plus-icon" :style="this.buttonStyles">
      <svg height="13" width="13">
        <path d="M6 6V.5a.5.5 0 0 1 1 0V6h5.5a.5.5 0 1 1 0 1H7v5.5a.5.5 0 1 1-1 0V7H.5a.5.5 0 0 1 0-1H6z"
              fill="currentColor"></path>
      </svg>
    </div>

    <div id="text" :style="this.textStyles">
      {{ this.text }}
    </div>

  </div>
  <new-task-template v-if="showTemplate"></new-task-template>
</template>

<script>

import NewTaskTemplate from "@/components/NewTask/NewTaskTemplate";

export default {
  name: "NewTask",
  props: ['text'],
  inheritAttrs: false,
  components: {NewTaskTemplate},
  data() {
    return {
      showTemplate: false,
      showButton: true,
      buttonStyles: {
        color: '#DD4B39',
        backgroundColor: 'white',
      },
      textStyles: {
        color: 'gray'
      }
    }
  },
  methods: {
    /* Change style of button on hover  */
    mouseOver() {
      this.textStyles = {
        color: '#DD4B39'
      }
      this.buttonStyles = {
        color: 'white',
        backgroundColor: '#DD4B39',
      }
    },
    /* Revert style of button on hover end */
    mouseLeave() {
      this.textStyles = {
        color: 'gray'
      }
      this.buttonStyles = {
        color: '#DD4B39',
        backgroundColor: 'white',
      }
    },
    /* Show or UnHide the new task Template */
    unHideTemplate() {
      this.showTemplate = true;
      this.showButton = false;
    }
  }
}
</script>

<style scoped>
.new-task {
  cursor: pointer;
  display: flex;
  text-align: left;
  padding: 16px 0 2px 0;
}

#text {
  font-size: 14px;
  padding: 1px 0 0 5px;
}

#plus-icon {
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  height: 20px;
  width: 20px;
  background-color: white;
  color: #DD4B39;
}

</style>
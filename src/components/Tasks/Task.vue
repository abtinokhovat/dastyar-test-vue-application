<template>
  <div class="task">
    <div class="flex-item">
      <checkbox :isDone="taskObject.isDone" :priority="taskObject.priority"></checkbox>
    </div>
    <div class="flex-item flex-item2">
      <div class="name flex-items">
        {{ taskObject.name }}
      </div>
      <div class="description flex-items">
        {{ taskObject.description }}
      </div>
      <attributes :date="taskObject.dueDate" :label="taskObject.label"></attributes>
    </div>
  </div>

</template>

<script>
import Checkbox from './checkbox'
import Attributes from './Attributes/Attributes'

export default {
  name: "Task.vue",
  components: {Checkbox, Attributes},
  props: ['task'],
  data() {
    return {
      taskObject: this.task
    }
  }
}
</script>

<style scoped>
.task {
  display: flex;
  padding: 0;
  cursor: pointer;
  max-width: 750px;
  border-bottom: 1px solid #F0F0F0;
}

.description {
  font-size: 12px;
}

.name {
  font-size: 14px;
  line-height: 21px;
}

.flex-item {
  margin: 5px;
}

.flex-items {
  text-align: left;
  margin-top: 5px;
  margin-bottom: 5px;
}

.flex-item2 {
  flex-grow: 1;
}


</style>
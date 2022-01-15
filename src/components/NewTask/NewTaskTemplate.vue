<template>
  <div id="new-task-template">
    <div id="inputs">
      <div id="name-description">
        <div style="display: flex">
          <div v-show="(Object.keys(tasks).length !== 0)" class="label-name">
            <svg-label-filled class="svg-label" color="white"></svg-label-filled>
            <div>{{ tasks.name }}</div>
          </div>
          <input id="name"
                 v-model="taskName" class="inputs" placeholder="e.g., Renew gym every May 1st #Health" type="text"
                 @keypress.enter="newTask">
        </div>
        <textarea id="description" v-model="description"
                  class="inputs"
                  placeholder="Description"
        ></textarea>
      </div>
      <div id="buttons-footer">
        <schedule></schedule>
        <div>
          <add-label></add-label>
          <priority @update-priority="updatePriority"></priority>
        </div>
      </div>
    </div>
    <div id="buttons">
      <button id="add-task"
              :class="{deActive:!taskName}"
              @click="newTask">
        Add Task
      </button>
      <button id="cancel-button" @click="hide">
        Cancel
      </button>
    </div>
  </div>
  <div></div>


</template>

<script>
import {Label} from "@/classes/Label";
import Task, {User} from "@/classes/Task";
import Priority from "@/components/NewTask/Priority/Priority";
import Schedule from "@/components/NewTask/NewTaskSchedule";
import AddLabel from "@/components/NewTask/Label/AddLabel";
import SvgLabelFilled from "@/components/Svg/SvgLabelFilled";

export default {
  name: "NewTaskTemplate",
  components: {SvgLabelFilled, AddLabel, Schedule, Priority},
  data() {
    return {
      taskName: '',
      description: '',
      priority: 4
    }
  },
  methods: {
    //Hide the new task Template
    hide() {
      this.$parent.showTemplate = false;
      this.$parent.showButton = true;
    },
    newTask() {
      //hard Coded user id
      const userId = "a18f6e3a-0f71-43d5-a6e4-d06bc4d3655f";
      const user = new User(userId);
      const labelId = (Object.keys(this.$store.state.selectedLabel).length === 0) ? 1 : this.$store.state.selectedLabel.id;
      const label = new Label(labelId);
      const priority = this.priority;
      const task = new Task(this.taskName, user, this.description, label, priority);
      task.postTask(task
      ).then(() =>
          //updating state with new data
          this.$store.dispatch('getTasks')
              .then(() => this.tasks = this.$store.state.tasks)
      ).then(() => {
            //empty inputs after adding task
            this.taskName = ''
            this.description = ''
            //empty label in store
            this.$store.commit('selectLabel', {})

          }
      )
    },
    //event for updating priority
    updatePriority(priority) {
      this.priority = priority
    },

  },
  computed: {
    tasks: {
      get() {
        return this.$store.state.selectedLabel
      }
    }
  }
}
</script>

<style scoped>


#new-task-template {
  margin-top: 10px;
  text-align: left;
  max-width: 750px;
}

#inputs {
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid;
  border-color: var(--borderColor);
  border-radius: 0.25rem;
}

#name {
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
}

#description {
  font-size: 13px;
  line-height: 18px;
  overflow: hidden;
  min-height: 20px;
  resize: none;
}

#buttons-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.inputs {
  width: 100%;
  max-width: 800px;
  background: transparent;
  border: transparent;
}

.label-name {
  display: flex;
  align-items: center;
  padding-right: 3px;
  background-color: #DD4B39;
  color: white;
  border-radius: var(--borderRadius);
  font-size: 14px;
  font-weight: 500;
  margin-right: 5px;
}

/* buttons */

#add-task, #cancel-button {
  padding: 7px 10px 7px 10px;
  font-size: 14px;
  font-weight: 500;
  border: 1px solid;
  border-color: var(--borderColor);
  border-radius: 0.25rem;
  margin-right: 10px;
  cursor: pointer;
}

#add-task {
  color: white;
  background-color: #db4c3f;
}

.deActive {
  opacity: .4;
  cursor: not-allowed;
}

#cancel-button {
  background-color: white;
}

#cancel-button:hover {
  background-color: var(--buttonHover);
}


</style>
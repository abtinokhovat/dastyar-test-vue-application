import { createStore } from "vuex";
import Task from "@/classes/Task";
import { Label } from "@/classes/Label";

export default createStore({
  state() {
    return {
      tasks: [],
      labels: [],
      selectedLabel: {},
      poppers: {
        label: false,
        priority: false,
      },
    };
  },
  getters: {
    getLabels(state) {
      return state.labels;
    },
    getPoppers: (state) => (popper) => {
      return state.poppers[popper];
    },
  },
  mutations: {
    togglePopper(state, popper) {
      //close other poppers if open
      for (const pop in state.poppers) {
        if (pop !== popper) {
          state.poppers[pop] = false;
        }
      }
      state.poppers[popper] = !state.poppers[popper];
    },
    setTasks(state, tasks) {
      state.tasks = tasks;
    },
    setLabels(state, labels) {
      state.labels = labels;
    },
    selectLabel(state, label) {
      state.selectedLabel = label;
    },
  },
  actions: {
    getTasks(context) {
      const tasks = new Task();
      tasks.getTasks().then((tasks) => context.commit("setTasks", tasks));
    },
    getLabels(context) {
      const label = new Label();
      label.getLabels().then((labels) => context.commit("setLabels", labels));
    },
  },
});

import { createStore } from "vuex";
import Task from "@/classes/Task";

export default createStore({
  state() {
    return {
      tasks: [],
    };
  },
  mutations: {
    getTasks(state, tasks) {
      state.tasks = tasks;
    },
  },
  getters: {
    getNewTask(state) {
      return state.newTask;
    },
  },
  actions: {
    getTasks(context) {
      const tasks = new Task();
      tasks.getTasks().then((tasks) => context.commit("getTasks", tasks));
    },
  },
});

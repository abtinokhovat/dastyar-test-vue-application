import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";
import Task from "@/Classes/Task";

const app = createApp(App);
const store = createStore({
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
  actions: {
    getTasks(context) {
      const tasks = new Task();
      tasks.getTasks().then((tasks) => context.commit("getTasks", tasks));
    },
  },
});

app.use(store);
app.mount("#app");

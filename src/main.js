import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";
import axios from "axios";

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
    async getTasks(context) {
      try {
        //getting tasks from api
        const resp = await axios.get("http://localhost:5119/api/Tasks");
        //sorting tasks by the order
        const tasks = resp.data.response.sort((a, b) => {
          if (a.order < b.order) return -1;
          if (a.order > b.order) return 1;
          return 0;
        });
        context.commit("getTasks", tasks);
        console.log(this.state.tasks);
      } catch (err) {
        console.error(err);
      }
    },
  },
});

app.use(store);
app.mount("#app");

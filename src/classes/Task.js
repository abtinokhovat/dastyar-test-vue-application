import axios from "axios";

export default class Task {
  constructor(
    name,
    user,
    description = "",
    label = 1,
    priority = 4,
    dueDate = null,
    subTasks = [],
    order,
    assigned = null,
    isDone = false
  ) {
    this.name = name;
    this.isDone = isDone;
    this.description = description;
    this.label = label;
    this.user = user;
    this.priority = priority;
    this.dueDate = dueDate;
    this.subTasks = subTasks;
    this.order = order;
    this.assigned = assigned;
  }

  async postTask(data) {
    try {
      const resp = await axios.post("http://localhost:5119/api/Task", data);
      return resp.data;
    } catch (err) {
      console.error(err);
    }
  }

  async getTasks() {
    try {
      //getting tasks from api
      const resp = await axios.get("http://localhost:5119/api/Tasks");
      //sorting tasks by the order
      return resp.data.response.sort((a, b) => {
        if (a.order < b.order) return -1;
        if (a.order > b.order) return 1;
        return 0;
      });
    } catch (err) {
      console.error(err);
    }
  }

  async completeTask(id) {
    try {
      //update a task status to completed
      const resp = await axios.patch(
        `http://localhost:5119/api/Task/Complete/${id}`
      );
      return resp.data;
    } catch (err) {
      console.error(err);
    }
  }
}

export class User {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}

export class Label {
  constructor(id, name, order, color) {
    this.id = id;
    this.name = name;
    this.color = color;
    this.order = order;
  }
}

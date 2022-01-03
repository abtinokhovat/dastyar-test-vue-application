Vue.createApp();

class Task {
  constructor(
    name,
    user,
    description = "",
    label = 1,
    isDone = false,
    priority = 0,
    dueDate = null,
    subTasks = [],
    order,
    assigned = null
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
}

class User {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}

class Label {
  constructor(id, name, order, color) {
    this.id = id;
    this.name = name;
    this.color = color;
    this.order = order;
  }
}

async function getTasks() {
  try {
    const resp = await axios.get("http://localhost:5119/api/Task");
    return resp.data;
  } catch (err) {
    console.error(err);
  }
}

async function postTask(data) {
  try {
    console.log(data);
    const resp = await axios.post("http://localhost:5119/api/Task", data);
    return resp.data;
  } catch (err) {
    console.error(err);
  }
}

function renderTasks(tasks) {
  const ulTask = document.getElementById("task-ul");
  ulTask.innerHTML = "";

  for (let task of tasks) {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(task.name));
    ulTask.appendChild(li);
  }
}

function renderErrorMessage(err) {
  const p = document.createElement("p");
  const node = document.createTextNode(`Error message:${err}`);
  p.appendChild(node);
  const container = document.getElementsByClassName("container");
  p.setAttribute("id", "error-message");
  container[0].appendChild(p);
}

getTasks().then((res) =>
  res.succeeded ? renderTasks(res.response) : renderErrorMessage(res.message)
);

function initTaskUI() {
  document.getElementById("task-edit").style.display = "none";
  document.getElementById("task-edit").style.display = "block";
}

function newTask() {
  const name = document.getElementById("task-name").value;
  const desc = document.getElementById("task-description").value;

  const userId = "a18f6e3a-0f71-43d5-a6e4-d06bc4d3655f";
  const user = new User(userId);
  const label = new Label(1);
  const task = new Task(name, user, desc, label);
  postTask(task).then((res) => {
    renderErrorMessage(res.message);
    getTasks().then((res) =>
      res.succeeded
        ? renderTasks(res.response)
        : renderErrorMessage(res.message)
    );
  });
  //TODO:hide task-edit
}

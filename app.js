async function getTasks() {
    try {
        const resp = await axios.get('http://localhost:5119/api/Task');
        return (resp.data.succeeded) ? resp.data.response : resp.data.message;

    } catch (err) {
        console.error(err);
    }
}

function renderTasks(tasks) {
    const ulTask = document.getElementById('task-ul');
    for (let task of tasks) {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(task.name));
        ulTask.appendChild(li);
    }

}

getTasks().then(res => renderTasks(res));
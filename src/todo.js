const createProject = (title, description) => {
    const newProject = {
        title,
        description,
        todoList: [],
    }

    const getProject = () => {
        return newProject;
    }
    
    const getTodoList = () => {
        return newProject.todoList;
    }
    return {getProject, getTodoList};
}

const storageFirstLoad = () => {
    if (localStorage.length > 0) return;
    const inbox = createProject('inbox', 'the default');
    const projectList = loadLocalStorage();

    projectList.push(inbox.getProject());
    localStorage.setItem('projectList', JSON.stringify(projectList));
}

const loadLocalStorage = () => {
    if (localStorage.length === 0) {
        const projectList = [];
        localStorage.setItem('projectList', JSON.stringify(projectList));
        return projectList;
    }
    else {
        const projectList = JSON.parse(localStorage.getItem('projectList'));
        return projectList;
    }
}

const createTodo = (title, description = "", dueDate = "", priority = null, project = loadLocalStorage()[0]) => {
    const newTodo = {
        title,
        description,
        dueDate,
        priority,
        complete: false,
        notes: "",
        project,
    }

    return newTodo;
}

const addTask = () => {
    const taskName = document.querySelector('#task-name-input').value;
    const taskDescription = document.querySelector('#task-description-input').value;

    const projectList = loadLocalStorage();
    const inbox = projectList[0];

    const newTodo = createTodo(taskName, taskDescription);
    inbox.todoList.push(newTodo);

    localStorage.setItem('projectList', JSON.stringify(projectList));

    console.log(projectList);


    
}


export {
    addTask, storageFirstLoad
};


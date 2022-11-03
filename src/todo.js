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

const createTodo = (title, description = "", dueDate = "", priority = null, project = inbox.getProject()) => {
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


const inbox = createProject('inbox', 'the default');
projectList.push(inbox.getProject());
const cleanRoom = createTodo('clean room');

const loadLocalStorage = () => {
    if (localStorage.length === 0) return;
    localStorage.getItem('projectList');
}


export default function todo() {
    console.log(cleanRoom);
}


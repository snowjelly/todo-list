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

const inbox = createProject('inbox', 'the default');

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

    const addToProject = () => ({
        
    })();
    return newTodo;
}


const cleanRoom = createTodo('clean room');

export default function todo() {
    console.log(cleanRoom);
}


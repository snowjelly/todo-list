import { sidebarDiv, removeProjectMenu } from "./pages/sidebar";
import { render } from "./functions/firstLoad";
import { format, isPast, isThisYear, isValid } from 'date-fns';
import { confirmDeletionIsolatedContainer } from "./pages/inbox";

const createProject = (title, description, selected = false) => {
    const newProject = {
        title,
        description,
        selected,
        todoList: [],
    }

    const getProject = () => {
        return newProject;
    }

    const getTodoList = () => {
        return newProject.todoList;
    }
    return { getProject, getTodoList };
}

const storageFirstLoad = () => {
    if (localStorage.length > 0) return;
    const inbox = createProject('inbox', 'the default', true);
    const projectList = [];

    projectList.push(inbox.getProject());
    localStorage.setItem('projectList', JSON.stringify(projectList));
}

const loadLocalStorage = () => {
    const projectList = JSON.parse(localStorage.getItem('projectList'));
    return projectList;
}

const createTodo = (title = "", description = "", project = loadLocalStorage()[0].title, dueDate, priority = 4) => {
    const newTodo = {
        title,
        description,
        project,
        dueDate,
        priority,
        selected,
    }

    return newTodo;
}

const addTaskToStorage = () => {
    const get = () => {
        const taskName = document.querySelector('#task-name-input').value;
        if (taskName === "") {
            return false;
        }
        const taskDescription = document.querySelector('#task-description-input').value;
        const taskDueDateInput = document.querySelector('#due-date-input');

        const projectList = loadLocalStorage();
        const taskProjectTitle = document.querySelector('#project-dropdown-menu-select').value;
        const taskProject = projectList[searchForProject(taskProjectTitle)];

        const validDueDate = getValidDueDate(taskDueDateInput);
        const taskDueDate = validDueDate;

        const taskPriority = document.querySelector('#priority-select').value;

        const newTodo = createTodo(taskName, taskDescription, taskProject.title, taskDueDate, taskPriority);
        taskProject.todoList.push(newTodo);

        updateLocalStorage(projectList);
        resetHTML();
        return true;
    }
    return { get };
}

const searchForProject = (projectTitle) => {
    const projectList = loadLocalStorage();

    for (let i = 0; i < projectList.length; i++) {
        if (projectList[i].title === projectTitle) {
            const foundProjectId = i;
            return foundProjectId;
        }
    }
}

const createDueDateObject = (dateObject) => {
    if (isValid(dateObject) === false) return {
        dateObject,
        valid: false,
    }

    const overdue = (isPast(dateObject)) ? true : false;

    return {
        dateObject,
        valid: true,
        overdue,
        readableDueDate: formatDueDate(dateObject),
    }
}

const getDueDate = (input) => {
    if (input === null) return '';

    const valueAsDate = input.valueAsDate;

    if (valueAsDate === null) return '';

    const dueDate = new Date(valueAsDate.getTime() + valueAsDate.getTimezoneOffset() * 60000);
    return dueDate;
}

const getValidDueDate = (taskDueDateInput) => {
    const dueDateObject = createDueDateObject(getDueDate(taskDueDateInput));
    if (dueDateObject.valid) {
        return dueDateObject;
    }
    else {
        return '';
    }
}

const formatDueDate = (dueDateObject) => {

    const isDueDateThisYear = (isThisYear(dueDateObject)) ? true : false;

    if (isDueDateThisYear) {
        return format(dueDateObject, 'MMM dd');
    }

    const readableDueDate = (isDueDateThisYear) ? format(dueDateObject, 'MMM dd') : format(dueDateObject, 'MMM dd yyyy');

    return readableDueDate;
}

const updateLocalStorage = (projectList) => {
    localStorage.setItem('projectList', JSON.stringify(projectList));
}

const removeTask = (e) => {
    const taskId = e.target.parentElement.dataset.listId;
    const projectList = loadLocalStorage();
    const expandedTodoContent = document.querySelector('#expanded-todo-content');

    const expandedContentTaskRemoval = () => {
        projectList[getActiveProject().id].todoList.splice(expandedTodoContent.todoListId, 1);
    }

    const viewListTaskRemoval = () => {
        projectList[getActiveProject().id].todoList.splice(taskId, 1);
    }

    if (e.target.parentElement.id === 'checkbox-container') {
        if (e.currentTarget.classList.contains('disabled')) return;
        expandedContentTaskRemoval();
    }
    else if (e.currentTarget.id === 'confirm-deletion-btn') {
        expandedContentTaskRemoval();
    }
    else if (e.target.parentElement.className === 'todo-list-item') {
        viewListTaskRemoval();
    }

    updateLocalStorage(projectList);
    resetHTML();
}

const resetHTML = () => {
    const rootContent = document.querySelector('#content');
    while (rootContent.children.length > 0) {
        rootContent.children[0].remove();
    }
    render();
    const todoList = loadLocalStorage()[getActiveProject().id].todoList;
    
    for (let i=0;i<todoList.length;i++) {
        if (todoList[i].selected === true) {
            todoList[i].selected = false;
        }
    }
}

const getSelectedTodo = () => {
    const todoList = loadLocalStorage()[getActiveProject().id].todoList;
    for (let i=0;i<todoList.length;i++) {
        if (todoList[i].selected === true) {
            return todoList[i];
        }
    }
}

const addDueDateInput = (e) => {
    if (e.target.id === 'due-date-input') return;
    const container = e.currentTarget;
    if (container.children[2] !== undefined && container.children[2].id === 'due-date-input') return;

    const dueDateInput = document.createElement('input');

    dueDateInput.id = 'due-date-input';
    dueDateInput.type = 'date';
    container.appendChild(dueDateInput);
    dueDateInput.focus();
    return dueDateInput;
}

const openRemoveProjectConfirmationMenu = (e) => {
    const listId = e.target.parentElement.dataset.listId;
    const projectList = loadLocalStorage();


    confirmDeletionIsolatedContainer(projectList[listId]).appendToParent(`#project-list > li[data-list-id="${listId}"]`);
}

const removeProject = (e) => {
    const listId = e.target.parentElement.parentElement.parentElement.parentElement.dataset.listId;
    const projectList = loadLocalStorage();
    if (listId === 0) return;

    projectList.splice(listId, 1);
    updateLocalStorage(projectList);

    resetHTML();
}

const selectProject = (e, checkIfEventInput = true) => {
    const projectList = loadLocalStorage();

    if (checkIfEventInput) {
        if (e.target.className === "trash-image") return;
        const listId = e.currentTarget.dataset.listId;
    
        if (projectList[listId] === undefined || projectList[listId].selected === true) return;
        e.target.classList.add('stone-200');
    
        projectList[getActiveProject().id].selected = false;
        projectList[listId].selected = true;
    
        updateLocalStorage(projectList);
    
        const content = document.querySelector('#content');
    
        while (content.children.length > 0) {
            content.children[0].remove();
        }
        render();
    }
    else if (checkIfEventInput === false) {
        const projectListId = e;
        const projectListItem = document.querySelector(`.project-list-item[data-list-id="${projectListId}"`);

        if (projectList[projectListId] === undefined || projectList[projectListId].selected === true) return;

        if (projectListItem === null) {
            document.querySelector('#filter-inbox').classList.add('stone-200');
        }
        else {
            projectListItem.classList.add('stone-200');
        }

        projectList[getActiveProject().id].selected = false;
        projectList[projectListId].selected = true;

        updateLocalStorage(projectList);
    
        const content = document.querySelector('#content');
    
        while (content.children.length > 0) {
            content.children[0].remove();
        }
        render();
    }
}

const getActiveProject = () => {
    const projectList = loadLocalStorage();

    const getActiveProjectId = () => {
        const inboxId = 0;

        for (let i = 0; i < projectList.length; i++) {
            if (projectList[i].selected === false) continue;

            const activeProjectId = i;
            return activeProjectId;
        }
        projectList[inboxId].selected = true;
        updateLocalStorage(projectList);
        return inboxId;
    }

    const id = getActiveProjectId();

    const getActiveProject = () => {
        const activeProject = projectList[id];
        return activeProject;
    }

    const activeProject = getActiveProject();

    return { activeProject, id };
}

const shortenString = (unshortenedString, maxLength) => {

    const tooLong = () => {
        if (unshortenedString.length > maxLength) {
            return true;
        }
        else {
            return false;
        }
    }

    if (tooLong()) {
        const shortenedString = unshortenedString.slice(0, maxLength) + '...';
        return shortenedString;
    }
    else if (tooLong() === false) {
        return unshortenedString;
    }

}

const addProject = (e) => {
    const projectName = document.querySelector('#project-menu-name-input');
    if (projectName.value === "") return;
    const projectList = loadLocalStorage();
    const newProject = createProject(projectName.value);
    projectList.push(newProject.getProject());
    updateLocalStorage(projectList);
    removeProjectMenu();
    const projectListElement = document.querySelector('#project-list');
    while (projectListElement.children.length > 0) {
        projectListElement.children[0].remove();
    }
    sidebarDiv().bottomMenu.renderProjectList(projectListElement);
}

const enableAddBtn = (e) => {
    const textInput = e.currentTarget;

    const getAddBtn = () => {
        for (let i = 0; i < textInput.form.length; i++) {
            if (textInput.form[i].classList.contains('add-btn')) {
                return textInput.form[i];
            }
        }
    }

    const addBtn = getAddBtn();

    if (textInput.value !== "") {
        addBtn.disabled = false;
        addBtn.classList.remove('disabled');
    }
    else {
        addBtn.disabled = true;
        addBtn.classList.add('disabled');
    }
}

const getTaskProjectTitle = () => {
    const taskProjectTitle = document.querySelector('#project-dropdown-menu-select');
    const activeProject = getActiveProject().activeProject;
    const get = () => {
        if (selected()) {
            return taskProjectTitle.value;
        }
        else if (selected() === false) {
            return activeProject.title;
        }
    }

    const selected = () => {
        if (taskProjectTitle !== null) {
            return true;
        }
        else if (taskProjectTitle === null) {
            return false;
        }
    }
    return { get };
}

const updateProject = (e) => {
    const projectList = loadLocalStorage();
    const todoListId = document.querySelector('#expanded-todo-content').todoListId;

    projectList[getActiveProject().id].todoList[todoListId].project = e.target.value;

    const todoBeingMoved = projectList[getActiveProject().id].todoList.splice(todoListId, 1)[0];


    for (let i = 0; i < projectList.length; i++) {
        if (projectList[i].title === e.target.value) {
            projectList[i].todoList.push(todoBeingMoved);
            updateLocalStorage(projectList);
            return { projectListId: i, todoListId: projectList[i].todoList.length - 1};
        }
    }
}


export {
    addTaskToStorage, storageFirstLoad, loadLocalStorage, removeTask, addProject, openRemoveProjectConfirmationMenu, removeProject, selectProject, getActiveProject, addDueDateInput, resetHTML, formatDueDate, getTaskProjectTitle, shortenString, enableAddBtn, updateLocalStorage, updateProject, getValidDueDate
};


import { addTask } from "../todo";
import { loadLocalStorage } from "../todo";
import { removeTask } from "../todo";

const inbox = () => {
  const content = document.querySelector('#content');

  const viewContainer = document.createElement('div');
  viewContainer.id = `view-container`;

  const viewContent = document.createElement('div');
  viewContent.id = 'view-content';

  viewContainer.appendChild(viewContent);

  const viewHeader = (() => {
    let viewHeader = '';
    if (loadLocalStorage().length === 1) {
      viewHeader = 'Inbox';
    }
    const viewHeaderContainer = document.createElement('div');
    viewHeaderContainer.id = 'view-header-container';
  
    viewContent.appendChild(viewHeaderContainer);
  
    const viewHeaderContent = document.createElement('div');
    viewHeaderContent.id = 'view-header-content';
    viewHeaderContent.innerHTML = `
    <h1>${viewHeader}</h1>
    `;
  
    viewHeaderContainer.appendChild(viewHeaderContent);
  })();

  const viewList = (() => {
    const viewListContainer = document.createElement('div');
    viewListContainer.id = 'view-list-container';

    viewContent.appendChild(viewListContainer);

    const viewListContent = document.createElement('div');
    viewListContent.id = 'view-list-content';

    const viewList = document.createElement('ul');
    viewList.id = 'view-list';

    const todoListItems = (() => {
      const inbox = loadLocalStorage()[0];

      const clearTodoListItems = () => {
        while (viewList.children > 0) {
          viewList.children[0].remove();
        }
      }

      const renderTodoListItems = (() => {
        for (let i=0;i<inbox.todoList.length;i++) {
          const todoListItem = document.createElement('li');
          todoListItem.classList.value = 'todo-list-item';
          todoListItem.setAttribute('data-list-id', `${i}`);
      
          const todoListItemCheckbox = document.createElement('div');
          todoListItemCheckbox.classList.value = 'checkbox';
      
          todoListItem.appendChild(todoListItemCheckbox);
      
          const todoListItemText = document.createElement('p');
          todoListItemText.textContent = `${inbox.todoList[i].title}`;
    
          todoListItem.appendChild(todoListItemText);
      
          viewList.appendChild(todoListItem);
  
          todoListItemCheckbox.addEventListener('click', removeTask);
        }
      })();

    })();
    
    viewListContent.appendChild(viewList);

    viewListContainer.appendChild(viewListContent);

    const getAddTaskContent = (() => {
      const addTaskContent = document.createElement('div');
      addTaskContent.id = 'add-task-content';
      
      const addTaskImage = document.createElement('div');
      addTaskImage.id = 'add-task-image';
    
      addTaskContent.appendChild(addTaskImage);
    
      const addTaskText = document.createElement('p');
      addTaskText.id = 'add-task-text';
      addTaskText.textContent = 'Add task';
    
      addTaskContent.appendChild(addTaskText);

      viewListContainer.appendChild(addTaskContent);
      
      return addTaskContent;
    })();

    return {getAddTaskContent, viewListContainer};
  })();

  
  const openAddTaskMenu = () => {
    viewList.getAddTaskContent.remove();

    const addTaskMenu = (() => {
      const container = document.createElement('div');
      container.id = 'add-task-menu-container';

      const content = document.createElement('div');
      content.id = 'add-task-menu-content';

      const form = document.createElement('form');
      form.id = 'add-task-menu-form';

      content.appendChild(form);

      const formTextAreaContent = document.createElement('div');
      formTextAreaContent.id = 'form-textarea-content';
      
      form.appendChild(formTextAreaContent);

      const taskNameLabel = document.createElement('label');
      taskNameLabel.id = 'task-name';

      formTextAreaContent.appendChild(taskNameLabel);

      const taskNameInput = document.createElement('input');
      taskNameInput.setAttribute('type', 'textarea');
      taskNameInput.setAttribute('name', 'task-name');
      taskNameInput.setAttribute('placeholder', 'Task name');
      taskNameInput.setAttribute('maxlength', '500');
      taskNameInput.setAttribute('minlength', '1');
      taskNameInput.id = 'task-name-input';

      
      taskNameLabel.appendChild(taskNameInput);

      const taskDescriptionLabel = document.createElement('label');
      taskDescriptionLabel.id = 'task-description';

      formTextAreaContent.appendChild(taskDescriptionLabel);

      const taskDescriptionInput = document.createElement('input');
      taskDescriptionInput.setAttribute('type', 'textarea');
      taskDescriptionInput.setAttribute('name', 'task-description');
      taskDescriptionInput.setAttribute('placeholder', 'Description');
      taskDescriptionInput.setAttribute('maxlength', '500');
      taskDescriptionInput.setAttribute('minlength', '1');
      taskDescriptionInput.id = 'task-description-input';

      taskDescriptionLabel.appendChild(taskDescriptionInput);

      container.appendChild(content);
      viewContent.appendChild(container);
    })();

    const addTaskActionButtons = (() => {
      const container = document.createElement('div');
      container.id = 'add-task-action-buttons-container';

      const content = document.createElement('div');
      content.id = 'add-task-action-buttons-content';

      container.appendChild(content);

      const cancelBtn = (() => {
        const cancelBtn = document.createElement('button');
        cancelBtn.id = 'cancel-btn';
        cancelBtn.textContent = 'Cancel';

        content.appendChild(cancelBtn);

        cancelBtn.addEventListener('click', (e) => {
          container.remove();
          document.querySelector('#add-task-menu-container').remove();
          viewList.viewListContainer.appendChild(viewList.getAddTaskContent);
        });
      })();

      const addTaskBtn = document.createElement('button');
      addTaskBtn.id = 'add-task-btn';
      addTaskBtn.textContent = 'Add task';

      content.appendChild(addTaskBtn);

      addTaskBtn.addEventListener('click', addTask);

      viewContent.appendChild(container);
    })();
  }

  viewList.getAddTaskContent.addEventListener('click', openAddTaskMenu);

  content.appendChild(viewContainer);
}

export default inbox;
import taskDueDateImage from '../assets/imgs/due-date.png';
import taskProjectImage from '../assets/imgs/inbox.png';
import { addTask, getActiveProject, expandTodo, removeTask, addDueDateInput} from "../todo";

const inbox = () => {

  const contentDiv = () => {
    const get = () => {
      const div = document.querySelector('#content');
      div.appendChild(viewContainerDiv().get());
      return div;
    }

    const viewContainerDiv = () => {
      const get = () => {
        const div = document.createElement('div');
        div.id = `view-container`;
        div.appendChild(viewContentDiv().get());
        return div;
      }

      const viewContentDiv = () => {
        const get = () => {
          const div = document.createElement('div');
          div.id = 'view-content';
          div.appendChild(viewHeaderContainerDiv().get());
          div.appendChild(viewListContainerDiv().get());
          return div;
        }

        const viewHeaderContainerDiv = () => {
          const get = () => {
            const div = document.createElement('div');
            div.id = 'view-header-container';
            div.appendChild(viewHeaderContentDiv().get());
            return div;
          }
          const viewHeader = getActiveProject().activeProject.title;

          const viewHeaderContentDiv = () => {
            const get = () => {
              const div = document.createElement('div');
              div.id = 'view-header-content';
              div.innerHTML = `
              <h1>${viewHeader}</h1>
              `;
              return div;
            }
            
            return { get };
          }

          return { get };
        }

        const viewListContainerDiv = () => {
          const get = () => {
            const div = document.createElement('div');
            div.id = 'view-list-container';
            div.appendChild(viewListContentDiv().get());
            div.appendChild(addTaskContentDiv().get());
            return div;
          }       

          const viewListContentDiv = () => {
            const get = () => {
              const div = document.createElement('div');
              div.id = 'view-list-content';
              div.appendChild(viewListUl().get());
              return div;
            }

            const viewListUl = () => {
              const get = () => {
                const ul = document.createElement('ul');
                ul.id = 'view-list';
                todoListItems().render(ul);
                return ul;
              }

              const todoListItems = () => {
                const render = (viewList) => {
                  const activeProject = getActiveProject().activeProject;
                  const ul = viewList;

                  
                  for (let i=0;i<ul.children.length;i++) {
                    ul.children[i].remove();
                  }
                  

                  for (let i=0;i<activeProject.todoList.length;i++) {
          
                    const todoListItemLi = () => {
          
                      const get = () => {
                        const li = document.createElement('li');
                        li.classList.value = 'todo-list-item';
                        li.setAttribute('data-list-id', `${i}`);
                        li.addEventListener('click', expandTodo);
                        li.appendChild(todoListItemCheckboxDiv().get());
                        li.appendChild(todoListItemContent().get());
                        return li;
                      }
          
                      const todoListItemCheckboxDiv = () => {
                        const get = () => {
                          const div = document.createElement('div');
                          div.classList.add('checkbox');
                          div.addEventListener('click', removeTask);
                          return div;
                        }
                        return { get };
                      }
          
                      const todoListItemContent = () => {
          
                        const get = () => {
                          const div = document.createElement('div');
                          div.classList.add('list-item-content');
                          div.appendChild(todoListItemTitleP().get());
                          div.appendChild(todoListItemDescriptionP().get());
                          return div;
                        }
            
                        const todoListItemTitleP = () => {
          
                          const get = () => {
                            const p = document.createElement('p');
                            p.textContent = `${activeProject.todoList[i].title}`;
                            return p;
                          }
                          return { get };
                        }
            
                        const todoListItemDescriptionP = () => {
                          
                          const get = () => {
                            const p = document.createElement('p');
                            p.textContent = `${activeProject.todoList[i].description}`;
                            p.classList.add('list-item-description');
                            return p;
                          }
                          return { get };
                        }
                        return { get };
                      }
                      return { get }
                    }

                    ul.appendChild(todoListItemLi().get());
                  }
                }
                return { render };
              }
              return { get };
            }
            return { get };
          }

          const addTaskContentDiv = () => {
            const get = () => {
              const div = document.createElement('div');
              div.id = 'add-task-content';
              div.appendChild(addTaskImageDiv().get());
              div.appendChild(addTaskTextP().get());
              div.addEventListener('click', openAddTaskMenu);
              return div;
            }

            const addTaskImageDiv = () => {
              const get = () => {
                const div = document.createElement('div');
                div.id = 'add-task-image';
                return div;
              }
              return { get };
            }

            const addTaskTextP = () => {
              const get = () => {
                const p = document.createElement('p');
                p.id = 'add-task-text';
                p.textContent = 'Add task';
                return p;
              }
              return { get };
            }

            return { get };
          }

          const openAddTaskMenu = (e) => {
            const addTaskContentDiv = e.currentTarget;
            const viewListContainerDiv = document.querySelector('#view-list-container');

            const addTaskMenuContainerDiv = () => {
              const get = () => {
                const div = document.createElement('div');
                div.id = 'add-task-menu-container';
                div.classList.add('isolated-container');
                div.addEventListener('click', remove);
                return div;
              }

              const remove = (e) => {
                if (e.currentTarget === e.target) {
                  e.target.remove();
                  viewListContainerDiv.appendChild(addTaskContentDiv);
                }
              }


              return { get };
            }

            addTaskContentDiv.remove();
            viewListContainerDiv.appendChild(addTaskMenuContainerDiv().get());
          }

          return { get };    
        }
        return { get };
      }
      return { get };
    }
    return { get };
  }

  contentDiv().get();


/*
  const openAddTaskMenu = () => {

    const addTaskMenu = (() => {
      const container = document.createElement('div');
      container.id = 'add-task-menu-container';
      container.classList.add('isolated-container');
      container.addEventListener('click', (e)=> {
        if (e.currentTarget.id === e.target.id) {
          container.remove();
          viewList.viewListContainer.appendChild(viewList.getAddTaskContent);
        }
      });

      const content = document.createElement('div');
      content.id = 'add-task-menu-content';
      content.classList.add('isolated-content');

      const form = document.createElement('form');
      form.id = 'add-task-menu-form';

      content.appendChild(form);

      const formTextArea = (() => {
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
      })();

      const formBtns = (() => {
        const formBtnContent = document.createElement('div');
        formBtnContent.id = 'form-btn-content';

        form.appendChild(formBtnContent);

        const leftSideBtns = (() => {
          const leftContent = document.createElement('div');
          leftContent.id = 'form-btn-content-left-side';

          formBtnContent.appendChild(leftContent);

          const taskDueDateLabel = document.createElement('label');
          taskDueDateLabel.classList.add('left-side-btn');
          taskDueDateLabel.id = 'due-date-btn';
          taskDueDateLabel.setAttribute('for', 'due-date-input');
          taskDueDateLabel.addEventListener('click', addDueDateInput, {once: true});

          const taskDueDateImg = new Image();
          taskDueDateImg.src = taskDueDateImage;
          taskDueDateImg.width = '20';
          taskDueDateImg.height = '20';

          taskDueDateLabel.appendChild(taskDueDateImg);

          const taskDueDateText = document.createElement('p');
          taskDueDateText.id = 'task-due-date-text';
          taskDueDateText.textContent = 'Due date';

          taskDueDateLabel.appendChild(taskDueDateText);

          leftContent.appendChild(taskDueDateLabel);

          const taskProjectLabel = document.createElement('label');
          taskProjectLabel.classList.add('left-side-btn');

          const taskProjectImg = new Image();
          taskProjectImg.src = taskProjectImage;
          taskProjectImg.width = '20';
          taskProjectImg.height = '20';

          taskProjectLabel.appendChild(taskProjectImg);

          const taskProjectText = document.createElement('p');
          taskProjectText.id = 'task-project-text';
          taskProjectText.textContent = getActiveProject().activeProject.title;

          taskProjectLabel.appendChild(taskProjectText);

          leftContent.appendChild(taskProjectLabel);
        })();

        const rightSideBtns = (() => {
          const rightContent = document.createElement('div');
          rightContent.id = 'form-btn-content-right-side';

          formBtnContent.appendChild(rightContent);

          const priorityLabel = document.createElement('label');
          
        })();

      })();

      

      container.appendChild(content);
      viewContent.appendChild(container);
    })();

    const addTaskActionButtons = (() => {
      const addTaskMenuContainer = document.querySelector('#add-task-menu-container');
      const addTaskMenuContent = document.querySelector('#add-task-menu-content');
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
          addTaskMenuContainer.remove();
          viewList.viewListContainer.appendChild(viewList.getAddTaskContent);
        });
      })();

      const addTaskBtn = (() => {
        const addTaskBtn = document.createElement('button');
        addTaskBtn.id = 'add-task-btn';
        addTaskBtn.textContent = 'Add task';
  
        content.appendChild(addTaskBtn);
  
        addTaskBtn.addEventListener('click', (e) => {
          if (addTask() !== true) return;
          container.remove();
          addTaskMenuContainer.remove();
          viewList.viewListContainer.appendChild(viewList.getAddTaskContent);
          const getViewList = document.querySelector('#view-list');
          while (getViewList.children.length > 0) {
            getViewList.children[0].remove();
          }
          viewList.todoListItems.renderTodoListItems();
        });
      })();

      addTaskMenuContent.appendChild(container);
    })();
  }


  return {viewList};
  */
}

export default inbox;
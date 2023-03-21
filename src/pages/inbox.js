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
                div.appendChild(addTaskMenuContentDiv().get());
                div.addEventListener('click', remove);
                return div;
              }

              const remove = (e) => {
                if (e.currentTarget === e.target) {
                  e.target.remove();
                  viewListContainerDiv.appendChild(addTaskContentDiv);
                }
              }

              const addTaskMenuContentDiv = () => {
                const get = () => {
                  const div = document.createElement('div');
                  div.id = 'add-task-menu-content';
                  div.classList.add('isolated-content');
                  div.appendChild(addTaskMenuForm().get());
                  return div;
                }

                const addTaskMenuForm = () => {
                  const get = () => {
                    const form = document.createElement('form');
                    form.id = 'add-task-menu-form';
                    form.appendChild(formTextAreaContentDiv().get());
                    form.appendChild(formBtnContentDiv().get());
                    return form;
                  }

                  const formTextAreaContentDiv = () => {
                    const get = () => {
                      const div = document.createElement('div');
                      div.id = 'form-textarea-content';
                      div.appendChild(taskNameLabel().get());
                      div.appendChild(taskDescriptionLabel().get());
                      return div;
                    }

                    const taskNameLabel = () => {
                      const get = () => {
                        const label = document.createElement('label');
                        label.id = 'task-name';
                        label.appendChild(taskNameInput().get());
                        return label;
                      }

                      const taskNameInput = () => {
                        const get = () => {
                          const input = document.createElement('input');
                          input.setAttribute('type', 'textarea');
                          input.setAttribute('name', 'task-name');
                          input.setAttribute('placeholder', 'Task name');
                          input.setAttribute('maxlength', '500');
                          input.setAttribute('minlength', '1');
                          input.id = 'task-name-input';
                          return input;
                        }
                        return { get };
                      }

                      return { get };
                    }

                    const taskDescriptionLabel = () => {
                      const get = () => {
                        const label = document.createElement('label');
                        label.id = 'task-description';
                        label.appendChild(taskDescriptionInput().get());
                        return label;
                      }

                      const taskDescriptionInput = () => {
                        const get = () => {
                          const input = document.createElement('input');
                          input.setAttribute('type', 'textarea');
                          input.setAttribute('name', 'task-description');
                          input.setAttribute('placeholder', 'Description');
                          input.setAttribute('maxlength', '500');
                          input.setAttribute('minlength', '1');
                          input.id = 'task-description-input';
                          return input;
                        }
                        return { get };
                      }

                      return { get };
                    }

                    return { get };
                  }

                  const formBtnContentDiv = () => {
                    const get = () => {
                      const div = document.createElement('div');
                      div.id = 'form-btn-content';
                      div.appendChild(leftSideBtnsContent().get());
                      return div;
                    }

                    const leftSideBtnsContent = () => {
                      const get = () => {
                        const div = document.createElement('div');
                        div.id = 'form-btn-content-left-side';
                        div.appendChild(dueDateBtnLabel().get());
                        div.appendChild(projectBtnLabel().get());
                        return div;
                      }

                      const dueDateBtnLabel = () => {
                        const get = () => {
                          const label = document.createElement('label');
                          label.classList.add('left-side-btn');
                          label.id = 'due-date-btn';
                          label.setAttribute('for', 'due-date-input');
                          label.appendChild(dueDateImage().get());
                          label.appendChild(dueDateText().get());
                          label.addEventListener('click', addDueDateInput, {once: true});
                          return label;
                        }

                        const dueDateImage = () => {
                          const get = () => {
                            const image = new Image();
                            image.src = taskDueDateImage;
                            image.width = '20';
                            image.height = '20';
                            return image;
                          }
                          return { get };
                        }

                        const dueDateText = () => {
                          const get = () => {
                            const p = document.createElement('p');
                            p.id = 'task-due-date-text';
                            p.textContent = 'Due date';
                            return p;
                          }
                          return { get };
                        }


                        return { get };
                      }

                      const projectBtnLabel = () => {
                        const get = () => {
                          const label = document.createElement('label');
                          label.classList.add('left-side-btn');
                          label.appendChild(projectBtnImage().get());
                          label.appendChild(projectBtnText().get());
                          return label;
                        }

                        const projectBtnImage = () => {
                          const get = () => {
                            const image = new Image();
                            image.src = taskProjectImage;
                            image.width = '20';
                            image.height = '20';
                            return image;
                          }
                          return { get };
                        }

                        const projectBtnText = () => {
                          const get = () => {
                            const p = document.createElement('p');
                            p.id = 'task-project-text';
                            p.textContent = getActiveProject().activeProject.title;
                            return p;
                          }
                          return { get };
                        }

                        return { get };
                      }

                      return { get };
                    }

                    

                    return { get };
                  }

                  return { get };
                }

                return { get };
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

      const formBtns = (() => {

        const leftSideBtns = (() => {


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
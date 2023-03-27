import taskDueDateImage from '../assets/imgs/due-date.png';
import taskProjectImage from '../assets/imgs/inbox.png';
import { addTaskToStorage, getActiveProject, expandTodo, removeTask, addDueDateInput, resetHTML, formatDueDate, loadLocalStorage } from "../todo";

const inbox = () => {
  contentDiv().get();
}

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
                      const todoListItem = activeProject.todoList[i];
        
                      const get = () => {
                        const div = document.createElement('div');
                        div.classList.add('list-item-content');
                        div.appendChild(todoListItemTitleP().get());
                        div.appendChild(todoListItemDescriptionP().get());
                        if (todoListItem.dueDate !== '') {
                          div.appendChild(todoListItemDueDateContentDiv().get());
                        }
                        return div;
                      }
          
                      const todoListItemTitleP = () => {
        
                        const get = () => {
                          const p = document.createElement('p');
                          p.textContent = `${todoListItem.title}`;
                          return p;
                        }
                        return { get };
                      }
          
                      const todoListItemDescriptionP = () => {
                        
                        const get = () => {
                          const p = document.createElement('p');
                          p.textContent = `${todoListItem.description}`;
                          p.classList.add('list-item-description');
                          return p;
                        }
                        return { get };
                      }

                      const todoListItemDueDateContentDiv = () => {
                        const get = () => {
                          const div = document.createElement('div');
                          div.classList.add('list-item-duedate-content');
                          div.appendChild(todoListItemDueDateImage().get());
                          div.appendChild(todoListItemDueDateP().get());
                          return div;
                        }

                        const todoListItemDueDateImage = () => {
                          const get = () => {
                            const span = document.createElement('span');
                            span.classList.add('material-symbols-outlined', 'list-item-duedate-img');
                            span.innerHTML = 'calendar_today';

                            if (formatDueDate(todoListItem.dueDate).overdue()) {
                              span.classList.add('overdue');
                            }

                            return span;
                          }
                          return { get };
                        }

                        const todoListItemDueDateP = () => {
                          const get = () => {
                            const p = document.createElement('p');
                            p.classList.add('list-item-duedate');
                            p.textContent = `${formatDueDate(todoListItem.dueDate).get()}`;

                            if (formatDueDate(todoListItem.dueDate).overdue()) {
                              p.classList.add('overdue');
                            }
                            
                            return p;
                          }
                          return { get };
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
            return { get, todoListItems };
          }
          return { get, viewListUl };
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
                  form.appendChild(addTaskActionBtnsContainerDiv().get());
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
                      div.appendChild(projectBtnContentDiv().get());
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

                    const projectBtnContentDiv = () => {
                      const get = () => {
                        const div = document.createElement('div');
                        div.id = 'project-btn-content';
                        div.appendChild(projectBtnLabel().get());
                        return div;
                      }

                      const projectBtnLabel = () => {
                        const get = () => {
                          const label = document.createElement('label');
                          label.id = 'project-btn';
                          label.classList.add('left-side-btn');
                          label.appendChild(projectBtnImage().get());
                          label.appendChild(projectBtnText().get());
                          label.addEventListener('click', openProjectDropDownMenu);
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

                      const openProjectDropDownMenu = () => {
                        const addTaskMenuForm = document.querySelector('#add-task-menu-form');
                        
                        const projectDropDownMenuContainerDiv = () => {
                          const get = () => {
                            const div = document.createElement('div');
                            const projectBtnLabel = document.querySelector('#project-btn');

                            div.id = 'project-dropdown-menu-container';
                            centerDiv(div, projectBtnLabel);
                            div.appendChild(projectDropDownMenuContentDiv().get());
                            return div;
                          }

                          const projectDropDownMenuContentDiv = () => {
                            const get = () => {
                              const div = document.createElement('div');
                              div.id = 'project-dropdown-menu-content';
                              div.appendChild(projectDropDownMenuLabel().get());
                              return div;
                            }

                            const projectDropDownMenuLabel = () => {
                              const get = () => {
                                const label = document.createElement('label');
                                label.id = 'project-dropdown-menu-label';
                                label.setAttribute('for', 'project-dropdown-menu-select')
                                label.appendChild(projectDropDownMenuSelect().get());
                                return label;
                              }

                              const projectDropDownMenuSelect = () => {
                                const activeProject = getActiveProject().activeProject;
                                const projectList = loadLocalStorage();
                                const get = () => {
                                  const select = document.createElement('select');
                                  select.id = 'project-dropdown-menu-select';
                                  select.name = 'projects';
                                  options().render(select);
                                  return select;
                                }

                                const options = () => {
                                  const render = (select) => {
                                    for (let i=0;i<projectList.length;i++) {

                                      const option = () => {
                                        const option = document.createElement('option');
                                        option.value = `${projectList[i].title}`;
                                        option.textContent = `${projectList[i].title}`;
                                        option.setAttribute('data-list-id', i);
                                        if (projectList[i].title === activeProject.title) {
                                          option.selected = true;
                                        }
                                        return option;
                                      }
                                      select.appendChild(option());
                                    }
                                  }
                                  return { render };
                                }
                                return { get };
                              }
                              return { get };
                            }
                            return { get };
                          }
                          return { get };
                        }

                        addTaskMenuForm.insertBefore(projectDropDownMenuContainerDiv().get(), addTaskMenuForm.children[1]);
                      }
                      return { get };
                    }
                    return { get };
                  }
                  return { get };
                }

                const addTaskActionBtnsContainerDiv = () => {
                  const get = () => {
                    const div = document.createElement('div');
                    div.id = 'add-task-action-buttons-container';
                    div.appendChild(addTaskActionBtnsContentDiv().get());
                    return div;
                  }

                  const addTaskActionBtnsContentDiv = () => {
                    const get = () => {
                      const div = document.createElement('div');
                      div.id = 'add-task-action-buttons-content';
                      div.appendChild(cancelBtn().get());
                      div.appendChild(addTaskBtn().get());
                      return div;
                    }

                    const cancelBtn = () => {
                      const get = () => {
                        const button = document.createElement('button');
                        button.type = 'button';
                        button.id = 'cancel-btn';
                        button.textContent = 'Cancel';
                        button.addEventListener('click', removeAddTaskMenu);
                        return button;
                      }
                      return { get };
                    }

                    const removeAddTaskMenu = () => {
                      document.querySelector('#add-task-menu-container').remove();
                      viewListContainerDiv.appendChild(addTaskContentDiv);
                    }
                    
                    const addTaskBtn = () => {
                      const get = () => {
                        const button = document.createElement('button');
                        button.type = 'button';
                        button.id = 'add-task-btn';
                        button.textContent = 'Add task';
                        button.addEventListener('click', addTask);
                        return button;
                      }

                      const addTask = () => {
                        if (addTaskToStorage().get() !== true) return;
                        resetHTML();
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

const centerDiv = (uncenteredDiv, centerOnThisDiv) => {
  const uncenteredDivHeight = 28;
  const uncenteredDivWidth = 150;
  uncenteredDiv.style.left = centerOnThisDiv.offsetLeft - (uncenteredDivWidth/2 - (centerOnThisDiv.clientWidth/2)) + 'px';
  uncenteredDiv.style.top = centerOnThisDiv.offsetTop - uncenteredDivHeight + 'px';
}

export { inbox, centerDiv };
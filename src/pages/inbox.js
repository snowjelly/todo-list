import taskDueDateImage from '../assets/imgs/due-date.png';
import taskProjectImage from '../assets/imgs/inbox.png';
import closeImage from "../assets/imgs/close.png";
import { addTaskToStorage, getActiveProject, removeTask, addDueDateInput, resetHTML, formatDueDate, loadLocalStorage, getTaskProjectTitle, shortenString } from "../todo";

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
                          p.textContent = `${shortenString(todoListItem.description, 130)}`;
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

                    const expandTodo = (e) => {
                      if (e.target.className === 'checkbox') return;
                      

                      const expandedTodoContainer = () => {
                        const getDiv = () => {
                          const div = document.createElement('div');
                          div.id = 'expanded-todo-container';
                          div.classList.add('isolated-container', 'fade-in');
                          div.addEventListener('click', (e) => {
                            if (e.currentTarget === e.target) {
                              resetHTML();
                            }
                          });
                          div.appendChild(expandedTodoContent().getDiv());
                          return div;
                        }

                        const appendToParent = () => {
                          const bodyContent = document.querySelector('#content');
                          bodyContent.appendChild(getDiv());
                          return {'bodyContent': bodyContent};
                        }

                        const expandedTodoContent = () => {
                          const listId = e.currentTarget.dataset.listId;
                          const selectedTodo = activeProject.todoList[listId];
                          const getDiv = () => {
                            const div = document.createElement('div');
                            div.id = 'expanded-todo-content';
                            div.classList.add('isolated-content');
                            div.todoListId = listId;
                            div.appendChild(expandedTodoTopContent().getDiv());
                            div.appendChild(checkboxContainer().getDiv());
                            div.appendChild(expandedTodoTitleContent().getDiv());
                            div.appendChild(expandedTodoDescription().getDiv());
                            return div;
                          }

                          const expandedTodoTopContent = () => {
                            const getDiv = () => {
                              const div = document.createElement('div');
                              div.id = 'expanded-todo-top-content';
                              div.appendChild(projectTitleHeaderContent().getDiv());
                              div.appendChild(expandedTodoContentRightSidebar().getDiv());
                              return div;
                            }

                            const projectTitleHeaderContent = () => {
                              const getDiv = () => {
                                const div = document.createElement('div');
                                div.id = 'expanded-todo-top-project-title-header-content';
                                div.appendChild(projectTitleHeader().getDiv());
                                return div;
                              }

                              const projectTitleHeader = () => {
                                const getDiv = () => {
                                  const div = document.createElement('div');
                                  div.id = 'expanded-todo-top-project-title-header';
                                  div.appendChild(projectTitleHeaderIcon().getSpan());
                                  div.appendChild(projectTitleHeaderText().getP());
                                  return div;
                                }

                                const projectTitleHeaderIcon = () => {
                                  const getSpan = () => {
                                    const span = document.createElement('span');
                                    span.id = 'expanded-todo-top-project-title-header-icon'
                                    span.classList.add('material-symbols-outlined');
                                    if (activeProject.title === 'inbox') {
                                      span.classList.add('expanded-todo-top-project-title-header-icon-inbox');
                                      span.innerText = 'inbox';
                                    }
                                    else {
                                      span.innerText = 'radio_button_unchecked';
                                      span.classList.add('material-symbols-outlined-filled');
                                    }
                                    return span;
                                  }
                                  return { getSpan };
                                }
  
                                const projectTitleHeaderText = () => {
                                  const getP = () => {
                                    const p = document.createElement('p');
                                    p.id ='expanded-todo-top-project-title-header-text';
                                    p.textContent = `${activeProject.title}`;
                                    return p;
                                  }
                                  return { getP };
                                }
                                return { getDiv };
                              }
                              return { getDiv };
                            }
                            return { getDiv };
                          }

                          const checkboxContainer = () => {
                            const getDiv = () => {
                              const div = document.createElement('div');
                              div.id = 'checkbox-container';
                              div.appendChild(checkbox().getDiv());
                              return div;
                            }

                            const checkbox = () => {
                              const getDiv = () => {
                                const div = document.createElement('div');
                                div.classList.add('checkbox');
                                div.width = 24;
                                div.height = 24;
                                div.addEventListener('click', removeTask);
                                return div;
                              }
                              return { getDiv };
                            }
                            return { getDiv };
                          }

                          const expandedTodoTitleContent = () => {
                            const getDiv = () => {
                              const div = document.createElement('div');
                              div.id = 'expanded-todo-title-content';
                              div.appendChild(expandedTodoTitle().getP());
                              return div;
                            }

                            const expandedTodoTitle = () => {
                              const getP = () => {
                                const p = document.createElement('p');
                                p.id = 'expanded-todo-title';
                                p.textContent = `${selectedTodo.title}`;
                                return p;
                              }
                              return { getP };
                            }

                            return { getDiv };
                          }

                          const expandedTodoContentRightSidebar = () => {
                            const getDiv = () => {
                              const div = document.createElement('div');
                              div.id = 'expanded-todo-content-right-sidebar';
                              div.appendChild(moreOptionsIcon().getSpan());
                              div.appendChild(close().getImg());
                              return div;
                            }

                            const moreOptionsIcon = () => {
                              const getSpan = () => {
                                const span = document.createElement('span');
                                span.classList.add('material-symbols-outlined', 'fade');
                                span.innerText = 'more_horiz';
                                span.id = 'more-options-icon';
                                span.addEventListener('click', openMoreOptions, {once:true});
                                return span;
                              }

                              const openMoreOptions = (e) => {
                                const moreOptionsIcon = document.querySelector('#more-options-icon');
                                moreOptionsIcon.classList.add('increase-z-index-by-1');
                                moreOptionsIcon.classList.add('stone-200');

                                const closeMoreOptions = () => {
                                  const moreOptionsIsolatedContainer = document.querySelector('#more-options-isolated-container');
                                  if (moreOptionsIsolatedContainer === null) return;
                                  moreOptionsIsolatedContainer.remove();
                                  document.querySelector('#more-options-container').remove();
                                  resetMoreOptionsBehavior();
                                }

                                
                                const moreOptionsIsolatedContainer = () => {
                                  const getDiv = () => {
                                    const div = document.createElement('div');
                                    div.id = 'more-options-isolated-container';
                                    div.classList.add('isolated-container');
                                    div.addEventListener('click', closeMoreOptions);
                                    return div;
                                  }

                                  const appendToParent = () => {
                                    const parent = document.querySelector('#expanded-todo-content-right-sidebar');
                                    parent.appendChild(getDiv());
                                  }
                                  return { appendToParent };
                                }

                                  const removeContainer = (e) => {
                                    if (e.currentTarget.id === 'confirm-deletion-cancel-btn' || e.target.id === 'confirm-deletion-isolated-container' || e.currentTarget.id === 'confirm-deletion-close-icon') {
                                      document.querySelector('#confirm-deletion-isolated-container').remove();
                                    }
                                  }


                                  const moreOptionsContainer = () => {
                                    const getDiv = () => {
                                      const div = document.createElement('div');
                                      div.id = 'more-options-container';
                                      div.appendChild(moreOptionsContent().getDiv());
                                      return div;
                                    }
  
                                    const moreOptionsContent = () => {
                                      const getDiv = () => {
                                        const div = document.createElement('div');
                                        div.id = 'more-options-content';
                                        div.appendChild(deleteOptionContent().getDiv());
                                        return div;
                                      }
  
                                      const deleteOptionContent = () => {
                                        const getDiv = () => {
                                          const div = document.createElement('div');
                                          div.id = 'delete-option-content';
                                          div.addEventListener('click', openDeletionConfirmationMenu);
                                          div.appendChild(deleteOptionIcon().getSpan());
                                          div.appendChild(deleteOptionText().getP());
                                          return div;
                                        }
  
                                        const deleteOptionIcon = () => {
                                          const getSpan = () => {
                                            const span = document.createElement('span');
                                            span.id = 'delete-option-icon';
                                            span.classList.add('material-symbols-outlined');
                                            span.innerText = 'delete';
                                            return span;
                                          }
                                          return { getSpan };
                                        }
  
                                        const deleteOptionText = () => {
                                          const getP = () => {
                                            const p = document.createElement('p');
                                            p.id = 'delete-option-text';
                                            p.textContent = 'Delete task';
                                            return p;
                                          }
                                          return { getP };
                                        }
                                        return { getDiv };
                                      }

                                      const openDeletionConfirmationMenu = () => {
                                        const deleteOptionContent = document.querySelector('#delete-option-content');

                                        document.querySelector('#more-options-isolated-container').remove();
                                        document.querySelector('#more-options-container').remove();
                                        resetMoreOptionsBehavior();
                                        moreOptionsIcon.classList.remove('increase-z-index-by-1');

                                        const confirmDeletionIsolatedContainer = () => {
                                          const getDiv = () => {
                                            const div = document.createElement('div');
                                            div.id = 'confirm-deletion-isolated-container';
                                            div.classList.add('isolated-container');
                                            div.addEventListener('click', removeContainer);
                                            div.appendChild(confirmDeletionIsolatedContent().getDiv());
                                            return div;
                                          }

                                          const appendToParent = () => {
                                            const parent = document.querySelector('#expanded-todo-content-right-sidebar');
                                            parent.appendChild(getDiv());
                                          }

                                          const confirmDeletionIsolatedContent = () => {
                                            const getDiv = () => {
                                              const div = document.createElement('div');
                                              div.id = 'confirm-deletion-isolated-content';
                                              div.classList.add('isolated-content');
                                              div.appendChild(confirmDeletionTop().getDiv());
                                              div.appendChild(confirmDeletionText().getP());
                                              div.appendChild(confirmDeletionBottom().getDiv());
                                              return div;
                                            }
                                            
                                            const confirmDeletionTop = () => {
                                              const getDiv = () => {
                                                const div = document.createElement('div');
                                                div.id = 'confirm-deletion-isolated-content-top';
                                                div.appendChild(confirmDeletionInfoIcon().getSpan());
                                                div.appendChild(confirmDeletionCloseIcon().getSpan());
                                                return div;
                                              }

                                              const confirmDeletionInfoIcon = () => {
                                                const getSpan = () => {
                                                  const span = document.createElement('span');
                                                  span.id = 'confirm-deletion-info-icon';
                                                  span.classList.add('material-symbols-outlined');
                                                  span.innerText = 'info';
                                                  return span;
                                                }
                                                return { getSpan };
                                              }

                                              const confirmDeletionCloseIcon = () => {
                                                const getSpan = () => {
                                                  const span = document.createElement('span');
                                                  span.id = 'confirm-deletion-close-icon';
                                                  span.classList.add('material-symbols-outlined');
                                                  span.innerText = 'close';
                                                  span.addEventListener('click', removeContainer);
                                                  return span;
                                                }
                                                return { getSpan };
                                              }

                                              return { getDiv };
                                            }

                                            const confirmDeletionText = () => {
                                              const getP = () => {
                                                const p = document.createElement('p');
                                                p.id = 'confirm-deletion-text';
                                                p.innerHTML = `Are you sure you want to delete <strong>${selectedTodo.title}</strong>?`;
                                                return p;
                                              }
                                              return { getP };
                                            }

                                            const confirmDeletionBottom = () => {
                                              const getDiv = () => {
                                                const div = document.createElement('div');
                                                div.id = 'confirm-deletion-bottom';
                                                div.appendChild(confirmDeletionCancelBtn().getButton());
                                                div.appendChild(confirmDeletionBtn().getButton());
                                                return div;
                                              }

                                              const confirmDeletionCancelBtn = () => {
                                                const getButton = () => {
                                                  const button = document.createElement('button');
                                                  button.id = 'confirm-deletion-cancel-btn';
                                                  button.classList.add('cancel-btn');
                                                  button.textContent = 'Cancel';
                                                  button.addEventListener('click', removeContainer);
                                                  return button;
                                                }
                                                return { getButton };
                                              }

                                              const confirmDeletionBtn = () => {
                                                const getButton = () => {
                                                  const button = document.createElement('button');
                                                  button.id = 'confirm-deletion-btn';
                                                  button.classList.add('add-btn');
                                                  button.textContent = 'Delete';
                                                  button.addEventListener('click', removeTask);
                                                  return button;
                                                }
                                                return { getButton };
                                              }

                                              return { getDiv };
                                            }

                                            return { getDiv };
                                          }

                                          return { appendToParent };
                                        }
                                        confirmDeletionIsolatedContainer().appendToParent();

                                        deleteOptionContent.addEventListener('click', (e) => {
                                          console.log('deleted');
                                        });
                                      }

                                      return { getDiv };
                                    }
                                    return { getDiv }
                                  }
                                moreOptionsIsolatedContainer().appendToParent();
                                const sidebar = document.querySelector('#expanded-todo-content-right-sidebar');
                                sidebar.insertBefore(moreOptionsContainer().getDiv(), sidebar.children[0]);

                                const resetMoreOptionsBehavior = () => {
                                  moreOptionsIcon.classList.remove('stone-200');
                                  moreOptionsIcon.addEventListener('click', openMoreOptions, {once:true});
                                }

                                moreOptionsIcon.addEventListener('click', closeMoreOptions, {once:true});
                              }
                              return { getSpan };
                            }
  
                            const close = () => {
                              const getImg = () => {
                                const img = new Image();
                                img.id = 'close';
                                img.src = closeImage;
                                img.width = 30;
                                img.height = 30;
                                img.classList.add('fade');
                                img.addEventListener('click', resetHTML);
                                return img;
                              }
                              return { getImg };
                            }
                            return { getDiv };
                          }

                          const expandedTodoDescription = () => {
                            const getDiv = () => {
                              const p = document.createElement('p');
                              p.id = 'expanded-todo-description';
                              p.textContent = `${selectedTodo.description}`;
                              return p;
                            }
                            return { getDiv };
                          }
                          return { getDiv };
                        }
                        return { appendToParent };
                      }
                      expandedTodoContainer().appendToParent();
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
                        const input = document.createElement('textarea');
                        input.setAttribute('name', 'task-name');
                        input.setAttribute('placeholder', 'Task name');
                        input.setAttribute('maxlength', '92');
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
                        const input = document.createElement('textarea');
                        input.setAttribute('name', 'task-description');
                        input.setAttribute('placeholder', 'Description');
                        input.setAttribute('maxlength', '500');
                        input.setAttribute('minlength', '1');
                        input.setAttribute('cols', '33');
                        input.setAttribute('rows', '5');
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
                            label.classList.add('left-side-btn');
                            label.setAttribute('for', 'project-dropdown-menu-select')
                            label.appendChild(projectBtnImage().get());
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
                                    const taskProjectText = getTaskProjectTitle().get();
                                    option.value = `${projectList[i].title}`;
                                    option.textContent = `${projectList[i].title}`;
                                    option.setAttribute('data-list-id', i);
                                    if (projectList[i].title === taskProjectText) {
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

export { inbox };
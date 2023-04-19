import taskDueDateImage from '../assets/imgs/due-date.png';
import taskProjectImage from '../assets/imgs/inbox.png';
import closeImage from "../assets/imgs/close.png";
import { addTaskToStorage, getActiveProject, removeTask, addDueDateInput, resetHTML, loadLocalStorage, getTaskProjectTitle, shortenString, enableAddBtn, removeProject, updateLocalStorage, updateProject, selectProject, getValidDueDate } from "../todo";
import { parseJSON } from 'date-fns';

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


                for (let i = 0; i < ul.children.length; i++) {
                  ul.children[i].remove();
                }


                for (let i = 0; i < activeProject.todoList.length; i++) {

                  const todoListItemLi = () => {

                    const get = () => {
                      const li = document.createElement('li');
                      li.classList.value = 'todo-list-item';
                      li.setAttribute('data-list-id', `${i}`);
                      li.addEventListener('click', (e) => {
                        expandTodo(e);
                      });
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

                            if (todoListItem.dueDate.overdue) {
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
                            p.textContent = todoListItem.dueDate.readableDueDate;

                            if (todoListItem.dueDate.overdue) {
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

                    const expandTodo = (e, todoListIdParam = undefined, checkIfEventInput = true) => {
                      if (checkIfEventInput) {
                        if (e.target.className === 'checkbox') return;
                      }

                      const expandedTodoContainer = () => {
                        const getDiv = () => {
                          const div = document.createElement('div');
                          div.id = 'expanded-todo-container';
                          if (checkIfEventInput) {
                            div.classList.add('fade-in');
                          }
                          div.classList.add('isolated-container');
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
                          return { 'bodyContent': bodyContent };
                        }

                        const expandedTodoContent = () => {
                          const getListId = () => {
                            if (checkIfEventInput && e.currentTarget !== null) {
                              return {projectListId:getActiveProject().id, todoListId:e.currentTarget.dataset.listId};
                            }
                            else if (checkIfEventInput) {
                              return {projectListId:getActiveProject().id, todoListId:document.querySelector('#expanded-todo-content').todoListId};
                            }
                            else if (checkIfEventInput === false) {
                              const projectListId = e;
                              return {projectListId:projectListId, todoListId:todoListIdParam};
                            }
                          }

                          const projectList = loadLocalStorage();
                          const projectListId = getListId().projectListId;
                          const todoListId = getListId().todoListId;
                          const activeProject = projectList[getActiveProject().id];


                          const selectedTodo = projectList[projectListId].todoList[todoListId];
                          selectedTodo.selected = true;

                          const getDiv = () => {
                            const div = document.createElement('div');
                            div.id = 'expanded-todo-content';
                            div.classList.add('isolated-content');
                            div.todoListId = todoListId;
                            div.appendChild(expandedTodoTopContent().getDiv());
                            div.appendChild(expandedTodoBody().getDiv());
                            div.appendChild(expandedTodoRightSidebar().getDiv());
                            return div;
                          }

                          const expandedTodoTopContent = () => {
                            const getDiv = () => {
                              const div = document.createElement('div');
                              div.id = 'expanded-todo-top-content';
                              div.classList.add('bottom-shadow');
                              div.appendChild(projectTitleHeaderContent().getDiv());
                              div.appendChild(expandedTodoTopRightSidebar().getDiv());
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
                                    p.id = 'expanded-todo-top-project-title-header-text';
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

                          const expandedTodoBody = () => {
                            const getDiv = () => {
                              const div = document.createElement('div');
                              div.id = 'expanded-todo-body';
                              div.addEventListener('click', editExpandedTodoBody);
                              div.appendChild(checkboxContainer().getDiv());
                              div.appendChild(expandedTodoTitleContent().getDiv());
                              div.appendChild(expandedTodoDescription().getDiv());
                              return div;
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

                            const expandedTodoDescription = () => {
                              const getDiv = () => {
                                const p = document.createElement('p');
                                p.id = 'expanded-todo-description';
                                p.textContent = `${selectedTodo.description}`;
                                return p;
                              }
                              return { getDiv };
                            }

                            const editExpandedTodoBody = (e) => {
                              if (e.target.id === 'edit-task-cancel-btn' || e.target.id === 'edit-task-save-btn' || e.target.className === 'checkbox') return;
                              const title = document.querySelector('#expanded-todo-title');
                              const description = document.querySelector('#expanded-todo-description');
                              const titleContent = document.querySelector('#expanded-todo-title-content');
                              const expandedTodoBody = document.querySelector('#expanded-todo-body');

                              toggleExpandedTodoProperties();

                              const editTaskActionBtnsContent = () => {
                                const get = () => {
                                  const div = document.createElement('div');
                                  div.id = 'edit-task-action-buttons-content';
                                  div.appendChild(cancelBtn().get());
                                  div.appendChild(editTaskSaveBtn().get());
                                  return div;
                                }

                                const closeEditTask = () => {
                                  while (expandedTodoBody.children.length > 1) {
                                    expandedTodoBody.children[1].remove();
                                  }

                                  toggleExpandedTodoProperties();

                                  expandedTodoBody.appendChild(titleContent);
                                  expandedTodoBody.appendChild(description);
                                  expandedTodoBody.addEventListener('click', editExpandedTodoBody);
                                }

                                const cancelBtn = () => {
                                  const get = () => {
                                    const button = document.createElement('button');
                                    button.type = 'button';
                                    button.id = 'edit-task-cancel-btn';
                                    button.classList.add('cancel-btn');
                                    button.textContent = 'Cancel';
                                    button.addEventListener('click', closeEditTask);
                                    return button;
                                  }
                                  return { get };
                                }

                                const editTaskSaveBtn = () => {
                                  const get = () => {
                                    const button = document.createElement('button');
                                    button.type = 'button';
                                    button.id = 'edit-task-save-btn';
                                    button.textContent = 'Save';
                                    button.classList.add('add-btn');
                                    button.addEventListener('click', saveEditTask);
                                    return button;
                                  }

                                  const saveEditTask = () => {
                                    const editTaskNameInput = document.querySelector('#edit-task-name-input');
                                    const editTaskDescriptionInput = document.querySelector('#edit-task-description-input');
                                    const titleText = titleContent.firstChild;
                                    const projectList = loadLocalStorage();

                                    projectList[getActiveProject().id].todoList[getListId().todoListId].title = editTaskNameInput.value;
                                    projectList[getActiveProject().id].todoList[getListId().todoListId].description = editTaskDescriptionInput.value;


                                    titleText.textContent = editTaskNameInput.value;
                                    description.textContent = editTaskDescriptionInput.value;

                                    updateLocalStorage(projectList);
                                    closeEditTask();
                                  }
                                  return { get };
                                }
                                return { get };
                              }

                              const taskNameLabel = () => {
                                const get = () => {
                                  const label = document.createElement('label');
                                  label.id = 'edit-task-name';
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
                                    input.id = 'edit-task-name-input';
                                    input.value = title.textContent;
                                    input.addEventListener('keyup', checkNameValidity);
                                    return input;
                                  }

                                  const checkNameValidity = (e) => {
                                    const textInput = e.currentTarget;
                                    const saveBtn = document.querySelector('#edit-task-save-btn');

                                    if (textInput.value !== "") {
                                      saveBtn.disabled = false;
                                      saveBtn.classList.remove('disabled');
                                    }
                                    else {
                                      saveBtn.disabled = true;
                                      saveBtn.classList.add('disabled');
                                    }
                                  }
                                  return { get };
                                }
                                return { get };
                              }

                              const taskDescriptionLabel = () => {
                                const get = () => {
                                  const label = document.createElement('label');
                                  label.id = 'edit-task-description';
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
                                    input.id = 'edit-task-description-input';
                                    input.value = description.textContent;
                                    return input;
                                  }
                                  return { get };
                                }
                                return { get };
                              }

                              expandedTodoBody.removeEventListener('click', editExpandedTodoBody);
                              expandedTodoBody.appendChild(taskNameLabel().get());
                              expandedTodoBody.appendChild(taskDescriptionLabel().get());
                              expandedTodoBody.appendChild(editTaskActionBtnsContent().get());
                              titleContent.remove();
                              description.remove();

                              if (e.target.id === 'expanded-todo-title-content' || e.target.id === 'expanded-todo-title') {
                                document.querySelector('#edit-task-name-input').focus();
                              }
                              else if (e.target.id === 'expanded-todo-description') {
                                document.querySelector('#edit-task-description-input').focus();
                              }
                            }

                            return { getDiv };
                          }



                          const expandedTodoTopRightSidebar = () => {
                            const getDiv = () => {
                              const div = document.createElement('div');
                              div.id = 'expanded-todo-top-right-content';
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
                                span.addEventListener('click', openMoreOptions, { once: true });
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
                                    const parent = document.querySelector('#expanded-todo-top-right-content');
                                    parent.appendChild(getDiv());
                                  }
                                  return { appendToParent };
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
                                      document.querySelector('#more-options-isolated-container').remove();
                                      document.querySelector('#more-options-container').remove();
                                      resetMoreOptionsBehavior();
                                      moreOptionsIcon.classList.remove('increase-z-index-by-1');
                                      confirmDeletionIsolatedContainer(selectedTodo).appendToParent('#expanded-todo-top-right-content');
                                    }
                                    return { getDiv };
                                  }
                                  return { getDiv }
                                }
                                moreOptionsIsolatedContainer().appendToParent();
                                const sidebar = document.querySelector('#expanded-todo-top-right-content');
                                sidebar.insertBefore(moreOptionsContainer().getDiv(), sidebar.children[0]);

                                const resetMoreOptionsBehavior = () => {
                                  moreOptionsIcon.classList.remove('stone-200');
                                  moreOptionsIcon.addEventListener('click', openMoreOptions, { once: true });
                                }

                                moreOptionsIcon.addEventListener('click', closeMoreOptions, { once: true });
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

                          const expandedTodoRightSidebar = () => {
                            const getDiv = () => {
                              const div = document.createElement('div');
                              div.id = 'expanded-todo-right-sidebar';
                              div.appendChild(propertyList().getUl());
                              return div;
                            }

                            const propertyList = () => {
                              const getUl = () => {
                                const ul = document.createElement('ul');
                                ul.id = 'expanded-todo-property-list';
                                render(ul);
                                return ul;
                              }

                              const render = (ul) => {
                                const propertyList = ['Project', 'Due date', 'Priority'];

                                for (let i = 0; i < propertyList.length; i++) {
                                  const getLiInfo = () => {

                                    const getProperty = () => {
                                      if (propertyList[i] === 'Project') {
                                        return 'Project';
                                      }
                                      else if (propertyList[i] === 'Due date') {
                                        return 'Due date';
                                      }
                                      else if (propertyList[i] === 'Priority') {
                                        return 'Priority';
                                      }
                                    }

                                    const getPropertyTitle = () => {
                                      if (getProperty() === 'Project') {
                                        return 'project-info';
                                      }
                                      else if (getProperty() === 'Due date') {
                                        return 'duedate-info';
                                      }
                                      else if (getProperty() === 'Priority') {
                                        return 'priority-info';
                                      }
                                    }

                                    const getPropertyIcon = () => {
                                      if (getProperty() === 'Project') {
                                        return determineProjectIcon().getInnerText();
                                      }
                                      else if (getProperty() === 'Due date') {
                                        return 'calendar_today';
                                      }
                                      else if (getProperty() === 'Priority') {
                                        return 'flag';
                                      }
                                    }
                                    return { getPropertyTitle, getProperty, getPropertyIcon };
                                  }

                                  const getLi = () => {
                                    const li = document.createElement('li');
                                    li.id = `expanded-todo-property-${getLiInfo().getPropertyTitle()}`;
                                    li.classList.add('project-info');
                                    li.appendChild(header().getP());
                                    li.appendChild(content().getDiv());
                                    return li;
                                  }

                                  const header = () => {
                                    const getP = () => {
                                      const p = document.createElement('p');
                                      p.id = `expanded-todo-property-${getLiInfo().getPropertyTitle()}-header`;
                                      p.textContent = getLiInfo().getProperty();
                                      p.classList.add('property-header');
                                      return p;
                                    }
                                    return { getP };
                                  }

                                  const content = () => {
                                    const getDiv = () => {
                                      if (getLiInfo().getProperty() === 'Project') {
                                        const label = projectDropDownMenuLabel().get();
                                        label.id = `expanded-todo-property-project-content`;
                                        label.classList.add('property', 'property-content');
                                        label.children[0].classList.add('property', 'property-icon');
                                        label.children[1].classList.add('property');
                                        label.addEventListener('change', (e) => {
                                          const getListId = updateProject(e);
                                          const todoListId = getListId.todoListId;
                                          const projectListId = getListId.projectListId;

                                          selectProject(projectListId, false);
                                          expandTodo(projectListId, todoListId, false);
                                        });
                                        return label;
                                      }
                                      else if (getLiInfo().getProperty() === 'Due date') {
                                        const dueDateContent = document.createElement('div');

                                        dueDateContent.id = 'expanded-todo-property-duedate-info-content';
                                        dueDateContent.classList.add('property-content', 'property');

                                        const dueDateIcon = document.createElement('span');
                                        const dueDateText = document.createElement('p');

                                        dueDateIcon.id = 'expanded-todo-property-duedate-info-icon';
                                        dueDateIcon.classList.add('property-icon', 'material-symbols-outlined', 'property');
                                        dueDateIcon.innerHTML = 'calendar_today';

                                        dueDateText.id = 'expanded-todo-property-duedate-info-text';
                                        dueDateText.classList.add('property-text', 'property');
                                        dueDateText.textContent = selectedTodo.dueDate.readableDueDate;
                                        if (selectedTodo.dueDate.overdue) {
                                          dueDateText.classList.add('overdue');
                                          dueDateIcon.classList.add('overdue');
                                        }

                                        dueDateContent.appendChild(dueDateIcon);
                                        dueDateContent.appendChild(dueDateText);


                                        const editDueDate = (e) => {
                                          if (e.target.id === 'expanded-todo-duedate-label-container') return;
                                          if (e.target.id === 'due-date-input') return;
                                          if (document.querySelector('#edit-task-name') !== null) return;

                                          const dueDateInput = addDueDateInput(e);

                                          dueDateInput.valueAsDate = parseJSON(projectList[projectListId].todoList[todoListId].dueDate.dateObject);

                                          dueDateInput.classList.add('expanded-todo-due-date-input');

                                          while (dueDateContent.children.length > 0) {
                                            dueDateContent.children[0].remove();
                                          }

                                          const dueDateSelectIsolatedContainer = () => {
                                            const get = () => {
                                              const div = document.createElement('div');
                                              div.id = 'expanded-todo-duedate-label-container';
                                              div.classList.add('isolated-container');
                                              div.addEventListener('click', reset);
                                              return div;
                                            }

                                            const reset = (e) => {
                                              save();

                                              if (e.target === e.currentTarget) {
                                                while (ul.children.length > 0) {
                                                  ul.children[0].remove();
                                                }
                                                
                                                render(ul);
                                              }
                                            }

                                            const save = () => {
                                              const dateInput = document.querySelector('#due-date-input');
                                              const validDueDate = getValidDueDate(dateInput);
                                              if (validDueDate === '') return;
                                              projectList[projectListId].todoList[todoListId].dueDate = getValidDueDate(dateInput);
                                              updateLocalStorage(projectList);
                                            }

                                            return { get };
                                          }

                                          const dueDateLabel = () => {
                                            const get = () => {
                                              const label = document.createElement('label');
                                              label.id = 'expanded-todo-duedate-label';
                                              label.setAttribute('for', 'due-date-input');
                                              label.appendChild(dueDateInput);
                                              return label;
                                            }
                                            return { get };
                                          }
                                          dueDateContent.appendChild(dueDateSelectIsolatedContainer().get());
                                          dueDateContent.appendChild(dueDateLabel().get());
                                          dueDateInput.focus();
                                        }
                                        dueDateContent.addEventListener('click', editDueDate, {once:false});

                                        return dueDateContent;
                                      }
                                      else if (getLiInfo().getProperty() === 'Priority') {
                                        return prioritySelectMenu().label;
                                      }
                                    }
                                    return { getDiv };
                                  }
                                  ul.appendChild(getLi());
                                }
                              }
                              return { getUl };
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
                        input.addEventListener('keyup', enableAddBtn);
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
                    div.classList.add('bottom-shadow');
                    return div;
                  }

                  const leftSideBtnsContent = () => {
                    const get = () => {
                      const div = document.createElement('div');
                      div.id = 'form-btn-content-left-side';
                      div.appendChild(dueDateBtnLabel().get());
                      div.appendChild(prioritySelectMenu().label);
                      return div;
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
                      div.appendChild(projectDropDownMenuLabel().get());
                      div.appendChild(cancelBtn().get());
                      div.appendChild(addTaskBtn().get());
                      return div;
                    }

                    const cancelBtn = () => {
                      const get = () => {
                        const button = document.createElement('button');
                        button.type = 'button';
                        button.id = 'add-task-cancel-btn';
                        button.classList.add('cancel-btn');
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
                        button.disabled = true;
                        button.classList.add('disabled', 'add-btn');
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
        for (let i = 0; i < projectList.length; i++) {

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
      const span = document.createElement('span');
      span.id = 'project-icon';
      span.innerText = determineProjectIcon().getInnerText();
      span.classList.add('material-symbols-outlined');
      span.classList.add(determineProjectIcon().getClassList());
      return span;
    }
    return { get };
  }

  return { get };
}

const prioritySelectMenu = () => {
  const options = ['P1', 'P2', 'P3', 'P4'];

  const getLabel = () => {
    const label = document.createElement('label');
    label.id = 'add-priority-menu';
    label.classList.add('left-side-btn');
    label.setAttribute('for', 'priority-select')
    label.appendChild(getPriorityIcon());
    label.appendChild(getSelect());
    label.addEventListener('change', (e) => {
      updatePriorityIcon(e);
    });
    return label;
  }

  const getSelect = () => {
    const select = document.createElement('select');
    select.id = 'priority-select';
    select.name = 'priority';
    renderOptions(select);
    return select;
  }

  const renderOptions = (select) => {
    for (let i=0;i<options.length;i++) {
      const option = document.createElement('option');
      option.textContent = options[i];
      option.value = options[i];
      if (options[i] === 'P4') {
        option.selected = true;
      }
      select.appendChild(option);
    }
  }

  const getPriorityIcon = () => {
    const span = document.createElement('span');
    span.id = 'priority-icon';
    span.innerText = 'flag';
    span.classList.add('material-symbols-outlined');
    return span;
  }

  return {
    label: getLabel(),
   };
}

const updatePriorityIcon = (e = null) => {
  const getPriority = () => {
    if (e !== null) {
          const priority = e.target.value;
          const priorityIcon = document.querySelector('#priority-icon');
          return {
            priority,
            priorityIcon,
          };
    }
    else {
      const projectList = loadLocalStorage();
      const activeProject = projectList[getActiveProject().id];
      const todoListId = document.querySelector('#expanded-todo-content').todoListId;

      const priority = activeProject.todoList[todoListId].priority;
      const priorityIcon = document.querySelector('#expanded-todo-property-priority-info-icon');

      return {
        priority,
        priorityIcon,
      };
    }
  }

  const priority = getPriority().priority;
  const priorityIcon = getPriority().priorityIcon;
  
  if (priority === 'P4') {
    priorityIcon.classList.value = 'material-symbols-outlined';
  }
  else if (priority === 'P3') {
    priorityIcon.classList.value = ['P3 material-symbols-outlined-filled material-symbols-outlined'];
  }
  else if (priority === 'P2') {
    priorityIcon.classList.value = ['P2 material-symbols-outlined-filled material-symbols-outlined'];
  }
  else if (priority === 'P1') {
    priorityIcon.classList.value = ['P1 material-symbols-outlined-filled material-symbols-outlined'];
  }
}

const determineProjectIcon = () => {
  const activeProject = getActiveProject().activeProject;

  const getInnerText = () => {
    if (activeProject.title === 'inbox') {
      return 'inbox';
    }
    else {
      return 'radio_button_unchecked';
    }
  }

  const getClassList = () => {
    if (getInnerText() === 'inbox') {
      return 'inbox';
    }
    else {
      return 'material-symbols-outlined-filled';
    }
  }

  return { getInnerText, getClassList };
}

const removeContainer = (e) => {
  if (e.currentTarget.id === 'confirm-deletion-cancel-btn' || e.target.id === 'confirm-deletion-isolated-container' || e.currentTarget.id === 'confirm-deletion-close-icon') {
    document.querySelector('#confirm-deletion-isolated-container').remove();
  }
}

const confirmDeletionIsolatedContainer = (selectedTodoOrProject) => {
  const getDiv = () => {
    const div = document.createElement('div');
    div.id = 'confirm-deletion-isolated-container';
    div.classList.add('isolated-container');
    div.addEventListener('click', removeContainer);
    div.appendChild(confirmDeletionIsolatedContent().getDiv());
    return div;
  }

  const checkIfTodoOrProject = () => {
    if (selectedTodoOrProject.project === undefined) {
      return 'project';
    }
    else {
      return 'todo';
    }
  }



  const appendToParent = (parentSelector) => {
    const parentElement = document.querySelector(`${parentSelector}`);
    parentElement.appendChild(getDiv());
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
        p.innerHTML = `Are you sure you want to delete <strong>${selectedTodoOrProject.title}</strong>?`;
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
          if (checkIfTodoOrProject() === 'todo') {
            button.addEventListener('click', removeTask);
          }
          else if (checkIfTodoOrProject() === 'project') {
            button.addEventListener('click', removeProject);
          }
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

const toggleExpandedTodoProperties = () => {
  const expandedTodoPropertyList = document.querySelector('#expanded-todo-property-list');
  const projectSelect = document.querySelector('#project-dropdown-menu-select');

  for (let i=0;i<expandedTodoPropertyList.children.length;i++) {
    expandedTodoPropertyList.children[i].lastChild.classList.toggle('disabled');
  }

  projectSelect.classList.toggle('disabled');

  if (projectSelect.disabled) {
    projectSelect.disabled = false;
  }
  else {
    projectSelect.disabled = true;
  }

  const toggleCheckbox = (() => {
    const checkbox = document.querySelector('#checkbox-container').firstChild;
    checkbox.disabled = true;
    checkbox.classList.toggle('disabled');
  })();
}

const dueDateBtnLabel = () => {
  const get = () => {
    const label = document.createElement('label');
    label.classList.add('left-side-btn');
    label.id = 'due-date-btn';
    label.tabIndex = 0;
    label.setAttribute('for', 'due-date-input');
    label.appendChild(dueDateImage().get());
    label.appendChild(dueDateText().get());
    label.addEventListener('click', addDueDateInput, { once: true });
    label.addEventListener('keydown', addDueDateInput, { once: true });
    return label;
  }

  const dueDateImage = () => {
    const get = () => {
      const image = new Image();
      image.src = taskDueDateImage;
      image.width = '16';
      image.height = '16';
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

const editPriority = (e, todoListId, projectListId) => {
  if (e.currentTarget.classList.contains('disabled')) return;
  const priorityInfoContent = document.querySelector('#expanded-todo-property-priority-info-content');
  const projectList = loadLocalStorage();

  while (priorityInfoContent.children.length > 0) {
    priorityInfoContent.children[0].remove();
  }

  const numberInput = document.createElement('input');
  numberInput.type = 'number';

}

export { inbox, confirmDeletionIsolatedContainer };
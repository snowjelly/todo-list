import plusImage from '../assets/imgs/plus.png';
import trashImage from '../assets/imgs/trash.png';
import { getActiveProject, loadLocalStorage } from '../todo';
import { addProject, removeProject, selectProject } from '../todo';

const projectMenu = (e) => {
  const container = () => {
      const getDiv = () => {
          const div = document.createElement('div');
          div.id = 'project-menu-container';
          div.classList.add('isolated-container');
          div.addEventListener('click', (e) => {
              if (e.currentTarget.id === e.target.id) {
                  div.remove();
              }
          });
          div.appendChild(content().getDiv());
          return div;
      }

      const content = () => {
          const getDiv = () => {
              const div = document.createElement('form');
              div.id = 'project-menu-content';
              div.classList.add('isolated-content');
              div.appendChild(header().getDiv());
              div.appendChild(nameContent().getDiv());
              div.appendChild(buttonContent().getDiv());
              return div;
          }

          const header = () => {
              const getDiv = () => {
                  const div = document.createElement('div');
                  div.id = 'project-menu-header';
                  div.textContent = 'Add project';
                  return div;
              }
              return { getDiv };
          }

          const nameContent = () => {
              const getDiv = () => {
                  const div = document.createElement('div');
                  div.id = 'project-menu-name-content';
                  div.appendChild(header().getDiv());
                  div.appendChild(input().getInput());
                  return div;
              }

              const header = () => {
                  const getDiv = () => {
                      const div = document.createElement('div');
                      div.id = 'name-header';
                      div.textContent = 'Name';
                      return div;
                  }
                  return { getDiv };
              }

              const input = () => {
                  const getInput = () => {
                      const input = document.createElement('input');
                      input.id = 'project-menu-name-input';
                      input.type = 'textarea';
                      input.maxLength = '25';
                      input.minLength = '1';
                      return input;
                  }
                  return { getInput };
              }
              return { getDiv };
          }

          const buttonContent = () => {
              const getDiv = () => {
                  const div = document.createElement('div');
                  div.id = 'project-menu-button-content';
                  div.appendChild(cancelBtn().getButton());
                  div.appendChild(addBtn().getButton());
                  return div;
              }

              const cancelBtn = () => {
                  const getButton = () => {
                      const button = document.createElement('button');
                      button.id = 'project-menu-cancel-btn';
                      button.classList.add('cancel-btn');
                      button.textContent = 'Cancel';
                      button.type = 'button';
                      button.addEventListener('click', removeProjectMenu);
                      return button;
                  }
                  return { getButton };
              }

              const addBtn = () => {
                  const getButton = () => {
                      const button = document.createElement('button');
                      button.id = 'project-menu-add-btn';
                      button.classList.add('add-btn');
                      button.textContent = 'Add';
                      button.type = 'button';
                      button.addEventListener('click', addProject);
                      return button;
                  }
                  return { getButton };
              }
              return { getDiv };
          }
          return { getDiv };
      }

      const appendToParent = () => {
          const parent = document.querySelector('#content');
          parent.appendChild(getDiv());
      }
      return { appendToParent };
  }
  container().appendToParent();
}

const removeProjectMenu = () => {
  const projectMenu = document.querySelector('#project-menu-container');
  projectMenu.remove();
}

const sidebarDiv = () => {
  const sidebarContainer = document.createElement('div');
  sidebarContainer.id = 'sidebar-container';

  const sidebarContent = document.createElement('div');
  sidebarContent.id = 'sidebar-content';
  
  const topMenu = (() => {
    const topMenu = document.createElement('ul');
    topMenu.id = 'top-menu';

    const inboxLi = document.createElement('li');
    inboxLi.id = 'filter-inbox';
    inboxLi.classList.add('hover-stone-200');
    if (getActiveProject().activeProject.title === "inbox") {
      inboxLi.classList.add('stone-200');
    }
    inboxLi.setAttribute('data-list-id', '0');

    inboxLi.addEventListener('click', selectProject);

    const inboxImage = document.createElement('div');
    inboxImage.classList.value = 'inbox-image';

    inboxLi.appendChild(inboxImage);

    const inboxTitle = document.createElement('p');
    inboxTitle.textContent = 'Inbox';

    inboxLi.appendChild(inboxTitle);

    topMenu.appendChild(inboxLi);

    sidebarContent.appendChild(topMenu);
  })();

  const bottomMenu = (() => {
    const bottomMenuContent = document.createElement('div');
    bottomMenuContent.id = 'bottom-menu-content';


    const bottomMenuHeaderContent = document.createElement('div');
    bottomMenuHeaderContent.id = 'bottom-menu-header-content';
    bottomMenuHeaderContent.addEventListener('click', projectMenu);

    bottomMenuContent.appendChild(bottomMenuHeaderContent);

    const bottomMenuHeader = document.createElement('p');
    bottomMenuHeader.classList.value = 'menu-header';
    bottomMenuHeader.textContent = 'Projects';

    bottomMenuHeaderContent.appendChild(bottomMenuHeader);

    const bottomMenuHeaderPlusImage = document.createElement('div');
    bottomMenuHeaderPlusImage.id = 'bottom-menu-header-plus';

    bottomMenuHeaderContent.appendChild(bottomMenuHeaderPlusImage);

    const projectList = document.createElement('ul');
    projectList.id = 'project-list';
    bottomMenuContent.appendChild(projectList);

    const renderProjectList = (projectListElement = projectList) => {

    const projectListArray = loadLocalStorage();

    for (let i=1;i<projectListArray.length;i++) {
      const projectListItem = document.createElement('li');

      const projectListItemText = document.createElement('p');
      projectListItemText.textContent = projectListArray[i].title;
      projectListItem.appendChild(projectListItemText);

      const projectListItemTrashImage = new Image();
      projectListItemTrashImage.src = trashImage;
      projectListItemTrashImage.width = 20;
      projectListItemTrashImage.height = 20;
      projectListItemTrashImage.classList.add('trash-image');
      projectListItem.appendChild(projectListItemTrashImage);
      projectListItemTrashImage.addEventListener('click', removeProject);
      
      projectListItem.classList.add('project-list-item', 'hover-stone-200');
      const projectList = loadLocalStorage();
      if (getActiveProject().id === i) {
        projectListItem.classList.add('stone-200');
      }


      projectListItem.setAttribute('data-list-id', [i]);
      projectListItem.addEventListener('click', selectProject);
      

      projectListElement.appendChild(projectListItem);
    }
  }
  renderProjectList();

    sidebarContent.appendChild(bottomMenuContent);

    return {renderProjectList};
  })();

  sidebarContainer.appendChild(sidebarContent);

  return {sidebarContainer, bottomMenu};
}

export { sidebarDiv, removeProjectMenu };
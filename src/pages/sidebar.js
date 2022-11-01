
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

    topMenu.appendChild(inboxLi);

    sidebarContent.appendChild(topMenu);
  })();

  sidebarContainer.appendChild(sidebarContent);

  return sidebarContainer;
}

export default sidebarDiv;
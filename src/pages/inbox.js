const inbox = () => {
  const content = document.querySelector('#content');

  const viewContainer = document.createElement('div');
  viewContainer.id = `view-container`;

  const viewContent = document.createElement('div');
  viewContent.id = 'view-content';

  viewContainer.appendChild(viewContent);

  const viewHeader = (() => {
    const viewHeaderContainer = document.createElement('div');
    viewHeaderContainer.id = 'view-header-container';
  
    viewContent.appendChild(viewHeaderContainer);
  
    const viewHeaderContent = document.createElement('div');
    viewHeaderContent.id = 'view-header-content';
    viewHeaderContent.innerHTML = `
    <h1>viewHeader</h1>
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
      const todoListItem = document.createElement('li');
      todoListItem.classList.value = 'todo-list-item';
  
      const todoListItemCheckbox = document.createElement('div');
      todoListItemCheckbox.classList.value = 'checkbox';
  
      todoListItem.appendChild(todoListItemCheckbox);
  
      const todoListItemText = document.createElement('p');
      todoListItemText.textContent = `
      Lorem ipsum dolor sit amet.`;

      todoListItem.appendChild(todoListItemText);
  
      viewList.appendChild(todoListItem);
    })();

    
    viewListContent.appendChild(viewList);

    viewListContainer.appendChild(viewListContent);
  })();

  content.appendChild(viewContainer);
}

export default inbox;
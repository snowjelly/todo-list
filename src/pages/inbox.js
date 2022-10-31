
const inbox = () => {
  const content = document.querySelector('#content');

  const viewContainer = document.createElement('div');
  viewContainer.id = 'view-container';

  const viewHeaderContainer = document.createElement('div');
  viewHeaderContainer.id = 'view-header-container';

  viewContainer.appendChild(viewHeaderContainer);

  const viewHeaderContent = document.createElement('div');
  viewHeaderContent.id = 'view-header-content';
  viewHeaderContent.innerHTML = `
  <h1>viewHeader</h1>
  `;

  viewHeaderContainer.appendChild(viewHeaderContent);

  content.appendChild(viewContainer);
}

export default inbox;
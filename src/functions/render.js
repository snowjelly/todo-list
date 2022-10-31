
const render = () => {
  //remove all children except for the header and sidebar
  const content = document.querySelector('#content');
  while (content.children.length > 2) {
    content.children[2].remove();
  }
}

export default render;
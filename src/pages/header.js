import sidebarHamburgerMenuIcon from '../assets/imgs/sidebar-hamburger-menu-icon.png'

const headerDiv = () => {
  const header = document.createElement('div');
  header.id = 'header';

  const sidebarHamburgerMenu = document.createElement('img');
  sidebarHamburgerMenu.src = sidebarHamburgerMenuIcon;
  sidebarHamburgerMenu.id = 'sidebar-hamburger-menu';

  header.appendChild(sidebarHamburgerMenu);



  return header;
}

export default headerDiv;
import sidebarHamburgerMenuIcon from "../assets/imgs/sidebar-hamburger-menu-icon.png";

const headerDiv = () => {
  const headerContainer = document.createElement("div");
  headerContainer.id = "header-container";

  const headerContent = document.createElement("div");
  headerContent.id = "header-content";

  const sidebarHamburgerMenu = document.createElement("img");
  sidebarHamburgerMenu.src = sidebarHamburgerMenuIcon;
  sidebarHamburgerMenu.id = "sidebar-hamburger-menu";
  sidebarHamburgerMenu.width = "28";
  sidebarHamburgerMenu.height = "28";

  headerContent.appendChild(sidebarHamburgerMenu);

  headerContainer.appendChild(headerContent);

  return headerContainer;
};

export default headerDiv;

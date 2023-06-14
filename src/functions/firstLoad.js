import headerDiv from "../pages/header";
import { inbox } from "../pages/inbox";
import { sidebarDiv } from "../pages/sidebar";
import { storageFirstLoad } from "../todo";

const firstLoad = () => {
  storageFirstLoad();
  render();
};

const render = () => {
  const content = document.querySelector("#content");
  const header = headerDiv();
  const sidebar = sidebarDiv().sidebarContainer;

  content.appendChild(header);
  content.appendChild(sidebar);
  inbox();
};

export { firstLoad, render };

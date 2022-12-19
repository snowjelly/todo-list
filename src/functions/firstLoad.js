import headerDiv from '../pages/header';
import inbox from '../pages/inbox';
import sidebarDiv from '../pages/sidebar';
import { storageFirstLoad } from '../todo';

const firstLoad = () => {
  storageFirstLoad();
  const content = document.querySelector('#content');
  const header = headerDiv();
  const sidebar = sidebarDiv();

  content.appendChild(header);
  content.appendChild(sidebar);
  inbox();
}

export default firstLoad;
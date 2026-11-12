import './style.css';
import { startQuiz } from './quiz';

const pages = document.querySelectorAll<HTMLElement>('.page');
const links = document.querySelectorAll<HTMLAnchorElement>('.nav__link');

function showPage(): void {
  const hash = location.hash.slice(1);
  const id = [...pages].some((p) => p.id === hash) ? hash : 'hem';

  pages.forEach((p) => (p.hidden = p.id !== id));
  links.forEach((l) => l.classList.toggle('is-active', l.hash === `#${id}`));
}

window.addEventListener('hashchange', showPage);
showPage();
startQuiz();
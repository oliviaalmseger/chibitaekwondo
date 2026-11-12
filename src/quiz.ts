import { questions, type Question } from './questions';

const root = document.querySelector<HTMLDivElement>('#quiz')!;

let deck: Question[] = [];
let index = 0;
let missed: Question[] = [];

function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export function startQuiz(list: Question[] = questions): void {
  deck = shuffle(list);
  index = 0;
  missed = [];
  renderQuestion();
}

function renderQuestion(): void {
  const q = deck[index];
  root.innerHTML = `
    <p class="quiz__progress">Fråga ${index + 1} av ${deck.length}</p>
    <div class="quiz__card">
      <span class="quiz__category">${q.category}</span>
      <h2 class="quiz__question">${q.question}</h2>
      <p class="quiz__answer" hidden>${q.answer}</p>
    </div>
    <div class="quiz__actions">
      <button class="btn" data-action="reveal">Visa svar</button>
      <button class="btn btn--success" data-action="right" hidden>Kunde ✓</button>
      <button class="btn btn--danger" data-action="wrong" hidden>Öva mer ✗</button>
    </div>
  `;
}

function reveal(): void {
  root.querySelector<HTMLElement>('.quiz__answer')!.hidden = false;
  root.querySelector<HTMLElement>('[data-action="reveal"]')!.hidden = true;
  root
    .querySelectorAll<HTMLElement>('[data-action="right"], [data-action="wrong"]')
    .forEach((b) => (b.hidden = false));
}

function next(): void {
  index++;
  if (index < deck.length) {
    renderQuestion();
  } else {
    renderResult();
  }
}

function renderResult(): void {
  const right = deck.length - missed.length;
  root.innerHTML = `
    <div class="quiz__card">
      <h2 class="quiz__question">Klart! 🎉</h2>
      <p>Du kunde <strong>${right} av ${deck.length}</strong></p>
    </div>
    <div class="quiz__actions">
      ${missed.length ? `<button class="btn" data-action="retry">Öva på missade (${missed.length})</button>` : ''}
      <button class="btn btn--muted" data-action="restart">Börja om</button>
    </div>
  `;
}

root.addEventListener('click', (e) => {
  const btn = (e.target as HTMLElement).closest<HTMLButtonElement>('[data-action]');
  if (!btn) return;

  switch (btn.dataset.action) {
    case 'reveal':
      reveal();
      break;
    case 'right':
      next();
      break;
    case 'wrong':
      missed.push(deck[index]);
      next();
      break;
    case 'retry':
      startQuiz(missed);
      break;
    case 'restart':
      startQuiz();
      break;
  }
});
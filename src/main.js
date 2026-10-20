import './style.css';

const form = document.querySelector('#chat-form');
const input = document.querySelector('#question');
const send = document.querySelector('#send');
const error = document.querySelector('#input-error');
const welcome = document.querySelector('#welcome');
const messages = document.querySelector('#messages');

const examples = new Map([
  ['¿Qué es un harness de IA?', 'Un harness es el software que rodea a un modelo de IA: organiza sus instrucciones, incorpora contexto, controla herramientas y ofrece una interfaz. En AulaNexo, el objetivo es conectar esas piezas para consultar el material de la materia. Esta explicación es un ejemplo escrito para el prototipo.'],
  ['¿Qué podré hacer con AulaNexo?', 'La primera versión funcional permitirá consultar apuntes de Tópicos Avanzados de Programación y recibir respuestas con referencias al material utilizado. Está previsto incorporar documentos TXT y después PDF. Este avance muestra únicamente la interfaz y el flujo de conversación.'],
  ['¿Cómo se usarán las fuentes?', 'Está previsto recuperar fragmentos relevantes de los documentos mediante RAG y entregarlos al modelo como contexto. Cada respuesta deberá identificar sus fuentes; si el material no es suficiente, el asistente lo indicará. Todavía no hay documentos incorporados ni recuperación implementada.'],
]);

function addMessage(label, text, kind) {
  const article = document.createElement('article');
  article.className = `message message-${kind}`;
  const heading = document.createElement('h2');
  heading.textContent = label;
  const body = document.createElement('p');
  body.textContent = text;
  article.append(heading, body);
  messages.append(article);
}

function updateInput() {
  send.disabled = input.value.trim().length === 0;
  error.textContent = '';
}

function submitQuestion(value) {
  const question = value.trim();
  if (!question) return;
  if (question.length > 1000) {
    error.textContent = 'Tu consulta puede tener como máximo 1000 caracteres.';
    return;
  }

  welcome.hidden = true;
  messages.hidden = false;
  addMessage('Tú', question, 'user');
  addMessage('AulaNexo · Respuesta de demostración', examples.get(question) ??
    'Tu consulta se recibió en esta demostración local. En una próxima etapa, AulaNexo buscará información en los documentos de la materia para responder con fuentes. Este prototipo todavía no analiza tu pregunta con IA ni consulta archivos.', 'assistant');
  input.value = '';
  updateInput();
  input.focus({ preventScroll: true });
  messages.scrollTop = messages.scrollHeight;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  submitQuestion(input.value);
});

input.addEventListener('input', updateInput);
input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' && !event.shiftKey && !event.isComposing) {
    event.preventDefault();
    form.requestSubmit();
  }
});

document.querySelectorAll('[data-question]').forEach((button) => {
  button.addEventListener('click', () => submitQuestion(button.dataset.question));
});

document.querySelector('#new-chat').addEventListener('click', () => {
  messages.replaceChildren();
  messages.hidden = true;
  welcome.hidden = false;
  input.value = '';
  updateInput();
  welcome.scrollTop = 0;
  input.focus({ preventScroll: true });
});

/* Задание со звездочкой */

/*
 Создайте страницу с кнопкой.
 При нажатии на кнопку должен создаваться div со случайными размерами, цветом и позицией на экране
 Необходимо предоставить возможность перетаскивать созданные div при помощи drag and drop
 Запрещено использовать сторонние библиотеки. Разрешено пользоваться только тем, что встроено в браузер
 */

/*
 homeworkContainer - это контейнер для всех ваших домашних заданий
 Если вы создаете новые html-элементы и добавляете их на страницу, то добавляйте их только в этот контейнер

 Пример:
   const newDiv = document.createElement('div');
   homeworkContainer.appendChild(newDiv);
 */
import './dnd.html';

const homeworkContainer = document.querySelector('#app');
let currentDiv;
document.addEventListener('mousemove', (e) => {
  if (currentDiv) {
    currentDiv.style.left = e.pageX - currentDiv.offsetWidth / 2 + 'px';
    currentDiv.style.top = e.pageY - currentDiv.offsetHeight / 2 + 'px';
  }
});

export function createDiv() {
  const maxHeight = 200;
  const maxWidth = 200;
  const div = document.createElement('div');
  div.classList.add('draggable-div');
  const randomWidth = Math.floor(Math.random() * maxWidth) + 'px';
  const randomHeight = Math.floor(Math.random() * maxHeight) + 'px';
  const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)})`;
  div.style.width = randomWidth;
  div.style.height = randomHeight;
  div.style.left = randomWidth;
  div.style.top = randomHeight;
  div.style.backgroundColor = randomColor;
  div.addEventListener('mousedown', (e) => {
    currentDiv = div;
  });
  div.addEventListener('mouseup', (e) => (currentDiv = false));
  return div;
}

const addDivButton = homeworkContainer.querySelector('#addDiv');

addDivButton.addEventListener('click', function () {
  const div = createDiv();
  homeworkContainer.appendChild(div);
});

import Chart from 'chart.js';
import AbstractView from '../abstract-view';

class ControlsView extends AbstractView {
  constructor() {

  }

  get template() {
    return `
      <input type="radio" name="control" id="control__task" class="control__input visually-hidden" checked />
      <label for="control__task" class="control__label">TASKS</label>
      <input type="radio" name="control" id="control__new-task" class="control__input visually-hidden" />
      <label for="control__new-task" class="control__label">ADD NEW TASK</label>
      <input type="radio" name="control" id="control__statistic" class="control__input visually-hidden" />
      <label for="control__statistic" class="control__label">STATISTIC</label>
      <input type="radio" name="control" id="control__search" class="control__input visually-hidden" />
      <label for="control__search" class="control__label">SEARCH</label>`
  }

  bind() {

  }
}

export default Stats;
console.log(1)
const statisticButton = document.querySelector(`#control__statistic`);
statisticButton.addEventListener(`click`, () => {
  console.log(1)
  if (statisticButton.checked) {
    document.querySelector(`.board.container`).classList.add(`visually-hidden`);
    document.querySelector(`.statistic`).classList.remove(`visually-hidden`);
  }
});

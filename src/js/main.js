import {filtersData, tasks} from './data/data';
import TaskModel from './model/task-model';

const taskModel = new TaskModel();

taskModel.renderTasks(tasks);
taskModel.renderFilters(filtersData, tasks);

const statisticButton = document.querySelector(`#control__statistic`);
statisticButton.addEventListener(`click`, () => {
  console.log(1)
  if (statisticButton.checked) {
    document.querySelector(`.board.container`).classList.add(`visually-hidden`);
    document.querySelector(`.statistic`).classList.remove(`visually-hidden`);
  }
});

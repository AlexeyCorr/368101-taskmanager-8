import TaskView from './views/task-view';
import TaskEditView from './views/task-edit-view';
import FilterView from './views/filter-view';
import {filtersData, taskData} from './data/data';

const filterContainer = document.querySelector(`.main__filter`);
const tasksContainer = document.querySelector(`.board__tasks`);

const taskComponent = new TaskView(taskData);
const taskEditComponent = new TaskEditView(taskData);
const filterComponent = new FilterView(filtersData);

filterContainer.appendChild(filterComponent.render());
tasksContainer.appendChild(taskComponent.render());

taskComponent.onEdit = () => {
  taskEditComponent.render();
  tasksContainer.replaceChild(taskEditComponent.element, taskComponent.element);
  taskComponent.unrender();
};

taskEditComponent.onSubmit = () => {
  taskComponent.render();
  tasksContainer.replaceChild(taskComponent.element, taskEditComponent.element);
  taskEditComponent.unrender();
}

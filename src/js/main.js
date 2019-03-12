import TaskView from './views/task-view';
import TaskEditView from './views/task-edit-view';
import FilterView from './views/filter-view';
import {filtersData, tasks} from './data/data';

const tasksContainer = document.querySelector(`.board__tasks`);
const filterContainer = document.querySelector(`.main__filter`);

const renderFilter = (data) => {
  data.forEach((it) => {
    filterContainer.appendChild(new FilterView(it).render());
  });
};

const renderTasks = (data) => {
  data.forEach((it) => {
    const taskComponent = new TaskView(it);
    const taskEditComponent = new TaskEditView(it);
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
  });
};

renderFilter(filtersData);
renderTasks(tasks);

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
  data.forEach((task) => {
    const taskComponent = new TaskView(task);
    const taskEditComponent = new TaskEditView(task);
    tasksContainer.appendChild(taskComponent.render());

    taskComponent.onEdit = () => {
      taskEditComponent.render();
      tasksContainer.replaceChild(taskEditComponent.element, taskComponent.element);
      taskComponent.unrender();
    };

    taskEditComponent.onSubmit = (newData) => {
      console.log(newData.tags);
      task.title = newData.title;
      task.tags = newData.tags;
      task.color = newData.color;
      task.repeatingDays = newData.repeatingDays;
      task.dueDate = newData.dueDate;

      taskComponent.update(task);
      taskComponent.render();
      tasksContainer.replaceChild(taskComponent.element, taskEditComponent.element);
      taskEditComponent.unrender();
    };
  });
};

renderFilter(filtersData);
renderTasks(tasks);

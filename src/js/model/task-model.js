import TaskView from './../views/task-view';
import TaskEditView from './../views/task-edit-view';
import FilterView from './../views/filter-view';

const tasksContainer = document.querySelector(`.board__tasks`);
const filterContainer = document.querySelector(`.main__filter`);

class TaskModel {
  _delete(tasks, task) {
    tasks.slice(task, 1);
    return tasks;
  }

  _update(task, newTask) {
    task = {...newTask};
    return task;
  }

  _filtered(initialTasks, filterName) {
    switch (filterName) {
      case `filter__all`:
        return initialTasks;

      case `filter__overdue`:
        return initialTasks.filter((it) => it.dueDate < Date.now());

      case `filter__today`:
        return initialTasks.filter((it) => it.dueDate === Date.now());;

      case `filter__favorites`:
        return initialTasks;

      case `filter__repeating`:
        return initialTasks.filter((it) => [...Object.entries(it.repeatingDays)]
          .some((rec) => rec[1]));
    }
  }

  renderTasks(tasks) {
    const fragment = document.createDocumentFragment();

    tasksContainer.innerHTML = ``;

    tasks.forEach((task) => {
      const taskComponent = new TaskView(task);
      const taskEditComponent = new TaskEditView(task);
      fragment.appendChild(taskComponent.render());

      taskComponent.onEdit = () => {
        taskEditComponent.render();
        tasksContainer.replaceChild(taskEditComponent.element, taskComponent.element);
        taskComponent.unrender();
      };

      taskEditComponent.onSubmit = (newData) => {
        const newTask = this._update(task, newData)
        taskComponent.update(newTask);
        taskComponent.render();
        tasksContainer.replaceChild(taskComponent.element, taskEditComponent.element);
        taskEditComponent.unrender();
      };

      taskEditComponent.onDelete = () => {
        this._delete(tasks, task);
        taskEditComponent.unrender();
      }
    });

    tasksContainer.appendChild(fragment);
  }

  renderFilters(filters, tasks) {
    const fragment = document.createDocumentFragment();

    filters.forEach((filter) => {
      const filterComponent = new FilterView(filter);
      fragment.appendChild(filterComponent.render());

      filterComponent.onFilter = () => {
        const filteredTasks = this._filtered(tasks, filterComponent.element
          .querySelector(`.filter__input`).id);
        this.renderTasks(filteredTasks);
      }
    });

    filterContainer.appendChild(fragment);
  }
}

export default TaskModel;

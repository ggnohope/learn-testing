import { tasksReducer } from "./tasksSlice";
import { addTask, updateTask, deleteTask } from "./tasksSlice";
import { TASK_STATUS } from "../constants";
import { ITask } from "../interfaces";
import { faker } from "@faker-js/faker";

describe("tasksSlice", () => {
  it("should add a task", () => {
    const initialTasks: ITask[] = [];
    const newTask = {
      title: "New Task",
      description: "New Task Description",
    };
    const action = addTask(newTask);
    const state = tasksReducer({ tasks: initialTasks }, action);
    expect(state.tasks).toHaveLength(1);
    expect(state.tasks[0].todo).toEqual(newTask.title);
    expect(state.tasks[0].completed).toEqual(false);
  });

  it("should update a task", () => {
    const initialTasks: ITask[] = [
      {
        id: "1",
        todo: faker.lorem.words(5),
        completed: false,
      },
      {
        id: "2",
        todo: faker.lorem.words(5),
        completed: false,
      },
      {
        id: "3",
        todo: faker.lorem.words(5),
        completed: false,
      },
    ];
    const action = updateTask({ id: "2", completed: TASK_STATUS.DONE });
    const state = tasksReducer({ tasks: initialTasks }, action);
    expect(state.tasks[1].completed).toEqual(true);
  });

  it("should delete a task", () => {
    const initialTasks: ITask[] = [
      {
        id: "1",
        todo: faker.lorem.words(5),
        completed: false,
      },
      {
        id: "2",
        todo: faker.lorem.words(5),
        completed: false,
      },
      {
        id: "3",
        todo: faker.lorem.words(5),
        completed: false,
      },
    ];
    const action = deleteTask("2");
    const state = tasksReducer({ tasks: initialTasks }, action);

    expect(state.tasks).toHaveLength(2);
    expect(state.tasks[0].id).toEqual("1");
    expect(state.tasks[1].id).toEqual("3");
  });
});

import { createSlice } from "@reduxjs/toolkit";
import { faker } from "@faker-js/faker";
import { v4 as uuidv4 } from "uuid";
import { TASK_STATUS } from "../constants";
import { IState } from "../interfaces";

const initialState: IState = {
  tasks: [
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
    {
      id: "4",
      todo: faker.lorem.words(5),
      completed: false,
    },
  ],
};

export const tasksSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks = [
        ...state.tasks,
        {
          todo: action.payload.title,
          completed: false,
          id: uuidv4(),
        },
      ];
    },
    updateTask: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload.id);
      if (task) {
        task.completed = action.payload.completed === TASK_STATUS.DONE;
      }
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
  },
});

export const { addTask, updateTask, deleteTask } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;

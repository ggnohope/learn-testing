import { createSelector } from "@reduxjs/toolkit";
import { IState } from "../interfaces";

export const selectTasks = (state: IState) => state.tasks;
export const tasksSelector = createSelector([selectTasks], (tasks) => tasks);

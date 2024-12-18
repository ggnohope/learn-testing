import { TASK_STATUS } from "../constants";
import axiosInstance from "./axios";

export const getTasksApi = async ({
  limit,
  skip,
}: {
  limit: number;
  skip: number;
}) => {
  const response = await axiosInstance.get(
    `/todos?limit=${limit}&skip=${skip}`
  );
  return response.data.todos;
};

export const createTaskApi = async ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  const response = await axiosInstance.post("/todos/add", {
    todo: title,
    description,
    completed: false,
    userId: 5,
  });
  return response.data.data;
};

export const updateTaskApi = async ({
  id,
  value,
}: {
  id: string;
  value: string;
}) => {
  const response = await axiosInstance.patch(`/todos/${id}`, {
    completed: value === TASK_STATUS.DONE,
  });
  return response.data.data;
};

export const deleteTaskApi = async ({ id }: { id: string }) => {
  const response = await axiosInstance.delete(`/todos/${id}`);
  return response.data;
};

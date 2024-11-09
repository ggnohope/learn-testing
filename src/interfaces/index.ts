export interface ITask {
  id: string;
  todo: string;
  completed: boolean;
}

export interface IState {
  tasks: ITask[];
}

export interface IAction {
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any;
}

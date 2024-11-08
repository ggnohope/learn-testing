import { PlusOutlined } from "@ant-design/icons";
import { Button, Empty, message } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getTasks } from "../services/taskService";
import TaskCard from "../components/taskCard";
import { faker } from "@faker-js/faker";

export interface ITask {
  id: string;
  todo: string;
  completed: boolean;
}

const DashboardPage = () => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState<ITask[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tasks = await getTasks({ limit: 10, skip: 0 });
        setTasks(tasks);
      } catch (error) {
        if (error instanceof Error) {
          message.error(error.message);
        }
      }
    };
    fetchData();
  }, []);

  const renderTasks = () => {
    if (!tasks || tasks.length === 0) {
      return (
        <Empty
          description="No tasks available. Create one?"
          className="text-white text-center text-xl"
        />
      );
    }

    return tasks.map((task) => (
      <TaskCard
        key={task.id}
        id={task.id}
        title={task.todo}
        description={faker.lorem.sentences(3)}
        status={task.completed ? "Done" : "In progress"}
      />
    ));
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-5 box-border">
      <div className="flex justify-center border-b-2 border-gray-400 pb-3">
        <div className="w-full flex justify-end items-center space-x-4">
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => {
              navigate("/dashboard/create");
            }}
          >
            Create Task
          </Button>
        </div>
      </div>
      <div className="pt-5">{renderTasks()}</div>
    </div>
  );
};

export default DashboardPage;

import { PlusOutlined } from "@ant-design/icons";
import { Button, Empty } from "antd";
import { useNavigate } from "react-router-dom";
import TaskCard from "../components/taskCard";
import { faker } from "@faker-js/faker";
import { useSelector } from "react-redux";
import { tasksSelector } from "../redux/selectors";

const DashboardPage = () => {
  const navigate = useNavigate();
  const tasks = useSelector(tasksSelector);

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
              navigate("/create-task");
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

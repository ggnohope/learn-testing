import { Card, Select, Button, Row, Col, message } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { TASK_UPDATE_STATUS_OPTIONS } from "../constants";
import { deleteTask, updateTask } from "../redux/tasksSlice";
import { useDispatch } from "react-redux";

interface TaskCardProps {
  id: string;
  title: string;
  description: string;
  status: string;
}

const Task = ({ id, title, description, status }: TaskCardProps) => {
  const dispatch = useDispatch();

  const handleDeleteTask = async () => {
    try {
      dispatch(deleteTask(id));
    } catch {
      message.error("Failed to delete task");
    }
  };

  const handleStatusChange = async (value: string) => {
    try {
      dispatch(updateTask({ id, completed: value }));
    } catch {
      message.error("Failed to update task status");
    }
  };

  return (
    <div className="mb-5">
      <Card
        className="bg-slate-300"
        title={<h1 className="text-xl mb-2">{title}</h1>}
      >
        <div className="h-20">
          <p>{description}</p>
          <Row justify="space-between" className="mt-4 bg">
            <Col>
              <Select
                value={status}
                onChange={handleStatusChange}
                style={{ width: 140 }}
                options={TASK_UPDATE_STATUS_OPTIONS}
              />
            </Col>
            <Col>
              <Button
                type="primary"
                danger
                icon={<DeleteOutlined />}
                onClick={handleDeleteTask}
              >
                Delete
              </Button>
            </Col>
          </Row>
        </div>
      </Card>
    </div>
  );
};

export default Task;

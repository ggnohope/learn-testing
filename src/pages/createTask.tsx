import { useState } from "react";
import { Input, Button, Form, message } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/tasksSlice";

interface Fields {
  title: string;
  description: string;
}

interface InputChangeEvent {
  target: {
    name: string;
    value: string;
  };
}

const CreateTaskPage = () => {
  const [fields, setFields] = useState({
    title: "",
    description: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleInputChange = (e: InputChangeEvent) => {
    const { name, value } = e.target;
    setFields((prevFields: Fields) => ({
      ...prevFields,
      [name]: value,
    }));
  };

  const handleSubmitTask = async () => {
    const { title, description } = fields;

    try {
      dispatch(addTask({ title, description }));
      navigate("/");
    } catch {
      message.error("Failed to create task");
    }
  };

  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="max-w-lg w-full bg-blue-100 p-8 rounded-md">
        <h1 className="text-xl font-bold mb-4">Create a new task</h1>
        <p className="mb-4">
          Provide information about the task you wish to complete.
        </p>

        <Form layout="vertical" onFinish={handleSubmitTask}>
          <Form.Item label="Title" className="w-full">
            <Input
              name="title"
              placeholder="Title"
              value={fields.title}
              onChange={handleInputChange}
            />
          </Form.Item>

          <Form.Item label="Description" className="w-full">
            <Input.TextArea
              name="description"
              placeholder="Description"
              rows={8}
              value={fields.description}
              onChange={handleInputChange}
            />
          </Form.Item>

          <Button type="primary" htmlType="submit" className="w-full mt-2">
            CREATE TASK
          </Button>
        </Form>

        <Button
          type="default"
          onClick={handleBackClick}
          className="w-full mt-4"
        >
          BACK
        </Button>
      </div>
    </div>
  );
};

export default CreateTaskPage;

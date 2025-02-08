import { useState } from "react";
import Todo from "./Todo.component";
const TodoContainer = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([
    {
      taskName: "kiran",
      taskStatus: "pending",
    },
  ]);
  const [editButtonClick, setEditButtonClick] = useState(null);
  const [activeTab, setActiveTab] = useState("pending");
  const navigation_list = ["pending", "completed"];

  const addTask = () => {
    if (editButtonClick !== null) {
      tasks[editButtonClick].taskName = task;
      tasks[editButtonClick].taskStatus = "pending";
      const newTasks = [...tasks];
      setTasks(newTasks);
      setEditButtonClick(null);
    } else {
      const data = [
        ...tasks,
        {
          taskName: task,
          taskStatus: "pending",
        },
      ];
      setTasks(data);
      setTask("");
    }
  };
  const handleInputChange = (e) => {
    setTask(e.target.value);
  };
  const handleEditTask = (index) => {
    const editableTask = tasks[index];
    setTask(editableTask?.taskName);
    setEditButtonClick(index);
  };

  const handleDeleteTask = (index) => {
    const deletedTask = tasks.filter((item, i) => {
      if (i !== index) {
        return item;
      }
    });
    setTasks(deletedTask);
  };

  const handleCompleteTask = (index) => {
    const completedTask = tasks[index];
    completedTask.taskStatus = "completed";
    const newTask = [...tasks];
    setTasks(newTask);
  };

  const handleTabChange = (tabValue) => {
    setActiveTab(tabValue);
  };

  const containerProps = {
    tasks,
    task,
    editButtonClick,
    activeTab,
  };
  const containerMethods = {
    setTasks,
    addTask,
    handleInputChange,
    handleEditTask,
    handleDeleteTask,
    handleCompleteTask,
    handleTabChange,
  };
  return (
    <Todo containerProps={containerProps} containerMethods={containerMethods} />
  );
};
export default TodoContainer;

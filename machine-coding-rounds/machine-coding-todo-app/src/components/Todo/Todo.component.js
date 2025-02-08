import "./Todo.styles.css";
const Todo = ({ containerProps, containerMethods }) => {
  const { tasks, task, editButtonClick, activeTab } = containerProps;
  const {
    setTasks,
    addTask,
    handleInputChange,
    handleEditTask,
    handleDeleteTask,
    handleCompleteTask,
    handleTabChange,
  } = containerMethods;
  return (
    <div className="todo-container">
      <h1>Todo App</h1>
      <div className="search-container">
        <input
          className="search-input"
          type="text"
          placeholder="enter the tasks"
          onChange={handleInputChange}
          value={task}
        />
        <button className="add-btn" onClick={addTask}>
          Add
        </button>
      </div>
      <div className="search-item-container">
        <div className="search-item-box">
          <div className="navigations">
            <div
              className={`navigation-item ${
                activeTab === "pending" ? "active" : ""
              }`}
              onClick={() => {
                handleTabChange("pending");
              }}
            >
              pending
            </div>
            <div
              className={`navigation-item ${
                activeTab === "completed" ? "active" : ""
              }`}
              onClick={() => {
                handleTabChange("completed");
              }}
            >
              completed
            </div>
          </div>
          <div className="task-item-list">
            {tasks
              ?.filter((item) => {
                if (item?.taskStatus === activeTab) {
                  return item;
                }
              })
              ?.map((item, index) => {
                return (
                  <div className="task-items">
                    <div className="itemName">{item.taskName}</div>
                    <div
                      className="itemTickMark"
                      onClick={() => {
                        handleCompleteTask(index);
                      }}
                    >
                      ✅
                    </div>
                    <div
                      className="itemDeleteMark"
                      onClick={() => {
                        handleDeleteTask(index);
                      }}
                    >
                      ❌
                    </div>
                    <div
                      className="itemEdit"
                      onClick={() => {
                        handleEditTask(index);
                      }}
                    >
                      &#9998;
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Todo;

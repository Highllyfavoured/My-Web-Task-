import { useState } from "react";
import { Trash2, Pencil } from "lucide-react";

function ExpenseItem({ tasks, task, filterTasks, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTask, setEditTask] = useState([
    tasks.description,
    tasks.amount,
    tasks.category,
  ]);

  function handleEdit() {
    if (editTask.trim() === "") return;
    onEdit(task.id, editTask);
    setIsEditing(false);
  }
  return (
    <div>
      {!filterTasks
        ? tasks.map((task, index) => {
            const categoryColor = {
              Food: {
                background: "#fae386ff",
                color: "#735e07ff",
              },
              Transport: {
                background: "#c8dcf7ff",
                color: "#102b4dff",
              },
              Bills: {
                background: "#ec8686ff",
                color: "#560d0dff",
              },
              Entertainment: {
                background: "rgb(236, 162, 236)",
                color: "purple",
              },
              Others: {
                background: "#9d9ea0ff",
                color: "#0a1525ff",
              },
            };

            return (
              <div className="expenses" key={index}>
                <div className="desc">
                  <h3> {task.description} </h3>
                  <span> {task.date}</span>
                </div>
                <div className="category" style={categoryColor[task.category]}>
                  {task.category}
                </div>
                <span className="amount">₦{task.amount.toLocaleString()}</span>
                <div className="buttons">
                  <button onClick={() => setIsEditing(true)} className="edit">
                    <Pencil />
                  </button>
                  <button onClick={() => onDelete(task.id)} className="trash">
                    <Trash2 />
                  </button>
                </div>
              </div>
            );
          })
        : filterTasks.map((task, index) => {
            return (
              <div className="expenses" key={index}>
                <div className="desc">
                  <h3> {task.description} </h3>
                  <span> {task.date}</span>
                </div>
                <div className="category">{task.category}</div>
                <span className="amount">₦{task.amount.toLocaleString()}</span>
                <div className="buttons">
                  {isEditing ? (
                    <form className="add-form" onSubmit={handleSubmit}>
                      <h3>Add New Expense</h3>
                      <label htmlFor="description">Description</label>
                      <br></br>
                      <input
                        id="description"
                        value={editTask}
                        onChange={(e) => setEditTask(e.target.value)}
                        onBlur={handleEdit}
                        onKeyPress={(e) => e.key === "Enter" && handleEdit()}
                        autoFocus
                      />
                    </form>
                  ) : (
                    <span onClick={() => setIsEditing(true)}>{task.text}</span>
                  )}
                  <button onClick={() => setIsEditing(true)} className="edit">
                    <Pencil />
                  </button>
                  <button onClick={() => onDelete(task.id)} className="trash">
                    <Trash2 />
                  </button>
                </div>
              </div>
            );
          })}
    </div>
  );
}

export default ExpenseItem;

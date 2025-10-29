import ExpenseItem from './ExpenseItem';


function ExpenseList ( {tasks, onToggle, onDelete, onEdit}) {
    if (tasks.length === 0) {
    return <p className="empty-message">No Expenses to show. Add one to get started!</p>;
  }

  return (
    <div className="task-list">
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}



export default ExpenseItem;
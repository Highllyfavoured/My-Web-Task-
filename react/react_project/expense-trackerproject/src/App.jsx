import { useState } from "react";
import Header from "./Header";
import AddExpenseForm from "./AddExpenseForm";
import CategoryFilter from "./CategoryFilter";
import ExpenseStats from './ExpenseStats';
import ExpenseList from './ExpenseList';
import "./ExpenseTracker.css";


function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      description: "NCC transport fare",
      amount: 50000,
      category: "Transport",
      date: "10/24/2025",
    },
    {
      id: 2,
      description: "Hand of God Food",
      amount: 20000,
      category: "Food",
      date: "10/23/2025",
    },
    {
      id: 3,
      description: "Power supply",
      amount: 2000,
      category: "Bills",
      date: "10/25/2025",
    },
    {
      id: 4,
      description: "Data",
      amount: 9000,
      category: "Entertainment",
      date: "10/12/2025",
    },
    {
      id: 5,
      description: "Church",
      amount: 10000,
      category: "Others",
      date: "10/26/2025",
    },
  ]);
  const [filterTasks, setFilterTasks] = useState(null);

  const [filter, setFilter] = useState("all");

  // Add new task
  function addTask(task) {
    setTasks((prev) => [...prev, task]);
  }

  // Toggle task completion
  function toggleTask(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  // Delete task
  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  // Edit task
  function editTask(id, newText) {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, description: newDescription, amount: newAmount, category: newCategory } : task))
    );
  }

  // Filter tasks
  const filteredTasks = tasks.filter((task) => {
    if (filter === "Food") return task.category === "Food";
    if (filter === "Transport") return task.category === "Transport";
    if (filter === "Bills") return task.category === "Bills";
    if (filter === "Entertainment") return task.category === "Entertainment";
    if (filter === "Others") return task.category === "Others";

    return true; // 'all'
  });

  return (
    <div className="app">
      <Header />
      <AddExpenseForm addTask={addTask} />
      <CategoryFilter
        currentFilter={filter}
        onFilterChange={setFilter}
        filteredTasks={filteredTasks}
        setFilterTasks={setFilterTasks}
      />
      <ExpenseStats tasks={tasks}/>
      <ExpenseList 
        tasks={filteredTasks}
        onToggle={toggleTask}
        onDelete={deleteTask}
        onEdit={editTask}
      /> 
    </div>  
  );
}

export default App;

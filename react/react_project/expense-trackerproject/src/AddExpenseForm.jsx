import { useState } from "react";

function AddExpenseForm({ addTask }) {
  const [formData, setFormData] = useState({
      description: "",
      amount: "",
      category: "Food",
      
    })


  function handleSubmit(e) {
    e.preventDefault();

    addTask({...formData, date: new Date().toLocaleDateString('en-NG')});
    setFormData({
      description: "",
      amount: "",
      category: "Food",
    })
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>Add New Expense</h3>
      <label htmlFor="description">Description</label><br></br>
      <input
        id="description"
        type="text"
        placeholder="e.g., Lunch at Mama Put"
        value={formData.description}
        onChange={(e) => {
          setFormData(prev => {
            return {
              ...prev,
              description: e.target.value
              
            }
          })
          // setAmount(e.target.value)
        }}
      /><br></br><br></br>
      <label htmlFor="amount">Amount (₦)</label><br></br>
      <input
        id="amount"
        type="text"
        placeholder="0.00"
        value={formData.amount}
        onChange={(e) => {
          setFormData(prev => {
            return {
              ...prev,
              amount: e.target.value
              
            }
          })
          // setAmount(e.target.value)
        }}
      /><br></br><br></br>
      <label htmlFor="category">Category</label>
      <select
        id="category"
        name="category"
        value={formData.category}
        onChange={(e) => {
          setFormData(prev => {
            return {
              ...prev,
              category: e.target.value
              
            }
          })
        }}
      >
        <option value="Food">Food</option>
        <option value="Transport">Transport</option>
        <option value="Bills">Bills</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Others">Others</option>
      </select><br></br><br></br>
      <button type="submit">Add Task</button>
    </form>
  );
}

export default AddExpenseForm;

function ExpenseStats  ({tasks}) {
    const total = tasks.reduce((sum, exp) => sum + exp.amount, 0);
    const highest = tasks.length ? Math.max(...tasks.map(expense => expense.amount)) : 0;
  return (
    <div className="stats">
      <div className="stat-total">
        <span className="stat-label">Total Spent</span>
        <span className="stat-number">₦{total.toLocaleString()}</span>
      </div>
      <div className="stat-length">
        <span className="stat-label">Expenses</span>
        <span className="stat-number">{tasks.length}</span>
      </div>
      <div className="stat-highest">
        <span className="stat-label">Highest</span>
        <span className="stat-number">₦{highest.toLocaleString()}</span>
      </div>
    </div>
  );
}

export default ExpenseStats;
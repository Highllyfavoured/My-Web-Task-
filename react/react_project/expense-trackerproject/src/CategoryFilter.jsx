function CategoryFilter ({ currentFilter, onFilterChange, filteredTasks, setFilterTasks }) {
    return (
    <div className="filter-buttons">
      <h3>Filter by Category</h3>
      <button 
        className={currentFilter === 'all' ? 'active' : ''}
        onClick={() => {onFilterChange('all')
          setFilterTasks(null)
        }}
      >
        All
      </button>
      <button 
        className={currentFilter === 'Food' ? 'active' : ''}
        onClick={() => {onFilterChange('Food')
          setFilterTasks(filteredTasks)
        }}
      >
        Food
      </button>
      <button 
        className={currentFilter === 'Transport' ? 'active' : ''}
        onClick={() => {onFilterChange('Transport')
          setFilterTasks(filteredTasks)
        }}
      >
        Transport
      </button>
      <button 
        className={currentFilter === 'Bills' ? 'active' : ''}
        onClick={() => {onFilterChange('Bills')
          setFilterTasks(filteredTasks)
        }}
      >
        Bills
      </button>
      <button 
        className={currentFilter === 'Entertainment' ? 'active' : ''}
        onClick={() => {onFilterChange('Entertainment')
          setFilterTasks(filteredTasks)
        }}
      >
        Entertainment
      </button>
      <button 
        className={currentFilter === 'Others' ? 'active' : ''}
        onClick={() => {onFilterChange('Others')
          setFilterTasks(filteredTasks)
        }}
      >
       Others
      </button>
    </div>
  );
}

export default CategoryFilter;
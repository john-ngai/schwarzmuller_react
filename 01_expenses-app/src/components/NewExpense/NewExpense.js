import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

export default function NewExpense({ onAddExpense }) {
  const [displayForm, setDisplayForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
    setDisplayForm(false);
  };

  return (
    <div className="new-expense">
      {!displayForm && (
        <button onClick={() => setDisplayForm(true)}>Add New Expense</button>
      )}
      {displayForm && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={() => setDisplayForm(false)}
        />
      )}
    </div>
  );
}

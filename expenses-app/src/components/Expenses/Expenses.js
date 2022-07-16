// Package
import { useState } from 'react';
// Components
import Card from '../UI/Card';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import ExpenseItem from './ExpenseItem';
// Stylesheet
import './Expenses.css';

export default function Expenses({ items }) {
  const [filteredYear, setFilteredYear] = useState('2022');
  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className='expenses'>
      <ExpensesFilter
        onChangeFilter={filterChangeHandler}
        filteredYear={filteredYear}
      />
      {filteredExpenses.map(expense => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
    </Card>
  );
}
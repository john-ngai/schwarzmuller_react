import { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

export default function Expenses({ items }) {
  const [ filteredYear, setFilteredYear ] = useState('2022');
  
  const filterChangeHandler = selectedYear => {
    console.log(selectedYear);
  }
  
  return (
    <Card className='expenses'>
      <ExpensesFilter
        onChangeFilter={filterChangeHandler}
        filteredYear={filteredYear}
      />

      {items.map(expense => (
        <ExpenseItem
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        />
      ))}
    </Card>
  );
}

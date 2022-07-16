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

      {}

      <ExpenseItem
        title={items[0].title}
        amount={items[0].amount}
        date={items[0].date}
      />
      <ExpenseItem
        title={items[1].title}
        amount={items[1].amount}
        date={items[1].date}
      />
      <ExpenseItem
        title={items[2].title}
        amount={items[2].amount}
        date={items[2].date}
      />
      <ExpenseItem
        title={items[3].title}
        amount={items[3].amount}
        date={items[3].date}
      />
    </Card>
  );
}

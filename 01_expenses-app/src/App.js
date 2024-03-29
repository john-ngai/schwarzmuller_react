import { useState } from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const dummyExpenses = [
  {
    id: 'e1',
    title: 'Toilet paper',
    amount: 28.25,
    date: new Date(2022, 4, 13),
  },
  {
    id: 'e2',
    title: 'Ribeye steaks',
    amount: 52.74,
    date: new Date(2022, 4, 18),
  },
  {
    id: 'e3',
    title: 'Bottled water',
    amount: 9.14,
    date: new Date(2022, 5, 4),
  },
  {
    id: 'e4',
    title: 'Charcoal',
    amount: 14.97,
    date: new Date(2022, 5, 24),
  },
];
export default function App() {
  const [expenses, setExpenses] = useState(dummyExpenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

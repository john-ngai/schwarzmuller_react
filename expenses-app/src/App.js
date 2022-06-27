import NewExpense from './components/NewExpense/NewExpense';
import Expenses from "./components/Expenses/Expenses";

export default function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet paper",
      amount: 28.25,
      date: new Date(2022, 4, 13),
    },
    {
      id: "e2",
      title: "Ribeye steaks",
      amount: 52.74,
      date: new Date(2022, 4, 18),
    },
    {
      id: "e3",
      title: "Bottled water",
      amount: 9.14,
      date: new Date(2022, 5, 4),
    },
    {
      id: "e4",
      title: "Charcoal",
      amount: 14.97,
      date: new Date(2022, 5, 24),
    },
  ];

  return (
    <div>
      <NewExpense />
      <Expenses expenses={expenses} />
    </div>
  );
}
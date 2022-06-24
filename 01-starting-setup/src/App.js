import Expenses from "./components/Expenses";

export default function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet paper",
      amount: 28.25,
      date: new Date(2022, 5, 13),
    },
    {
      id: "e2",
      title: "Ribeye steaks",
      amount: 52.74,
      date: new Date(2022, 5, 18),
    },
    {
      id: "e3",
      title: "Bottled water",
      amount: 9.14,
      date: new Date(2022, 6, 4),
    },
    {
      id: "e4",
      title: "Charcoal",
      amount: 14.97,
      date: new Date(2022, 6, 24),
    },
  ];

  return (
    <div>
      <Expenses expenses={expenses} />
    </div>
  );
}

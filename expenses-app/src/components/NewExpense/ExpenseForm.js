import { useState } from 'react';
import './ExpenseForm.css';

export default function ExpenseForm() {
  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: '',
  });

  const titleChangeHandler = event => {
    setUserInput(prevUserInput => ({
      ...prevUserInput,
      enteredTitle: event.target.value,
    }));
  };

  const amountChangeHandler = event => {
    setUserInput(prevUserInput => ({
      ...prevUserInput,
      enteredAmount: event.target.value,
    }));
  };
  
  const dateChangeHandler = event => {
    setUserInput(prevUserInput => ({
      ...prevUserInput,
      enteredDate: event.target.value,
    }));
  };

  return (
    <form>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            onChange={titleChangeHandler}
          />
        </div>

        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            onChange={amountChangeHandler}
          />
        </div>

        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01' max='2022-12-31'
            onChange={dateChangeHandler}
          />
        </div>
      </div>

      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
}
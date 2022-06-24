import './ExpenseItem.css';

export default function ExpenseItem() {
  return(
    <div className='expense-item'>
      <div>24 June 2022</div>
      <div className='expense-item__description'>
        <h2>Car Insurance</h2>
        <div className='expense-item__price'>$311.57</div>
      </div>
    </div>
  );
}
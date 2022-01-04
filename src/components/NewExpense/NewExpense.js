import { useState } from 'react';

import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = props => {
  const [isVisible, setIsVisible] = useState(false);

  const saveExpenseDataHandler = enteredExpenseData => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    setIsVisible(false);
  };

  const isVisibleHandler = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="new-expense">
      {!isVisible && (
        <button type="button" onClick={isVisibleHandler}>
          Add New Expense
        </button>
      )}
      {isVisible && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={isVisibleHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;

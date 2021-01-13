import React from 'react';
import ExpenseButton from './ExpenseButton';
//import ExpenseItem from './ExpenseItem';

const ExpenseInput = (props) => {
  return (
    <div className='expense-body-container'>
      <div className='expense-input-container'>
        <form onSubmit={props.handleSubmit}>
          <div className='form-row expense-input-content'>
            <div className='form-group col-sm-3'>
              <label className='col col-sm-.5 col-form-label'>Date:</label>
              <input
                className='form-control form-control-lg'
                type='date'
                id='date'
                name='date'
                value={props.date}
                onChange={props.handleChange}
                required
              ></input>
            </div>

            <div className='form-group col-sm-3'>
              <label className='col col-sm-.5 col-form-label'>
                Payment Type:
              </label>
              <select
                className='col col-sm-2.5 form-control-lg'
                id='type'
                name='paymentType'
                value={props.paymentType}
                onChange={props.handleChange}
                required
              >
                <option value='Cash'>Payment</option>
                <option value='Cash'>Cash</option>
                <option value='Credit'>Credit</option>
                <option value='Crypto'>Crypto</option>
              </select>
            </div>

            <div className='form-group col-sm-3'>
              <label className='col col-sm-.5 col-form-label'>Merchant:</label>
              <input
                className='form-control form-control-lg'
                type='text'
                id='merchant'
                name='merchant'
                value={props.merchant}
                onChange={props.handleChange}
                required
              ></input>
            </div>
          </div>

          <div className='form-row expense-input-content'>
            <div className='form-group col-sm-3'>
              <label className='col col-sm-.5 col-form-label'>Item:</label>
              <input
                className='form-control form-control-lg'
                type='text'
                id='item'
                name='item'
                value={props.item}
                onChange={props.handleChange}
                required
              ></input>
            </div>
            <div className='form-group col-sm-3'>
              <label className='col col-sm-.5 col-form-label'>Amount:</label>
              <input
                className='form-control form-control-lg'
                type='text'
                id='amount'
                name='amount'
                value={props.amount}
                onChange={props.handleChange}
                required
              ></input>
            </div>
          </div>

          <ExpenseButton />
        </form>
      </div>
    </div>
  );
};

export default ExpenseInput;

const ExpenseTable = (props) => {
  const expenses = props.expenses;

  //console.log('expenses ', expenses);
  return (
    <div className='list-group'>
      <table className='table'>
        <thead>
          <tr>
            <th>Date</th>
            <th>Payment Type</th>
            <th>Merchant</th>
            <th>Item</th>
            <th>Amount</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => {
            return (
              <tr key={expense.id}>
                <td> {expense.date} </td>
                <td> {expense.paymentType} </td>
                <td> {expense.merchant} </td>
                <td> {expense.item} </td>
                <td> ${expense.amount} </td>
                <td>
                  <button
                    className='btn btn-danger btn-sm'
                    onClick={() => props.handleDeleteExpense(expense.id)}
                  >
                    X
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseTable;

import './App.css';
import React from 'react';
import Header from './components/Header';
import ExpenseInput from './components/ExpenseInput.js';
import ExpenseTable from './components/ExpenseTable';
// import ExpensesList from "./components/ExpensesList";
import Footer from './components/Footer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expenses: [],
      date: '',
      paymentType: '',
      merchant: '',
      item: '',
      amount: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDeleteExpense = this.handleDeleteExpense.bind(this);
  }

  componentDidMount() {
    const storage = JSON.parse(localStorage.getItem('expenseItems')) || [];

    this.setState({
      expenses: storage
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.expenses.length !== this.state.expenses.length) {
      localStorage.setItem('expenseItems', JSON.stringify(this.state.expenses));
    }
  }

  handleChange(e) {
    const { name, value } = e.target;
    console.log('name ', name, 'value ', value);
    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const expenseItem = {
      id: Math.random(),
      date: this.state.date,
      paymentType: this.state.paymentType,
      merchant: this.state.merchant,
      item: this.state.item,
      amount: this.state.amount
    };

    this.setState({
      expenses: [...this.state.expenses, expenseItem],
      date: '',
      paymentType: '',
      merchant: '',
      item: '',
      amount: ''
    });

    localStorage.setItem('expenseItems', JSON.stringify(this.state.expenses));
  }

  handleDeleteExpense(id) {
    let expensesMinusTargetRow = this.state.expenses.filter(
      (expense) => expense.id !== id
    );

    this.setState({
      ...this.state,
      expenses: expensesMinusTargetRow
    });
  }
  render() {
    return (
      <div className='App'>
        <Header />
        <ExpenseInput
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          date={this.state.date}
          paymentType={this.state.paymentType}
          merchant={this.state.merchant}
          item={this.state.item}
          amount={this.state.amount}
        />
        <ExpenseTable
          expenses={this.state.expenses}
          handleDeleteExpense={this.handleDeleteExpense}
        />
        <Footer />
      </div>
    );
  }
}

export default App;

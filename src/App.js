import React from 'react';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';


function App() {
  const store = configureStore();

  store.dispatch(addExpense({ description: 'Vízdíj' }));
  console.log(store.getState());
  return (
    <AppRouter />
  );
}

export default App;

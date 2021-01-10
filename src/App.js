import React from 'react';
import './App.css';
import Child from './components/header';
import { TransactionProvider } from './components/transactionContext';
function App() {
  return (
    <div >
      <TransactionProvider>
          <Child />
      </TransactionProvider>
    </div>
  );
}

export default App;

import './App.css';
import { Typography,makeStyles, Box } from '@material-ui/core';
import Balance from './components/Balance';
import CardExpenses from './components/CardExpenses';
import Transaction from './components/Transaction';
import TransHistory from './components/TransHistory';
import { useState } from 'react';

const useStyle = makeStyles ({
  header: {
    color:'#15056d',
    margin: '15px 10 ',
    textTransform:'uppercase',
    letterSpacing:'5px',
    wordSpacing:'1.5rem',
    fontWeight:'bold',
    fontSize: '2.5rem', 
    
  },
  comp:{
    background: '#ffff',
    width: 700,
    padding: 10,
    borderRadius: 15,
    display: 'flex',
    '& > *':{
      width: '50%',
      padding: 8,
      height:'75vh',

    }

  }
})


function App() {
  const classes = useStyle();

  const [transactions, settransactions] = useState([
    {id:1, text:'Salary', amount:15000},
    {id:2, text:'Momos', amount:-40},
    {id:3, text:'Book', amount:-350},
    {id:4, text:'Bonus', amount:2500},
    {id:5, text:'Groceries', amount:-2200},
  
  ]);

  const deleteTransaction =(id) =>{
    settransactions(transactions.filter(transaction => transaction.id !== id))
  }
  const addTransaction = (transaction) => {
    console.log(transaction)
    settransactions(transactions => [transaction, ...transactions]);
  }
  
  return (
    <div className="App">
      <Typography className={classes.header}>Expense Tracker</Typography>
      <Box className={classes.comp}>
      <Box>
        <Balance transactions={transactions} />
        <CardExpenses transactions={transactions} />
        <Transaction addtransaction={addTransaction} />
      </Box>

      <Box>
      <TransHistory transactions={transactions} deleteTransaction={deleteTransaction} />
      </Box>
      
     </Box>
    </div>
  );
}

export default App;

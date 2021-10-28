import React from 'react'
import { Box, Typography, TextField, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { useState } from 'react'
const useStyle = makeStyles({
    container:{
        display: 'flex',
        flexDirection: 'column',
        
        '& > *':{
            marginTop: 33,
        }
    },
    button:{
        background: '#708bb5',
        color: '#020212',
        fontSize: 15
    }
})

const Transaction = ({ addtransaction}) => {
    const classes = useStyle();
    const [text, settext] = useState('');
    const [amount, setamount] = useState('');
    const newtransaction= () => {
        const transaction = {
            id: Math.floor(Math.random() * 10000),
            text:text,
            amount:+amount
        }
        addtransaction(transaction);
    }
    return (
        <Box className={classes.container}>
            <Typography variant="h5">New Transction</Typography>
            <TextField
              id="filles-basic" onChange={(e)  => settext(e.target.value)}
              label="Enter Expense"
              variant="filled"
              />
              <TextField
                id="filled-basic" onChange={(e)  => setamount(e.target.value)}
                label="Total Amount"
                variant="filled"
                />
                <Button className={classes.button} onClick={newtransaction} variant="contained" >Add New Transaction</Button>
        </Box>
    )
}

export default Transaction

import React from 'react'
import { Typography, Box, makeStyles } from '@material-ui/core'

const useStyle = makeStyles({
    Balance:{
        fontSize: 25,
        fontFamily: 'arial',
        
        

    }
})

const Balance = ({transactions}) => {
    const classes = useStyle();
    const amount = transactions.map(transaction => transaction.amount);
    const total = amount.reduce((amount, item) => (amount+=item), 0).toFixed(2);
    return (
        <Box>
            <Typography className={classes.Balance}>My Balance is ₹{total} </Typography>
            
        </Box>
    )
};

export default Balance

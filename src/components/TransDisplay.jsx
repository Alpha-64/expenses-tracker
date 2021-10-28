import React from 'react'
import { ListItemText, ListItem, makeStyles,ListItemIcon } from '@material-ui/core';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';

const useStyle = makeStyles({
    list:{
        marginTop: 5,
        border: '1.5px solid orange',
        fontWeight:'bold',
    }
})

const TransDisplay = ({ transaction, deleteTransaction }) => {
    const classes = useStyle();
    const color = transaction.amount >=0 ? '#598241' : '#6b2727';
    const sign = transaction.amount >=0 ? '₹' : '-₹';
    const amount = sign + Math.abs(transaction.amount);
    return (
        <ListItem className={classes.list} style={{background: `${color}`, color: '#F6F6F6'}}> 
        <ListItemIcon> 
        <DeleteRoundedIcon onClick={() => deleteTransaction(transaction.id)} /> 
        </ListItemIcon>
            <ListItemText primary={transaction.text}></ListItemText>
            <ListItemText primary={amount}></ListItemText>
        
        </ListItem>
    )
}

export default TransDisplay

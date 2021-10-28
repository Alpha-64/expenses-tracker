import { Box, Typography, Divider,List } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import TransDisplay from './TransDisplay'
import React from 'react'

const useStyle = makeStyles({
    component:{
        '& > *':{
            marginBottom:10,
        }

    }
})

const TransHistory = ({transactions, deleteTransaction}) => {
    const classes = useStyle();
    return (
        <Box className={classes.component}> 
            <Typography variant="h5" color="secondary">Transactions Data</Typography>
             <Divider inset />
             <List>
                {
                    transactions.map(transaction => {
                        return <TransDisplay key={transaction.id} transaction={transaction} deleteTransaction={deleteTransaction}/>
                    })
                }
             </List>
        </Box>
    )
}

export default TransHistory

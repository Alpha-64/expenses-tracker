import { Box, Card, CardContent, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyle = makeStyles({
    container:{
        display: 'flex',
        '& > *':{
            padding:10,
            flex: 1,
        }
    },
    income:{
        color: 'Green',
        fontWeight:'bold'
    },
    expense:{
        color: 'Red',
        fontWeight:'bold'
    }

})

const CardExpenses = ({ transactions}) => {
    const classes = useStyle();

    const amount = transactions.map(transaction => transaction.amount)
    const income = amount.filter(item => item > 0).reduce((acc, item) =>(acc+=item), 0).toFixed(2);
    const expense = (amount.filter(item => item < 0).reduce((acc, item) =>(acc+=item), 0) * -1).toFixed(2);
    return (
        <Box className={classes.container}>
        <Card>
            <CardContent>
                <Typography className={classes.income}>Income</Typography>
                <Typography className={classes.income}> Rs :{income}</Typography>
            </CardContent>
        </Card>
        <Card>
            <CardContent>
                <Typography className={classes.expense}>Expenses</Typography>
                <Typography  className={classes.expense}>Rs:{expense}</Typography>
            </CardContent>
        </Card>
        </Box>
    )
}

export default CardExpenses

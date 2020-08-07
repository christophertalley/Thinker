import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(()=>({
    drawer: {
        width: "fit-content",
        marginTop: "2em",
        borderRadius: "1em",
        margin: "0 auto",
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between"
    }
}))

export default function CustomDrawer() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Paper className={classes.drawer} square elevation={3}>
        <Tabs
            value={value}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleChange}
            aria-label="disabled tabs example"
        >
            <Tab label="Notes" />
            <Tab label="Schedule" />
            <Tab label="Planner" />
        </Tabs>
        </Paper>
    );
}

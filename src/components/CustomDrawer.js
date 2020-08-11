import React from 'react';
import '../styles/custom-drawer.css'
import PropTypes from "prop-types";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles, AppBar } from '@material-ui/core';
import MyTextEditor from './MyTextEditor';

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
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

export default function CustomDrawer() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
      };

    return (
        <>
            <Tabs
                value={value}
                indicatorColor="primary"
                textColor="primary"
                centered
                onChange={handleChange}
                style={{marginTop:"1em"}}
            >
                <Tab style={{borderRadius:"1rem",}} label="Notes" />
                <Tab label="Schedule" />
                <Tab label="Planner" />
            </Tabs>
            <TabPanel value={value} index={0} {...a11yProps(0)}>
                <MyTextEditor/>
            </TabPanel>
            <TabPanel value={value} index={1} {...a11yProps(0)}>
                Page Two
            </TabPanel>
            <TabPanel value={value} index={2} {...a11yProps(0)}>
                Page Three
            </TabPanel>
        </>
    );
}

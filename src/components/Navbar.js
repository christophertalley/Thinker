import React from "react";
import logo from "../images/logo_text.png"
import Login from "./Login";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(()=>({
    nav: {
        display: "grid",
        width: "100vw",
        gridTemplateColumns: "1fr 1fr 1fr",
        paddingTop: "1.5em"
    },

}))

export default function Navbar(){
    const classes = useStyles();
    return (
        <div className={classes.nav}>
            <div style={{display: "flex", flexDirection:"row",justifyContent: "center", gridColumn:"2 / 3"}}>
                <img src={logo} alt="Thinker Logo"/>
            </div>
            <div style={{display: "flex",justifyContent: "flex-end", alignItems:"center", gridColumn:"3"}} className={classes.buttonDiv}>
                <Login className={classes.login}/>
            </div>
        </div>
    )
}

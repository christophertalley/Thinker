import React from "react";
import logo from "../images/logo_text.png"
import LoginButton from "./Login";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(()=>({
    nav: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    buttonDiv: {
        display:"flex",
        justifyContent: "end",
        // width: "50vw"
    }

}))

export default function Navbar(){
    const classes = useStyles();
    return (
        <div className={classes.nav}>
            <img src={logo}/>
            <div className={classes.buttonDiv}>
                <LoginButton className={classes.login}/>
            </div>
        </div>
    )
}

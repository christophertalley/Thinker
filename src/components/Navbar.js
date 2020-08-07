import React from "react";
import logo from "../images/logo_text.png"
import Login from "./Login";
import { makeStyles } from "@material-ui/core";
import { useAuth0 } from "@auth0/auth0-react";
import Logout from "./Logout";
import "../styles/nav.css"

const useStyles = makeStyles(()=>({
    nav: {
        display: "grid",
        width: "100vw",
        gridTemplateColumns: "1fr 1fr 1fr",
        paddingTop: "0.75rem",
        paddingBottom: "0.75rem",
        backgroundColor:"#e0e0e0",
        borderRadius:"0 0 3rem 3rem",
        borderBottom: "2px solid #455a64"
    },
}))

export default function Navbar(){
    const classes = useStyles();
    const { isAuthenticated } = useAuth0();
    return (
        <div className={classes.nav}>
            <div style={{display: "flex", flexDirection:"row",justifyContent: "center", gridColumn:"2 / 3", width:"1fr"}}>
                <div className="logo">
                    <img src={logo} alt="Thinker Logo"/>
                </div>
            </div>
            <div style={{display: "flex",justifyContent: "flex-end", alignItems:"center", gridColumn:"3", marginRight:"1em"}} className={classes.buttonDiv}>
                { !isAuthenticated ? <Login/> : <Logout/>  }

            </div>
        </div>
    )
}

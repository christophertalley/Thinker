import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import IconButton from '@material-ui/core/IconButton';
import { Typography } from "@material-ui/core";

const Logout = () => {
    const { logout } = useAuth0();

    return (
        <IconButton  style={{borderRadius:"10%", padding:"0.25rem"}} onClick={() => logout()}>
            <Typography style={{color:"#607d8b", fontSize:"18px"}}>
                LOGOUT
            </Typography>
            <ExitToAppIcon style={{padding: "0.75rem", paddingRight:"0", color:"#607d8b"}}/>
        </IconButton>
    )
};

export default Logout;

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import IconButton from '@material-ui/core/IconButton';
import { Typography } from "@material-ui/core";

const Login = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <IconButton style={{borderRadius:"10%", padding:"0.25rem"}} onClick={() => loginWithRedirect()}>
            <Typography style={{color:"#607d8b"}}>
                LOGIN
            </Typography>
            <ArrowRightAltIcon style={{padding:"0.75rem", paddingRight:"0", color:"#607d8b"}}/>
        </IconButton>
    )
};

export default Login;

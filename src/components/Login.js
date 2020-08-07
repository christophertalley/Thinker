import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import IconButton from '@material-ui/core/IconButton';

const Login = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <IconButton onClick={() => loginWithRedirect()}>
            Login
            <ArrowRightAltIcon/>
        </IconButton>
    )
};

export default Login;

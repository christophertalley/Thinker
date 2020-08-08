import React, {useState} from "react";
import { useAuth0 } from "@auth0/auth0-react";
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import IconButton from '@material-ui/core/IconButton';
import { Typography } from "@material-ui/core";
import { api } from "../config";

const Login = () => {
    const { loginWithRedirect, user, setUser, getAccessTokenSilently} = useAuth0();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // const loginHandler = async () => {
    //             await loginWithRedirect();
    //             const token = await getAccessTokenSilently();
    //             const data = {username: user.nickname};

    //             const res = await fetch(`${api}/users`, {
    //                 method: "POST",
    //                 body: JSON.stringify(data),
    //                 headers: {
    //                     "Content-Type": "application/json",
    //                     Authorization: `Bearer ${token}`
    //                 }
    //             })
    //             const apiRes = await res.json();
    //             await setUser({...user, userId: apiRes.userId});
    // }

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

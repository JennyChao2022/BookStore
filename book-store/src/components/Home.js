import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React,{useState} from "react";
import {Link } from "react-router-dom";
/*import bkimage from "./components/Old-Town-Bookshop.jpg";
style={{backgroundImage:`url($bkimage)`}}*/



const Home = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    };

    return (
        <div className="auth-form-container" >
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Log In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
    )
};
export default Home;


/*
const Home = () => {
    return <div className="card">
        <header>
            Welcome to myBookshop!
        </header>
        <p>
            this is what we have offer now 
        </p>
        <h1>
            limitted time Only
        </h1>
        <Box display="flex" flexDirection="column" alighItems="center">
            <Button
                LinkComponent={Link}
                to ="/books"
                sx={{marginTop: 15, background:'orangered'}}
                variant="contained">
            <Typography variant="h3">View All Books On Sale</Typography>
            </Button>
        </Box>
        </div>;
};

export default Home;
*/
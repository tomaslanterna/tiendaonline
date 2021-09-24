import React,{useState,useContext,useEffect} from 'react';
import Button from '@material-ui/core/Button';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { NavLink } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import userContext from '../contexts/UserContext';
import { useHistory } from 'react-router';

const SignIn = () => {
    const theme = createTheme();
    const auth = getAuth();
    const history=useHistory();
    const {Login}=useContext(userContext);
    const [user,setUser]=useState({
        email:'',
        password:''
    });


    const onValueChange=(value,key)=>{
        setUser({
            ...user,
            [key]:value
        });
    }

    const setLogin = () => {
        signInWithEmailAndPassword(auth, user.email, user.password)
            .then((userCredential) => {
                Login(userCredential._tokenResponse);
                history.push("/");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                return alert("Usuario y/o contraseña incorrecto, vuelve a intentarlo");
            });

    }
    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1 }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign In
                    </Typography>
                    <Box component="form" noValidate sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    onChange={evt => onValueChange(evt.target.value, "email")}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                    onChange={evt => onValueChange(evt.target.value, "password")}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            fullWidth
                            variant="contained"
                            className="mt-3"
                            onClick={setLogin}
                        >
                            Sign In
                        </Button>
                        <Grid container justifyContent="flex-end" className="mt-3">
                            <Grid item>
                                <NavLink exact to={"/signup"} variant="body2">
                                    No tienes una cuenta? Registrate aqui.
                                </NavLink>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    )
}

export default SignIn

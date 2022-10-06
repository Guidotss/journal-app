import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { Google } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayOut } from '../layout/AuthLayOut';
import { useForm } from '../../hooks';
import { checkAuth, startGoogleSignIn } from '../../store/auth/thunks';

export const LoginPage = () => {

  
  const { status } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  

  const { password,email,onInputChange,reset } = useForm({

    email: 'guidoolguin@hotmail.com',
    password: '123456'

  }); 
  const isAuthenticating = useMemo( () => status === 'checking',[status] ); 
  
  const onSubmit = (e) => {
    e.preventDefault();
    console.log({email,password});
    dispatch(checkAuth(email,password));
  }

  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn());
  }

  return (

    <AuthLayOut title='Login'>
        <form onSubmit={ onSubmit } >

          <Grid container>

            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField label="Correo" type="email" placeholder="correo@google.com" name='email' value={ email } onChange={ onInputChange } fullWidth/>
            </Grid>

            <Grid item xs={ 12 }>
              <TextField label="Password" type="password" placeholder="********" name='password' value={password} onChange={ onInputChange }  fullWidth sx={{ mt: 2 }}/>
            </Grid>

            <Grid container spacing={ 2 } sx={{ mb:2 }}>

              <Grid item xs={ 12 } sm={ 6 } sx={{ mt:2 }}>
                  <Button disabled={isAuthenticating} type='submit' variant="contained" fullWidth >Login</Button>
              </Grid>

              <Grid item xs={ 12 } sm={ 6 } sx={{ mt:2 }}>
                  <Button disabled={isAuthenticating} variant="contained" onClick={ onGoogleSignIn }  fullWidth>
                    <Google/>
                    <Typography sx={{ ml:1 }}>Google</Typography>
                  </Button>
              </Grid>

            </Grid>

            <Grid container direction='row' justifyContent='flex-end'>

              <Link component={ RouterLink } color='inherit' to='/auth/register'>
                Crear una cuenta
              </Link>

            </Grid>

            </Grid>
          </form>
    </AuthLayOut>
  )
}
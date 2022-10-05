import { Link as RouterLink } from 'react-router-dom';
import { Google } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayOut } from '../layout/AuthLayOut';
import { useForm } from '../../hooks'; 

export const LoginPage = () => {

  const { handleChange,reset,email,password } = useForm({
    email: 'guidoolguin@hotmail.com',
    password: '123456'
  }); 

  const handleLogin = (e) => {
    e.preventDefault(); 
    console.log({email,password});
  }

  return (

    <AuthLayOut title='Login'>
        <form>

          <Grid container>

            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField label="Correo" type="email" placeholder="correo@google.com" name='email' onChange={ handleChange } value={ email } fullWidth/>
            </Grid>

            <Grid item xs={ 12 }>
              <TextField label="Password" type="password" placeholder="********" name='password' onChange={ handleChange } value={ password } fullWidth sx={{ mt: 2 }}/>
            </Grid>

            <Grid container spacing={ 2 } sx={{ mb:2 }}>
              <Grid item xs={ 12 } sm={ 6 } sx={{ mt:2 }}>
                  <Button variant="contained" fullWidth type='submit' onClick={ handleLogin }>Login</Button>
              </Grid>

              <Grid item xs={ 12 } sm={ 6 } sx={{ mt:2 }}>
                  <Button variant="contained" fullWidth>
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
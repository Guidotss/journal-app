import { Link as RouterLink } from 'react-router-dom';
import { Google } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayOut } from '../layout/AuthLayOut';
import { useForm } from '../../hooks'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { startRegisterWithEmailAndPassword } from '../../store/auth/thunks';

const formValidation = {
  email: [(value) =>value.includes('@'),'EL correo debe tener un @'],
  password: [(value) => value.length >= 6, 'La contraseña debe tener al menos 6 caracteres'],
  nombre: [(value) => value.length >= 3, 'El nombre debe tener al menos 3 caracteres'],
}

export const RegisterPage = () => {

  const dispatch = useDispatch(); 

 const [formSumited,setFormSubmited] = useState(false); 

  const { onInputChange,reset,email,password,nombre,formState,nombreValid,passwordValid,emailValid,isFormValid } = useForm({
    nombre: 'Guido',
    email:'guidoolguin2@gmail.com',
    password:'123456',
  },formValidation); 

  const onsubmit = (e) => {
    e.preventDefault();
    setFormSubmited(true);
    if(!isFormValid) return; 

    dispatch( startRegisterWithEmailAndPassword(formState) ); 
  }

  return (
    <AuthLayOut title='Register'>
      <h1>FormValid { isFormValid ? 'Valido' : 'No es valido' } </h1>
      <form>

        <Grid container>

        <Grid item xs={ 12 } sx={{ mt: 2 }}>
            <TextField label="Nombre" type="text" placeholder="Nombre..." fullWidth name='nombre' onChange={ onInputChange } value={nombre} error={!!nombreValid && formSumited} helperText={nombreValid}/>
        </Grid>

          <Grid item xs={ 12 } sx={{ mt: 2 }}>
            <TextField label="Correo" type="email" placeholder="correo@google.com" fullWidth name='email' onChange={ onInputChange } value={email} error={!!emailValid && formSumited} helperText={emailValid}/>
          </Grid>

          <Grid item xs={ 12 }>
            <TextField label="Password" type="password" placeholder="********" fullWidth sx={{ mt: 2 }} name='password' onChange={ onInputChange } value={password} error={!!passwordValid && formSumited} helperText={passwordValid}/>
          </Grid>

          <Grid container spacing={ 2 } sx={{ mb:2 }}>
            <Grid item xs={ 12 }  sx={{ mt:2 }}>
                <Button type='submit' onClick={onsubmit} variant="contained" fullWidth>Crear Cuenta</Button>
            </Grid>

          </Grid>

          <Grid container direction='row' justifyContent='flex-end'>
            <Typography sx={{mr:1}} >¿Ya tienes cuenta?</Typography>
            <Link component={ RouterLink } color='inherit' to='/auth/login'>
              Iniciar Sesión
            </Link>

          </Grid>

          </Grid>
        </form>
    </AuthLayOut>
  )
}
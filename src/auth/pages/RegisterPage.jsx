import { Link as RouterLink } from 'react-router-dom';
import { Google } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayOut } from '../layout/AuthLayOut';


export const RegisterPage = () => {
  return (
    <AuthLayOut title='Register'>
      <form>

        <Grid container>

        <Grid item xs={ 12 } sx={{ mt: 2 }}>
            <TextField label="Nombre" type="text" placeholder="Nombre..." fullWidth/>
        </Grid>

          <Grid item xs={ 12 } sx={{ mt: 2 }}>
            <TextField label="Correo" type="email" placeholder="correo@google.com" fullWidth/>
          </Grid>

          <Grid item xs={ 12 }>
            <TextField label="Password" type="password" placeholder="********" fullWidth sx={{ mt: 2 }}/>
          </Grid>

          <Grid container spacing={ 2 } sx={{ mb:2 }}>
            <Grid item xs={ 12 }  sx={{ mt:2 }}>
                <Button variant="contained" fullWidth>Crear Cuenta</Button>
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
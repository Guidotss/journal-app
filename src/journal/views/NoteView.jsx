import { SaveAltOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGalery } from "../components"

export const NoteView = () => {
  return (
    <Grid container direction='row' justifyContent='space-between' alignItems='center'>
        <Grid item xs={12} md={6}>
            <Typography fontSize={39} fontWeight='light'>
                21 de septiembre de 2022
            </Typography>
        </Grid>
        <Grid item>
            <Button color='primary' sx={{padding:2}}>
                <SaveAltOutlined sx={{fontSize:30,mr:1}}/>
                Guardar
            </Button>
        </Grid>

        <Grid container>
            <TextField type='text' variant='filled' fullWidth placeholder="Ingrese un titulo" label='Titulo' sx={{border:'none',mb:1}}/>
            <TextField type='text' variant='filled' fullWidth multiline placeholder="¿Que sucedio en el dia hoy?" minRows={5}/>
        </Grid>

        <ImageGalery/>
    </Grid>
  )
}   
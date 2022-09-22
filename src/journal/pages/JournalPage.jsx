import { AddOutlined, MailOutline } from "@mui/icons-material"
import { IconButton, Typography } from "@mui/material"
import { JournalLayOut } from "../layout/JournalLayOut"
import { NoteView, NothingSelectedView } from "../views"

export const JournalPage = () => {
  return (
    <>
      <JournalLayOut>
        {/* <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui itaque impedit quae possimus ab voluptas dicta suscipit provident a, facilis ullam, voluptatibus incidunt unde. Nobis velit iure architecto facere vero.</Typography> */}
        <NothingSelectedView/>
        {/* <NoteView/> */}
      </JournalLayOut>

      <IconButton size='large' sx={{color:'white',backgroundColor:'error.main',':hover':{backgroundColor:'error.main',opacity:0.9},position:'fixed',right:50,bottom:50}}>
        <AddOutlined sx={{fontSize:30}}/>
      </IconButton>
    </>
  )
}
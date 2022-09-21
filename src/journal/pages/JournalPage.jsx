import { MailOutline } from "@mui/icons-material"
import { Typography } from "@mui/material"
import { JournalLayOut } from "../layout/JournalLayOut"
import { NoteView, NothingSelectedView } from "../views"

export const JournalPage = () => {
  return (
    <>
      <JournalLayOut>
        {/* <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui itaque impedit quae possimus ab voluptas dicta suscipit provident a, facilis ullam, voluptatibus incidunt unde. Nobis velit iure architecto facere vero.</Typography> */}
        {/* <NothingSelectedView/> */}
        <NoteView/>
      </JournalLayOut>
    </>
  )
}
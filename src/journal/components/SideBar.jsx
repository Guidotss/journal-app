import { TurnedInNotOutlined } from "@mui/icons-material"
import { Box, Divider, Drawer, List, Toolbar,Typography,ListItem, ListItemButton, ListItemIcon, Grid, ListItemText } from "@mui/material"

export const SideBar = ({ drawerWidth=240 }) => {
  return (
    <Box component='nav' sx={{width:{sm:drawerWidth},flexShrink:{sm:0}}}>
        <Drawer variant='permanent' open sx={{display:{xs:'block'},'& .MuiDrawer-paper':{boxSizing:'border-box',width:drawerWidth}}}>
            <Toolbar>
                <Typography variant='h6' noWrap component='div' >
                    Guido Olguin
                </Typography>
            </Toolbar>
            <Divider />
            <List>
                {
                    ['Inbox','Starred','Send email','Drafts'].map((text)=>(
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <TurnedInNotOutlined/>
                                </ListItemIcon>
                                <Grid container>
                                    <ListItemText primary={ text }/>
                                    <ListItemText secondary={ 'loremasddadadas' }/>
                                </Grid>
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </List>
        </Drawer>
    </Box>
  )
}
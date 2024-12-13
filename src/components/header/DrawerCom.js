import React from 'react'
import Drawer from '@mui/material/Drawer';
import { List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
const DrawerCom = () => {
  return (
   <React.Fragment>
    <Drawer>
      <List>
        <ListItemButton>
          <ListItemIcon>
            <ListItemText>Login</ListItemText>
          </ListItemIcon>
        </ListItemButton>
      </List>
    </Drawer>

   </React.Fragment>
  )
}

export default DrawerCom

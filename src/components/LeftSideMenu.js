import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItem';
function LeftSideMenu() {
  const drawerWidth = '200px';
  return (
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        open={true}
      >
        <List>
          <ListItem>  This is the menu </ListItem>
          <ListItem>  This is the menu </ListItem>
          <ListItem>  This is the menu </ListItem>
          <ListItem>  This is the menu </ListItem>
        </List>
      </Drawer>
  );
}
export default LeftSideMenu;

import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItem';
import './style.css'


const MenuItem = ({ key, text }) => ( 
    <ListItem key={key} >  
      { text } 
    </ListItem> 
)

const defaultMenuOption = {
  key: "missing-menu-options",
  text: "Missing Menu Options"
};

function LeftSideMenu({
  menuOptions = [ defaultMenuOption ]
}) {
  return (
      <Drawer
        className="Drawer"
        variant="persistent"
        open={true}
      >
        <List>
          { menuOptions.map(MenuItem) }
        </List>
      </Drawer>
  );
}
export default LeftSideMenu;

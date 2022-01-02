import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Link } from "react-router-dom";
import ListItemText from '@mui/material/ListItem';
import './style.css'


const MenuItem = ({ key, text, link }) => ( 
    <ListItem key={key} button component={Link} to={link}>  
      <ListItemText>
        { text } 
      </ListItemText>
    </ListItem> 
)

const defaultMenuOption = {
  key: "missing-menu-options",
  text: "Missing Menu Options",
  link: "/"
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

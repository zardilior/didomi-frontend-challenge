import Box from '@mui/material/Box';
import LeftSideMenu from 'components/LeftSideMenu';
import { MenuOptions } from 'constants';
import { Outlet } from 'react-router-dom';
import './style.css';
function MainLayout() {
  return (
    <Box className="MainLayout">
      <LeftSideMenu menuOptions={MenuOptions} />
      <Outlet />
    </Box>
  )
}

export default MainLayout;

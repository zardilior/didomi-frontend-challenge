import Box from '@mui/material/Box';
import logo from 'resources/logo.svg';
import LeftSideMenu from 'components/LeftSideMenu';
import { MenuOptions } from 'constants';
import './style.css';
function MainLayout() {
  return (
    <Box className="MainLayout">
      <LeftSideMenu menuOptions={MenuOptions} />
      <Box className="MainLayout-header">
        <img src={logo} className="MainLayout-logo" alt="logo" />
        <p>
          Edit <code>src/MainLayout.js</code> and save to reload.
        </p>
        <a
          className="MainLayout-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </Box>
    </Box>
  )
}

export default MainLayout;

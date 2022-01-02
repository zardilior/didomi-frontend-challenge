import Box from '@mui/material/Box';
import logo from 'resources/logo.svg';

const GiveConsent = () => (
  <Box className="MainLayout-header">
    <img src={logo} className="MainLayout-logo" alt="logo" />
    <p>
      Edit <code>src/pages/GiveConsent/index.js</code> and save to reload.
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
);
export default GiveConsent;

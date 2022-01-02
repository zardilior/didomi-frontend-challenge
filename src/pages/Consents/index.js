import Box from '@mui/material/Box';
import logo from 'resources/logo.svg';
import { DataGrid } from '@mui/x-data-grid';
import './style.css';

const Columns = [
  { field: 'name', headerName: 'Name', width: 200 },
  { field: 'email', headerName: 'Email', width: 200 },
  { field: 'consent', headerName: 'Consent given for', width: 400 },
];

const Rows = [
  {
    id:'1',
    name:'Example',
    email:'ex@mp.le',
    consent:'Receive newsletter',
  },
  {
    id:'2',
    name:'Example',
    email:'ex@mp.le',
    consent:'Receive newsletter',
  },
  {
    id:'3',
    name:'Example',
    email:'ex@mp.le',
    consent:'Receive newsletter',
  }
];

const Consents = () => (
  <Box className="Consents" sx={{m:4}}>
    <Box className="TableWrapper" sx={{m:4}}>
      <DataGrid 
        columns={Columns}
        rows={Rows}
        pageSize={2}
        rowsPerPageOptions={[]}
      /> 
    </Box>
  </Box>
);
export default Consents;

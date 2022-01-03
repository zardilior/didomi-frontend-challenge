import { useState } from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useQuery } from '@redux-requests/react';
import './style.css';

const Columns = [
  { field: 'name', headerName: 'Name', width: 100 },
  { field: 'email', headerName: 'Email', width: 100 },
  { field: 'consent', headerName: 'Consent given for', width: 200 },
];

const fetchConsents = (page) => ({
  type: 'FETCH_CONSENTS',
  request: { url: `/consents?page=${page}` },
});

const Consents = () => {
  const [page,setPage] = useState(0);
  const rowCount = 10;
  const {
    data, 
    error,
    loading,
    pristine
  } = useQuery({
    type: 'FETCH_CONSENTS',
    action: fetchConsents,
    variables: [page],
    autoLoad: true,
    autoReset: true
  })

  console.log({ data, loading, error, pristine });
  const consents = data?.data || [];
  const total = data?.total || 10;
  return (
    <Box className="Consents" sx={{m:4}}>
      <Box className="TableWrapper" sx={{m:4}}>
        <DataGrid 
          columns={Columns}
          rows={consents} 
          pageSize={2}
          page={page}
          rowCount={total}
          onPageChange={setPage}
          paginationMode="server"
          rowsPerPageOptions={[]}
        /> 
      </Box>
    </Box>
  );
}
export default Consents;

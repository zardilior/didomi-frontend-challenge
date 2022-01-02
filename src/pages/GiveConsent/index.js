import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './style.css';

const Consents = [
  { label: 'Receive Newsletter' },
  { label: 'Be shown targeted ads' },
  { label: 'Contribute to anonymous visit statistics'}
];

const GiveConsent = () => (
  <Box className="GiveConsent">
    <Stack className="TextWrapper" spacing={2} direction="row" >
      <TextField label="name" variant="outlined" />     
      <TextField label="email" variant="outlined" />     
    </Stack>
    <Box sx={{my: 4}}> I agree to </Box>
    <FormGroup sx={{border:'1px solid black', p:2, mb:4 }}>
      { Consents.map(
        ({label}) => (
          <FormControlLabel
            control={<Checkbox />}
            label={label} 
          />
        )
      )}
    </FormGroup>
    <Button variant="contained" size="large">
      Give Consent 
    </Button>

  </Box>
);
export default GiveConsent;

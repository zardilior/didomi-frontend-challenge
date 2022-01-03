import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useMutation } from '@redux-requests/react';
import useConsentForm from 'hooks/useConsentForm';
import { Consents } from 'constants';
import './style.css';


const addConsent = (name, email, consentsSet) =>{
  const consentsArray = Array.from(consentsSet);
  console.log({ consentsArray });
  return {
    type: 'ADD_CONSENT',
    request: consentsArray.map( 
      consent => ({
        url: `/consents`,
        method:'post',
        data: {
          name,
          email,
          consent
        }
      })
    )
  };
}

const GiveConsent = () => {
  const {
    isValid,
    emailIsValid,
    handleConsentChange,
    handleChange,
    formData,
    setFormData,
    resetFormData
  } = useConsentForm();

  const {
    error,
    loading,
    mutate
  } = useMutation({
    type: 'ADD_CONSENT',
    variables:[formData.name, formData.email, formData.consents],
    action: addConsent,
  })

  const registerConsent = () => {
    for(let consent of formData.consents) {
      mutate(consent.label); 
    }
    resetFormData();
  }

  return (
    <Box className="GiveConsent">
      <Stack className="TextWrapper" spacing={2} direction="row" >
        <TextField
          name="name"
          label="Name"
          variant="outlined"
          onChange={handleChange} 
          value={formData.name}
          required={true}
        />     
        <TextField
          name="email"
          label="Email"
          variant="outlined"
          type="email"
          required={true}
          error={!emailIsValid}
          helperText={!emailIsValid && 'Email is not valid' }
          onChange={handleChange}
          value={formData.email}
        />     
      </Stack>
      <Box sx={{my: 4}}> I agree to </Box>
      <FormGroup sx={{border:'1px solid black', p:2, mb:4 }}>
        { Consents.map(
          (label) => (
            <FormControlLabel
              onChange={handleConsentChange}
              control={<Checkbox />}
              name={label}
              label={label} 
              key={label} 
              checked={formData.consents.has(label)}
            />
          )
        )}
      </FormGroup>
      <Button
        variant="contained"
        size="large"
        disabled={!isValid || loading}
        onClick={registerConsent}
      >
        { loading ? 'Saving...' : 'Give Consent' }
      </Button>
      {
        error && 
        (<span className="error"> Unable to save an error has occured </span>)
      }
    </Box>
  );
}
export default GiveConsent;

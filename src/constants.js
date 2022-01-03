export const MenuOptions = [
  {
    key: 'give-consent',
    link: 'give-consent',
    text: 'Give Consent',
  },
  {
    key: 'consents',
    link: 'consents',
    text: 'Collected consents',
  },
];
export const Consents = [
  'Receive Newsletter' ,
  'Be shown targeted ads' ,
  'Contribute to anonymous visit statistics'
];

export const emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

export const isEmail = (email) => email.match(emailRegex);

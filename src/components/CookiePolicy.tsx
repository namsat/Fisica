import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const CookiePolicy: React.FC = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Politica sui Cookie
        </Typography>
        <Typography variant="body1" paragraph>
          Questo sito web utilizza i cookie per migliorare l'esperienza dell'utente durante la navigazione. 
          I cookie sono piccoli file di testo che vengono salvati sul tuo dispositivo quando visiti un sito web.
        </Typography>
        <Typography variant="h5" gutterBottom>
          Tipi di cookie utilizzati
        </Typography>
        <Typography variant="body1" paragraph>
          1. Cookie essenziali: Necessari per il funzionamento del sito.
        </Typography>
        <Typography variant="body1" paragraph>
          2. Cookie analitici: Utilizzati per analizzare come gli utenti utilizzano il sito (Google Analytics).
        </Typography>
        <Typography variant="h5" gutterBottom>
          Come gestire i cookie
        </Typography>
        <Typography variant="body1" paragraph>
          Puoi gestire le tue preferenze sui cookie attraverso le impostazioni del tuo browser. 
          Puoi anche utilizzare il banner dei cookie presente sul sito per accettare o rifiutare i cookie non essenziali.
        </Typography>
        <Typography variant="body1">
          Per ulteriori informazioni sui cookie e su come gestirli, visita www.aboutcookies.org o www.allaboutcookies.org.
        </Typography>
      </Box>
    </Container>
  );
};

export default CookiePolicy;
import React, { useState, useEffect } from 'react';
import { Box, Button, Typography, Slide, IconButton, useTheme } from '@mui/material';
import { Close as CloseIcon, Cookie as CookieIcon } from '@mui/icons-material';
import Cookies from 'js-cookie';

const CookieBanner: React.FC = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    const cookieConsent = Cookies.get('cookieConsent');
    if (!cookieConsent) {
      setOpen(true);
    }
  }, []);

  const handleAccept = () => {
    Cookies.set('cookieConsent', 'true', { expires: 365 });
    setOpen(false);
  };

  const handleDecline = () => {
    Cookies.set('cookieConsent', 'false', { expires: 365 });
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Slide direction="up" in={open} mountOnEnter unmountOnExit>
      <Box
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: theme.zIndex.snackbar,
          p: 2,
          bgcolor: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(10px)',
          borderTop: `1px solid ${theme.palette.divider}`,
          boxShadow: '0px -2px 10px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            maxWidth: 'lg',
            margin: '0 auto',
          }}
        >
          <CookieIcon
            sx={{
              fontSize: 40,
              color: theme.palette.primary.main,
              mr: 2,
            }}
          />
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h6" component="div" gutterBottom>
              Noi rispettiamo la tua privacy
            </Typography>
            <Typography variant="body2">
              Utilizziamo i cookie per migliorare la tua esperienza sul nostro sito. 
              Accettando, acconsenti all'uso dei cookie in conformità con la nostra Politica sui Cookie.
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
            <Button
              variant="outlined"
              color="primary"
              size="small"
              onClick={handleDecline}
              sx={{ mr: 1 }}
            >
              Rifiuta
            </Button>
            <Button
              variant="contained"
              color="primary"
              size="small"
              onClick={handleAccept}
            >
              Accetta
            </Button>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleClose}
              sx={{ ml: 1 }}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Slide>
  );
};

export default CookieBanner;
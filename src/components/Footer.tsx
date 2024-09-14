import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <Box component="footer" sx={{ bgcolor: '#ffffff', color: '#22252b', py: 3, mt: 'auto' }}>
      <Container maxWidth="lg">
        <Typography variant="body2" align="center">
          © {new Date().getFullYear()} Le tue dispense di fisica a portata di mano!
        </Typography>
        <Typography variant="body2" align="center">
          <Link component={RouterLink} to="/privacy" color="inherit">
            Privacy Policy
          </Link>
          {' | '}
          <Link component={RouterLink} to="/cookie-policy" color="inherit">
            Cookie Policy
          </Link>
          {' | '}
          <Link component={RouterLink} to="/terms" color="inherit">
            Prima di inizare
          </Link>
          {' | '}
          <Link component={RouterLink} to="/contact" color="inherit">
            Contatti
          </Link>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Typography, Paper, TextField, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

import PDFViewer from './PDFViewer';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  margin: theme.spacing(1),
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  borderRadius: '15px',
  boxShadow: '0 8px 32px rgba(31, 38, 135, 0.2)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.18)',
  height: 'calc(100vh - 20px)', // Ridotto il margine verticale
  display: 'flex',
  flexDirection: 'column',
}));

interface DispenseProps {
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Dispense: React.FC<DispenseProps> = ({ currentPage, onPageChange }) => {
  const [goToPage, setGoToPage] = useState('');
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const page = searchParams.get('page');
    if (page) {
      onPageChange(parseInt(page, 10));
    } else {
      const section = searchParams.get('section');
      if (section) {
        const page = findPageBySection(section);
        if (page) {
          onPageChange(page);
        }
      }
    }
  }, [location, onPageChange]);

  const handleGoToPage = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const pageNumber = parseInt(goToPage);
    if (!isNaN(pageNumber) && pageNumber > 0) {
      onPageChange(pageNumber);
      setGoToPage('');
    }
  };

  const findPageBySection = (section: string): number | null => {
    // Implementa qui la logica per mappare le sezioni alle pagine
    // Questo è un esempio semplificato. Dovresti sostituirlo con una mappatura completa
    const sectionPageMap: { [key: string]: number } = {
      "2.1 Misure e gestione delle incertezze": 10,
      "3. Derivate e Integrali": 16,
      // Aggiungi qui altre mappature sezione-pagina
    };
    return sectionPageMap[section] || null;
  };

  return (
    <StyledPaper elevation={3}>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 1 }}>
        <form onSubmit={handleGoToPage} style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
          <TextField
            label="Vai alla Pagina"
            variant="outlined"
            size="small"
            value={goToPage}
            onChange={(e) => setGoToPage(e.target.value)}
            sx={{ mr: 1, flexGrow: 1 }}
          />
          <Button type="submit" variant="contained" size="small">Vai</Button>
        </form>
      </Box>

      <Box sx={{ flexGrow: 1, overflow: 'hidden' }}>
        <PDFViewer
          pdfUrl={`${process.env.PUBLIC_URL}/Dispense_Fisica_I.pdf`}
          currentPage={currentPage}
          onPageChange={onPageChange}
        />
      </Box>
    </StyledPaper>
  );
};

export default Dispense;
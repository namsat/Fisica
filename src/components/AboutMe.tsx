import React, { useState, useEffect } from 'react';
import { Box, Typography, Container, Grid, Paper, Avatar, IconButton, Tooltip, Fade } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import { Email, LinkedIn, GitHub, School, Code, Science, Build, Book, Laptop } from '@mui/icons-material';
import Link from '@mui/material/Link';

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const StyledBox = styled(Box)(({ theme }) => ({
  fontFamily: 'Roboto, sans-serif',
  background: 'linear-gradient(-45deg, #0077b6, #00b4d8, #90e0ef, #caf0f8)',
  backgroundSize: '400% 400%',
  animation: `${gradientAnimation} 15s ease infinite`,
  minHeight: '100vh',
  color: '#03045e',
  padding: theme.spacing(4),
  position: 'relative',
  overflow: 'hidden',
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: 'center',
  background: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
  borderRadius: '20px',
  boxShadow: '0 8px 32px rgba(31, 38, 135, 0.2)',
  border: '1px solid rgba(255, 255, 255, 0.18)',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 15px 40px rgba(31, 38, 135, 0.3)',
  },
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(25),
  height: theme.spacing(25),
  margin: 'auto',
  border: '4px solid #fff',
  boxShadow: '0 8px 32px rgba(31, 38, 135, 0.2)',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 15px 40px rgba(31, 38, 135, 0.3)',
  },
}));

const ContactIcon = styled(IconButton)(({ theme }) => ({
  color: '#03045e',
  margin: theme.spacing(1),
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.2) rotate(15deg)',
    color: '#0077b6',
  },
}));

const SkillIcon = styled(IconButton)(({ theme }) => ({
  fontSize: '2.5rem',
  color: '#03045e',
  margin: theme.spacing(2),
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.2) rotate(360deg)',
    color: '#0077b6',
  },
}));

const AboutMe: React.FC = () => {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);

  const skills = [
    { name: 'Fisica', icon: <Science />, description: 'Appassionato di fisica applicata, con particolare interesse verso le applicazioni ingegneristiche.' },
    { name: 'Programmazione', icon: <Code />, description: 'Capacità di programmazione in TypeScript, Python, React e Latex.' },
    { name: 'Ingegneria', icon: <Build />, description: 'Studio Ingegneria Fisica al Politecnico di Torino, partecipando al percorso intraprendenti.' },
    { name: 'Ricerca', icon: <Book />, description: 'Appassionato di ricerca scientifica, sempre alla ricerca di nuove sfide e scoperte nel campo della fisica.' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSkillIndex((prevIndex) => (prevIndex + 1) % skills.length);
    }, 3000); // Cambia skill ogni 5 secondi

    return () => clearInterval(timer);
  }, [skills.length]);

  return (
    <StyledBox>
      <Container maxWidth="lg">
        <Box sx={{ py: 8, textAlign: 'center' }}>
          <StyledAvatar alt="Satnam" src="/path-to-your-image.jpg" />
          <Typography variant="h2" sx={{ mt: 4, mb: 2, fontWeight: 700, fontFamily: 'Montserrat, sans-serif' }}>
            Ciao, sono Satnam!
          </Typography>
          <Typography variant="h5" sx={{ mb: 4, fontFamily: 'Lato, sans-serif', color: '#023e8a' }}>
            Studente di Ingegneria Fisica e Appassionato di Tecnologia
          </Typography>
          <Typography variant="body1" sx={{ mb: 6, maxWidth: '800px', mx: 'auto', fontSize: '1.2rem', lineHeight: 1.8, color: '#023e8a' }}>
            Benvenuto nel mio sito web! Sono un appassionato di fisica, programmazione e tecnologia. 
            Il mio obiettivo è unire la mia conoscenza in questi campi per creare soluzioni innovative. 
            Attualmente, sto studiando Ingegneria Fisica al Politecnico di Torino.
          </Typography>
        </Box>

        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <StyledPaper>
              <Typography variant="h4" sx={{ mb: 4, fontWeight: 600, fontFamily: 'Montserrat, sans-serif' }}>
                Le Mie Competenze
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', mb: 4 }}>
                {skills.map((skill, index) => (
                  <Tooltip key={skill.name} title={skill.name} arrow>
                    <SkillIcon>
                      {skill.icon}
                    </SkillIcon>
                  </Tooltip>
                ))}
              </Box>
              <Fade in={true} timeout={1000}>
                <Box sx={{ minHeight: '100px' }}>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                    {skills[currentSkillIndex].name}
                  </Typography>
                  <Typography variant="body1">
                    {skills[currentSkillIndex].description}
                  </Typography>
                </Box>
              </Fade>
            </StyledPaper>
          </Grid>
          <Grid item xs={12} md={6}>
            <StyledPaper>
              <Typography variant="h4" sx={{ mb: 4, fontWeight: 600, fontFamily: 'Montserrat, sans-serif' }}>
                Contattami
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
                <Link href="mailto:satnamsinghprojects@gmail.com" target="_blank" rel="noopener noreferrer">
                  <ContactIcon aria-label="Email">
                    <Email fontSize="large" />
                  </ContactIcon>
                </Link>
                <Link href="https://linkedin.com/in/satnam-singh-7aa56930b" target="_blank" rel="noopener noreferrer">
                  <ContactIcon aria-label="LinkedIn">
                    <LinkedIn fontSize="large" />
                  </ContactIcon>
                </Link>
                <Link href="https://github.com/namsat" target="_blank" rel="noopener noreferrer">
                  <ContactIcon aria-label="GitHub">
                    <GitHub fontSize="large" />
                  </ContactIcon>
                </Link>
              </Box>
              <Typography variant="body1" sx={{ fontSize: '1.1rem', color: '#023e8a' }}>
                Sono sempre aperto a nuove opportunità di collaborazione e apprendimento. 
                Non esitare a contattarmi per discutere di progetti interessanti, 
                condividere idee o semplicemente per fare una chiacchierata!
              </Typography>
            </StyledPaper>
          </Grid>
        </Grid>
      </Container>
    </StyledBox>
  );
}

export default AboutMe;
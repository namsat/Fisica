import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Carousel from './Carousel';
import { Container, Typography, Box, TextField, Button, Snackbar, Alert, Grid, Paper, IconButton } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import { ArrowForward, Email, Lock, Person } from '@mui/icons-material';
import Errori from "./Images/Errori.png";
import SR from "./Images/SR.png";
import Derivate from "./Images/Derivate.png";
import Cinematica from "./Images/Cinematica.png";
import Dinamica from "./Images/Dinamica.png";
import Lavoro from "./Images/Lavoro.png";
import SP from "./Images/SP.png";
import Momenti from "./Images/Momenti.png";
import SDP from "./Images/SDP.png";
import Impulso from "./Images/Impulso.png";
import CR from "./Images/CR.png";
import Termodinamica from "./Images/Termodinamica.png";
import Flusso from "./Images/Flusso.png";
import Integrali from "./Images/Integrali.png";
import PV from "./Images/PV.png";
import CP from "./Images/CP.png";
import MP from "./Images/MP.png";
import CI from "./Images/CI.png";
import DV from "./Images/DV.png";

interface Movie {
  id: string;
  title: string;
  description: string;
  director: string;
  rt_score: string;
  img: string;
  url: string;
  page: number;
}

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`;

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  background: 'rgba(255, 255, 255, 0.9)',
  backdropFilter: 'blur(10px)',
  borderRadius: '15px',
  boxShadow: '0 8px 32px rgba(31, 38, 135, 0.37)',
  border: '1px solid rgba(255, 255, 255, 0.18)',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.02)',
    boxShadow: '0 15px 40px rgba(31, 38, 135, 0.5)',
  },
}));

const AnimatedTextField = styled(TextField)(({ theme }) => ({
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
  '& .MuiOutlinedInput-root': {
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
      '& fieldset': {
        borderColor: theme.palette.primary.main,
      },
    },
  },
}));

const AnimatedButton = styled(Button)(({ theme }) => ({
  transition: 'all 0.3s ease-in-out',
  overflow: 'hidden',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 0,
    height: 0,
    background: 'rgba(255,255,255,0.2)',
    borderRadius: '50%',
    transition: 'width 0.3s ease-out, height 0.3s ease-out',
    transform: 'translate(-50%, -50%)',
  },
  '&:active::after': {
    width: '300px',
    height: '300px',
  },
}));

const FloatingElement = styled('div')({
  animation: `${float} 3s ease-in-out infinite`,
});

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formValues.password !== formValues.confirmPassword) {
      setSnackbarMessage('Le password non coincidono.');
      setSnackbarOpen(true);
      return;
    }

    try {
      // Simula successo della registrazione
      setSnackbarMessage('Registrazione avvenuta con successo!');
      setSnackbarOpen(true);
      setFormValues({ name: '', email: '', password: '', confirmPassword: '' });
    } catch (error) {
      setSnackbarMessage('Errore durante la registrazione. Riprova più tardi.');
      setSnackbarOpen(true);
    }
  };

  const introMovies = [
    {
      id: "3",
      title: "Vettori e sistemi di riferimento",
      description: "Basi della rappresentazione vettoriale e sistemi di coordinate",
      director: "Galileo Galilei",
      rt_score: "96",
      img: SR,
      url: "/dispense?section=4%20Vettori%20e%20sistemi%20di%20riferimento",
      page: 18
    },
    {
      id: "4",
      title: "Cinematica",
      description: "Studio del movimento dei corpi",
      director: "Albert Einstein",
      rt_score: "97",
      img: Cinematica,
      url: "/dispense?section=5%20Cinematica",
      page: 26
    },
    {
      id: "5",
      title: "Dinamica",
      description: "Forze e cause del movimento",
      director: "Isaac Newton",
      rt_score: "99",
      img: Dinamica,
      url: "/dispense?section=6%20Dinamica",
      page: 58
    },
    {
      id: "6",
      title: "Lavoro e Energie",
      description: "Concetti di lavoro, energia cinetica e potenziale",
      director: "James Prescott Joule",
      rt_score: "94",
      img: Lavoro,
      url: "/dispense?section=7%20Lavoro%20e%20Energie",
      page: 72
    },
    {
      id: "9",
      title: "Sistemi di punti",
      description: "Dinamica dei sistemi di particelle",
      director: "Joseph-Louis Lagrange",
      rt_score: "95",
      img: SDP,
      url: "/dispense?section=10%20Dinamica%20del%20sistema%20di%20punti",
      page: 113
    },
    {
      id: "11",
      title: "Corpo rigido",
      description: "Dinamica dei corpi rigidi",
      director: "Leonhard Euler",
      rt_score: "96",
      img: CR,
      url: "/dispense?section=12%20Corpo%20rigido",
      page: 135
    },
    {
      id: "12",
      title: "Termodinamica",
      description: "Studio del calore e delle sue trasformazioni",
      director: "Rudolf Clausius",
      rt_score: "97",
      img: Termodinamica,
      url: "/dispense?section=13%20Termodinamica",
      page: 160
    }
  ];

  const introduzioneMovies = [
    {
      id: "1",
      title: "Incertezze",
      description: "Gestione delle incertezze nelle misurazioni fisiche",
      director: "Werner Heisenberg",
      rt_score: "95",
      img: Errori,
      url: "/dispense?section=2.1%20Misure%20e%20gestione%20delle%20incertezze",
      page: 10
    },
    {
      id: "2",
      title: "Derivate e Integrali",
      description: "Concetti matematici fondamentali per la fisica",
      director: "Isaac Newton",
      rt_score: "98",
      img: Derivate,
      url: "/dispense?section=3%20Derivate%20e%20Integrali",
      page: 16
    },
    {
      id: "3",
      title: "Vettori e sistemi di riferimento",
      description: "Basi della rappresentazione vettoriale e sistemi di coordinate",
      director: "Galileo Galilei",
      rt_score: "96",
      img: SR,
      url: "/dispense?section=4%20Vettori%20e%20sistemi%20di%20riferimento",
      page: 18
    },
    {
      id: "4",
      title: "Cinematica",
      description: "Studio del movimento dei corpi",
      director: "Albert Einstein",
      rt_score: "97",
      img: Cinematica,
      url: "/dispense?section=5%20Cinematica",
      page: 26
    },
    {
      id: "5",
      title: "Dinamica",
      description: "Forze e cause del movimento",
      director: "Isaac Newton",
      rt_score: "99",
      img: Dinamica,
      url: "/dispense?section=6%20Dinamica",
      page: 58
    },
    {
      id: "6",
      title: "Lavoro e Energie",
      description: "Concetti di lavoro, energia cinetica e potenziale",
      director: "James Prescott Joule",
      rt_score: "94",
      img: Lavoro,
      url: "/dispense?section=7%20Lavoro%20e%20Energie",
      page: 72
    },
    {
      id: "7",
      title: "Moti relativi",
      description: "Studio del movimento in diversi sistemi di riferimento",
      director: "Albert Einstein",
      rt_score: "98",
      img: SP,
      url: "/dispense?section=8%20Moti%20relativi",
      page: 90
    },
    {
      id: "8",
      title: "Momenti",
      description: "Momento angolare e momento delle forze",
      director: "Leonhard Euler",
      rt_score: "93",
      img: Momenti,
      url: "/dispense?section=9%20Momenti",
      page: 102
    },
    {
      id: "9",
      title: "Sistemi di punti",
      description: "Dinamica dei sistemi di particelle",
      director: "Joseph-Louis Lagrange",
      rt_score: "95",
      img: SDP,
      url: "/dispense?section=10%20Dinamica%20del%20sistema%20di%20punti",
      page: 113
    },
    {
      id: "10",
      title: "Urti",
      description: "Collisioni tra corpi e conservazione del momento",
      director: "John Wallis",
      rt_score: "92",
      img: Impulso,
      url: "/dispense?section=11%20Urti",
      page: 133
    },
    {
      id: "11",
      title: "Corpo rigido",
      description: "Dinamica dei corpi rigidi",
      director: "Leonhard Euler",
      rt_score: "96",
      img: CR,
      url: "/dispense?section=12%20Corpo%20rigido",
      page: 135
    },
    {
      id: "12",
      title: "Termodinamica",
      description: "Studio del calore e delle sue trasformazioni",
      director: "Rudolf Clausius",
      rt_score: "97",
      img: Termodinamica,
      url: "/dispense?section=13%20Termodinamica",
      page: 160
    },
    {
      id: "13",
      title: "Flusso",
      description: "Concetto di flusso in fisica",
      director: "James Clerk Maxwell",
      rt_score: "94",
      img: Flusso,
      url: "/dispense?section=16%20Flusso",
      page: 195
    }
  ];

  const strumentiMovies = [
    {
      id: "1",
      title: "Incertezze",
      description: "Gestione delle incertezze nelle misurazioni fisiche",
      director: "Werner Heisenberg",
      rt_score: "95",
      img: Errori,
      url: "/dispense?section=2.1%20Misure%20e%20gestione%20delle%20incertezze",
      page: 10
    },
    {
      id: "2",
      title: "Derivate",
      description: "Concetto fondamentale del calcolo differenziale applicato alla fisica",
      director: "Isaac Newton",
      rt_score: "98",
      img: Derivate,
      url: "/dispense?section=3.%20Derivate%20e%20Integrali",
      page: 16
    },
    {
      id: "3",
      title: "Integrali",
      description: "Concetto fondamentale del calcolo integrale applicato alla fisica",
      director: "Gottfried Wilhelm Leibniz",
      rt_score: "97",
      img: Integrali,
      url: "/dispense?section=3.%20Derivate%20e%20Integrali",
      page: 16
    },
    {
      id: "4",
      title: "Prodotto vettoriale",
      description: "Operazione fondamentale nell'algebra vettoriale",
      director: "Josiah Willard Gibbs",
      rt_score: "94",
      img: PV,
      url: "/dispense?section=4%20Vettori%20e%20sistemi%20di%20riferimento",
      page: 18
    },
    {
      id: "5",
      title: "Coordinate Polari",
      description: "Sistema di coordinate bidimensionale alternativo alle coordinate cartesiane",
      director: "Leonhard Euler",
      rt_score: "93",
      img: CP,
      url: "/dispense?section=4.3%20Coordinate%20polari",
      page: 22
    },
    {
        id: "6",
        title: "Misure ripetute",
        description: "Tecnica per migliorare la precisione delle misurazioni sperimentali",
        director: "Ronald Fisher",
        rt_score: "92",
        img: MP,
        url: "/dispense?section=2.1%20Misure%20e%20gestione%20delle%20incertezze",
        page: 10
      },
      {
        id: "7",
        title: "Coordinate intrinseche",
        description: "Sistema di coordinate basato sulla geometria della traiettoria",
        director: "Joseph-Louis Lagrange",
        rt_score: "91",
        img: CI,
        url: "/dispense?section=4.4%20Coordinate%20intrinseche",
        page: 23
      },
      {
        id: "8",
        title: "Derivate di un vettore",
        description: "Applicazione del calcolo differenziale ai vettori",
        director: "James Clerk Maxwell",
        rt_score: "96",
        img: DV,
        url: "/dispense?section=4.5%20Derivata%20di%20un%20vettore",
        page: 24
      }
    ];
  
    const meccanicaMovies = [
      {
        id: "1",
        title: "Le leggi di Newton",
        description: "I tre principi fondamentali della meccanica classica",
        director: "Isaac Newton",
        rt_score: "99",
        img: CI,
        url: "/dispense?section=6.1%20I%20Principio%20di%20Newton",
        page: 58
      },
      {
        id: "2",
        title: "Cinematica",
        description: "Studio del moto dei corpi senza considerare le cause",
        director: "Galileo Galilei",
        rt_score: "97",
        img: Cinematica,
        url: "/dispense?section=5%20Cinematica",
        page: 26
      },
      {
        id: "3",
        title: "Dinamica",
        description: "Studio delle forze e delle cause del movimento",
        director: "Leonhard Euler",
        rt_score: "98",
        img: Dinamica,
        url: "/dispense?section=6%20Dinamica",
        page: 58
      },
      {
        id: "4",
        title: "Conservazione dell'energia",
        description: "Principio fondamentale che governa tutti i processi fisici",
        director: "James Prescott Joule",
        rt_score: "96",
        img: CI,
        url: "/dispense?section=7.12%20Teorema%20della%20conservazione%20dell'energia",
        page: 87
      },
      {
        id: "5",
        title: "Quantità di moto",
        description: "Grandezza fisica fondamentale nella meccanica classica",
        director: "René Descartes",
        rt_score: "95",
        img: CI,
        url: "/dispense?section=6.3%20Quantità%20di%20Moto",
        page: 65
      },
      {
        id: "6",
        title: "Momento angolare",
        description: "Quantità che misura la rotazione di un sistema fisico",
        director: "Christiaan Huygens",
        rt_score: "94",
        img: CI,
        url: "/dispense?section=9.1%20Momento%20angolare",
        page: 102
      },
      {
        id: "7",
        title: "Lavoro e potenza",
        description: "Concetti chiave per comprendere l'energia in meccanica",
        director: "William Thomson (Lord Kelvin)",
        rt_score: "93",
        img: CI,
        url: "/dispense?section=7%20Lavoro%20e%20Energie",
        page: 72
      },
      {
        id: "8",
        title: "Sistemi di riferimento",
        description: "Studio del moto relativo e dei sistemi di coordinate",
        director: "Albert Einstein",
        rt_score: "97",
        img: CI,
        url: "/dispense?section=8%20Moti%20relativi",
        page: 90
      }
    ];
  
    const corpoRigidoMovies = [
      {
        id: "1",
        title: "Introduzione al corpo rigido",
        description: "Definizione e proprietà fondamentali dei corpi rigidi in fisica",
        director: "Leonhard Euler",
        rt_score: "95",
        img: CI,
        url: "/dispense?section=12.1%20Gradi%20di%20libertà",
        page: 135
      },
      {
        id: "2",
        title: "Momento d'inerzia",
        description: "Concetto chiave per comprendere la rotazione dei corpi rigidi",
        director: "Christiaan Huygens",
        rt_score: "98",
        img: CI,
        url: "/dispense?section=12.3%20Inerzia",
        page: 138
      },
      {
        id: "3",
        title: "Teorema degli assi paralleli",
        description: "Relazione tra momenti d'inerzia rispetto a diversi assi",
        director: "Jakob Steiner",
        rt_score: "94",
        img: CI,
        url: "/dispense?section=12.10%20Teorema%20di%20Huygens-Steiner",
        page: 148
      },
      {
        id: "4",
        title: "Moto di pura rotazione",
        description: "Analisi del movimento rotatorio di un corpo rigido",
        director: "Isaac Newton",
        rt_score: "96",
        img: CI,
        url: "/dispense?section=12.6%20Moto%20di%20rotazione",
        page: 141
      },
      {
        id: "5",
        title: "Moto di rototraslazione",
        description: "Combinazione di moto traslazionale e rotazionale",
        director: "Galileo Galilei",
        rt_score: "97",
        img: CI,
        url: "/dispense?section=12.7%20Moto%20di%20rototraslazione",
        page: 142
      },
      {
        id: "6",
        title: "Energia cinetica rotazionale",
        description: "Energia associata al movimento rotatorio di un corpo rigido",
        director: "William Thomson (Lord Kelvin)",
        rt_score: "93",
        img: CI,
        url: "/dispense?section=12.8%20Momento%20angolare%20in%20pura%20rotazione",
        page: 144
      },
      {
        id: "7",
        title: "Pendolo composto",
        description: "Studio del moto oscillatorio di un corpo rigido",
        director: "Christiaan Huygens",
        rt_score: "95",
        img: CI,
        url: "/dispense?section=12.11%20Moto%20di%20un%20pendolo%20composto",
        page: 150
      },
      {
        id: "8",
        title: "Moto di puro rotolamento",
        description: "Analisi del movimento di un corpo rigido che rotola senza strisciare",
        director: "Osborne Reynolds",
        rt_score: "92",
        img: CI,
        url: "/dispense?section=12.12%20Moto%20di%20puro%20rotolamento",
        page: 152
      }
    ];
  
    const termoMovies = [
      {
        id: "1",
        title: "Leggi dei gas",
        description: "Relazioni tra pressione, volume e temperatura dei gas",
        director: "Robert Boyle",
        rt_score: "95",
        img: CI,
        url: "/dispense?section=13.7%20Legge%20dei%20gas%20perfetti",
        page: 165
      },
      {
        id: "2",
        title: "Primo principio della termodinamica",
        description: "Conservazione dell'energia nei processi termodinamici",
        director: "Rudolf Clausius",
        rt_score: "98",
        img: CI,
        url: "/dispense?section=13.21%20I%20Principio%20della%20Termodinamica",
        page: 188
      },
      {
        id: "3",
        title: "Trasformazioni termodinamiche",
        description: "Studio dei diversi tipi di processi termodinamici",
        director: "Sadi Carnot",
        rt_score: "94",
        img: CI,
        url: "/dispense?section=13.12%20Trasformazioni%20termodinamiche",
        page: 170
      },
      {
        id: "4",
        title: "Calore specifico",
        description: "Capacità dei materiali di assorbire o cedere calore",
        director: "James Prescott Joule",
        rt_score: "96",
        img: CI,
        url: "/dispense?section=13.17%20Approfondimento:%20Calore%20specifico%20dei%20gas",
        page: 184
      },
      {
        id: "5",
        title: "Equilibrio termico",
        description: "Studio dello scambio di calore tra sistemi",
        director: "James Clerk Maxwell",
        rt_score: "97",
        img: CI,
        url: "/dispense?section=13.19%20Equilibrio%20termico%20tra%20due%20sostanze",
        page: 185
      },
      {
        id: "6",
        title: "Trasmissione del calore",
        description: "Meccanismi di trasferimento dell'energia termica",
        director: "Joseph Fourier",
        rt_score: "93",
        img: CI,
        url: "/dispense?section=13.20%20Trasmissione%20del%20calore",
        page: 186
      },
      {
        id: "7",
        title: "Relazione di Mayer",
        description: "Connessione tra calore specifico a pressione e volume costante",
        director: "Julius Robert von Mayer",
        rt_score: "95",
        img: CI,
        url: "/dispense?section=13.23%20Relazione%20di%20Mayer",
        page: 190
      },
      {
        id: "8",
        title: "Trasformazioni adiabatiche",
        description: "Processi termodinamici senza scambio di calore",
        director: "Pierre-Simon Laplace",
        rt_score: "92",
        img: CI,
        url: "/dispense?section=13.24%20Trasformazioni%20adiabatiche%20reversibili",
        page: 192
      }
    ];
  
    return (
      <div style={{ fontFamily: 'Poppins, sans-serif', margin: 0, padding: 0 }}>
        {/* Hero Section */}
        <Box
          sx={{
            width: '100%',
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: '#fff',
            overflow: 'hidden',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
            <Grid container spacing={4} alignItems="center">
              {/* Registration Form */}
              <Grid item xs={12} md={6}>
                <FloatingElement>
                  <StyledPaper elevation={3}>
                    <Typography variant="h2" component="h1" sx={{ mb: 2, fontWeight: 700, color: '#333', textAlign: 'center' }}>
                      Benvenuto
                    </Typography>
                    <Typography variant="h5" component="p" sx={{ mb: 3, color: '#555', textAlign: 'center' }}>
                      Iscriviti alla newsletter!
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                      <AnimatedTextField
                        label="Nome"
                        variant="outlined"
                        fullWidth
                        required
                        name="name"
                        value={formValues.name}
                        onChange={handleChange}
                        InputProps={{
                          startAdornment: <Person color="action" />,
                        }}
                      />
                      <AnimatedTextField
                        label="Email"
                        type="email"
                        variant="outlined"
                        fullWidth
                        required
                        name="email"
                        value={formValues.email}
                        onChange={handleChange}
                        InputProps={{
                          startAdornment: <Email color="action" />,
                        }}
                      />
                      <AnimatedTextField
                        label="Password"
                        type="password"
                        variant="outlined"
                        fullWidth
                        required
                        name="password"
                        value={formValues.password}
                        onChange={handleChange}
                        InputProps={{
                          startAdornment: <Lock color="action" />,
                        }}
                      />
                      <AnimatedTextField
                        label="Conferma Password"
                        type="password"
                        variant="outlined"
                        fullWidth
                        required
                        name="confirmPassword"
                        value={formValues.confirmPassword}
                        onChange={handleChange}
                        InputProps={{
                          startAdornment: <Lock color="action" />,
                        }}
                      />
                      <AnimatedButton
                        variant="contained"
                        color="primary"
                        type="submit"
                        fullWidth
                        sx={{ mt: 2 }}
                        endIcon={<ArrowForward />}
                      >
                        Registrati
                      </AnimatedButton>
                    </Box>
                  </StyledPaper>
                </FloatingElement>
              </Grid>
  
              {/* Hero Carousel Section */}
              <Grid item xs={12} md={6}>
                <FloatingElement>
                  <Box sx={{ 
                    borderRadius: '15px', 
                    overflow: 'hidden', 
                    boxShadow: '0 8px 32px rgba(31, 38, 135, 0.37)',
                    width: { xs: '100%', sm: '100%', md: '100%' },
                    maxWidth: { xs: '100%', sm: '600px', md: '800px' },
                    margin: '0 auto',
                  }}>
                    <Carousel movies={introMovies} onReadClick={(movie) => {
                      navigate(`${movie.url}&page=${movie.page}`);
                    }} />
                  </Box>
                </FloatingElement>
              </Grid>
            </Grid>
          </Container>
  
          {/* Ondina viola */}
          <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  overflow: 'hidden',
                  lineHeight: 0,
                  transform: 'rotate(180deg)',
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1200 120"
                  preserveAspectRatio="none"
                  style={{ 
                    position: 'relative', 
                    display: 'block', 
                    width: 'calc(100% + 1.3px)', 
                    height: '150px',
                  }}
                >
                  <path
                    d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                    fill="#ffffff"
                    fillOpacity="1"
                  ></path>
                </svg>
              </Box>
            </Box>
      
            {/* Sections with Carousels */}

            <section style={{ padding: '80px 0', backgroundColor: '#ffffff' }}>
        <Container maxWidth={false}> {/* Cambiato da 'xl' a false per permettere larghezza piena */}
          <Typography variant="h3" align="center" sx={{ mb: 4, color: '#333', fontWeight: 700 }}>
            Capitoli
          </Typography>
          <Box sx={{ 
            borderRadius: '15px', 
            overflow: 'hidden', 
            boxShadow: '0 8px 32px rgba(31, 38, 135, 0.1)',
            width: '90%',
            // Rimosso maxWidth per permettere al carousel di espandersi completamente
            margin: '0 auto',
          }}>
            <Carousel movies={introduzioneMovies} onReadClick={(movie) => {
              navigate(`${movie.url}&page=${movie.page}`);
            }} />
          </Box>
        </Container>
      </section>

      <section style={{ padding: '80px 0', backgroundColor: '#ffffff' }}>
  <Container maxWidth="xl">
    <Typography variant="h3" align="center" sx={{ mb: 4, color: '#333', fontWeight: 700 }}>
    Alcuni strumenti della fisica
    </Typography>
    <Box sx={{ 
      borderRadius: '15px', 
      overflow: 'hidden', 
      boxShadow: '0 8px 32px rgba(31, 38, 135, 0.1)',
      width: '100%',
      maxWidth: '90%', // Rimuoviamo la larghezza massima per permettere al carousel di espandersi
      margin: '0 auto',
    }}>
                  <Carousel movies={strumentiMovies} onReadClick={(movie) => {
                    navigate(`${movie.url}&page=${movie.page}`);
                  }} />
    </Box>
  </Container>
</section>
      
            <section style={{ padding: '80px 0', backgroundColor: '#ffffff' }}>
  <Container maxWidth="xl">
    <Typography variant="h3" align="center" sx={{ mb: 4, color: '#333', fontWeight: 700 }}>
    Dalla cinematica ai moti relativi
    </Typography>
    <Box sx={{ 
      borderRadius: '15px', 
      overflow: 'hidden', 
      boxShadow: '0 8px 32px rgba(31, 38, 135, 0.1)',
      width: '100%',
      maxWidth: '90%', // Rimuoviamo la larghezza massima per permettere al carousel di espandersi
      margin: '0 auto',
    }}>
                  <Carousel movies={meccanicaMovies} onReadClick={(movie) => {
                    navigate(`${movie.url}&page=${movie.page}`);
                  }} />
    </Box>
  </Container>
</section>
      
<section style={{ padding: '80px 0', backgroundColor: '#ffffff' }}>
  <Container maxWidth="xl">
    <Typography variant="h3" align="center" sx={{ mb: 4, color: '#333', fontWeight: 700 }}>
    Corpo rigido
    </Typography>
    <Box sx={{ 
      borderRadius: '15px', 
      overflow: 'hidden', 
      boxShadow: '0 8px 32px rgba(31, 38, 135, 0.1)',
      width: '100%',
      maxWidth: '90%', // Rimuoviamo la larghezza massima per permettere al carousel di espandersi
      margin: '0 auto',
    }}>
                  <Carousel movies={corpoRigidoMovies} onReadClick={(movie) => {
                    navigate(`${movie.url}&page=${movie.page}`);
                  }} />
    </Box>
  </Container>
</section>
      
<section style={{ padding: '80px 0', backgroundColor: '#ffffff' }}>
  <Container maxWidth="xl">
    <Typography variant="h3" align="center" sx={{ mb: 4, color: '#333', fontWeight: 700 }}>
    Termodinamica
    </Typography>
    <Box sx={{ 
      borderRadius: '15px', 
      overflow: 'hidden', 
      boxShadow: '0 8px 32px rgba(31, 38, 135, 0.1)',
      width: '100%',
      maxWidth: '90%', // Rimuoviamo la larghezza massima per permettere al carousel di espandersi
      margin: '0 auto',
    }}>
                  <Carousel movies={termoMovies} onReadClick={(movie) => {
                    navigate(`${movie.url}&page=${movie.page}`);
                  }} />
    </Box>
  </Container>
</section>
      

      
            {/* Snackbar for Form Feedback */}
            <Snackbar
              open={snackbarOpen}
              autoHideDuration={6000}
              onClose={() => setSnackbarOpen(false)}
              message={snackbarMessage}
              action={
                <IconButton size="small" aria-label="close" color="inherit" onClick={() => setSnackbarOpen(false)}>
                  ✕
                </IconButton>
              }
            >
              <Alert onClose={() => setSnackbarOpen(false)} severity={snackbarMessage.includes('Errore') ? 'error' : 'success'} sx={{ width: '100%' }}>
                {snackbarMessage}
              </Alert>
            </Snackbar>
          </div>
        );
      }
      
      export default HomePage;
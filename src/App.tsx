import React, { useState, useEffect } from 'react';
import { Route, Routes, Link as RouterLink, useLocation, Navigate, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Button, Drawer, Box, List, ListItemButton, ListItemText, Container, ButtonProps, IconButton, useTheme, useMediaQuery, Menu, MenuItem } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ReactGA from 'react-ga4';
import Homepage from './components/HomePage';
import Dispense from './components/Dispense';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import Register from './components/Register';
import CookieBanner from './components/CookieBanner';
import PrivacyPolicy from './components/PrivacyPolicy';


const Contact: React.FC = () => <h2>Contact Page</h2>;

interface OutlineItem {
  title: string;
  page: number;
  items?: OutlineItem[];
}


const manualOutline: OutlineItem[] = [
  {
  title: "1. Premesse",
  page: 9,
  items: [
  { title: "1.1 Argomenti trattati", page: 9 }
  ]
  },
  {
  title: "2. Osservazioni preliminari",
  page: 10,
  items: [
  { title: "2.1 Misure e gestione delle incertezze", page: 10 },
  { title: "2.2 Alcune definizioni", page: 13 },
  { title: "2.3 Grandezze legate a interazioni", page: 15 }
  ]
  },
  {
  title: "3. Derivate e Integrali",
  page: 16,
  items: [
  { title: "3.1 Derivate", page: 16 },
  { title: "3.2 Integrali", page: 16 }
  ]
  },
  {
  title: "4. Vettori e sistemi di riferimento",
  page: 18,
  items: [
  { title: "4.1 I vettori", page: 18 },
  { title: "4.2 Coordinate cartesiane", page: 22 },
  { title: "4.3 Coordinate polari", page: 22 },
  { title: "4.4 Coordinate intrinseche", page: 23 },
  { title: "4.5 Derivata di un vettore", page: 24 }
  ]
  },
  {
  title: "5. Cinematica",
  page: 26,
  items: [
  { title: "5.1 Prime definizioni", page: 26 },
  { title: "5.2 Equazioni del moto", page: 27 },
  { title: "5.3 Equazioni del moto in coordinate cartesiane", page: 30 },
  { title: "5.4 Equazioni del moto in coordinate polari", page: 31 },
  { title: "5.5 Equazioni del moto in coordinate intrinseche", page: 33 },
  { title: "5.6 Moto rettilineo", page: 36 },
  { title: "5.7 Moto parabolico", page: 40 },
  { title: "5.8 Moto Angolare", page: 45 },
  { title: "5.9 Moto circolare", page: 47 },
  { title: "5.10 Approfondimento: caduta di un grave in aria", page: 49 },
  { title: "5.11 Approfondimento: moto armonico", page: 52 },
  { title: "5.12 Alcuni esempi", page: 56 }
  ]
  },
  {
  title: "6. Dinamica",
  page: 58,
  items: [
  { title: "6.1 I Principio di Newton", page: 58 },
  { title: "6.2 Le Forze", page: 59 },
  { title: "6.3 Quantità di Moto", page: 65 },
  { title: "6.4 Impulso", page: 66 },
  { title: "6.5 Teorema dell'impulso", page: 68 },
  { title: "6.6 Teorema della conservazione della quantità di moto", page: 70 },
  { title: "6.7 Pendolo Semplice", page: 71 }
  ]
  },
  {
  title: "7. Lavoro e Energie",
  page: 72,
  items: [
  { title: "7.1 Lavoro", page: 72 },
  { title: "7.2 Energia Cinetica", page: 73 },
  { title: "7.3 Teorema dell'Energia-Lavoro", page: 75 },
  { title: "7.4 Potenza", page: 76 },
  { title: "7.5 Lavoro della Forza Peso", page: 76 },
  { title: "7.6 Lavoro delle Forze Elastiche", page: 77 },
  { title: "7.7 Lavoro della Forza d'Attrito dinamico", page: 78 },
  { title: "7.8 Lavoro delle forze ortogonali allo spostamento", page: 78 },
  { title: "7.9 Forze Conservative", page: 79 },
  { title: "7.10 Energia Potenziale", page: 82 },
  { title: "7.11 Approfondimento: Relazione tra dE e dF", page: 86 },
  { title: "7.12 Teorema della conservazione dell'energia", page: 87 },
  { title: "7.13 Approfondimento: Funzioni Additive", page: 89 }
  ]
  },
  {
  title: "8. Moti relativi",
  page: 90,
  items: [
  { title: "8.1 Definizioni preliminari", page: 90 },
  { title: "8.2 Notazione e Convenzioni", page: 90 },
  { title: "8.3 Trasformazioni di Coordinate", page: 91 },
  { title: "8.4 Approfondimento: la derivata di un versore rotante", page: 92 },
  { title: "8.5 Teorema delle velocità relative", page: 94 },
  { title: "8.6 Dimostrazione", page: 94 },
  { title: "8.7 Teorema delle accelerazioni relative", page: 97 },
  { title: "8.8 Esempi Avanzati", page: 100 }
  ]
  },
  {
  title: "9. Momenti",
  page: 102,
  items: [
  { title: "9.1 Momento angolare", page: 102 },
  { title: "9.2 Momento delle forze", page: 104 },
  { title: "9.3 Teorema del momento angolare per polo fisso", page: 105 },
  { title: "9.4 Teorema del momento angolare per polo mobile", page: 106 },
  { title: "9.5 Momenti in coordinate polari", page: 107 },
  { title: "9.6 Teorema del momento dell'impulso", page: 110 },
  { title: "9.7 Lavori e energie in funzione dei momenti", page: 111 }
  ]
  },
  {
  title: "10. Dinamica del sistema di punti",
  page: 113,
  items: [
  { title: "10.1 Definizioni preliminari", page: 113 },
  { title: "10.2 Proprietà del sistema di punti", page: 115 },
  { title: "10.3 Sistema del laboratorio", page: 118 },
  { title: "10.4 I Teorema di König", page: 120 },
  { title: "10.5 Osservazioni", page: 121 },
  { title: "10.6 II Teorema di König", page: 122 },
  { title: "10.7 III Teorema di König", page: 125 },
  { title: "10.8 Primo Teorema Cardinale della Dinamica", page: 126 },
  { title: "10.9 Osservazioni", page: 128 },
  { title: "10.10 Equazione cardinale", page: 129 },
  { title: "10.11 Lavoro delle Forze in un Sistema di Particelle", page: 131 }
  ]
  },
  {
  title: "11. Urti",
  page: 133,
  items: [
  { title: "11.1 Urto elastico", page: 133 },
  { title: "11.2 Urto anelastico", page: 133 },
  { title: "11.3 Urto vincolato", page: 134 }
  ]
  },
  {
  title: "12. Corpo rigido",
  page: 135,
  items: [
  { title: "12.1 Gradi di libertà", page: 135 },
  { title: "12.2 Integrale di volume", page: 135 },
  { title: "12.3 Inerzia", page: 138 },
  { title: "12.4 Sistema del laboratorio per un corpo rigido", page: 139 },
  { title: "12.5 Moto di traslazione", page: 140 },
  { title: "12.6 Moto di rotazione", page: 141 },
  { title: "12.7 Moto di rototraslazione", page: 142 },
  { title: "12.8 Momento angolare in pura rotazione", page: 144 },
  { title: "12.9 I Teoremi di König applicati al corpo rigido", page: 147 },
  { title: "12.10 Teorema di Huygens-Steiner", page: 148 },
  { title: "12.11 Moto di un pendolo composto", page: 150 },
  { title: "12.12 Moto di puro rotolamento", page: 152 },
  { title: "12.13 Approfondimento: Passaggio di coordinate e livello differenziale", page: 153 },
  { title: "12.14 Approfondimento: Calcolo dei principali momenti di inerzia", page: 156 }
  ]
  },
  {
  title: "13. Termodinamica",
  page: 160,
  items: [
  { title: "13.1 Introduzione", page: 160 },
  { title: "13.2 Sistema termodinamico", page: 160 },
  { title: "13.3 Pareti", page: 161 },
  { title: "13.4 Ambiente", page: 161 },
  { title: "13.5 Coordinate macroscopiche", page: 162 },
  { title: "13.6 Equilibrio termodinamico", page: 163 },
  { title: "13.7 Legge dei gas perfetti", page: 165 },
  { title: "13.8 Diagramma di Clapeyron", page: 165 },
  { title: "13.9 Scambi di Lavoro e Calore", page: 166 },
  { title: "13.10 Lavoro", page: 166 },
  { title: "13.11 Calore", page: 168 },
  { title: "13.12 Trasformazioni termodinamiche", page: 170 },
  { title: "13.13 Trasformazioni irreversibili", page: 170 },
  { title: "13.14 Trasformazioni reversibili", page: 170 },
  { title: "13.15 Alcune trasformazioni termodinamiche", page: 173 },
  { title: "13.16 Lavoro di alcune trasformazioni", page: 183 },
  { title: "13.17 Approfondimento: Calore specifico dei gas", page: 184 },
  { title: "13.18 Approfondimento: Teorema di equipartizione dell'energia", page: 185 },
  { title: "13.19 Equilibrio termico tra due sostanze", page: 185 },
  { title: "13.20 Trasmissione del calore", page: 186 },
  { title: "13.21 I Principio della Termodinamica", page: 188 },
  { title: "13.22 Esperimento di Joule: Relazione tra calorie e joule", page: 189 },
  { title: "13.23 Relazione di Mayer", page: 190 },
  { title: "13.24 Trasformazioni adiabatiche reversibili", page: 192 }
  ]
  },
  { title: "14. Fluidodinamica", page: 193 },
  { title: "15. Gravitazione", page: 194 },
  {
  title: "16. Flusso",
  page: 195,
  items: [
  { title: "16.1 Definizione Matematica", page: 195 },
  { title: "16.2 Interpretazione Fisica", page: 195 },
  { title: "16.3 Il Teorema di Gauss e l'Angolo Solido", page: 196 },
  { title: "16.4 Il Flusso in Fluidodinamica", page: 197 },
  { title: "16.5 Il Flusso in Gravitazione", page: 198 },
  { title: "16.6 Osservazioni", page: 198 }
  ]
  }
  ];


const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'rgba(25, 118, 210, 0.9)',
  backdropFilter: 'blur(10px)',
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
  zIndex: theme.zIndex.drawer + 1,
  transition: 'all 0.3s ease-in-out',
}));

const StyledButton = styled(({ to, ...props }: { to: string } & Omit<ButtonProps, 'href'>) => (
  <Button component={RouterLink} to={to} {...props} />
))(({ theme }) => ({
  margin: '0 8px',
  color: '#ffffff',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    transform: 'translateY(-3px)',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '2px',
    backgroundColor: '#ffffff',
    transform: 'scaleX(0)',
    transition: 'transform 0.3s ease-in-out',
  },
  '&:hover::after': {
    transform: 'scaleX(1)',
  },
}));

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    width: '80%',
    maxWidth: 300,
    backgroundColor: 'rgba(25, 118, 210, 0.95)',
    color: '#ffffff',
    paddingTop: theme.spacing(2),
  },
}));

const AnimatedListItemButton = styled(ListItemButton)(({ theme }) => ({
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    paddingLeft: theme.spacing(3),
  },
}));

const AnimatedBox = styled(Box)`
  animation: ${fadeIn} 0.5s ease-in-out;
`;

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [mobileMenuAnchorEl, setMobileMenuAnchorEl] = useState<null | HTMLElement>(null);

  useEffect(() => {
    ReactGA.initialize('G-EHDDLEJ30T');
  }, []);

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
  }, [location]);

  useEffect(() => {
    if (location.pathname === '/dispense') {
      setIsDrawerOpen(!isMobile);
    } else {
      setIsDrawerOpen(false);
    }
  }, [location.pathname, isMobile]);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
      return;
    }
    setIsDrawerOpen(open);
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMenuAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuAnchorEl(null);
  };

  const navItems = [
    { text: 'Home', path: '/' },
    { text: 'Dispense', path: '/dispense' },
    { text: 'Accedi/Registrati', path: '/register' },
    { text: 'About Me', path: '/about-me' },
  ];

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const renderOutline = (items: OutlineItem[]): JSX.Element => (
    <List>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <AnimatedListItemButton onClick={() => {
            setCurrentPage(item.page);
            navigate(`/dispense?section=${encodeURIComponent(item.title)}`);
            if (isMobile) setIsDrawerOpen(false);
          }}>
            <ListItemText 
              primary={item.title} 
              secondary={`Pagina ${item.page}`}
              primaryTypographyProps={{ fontWeight: 'bold', color: '#ffffff' }}
              secondaryTypographyProps={{ color: 'rgba(255, 255, 255, 0.7)' }}
            />
          </AnimatedListItemButton>
          {item.items && item.items.length > 0 && (
            <List sx={{ pl: 2 }}>
              {renderOutline(item.items)}
            </List>
          )}
        </React.Fragment>
      ))}
    </List>
  );

  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #e0f7fa 0%, #80deea 100%)',
    }}>
      <StyledAppBar position="fixed">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {location.pathname === '/dispense' && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={toggleDrawer(!isDrawerOpen)}
                sx={{ mr: 2 }}
              >
                {isDrawerOpen ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
            )}
            {/* Qui puoi aggiungere il logo o il titolo del sito */}
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, justifyContent: 'flex-end', flexGrow: 1 }}>
            {navItems.map((item) => (
              <StyledButton key={item.text} to={item.path}>
                {item.text}
              </StyledButton>
            ))}
          </Box>
          <IconButton
            color="inherit"
            aria-label="menu"
            onClick={handleMobileMenuOpen}
            sx={{ display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={mobileMenuAnchorEl}
            open={Boolean(mobileMenuAnchorEl)}
            onClose={handleMobileMenuClose}
          >
            {navItems.map((item) => (
              <MenuItem 
                key={item.text} 
                onClick={() => {
                  navigate(item.path);
                  handleMobileMenuClose();
                }}
              >
                {item.text}
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </StyledAppBar>

      <StyledDrawer
        variant={isMobile ? "temporary" : "persistent"}
        anchor="left"
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
      >
        <Box sx={{ overflow: 'auto', paddingTop: '64px' }}>
          {renderOutline(manualOutline)}
        </Box>
      </StyledDrawer>

      <Box 
        component="main" 
        sx={{ 
          flexGrow: 1, 
          pt: { xs: '56px', sm: '64px' }, 
          pl: { sm: isDrawerOpen ? '300px' : 0 },
          transition: 'padding-left 0.3s ease-in-out',
        }}
      >
        <Container maxWidth="xl">
          <AnimatedBox>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/dispense" element={
                <Dispense currentPage={currentPage} onPageChange={handlePageChange} />
              } />
              <Route path="/about-me" element={<AboutMe />} />
              <Route path="*" element={<Navigate to="/" />} />
              <Route path="/register" element={<Register />} />
              <Route path="/ads.txt" element={
  <pre>google.com, pub-1815756038813221, DIRECT, f08c47fec0942fa0</pre>
} />
<Route path="/privacy-policy" element={<PrivacyPolicy />} />
            </Routes>
          </AnimatedBox>
        </Container>
      </Box>
      <CookieBanner />

      <Box sx={{ marginTop: 'auto' }}>
        <Footer />
      </Box>
    </Box>
  );
}

export default App;

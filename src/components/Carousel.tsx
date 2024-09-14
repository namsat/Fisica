import React, { useState, useEffect, useRef } from 'react';
import { Button, Card, CardContent, CardMedia, Typography, Box, useMediaQuery, useTheme } from '@mui/material';

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

interface CarouselProps {
  movies: Movie[];
  onReadClick: (movie: Movie) => void;
}

const Carousel: React.FC<CarouselProps> = ({ movies, onReadClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  const cardWidth = isMobile ? 280 : 220;
  const cardHeight = isMobile ? 420 : 350;
  const visibleCards = isMobile ? 1 : isTablet ? 2 : 3;
  const autoScrollInterval = 5000;

  const cardColors = [
    '#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#F7B267', '#A06CD5', '#7FB069',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length);
    }, autoScrollInterval);

    return () => clearInterval(interval);
  }, [movies.length, autoScrollInterval]);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: currentIndex * cardWidth,
        behavior: 'smooth'
      });
    }
  }, [currentIndex, cardWidth]);

  return (
    <Box sx={{ width: '100%', overflow: 'hidden', my: 2, position: 'relative' }}>
      <Box
        ref={carouselRef}
        sx={{
          display: 'flex',
          overflowX: 'hidden',
          width: '100%',
          margin: '0 auto',
          position: 'relative',
          padding: '20px',
        }}
      >
        <Box sx={{ display: 'flex' }}>
          {movies.map((movie, index) => (
            <Card
              key={`${movie.id}-${index}`}
              sx={{
                width: cardWidth,
                height: cardHeight,
                flexShrink: 0,
                mr: 2,
                borderRadius: 2,
                boxShadow: 2,
                transition: 'transform 0.3s ease',
                transform: hoveredCardId === `${movie.id}-${index}` ? 'scale(1.05)' : 'scale(1)',
                zIndex: hoveredCardId === `${movie.id}-${index}` ? 10 : 1,
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: cardColors[index % cardColors.length],
              }}
              onMouseEnter={() => setHoveredCardId(`${movie.id}-${index}`)}
              onMouseLeave={() => setHoveredCardId(null)}
            >
              <CardMedia
                component="img"
                height={isMobile ? "220" : "180"}
                image={movie.img}
                alt={movie.title}
              />
              <CardContent
                sx={{
                  p: 1.5,
                  flexGrow: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    sx={{ fontSize: isMobile ? '1rem' : '0.9rem', fontWeight: 'bold', color: 'white' }}
                  >
                    {movie.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: isMobile ? '0.9rem' : '0.8rem',
                      display: '-webkit-box',
                      WebkitLineClamp: 4,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      mb: 1,
                      color: 'rgba(255, 255, 255, 0.8)',
                    }}
                  >
                    {movie.description}
                  </Typography>
                </div>
                <Box
                  sx={{ display: 'flex', justifyContent: 'space-evenly', marginBottom: '8px' }}
                >
                  <Button
                    variant="contained"
                    size="small"
                    onClick={() => onReadClick(movie)}
                    sx={{ fontSize: isMobile ? '0.8rem' : '0.7rem', backgroundColor: 'white', color: 'black' }}
                  >
                    Leggi
                  </Button>
                  <Button 
                    variant="outlined" 
                    size="small" 
                    sx={{ fontSize: isMobile ? '0.8rem' : '0.7rem', borderColor: 'white', color: 'white' }}
                  >
                    Wikipedia
                  </Button>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Carousel;




import React, { useEffect, useState, useRef } from 'react';
import { Box, CircularProgress, IconButton, Typography } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

interface PDFViewerProps {
  pdfUrl: string;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ pdfUrl, currentPage, onPageChange }) => {
  const [numPages, setNumPages] = useState<number>(0);
  const [pdfDoc, setPdfDoc] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadPDF = async () => {
      const pdfjs = await import('pdfjs-dist');
      const pdfjsWorker = await import('pdfjs-dist/build/pdf.worker.entry');
      pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

      try {
        const loadedPdf = await pdfjs.getDocument(pdfUrl).promise;
        setPdfDoc(loadedPdf);
        setNumPages(loadedPdf.numPages);
        setLoading(false);
      } catch (error) {
        console.error("Error loading PDF:", error);
        setLoading(false);
      }
    };

    loadPDF();
  }, [pdfUrl]);

  useEffect(() => {
    const renderPage = async () => {
      if (!pdfDoc || !canvasRef.current || !containerRef.current) return;

      const page = await pdfDoc.getPage(currentPage);
      const originalViewport = page.getViewport({ scale: 1 });
      
      const containerWidth = containerRef.current.clientWidth;
      const containerHeight = containerRef.current.clientHeight - 56; // Subtract pagination height

      const widthScale = containerWidth / originalViewport.width;
      const heightScale = containerHeight / originalViewport.height;
      const scale = Math.min(widthScale, heightScale);

      // Increase resolution for better quality
      const qualityScale = 2;
      const viewport = page.getViewport({ scale: scale * qualityScale });

      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');

      canvas.height = viewport.height;
      canvas.width = viewport.width;
      canvas.style.width = `${viewport.width / qualityScale}px`;
      canvas.style.height = `${viewport.height / qualityScale}px`;

      const renderContext = {
        canvasContext: context,
        viewport: viewport,
      };

      await page.render(renderContext).promise;
    };

    if (pdfDoc) {
      renderPage();
    }
  }, [pdfDoc, currentPage, containerRef]);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= numPages) {
      onPageChange(newPage);
    }
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <CircularProgress />
      </Box>
    );
  }


  return (
    <Box ref={containerRef} sx={{ 
      height: '100%', 
      display: 'flex', 
      flexDirection: 'column', 
      width: '100%', // Assicura che il contenitore occupi tutta la larghezza
    }}>
      <Box sx={{ 
        flexGrow: 1, 
        overflow: 'auto', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        width: '100%', // Assicura che il contenitore del canvas occupi tutta la larghezza
      }}>
        <canvas 
          ref={canvasRef} 
          style={{ 
            maxWidth: '100%', 
            maxHeight: '100%', 
            objectFit: 'contain',
            width: '100%', // Fa sì che il canvas occupi tutta la larghezza disponibile
          }} 
        />
      </Box>
      <Box sx={{ 
        p: 1, 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        width: '100%', // Assicura che la barra di navigazione occupi tutta la larghezza
      }}>
        <IconButton 
          onClick={() => handlePageChange(currentPage - 1)} 
          disabled={currentPage === 1}
          size="small"
        >
          <ChevronLeft />
        </IconButton>
        <Typography variant="body2">
          Pagina {currentPage} di {numPages}
        </Typography>
        <IconButton 
          onClick={() => handlePageChange(currentPage + 1)} 
          disabled={currentPage === numPages}
          size="small"
        >
          <ChevronRight />
        </IconButton>
      </Box>
    </Box>
  );
};

export default PDFViewer;
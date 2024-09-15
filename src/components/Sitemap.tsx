import React, { useEffect } from 'react';

const Sitemap: React.FC = () => {
  useEffect(() => {
    // Impostare il Content-Type header
    const setContentType = () => {
      const contentTypeMetaTag = document.createElement('meta');
      contentTypeMetaTag.httpEquiv = 'Content-Type';
      contentTypeMetaTag.content = 'application/xml';
      document.getElementsByTagName('head')[0].appendChild(contentTypeMetaTag);
    };

    setContentType();

    // Opzionale: rimuovere il meta tag quando il componente viene smontato
    return () => {
      const metaTag = document.querySelector('meta[http-equiv="Content-Type"]');
      if (metaTag) {
        metaTag.remove();
      }
    };
  }, []);

  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
<url>
<loc>https://fisica.me/</loc>
<changefreq>weekly</changefreq>
<priority>1.0</priority>
</url>
<url>
<loc>https://fisica.me/dispense</loc>
<changefreq>weekly</changefreq>
<priority>0.9</priority>
</url>
<url>
<loc>https://fisica.me/register</loc>
<changefreq>monthly</changefreq>
<priority>0.7</priority>
</url>
<url>
<loc>https://fisica.me/about-me</loc>
<changefreq>monthly</changefreq>
<priority>0.6</priority>
</url>

<!-- Sezioni principali delle dispense -->
<url>
<loc>https://fisica.me/dispense?section=1%20Premesse</loc>
<changefreq>monthly</changefreq>
<priority>0.8</priority>
</url>
<url>
<loc>https://fisica.me/dispense?section=2%20Osservazioni%20preliminari</loc>
<changefreq>monthly</changefreq>
<priority>0.8</priority>
</url>
<url>
<loc>https://fisica.me/dispense?section=3%20Derivate%20e%20Integrali</loc>
<changefreq>monthly</changefreq>
<priority>0.8</priority>
</url>
<url>
<loc>https://fisica.me/dispense?section=4%20Vettori%20e%20sistemi%20di%20riferimento</loc>
<changefreq>monthly</changefreq>
<priority>0.8</priority>
</url>
<url>
<loc>https://fisica.me/dispense?section=5%20Cinematica</loc>
<changefreq>monthly</changefreq>
<priority>0.8</priority>
</url>
<url>
<loc>https://fisica.me/dispense?section=6%20Dinamica</loc>
<changefreq>monthly</changefreq>
<priority>0.8</priority>
</url>
<url>
<loc>https://fisica.me/dispense?section=7%20Lavoro%20e%20Energie</loc>
<changefreq>monthly</changefreq>
<priority>0.8</priority>
</url>
<url>
<loc>https://fisica.me/dispense?section=8%20Moti%20relativi</loc>
<changefreq>monthly</changefreq>
<priority>0.8</priority>
</url>
<url>
<loc>https://fisica.me/dispense?section=9%20Momenti</loc>
<changefreq>monthly</changefreq>
<priority>0.8</priority>
</url>
<url>
<loc>https://fisica.me/dispense?section=10%20Dinamica%20del%20sistema%20di%20punti</loc>
<changefreq>monthly</changefreq>
<priority>0.8</priority>
</url>
<url>
<loc>https://fisica.me/dispense?section=11%20Urti</loc>
<changefreq>monthly</changefreq>
<priority>0.8</priority>
</url>
<url>
<loc>https://fisica.me/dispense?section=12%20Corpo%20rigido</loc>
<changefreq>monthly</changefreq>
<priority>0.8</priority>
</url>
<url>
<loc>https://fisica.me/dispense?section=13%20Termodinamica</loc>
<changefreq>monthly</changefreq>
<priority>0.8</priority>
</url>
<url>
<loc>https://fisica.me/dispense?section=14%20Fluidodinamica</loc>
<changefreq>monthly</changefreq>
<priority>0.8</priority>
</url>
<url>
<loc>https://fisica.me/dispense?section=15%20Gravitazione</loc>
<changefreq>monthly</changefreq>
<priority>0.8</priority>
</url>
<url>
<loc>https://fisica.me/dispense?section=16%20Flusso</loc>
<changefreq>monthly</changefreq>
<priority>0.8</priority>
</url>

<!-- Sottosezioni delle dispense -->
<url>
<loc>https://fisica.me/dispense?section=2.1%20Misure%20e%20gestione%20delle%20incertezze</loc>
<changefreq>monthly</changefreq>
<priority>0.7</priority>
</url>
<url>
<loc>https://fisica.me/dispense?section=3.%20Derivate%20e%20Integrali</loc>
<changefreq>monthly</changefreq>
<priority>0.7</priority>
</url>
<url>
<loc>https://fisica.me/dispense?section=4.3%20Coordinate%20polari</loc>
<changefreq>monthly</changefreq>
<priority>0.7</priority>
</url>
<url>
<loc>https://fisica.me/dispense?section=4.4%20Coordinate%20intrinseche</loc>
<changefreq>monthly</changefreq>
<priority>0.7</priority>
</url>
<url>
<loc>https://fisica.me/dispense?section=4.5%20Derivata%20di%20un%20vettore</loc>
<changefreq>monthly</changefreq>
<priority>0.7</priority>
</url>
</urlset>`;

  return <pre>{sitemapContent}</pre>;
};

export default Sitemap;
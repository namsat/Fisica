declare module 'pdfjs-dist' {
    const pdfjs: any;
    export = pdfjs;
  }
  
  declare module 'pdfjs-dist/build/pdf' {
    export * from 'pdfjs-dist';
  }
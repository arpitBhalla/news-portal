import React, { useState } from "react";
import Navbar from "components/Navbar";
import { pdfjs, Document, Page } from "react-pdf";
import Container from "@material-ui/core/Container";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Epaper = () => {
  React.useEffect(() => {
    document.title = "Epaper | Sirsa Today";
  }, []);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const onDocumentLoadSuccess = () => {};
  return (
    <div>
      <Navbar />
      <Container maxWidth="md">
        <Document
          file={"./../sample.pdf"}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <p>
          Page {pageNumber} of {numPages}
        </p>
      </Container>
    </div>
  );
};

export default Epaper;

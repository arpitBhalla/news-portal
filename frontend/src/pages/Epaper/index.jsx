import React, { useState } from "react";
import Navbar from "components/Navbar";
// import { pdfjs, Document, Page } from "react-pdf";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { Paper } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

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
        <Typography variant="h5" color="textPrimary">
          Latest News
        </Typography>
        <Box component={Paper}>kjo</Box>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </Container>
    </div>
  );
};

export default Epaper;

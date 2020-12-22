import React, { useState } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Navbar from "components/Navbar";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { Paper } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Article from "components/Article";

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
        <Article />
        <TransformWrapper
          defaultScale={1}
          defaultPositionX={"100%"}
          defaultPositionY={100}
        >
          {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
            <React.Fragment>
              <div className="tools">
                <button onClick={zoomIn}>+</button>
                <button onClick={zoomOut}>-</button>
                <button onClick={resetTransform}>x</button>
              </div>
              <TransformComponent>
                <img src={require("./logo512.png").default} alt="test" />
                <div>Example text</div>
              </TransformComponent>
            </React.Fragment>
          )}
        </TransformWrapper>
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

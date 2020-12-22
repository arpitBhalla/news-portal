import React from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Navbar from "components/Navbar";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import {
  HiOutlineZoomIn,
  HiOutlineZoomOut,
  HiChevronLeft,
  HiChevronRight,
  HiOutlineArrowsExpand,
} from "react-icons/hi";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
  image: {
    width: "100%",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
}));
const Epaper = () => {
  const classes = useStyles();
  React.useEffect(() => {
    document.title = "Epaper | Sirsa Today";
  }, []);
  const [img, setImg] = React.useState(0);
  const [disable, setDisable] = React.useState(false);
  const imgs = [
    require("static/0001.jpg").default,
    require("static/0002.jpg").default,
    require("static/0003.jpg").default,
    require("static/0004.jpg").default,
  ];
  const nextPage = () => {
    if (img >= imgs.length) setDisable(true);
  };
  const previousPage = () => {};

  return (
    <div>
      <Navbar />
      <Container maxWidth="lg">
        <TransformWrapper
          defaultScale={1}
          defaultPositionX={200}
          defaultPositionY={100}
        >
          {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
            <React.Fragment>
              <div className={classes.toolbar}>
                <div>
                  <IconButton aria-label="zoom in" onClick={zoomIn}>
                    <HiOutlineZoomIn />
                  </IconButton>
                  <IconButton aria-label="zoom out" onClick={zoomOut}>
                    <HiOutlineZoomOut />
                  </IconButton>
                  <IconButton aria-label="" onClick={resetTransform}>
                    <HiOutlineArrowsExpand />
                  </IconButton>
                </div>
                <div>
                  <IconButton aria-label="" onClick={previousPage}>
                    <HiChevronLeft />
                  </IconButton>
                  <IconButton aria-label="" onClick={nextPage}>
                    <HiChevronRight />
                  </IconButton>
                </div>
              </div>
              <TransformComponent>
                <img src={imgs[img]} className={classes.image} alt="test" />
              </TransformComponent>
            </React.Fragment>
          )}
        </TransformWrapper>
      </Container>
    </div>
  );
};

export default Epaper;

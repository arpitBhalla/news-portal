import React from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Navbar from "components/Navbar";
import Container from "@material-ui/core/Container";
import Hidden from "@material-ui/core/Hidden";
import { makeStyles } from "@material-ui/core/styles";
import {
  HiOutlineZoomIn,
  HiOutlineZoomOut,
  HiChevronLeft,
  HiChevronRight,
  HiOutlineArrowsExpand,
} from "react-icons/hi";
import IconButton from "@material-ui/core/IconButton";
import Pagination from "@material-ui/lab/Pagination";
import { Backdrop, LinearProgress } from "@material-ui/core";
import Footer from "components/Footer";

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
  const [loading, setLoading] = React.useState(true);
  let imgs = [
    require("static/0001.jpg").default,
    require("static/0002.jpg").default,
    require("static/0003.jpg").default,
    require("static/0004.jpg").default,
  ];
  React.useEffect(() => {
    document.title = "Epaper | Sirsa Today";
  }, []);
  const [img, setImg] = React.useState({
    index: 0,
    canNext: true,
    canPrev: false,
  });
  const nextPage = () => {
    setLoading(true);
    setImg(({ index }) => ({
      index: index + 1,
      canNext: index + 1 < imgs.length - 1,
      canPrev: index + 1 > 0,
    }));
  };
  const previousPage = () => {
    setLoading(true);
    setImg(({ index }) => ({
      index: index - 1,
      canNext: index - 1 < imgs.length - 1,
      canPrev: index - 1 > 0,
    }));
  };
  const handleChange = (event, value) => {
    setImg({
      index: value - 1,
      canNext: value - 1 < imgs.length - 1,
      canPrev: value - 1 > 0,
    });
  };
  const panPageChange = (positionX) => {
    // let f = true;
    // if (f) {
    //   if (positionX > 90 && img.canPrev) previousPage();
    //   else if (positionX < -90 && img.canNext) nextPage();
    //   f = false;
    //   setTimeout(() => {
    //     f = true;
    //   }, 1000);
    // }
  };

  return (
    <div>
      <Navbar />
      <Container maxWidth="md">
        <TransformWrapper
          defaultScale={1}
          onPanning={({ positionX }) => {
            panPageChange(positionX);
          }}
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
                  <IconButton aria-label="reset zoom" onClick={resetTransform}>
                    <HiOutlineArrowsExpand />
                  </IconButton>
                </div>
                <Hidden smDown>
                  <Pagination
                    count={imgs.length}
                    page={img.index + 1}
                    onChange={handleChange}
                  />
                </Hidden>
                <Hidden mdUp>
                  <div>
                    <IconButton
                      aria-label="previous page"
                      disabled={!img.canPrev}
                      onClick={previousPage}
                    >
                      <HiChevronLeft />
                    </IconButton>
                    <IconButton
                      aria-label="next page"
                      disabled={!img.canNext}
                      onClick={nextPage}
                    >
                      <HiChevronRight />
                    </IconButton>
                  </div>
                </Hidden>
              </div>
              {loading && <LinearProgress />}
              <TransformComponent>
                <img
                  src={imgs[img.index]}
                  className={classes.image}
                  alt="test"
                  onLoad={() => {
                    setLoading(false);
                  }}
                />
              </TransformComponent>
            </React.Fragment>
          )}
        </TransformWrapper>
      </Container>
      <Footer />
    </div>
  );
};

export default Epaper;

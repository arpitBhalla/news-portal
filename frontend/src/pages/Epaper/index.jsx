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
  const [img, setImg] = React.useState({
    index: 0,
    canNext: true,
    canPrev: false,
  });
  const imgs = [
    require("static/0001.jpg").default,
    require("static/0002.jpg").default,
    require("static/0003.jpg").default,
    require("static/0004.jpg").default,
  ];
  const nextPage = () => {
    setImg(({ index }) => ({
      index: index + 1,
      canNext: index + 1 < imgs.length - 1,
      canPrev: index + 1 > 0,
    }));
  };
  const previousPage = () => {
    setImg(({ index }) => ({
      index: index - 1,
      canNext: index - 1 < imgs.length - 1,
      canPrev: index - 1 > 0,
    }));
  };
  const handleChange = (event, value) => {
    setImg((e) => ({ ...e, index: value - 1 }));
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
      <Container maxWidth="lg">
        <TransformWrapper
          defaultScale={1}
          defaultPositionX={200}
          defaultPositionY={100}
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
              <TransformComponent>
                <img
                  src={imgs[img.index]}
                  className={classes.image}
                  alt="test"
                />
              </TransformComponent>
            </React.Fragment>
          )}
        </TransformWrapper>
      </Container>
    </div>
  );
};

export default Epaper;

/* eslint-disable no-useless-computed-key */
import { createStyles, makeStyles } from "@mui/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import r1 from "../assets/r1.png";
import r2 from "../assets/r2.png";
import r3 from "../assets/r3.png";
import r4 from "../assets/r4.png";
import r5 from "../assets/r5.png";
import r6 from "../assets/r6.png";
import r7 from "../assets/r7.png";
import r8 from "../assets/r8.png";
import r9 from "../assets/r9.png";
import r10 from "../assets/r10.png";
import r11 from "../assets/r11.png";
import r12 from "../assets/r12.png";
import r13 from "../assets/r13.png";
import r14 from "../assets/r14.png";
import r15 from "../assets/r15.png";
import r16 from "../assets/r16.png";
import r17 from "../assets/r17.png";
import r18 from "../assets/r18.png";
import { fontFamily } from "@mui/system";

export const Info = () => {
  const classes = useStyles();
  const mdMatches = useMediaQuery("(min-width:768px)");
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    pauseOnHover: false,
    slidesToShow: mdMatches ? 7 : 4,
    slidesToScroll: 2,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    swipeToSlide: false,
    cssEase: "linear",
  };
  const scroll1 = {
    ...settings,
  };
  const scroll2 = {
    ...settings,
    rtl: true,
  };
  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <div className={classes.heading}>
            <h1 className={classes.maintxt}>Bored 90's Gang</h1>
            <span>
              <p className={classes.pdesc}>
                Bored 90s Gang is a collection of 8896 NFTs, each representing a
                Bored 90s kid as a digitized piece of 2D (for now…) art. Our
                goal is to build a community around the nostalgia of the 90s pop
                culture era, with a focus also on video games and urban America
                roughly during that time period.
              </p>
              <p className={classes.pdesc}>
                The Bored 90s Gang collection brings the nostalgia we all feel
                for those times to the NFT market today. This is not exclusive
                for people born in the 90s or during any particular point in
                time, but is underpinned by strong connection many people feel
                for that time period and the world we lived in during those
                years.
              </p>
            </span>
          </div>
        </div>
      </div>
      <div>
        <Slider {...scroll1}>
          <img src={r1} alt="" />
          <img src={r2} alt="" />
          <img src={r3} alt="" />
          <img src={r4} alt="" />
          <img src={r5} alt="" />
          <img src={r6} alt="" />
          <img src={r7} alt="" />
          <img src={r8} alt="" />
        </Slider>
        <Slider {...scroll2}>
          <img src={r7} alt="" />
          <img src={r8} alt="" />
          <img src={r9} alt="" />
          <img src={r10} alt="" />
          <img src={r11} alt="" />
          <img src={r12} alt="" />
          <img src={r13} alt="" />
          <img src={r14} alt="" />
        </Slider>
        <Slider {...scroll1}>
          <img src={r13} alt="" />
          <img src={r14} alt="" />
          <img src={r15} alt="" />
          <img src={r16} alt="" />
          <img src={r17} alt="" />
          <img src={r18} alt="" />
          <img src={r1} alt="" />
          <img src={r2} alt="" />
        </Slider>
      </div>
    </>
  );
};

const useStyles = makeStyles((theme) =>
  createStyles({
    wrapper: {
      position: "relative",
      zIndex: 11,
      paddingTop: "52px",
      marginBottom: "98px",
    },
    container: {
      padding: "0 20px",
      margin: "0 auto",
      maxWidth: "1350px",
    },
    heading: {
      marginBottom: "79px",
      textAlign: "center",
      color: "#fff",
    },
    title: {
      color: "#ff764b",
      marginBottom: "12px",
      fontSize: "12px",
      textTransform: "uppercase",
      fontWeight: "700",
      letterSpacing: "2.4px",
    },
    maintxt: {
      fontSize: "84px",
      marginBottom: "11px",
      verticalAlign: "top",
      marginTop: "0px",
      textTransform: "uppercase",
      ["@media (max-width:768px)"]: {
        fontSize: "60px",
      },
    },
    pdesc: {
      maxWidth: "679px",
      margin: "0 auto",
      marginBottom: "27px",
      fontSize: "20px",
      lineHeight: "1.688",
    },
  })
);

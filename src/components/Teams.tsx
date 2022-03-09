/* eslint-disable no-useless-computed-key */
import { createStyles, makeStyles } from "@mui/styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useMediaQuery from "@mui/material/useMediaQuery";

import p1 from "../assets/team1.png";
import telegram from "../assets/logo/telegram.svg";
import discord from "../assets/logo/discord.svg";
import twitter from "../assets/logo/twitter.svg";

function SampleNextArrow(props: { className: any; style: any; onClick: any }) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: { className: any; style: any; onClick: any }) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

export const Teams = () => {
  const classes = useStyles();
  const mdMatches = useMediaQuery("(min-width:768px)");
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: mdMatches ? 3 : 1,
    slidesToScroll: 1,
    nextArrow: (
      <SampleNextArrow
        className={undefined}
        style={undefined}
        onClick={undefined}
      />
    ),
    prevArrow: (
      <SamplePrevArrow
        className={undefined}
        style={undefined}
        onClick={undefined}
      />
    ),
  };

  const item = (
    image: string | undefined,
    title: {} | null | undefined,
    tcolor: string,
    name: {} | null | undefined,
    desc1: {} | null | undefined,
    desc2: {} | null | undefined,
    twitterUrl: string | undefined,
    telegramURL: string | undefined,
    discordURL: string | undefined
  ) => {
    return (
      <div className={classes.item}>
        <div className={classes.slide}>
          <img src={image} className={classes.img} alt="" />
          <div className={classes.title} style={{ color: tcolor }}>
            {title}
          </div>
          <div className={classes.heading}>{name}</div>
          <ul className={classes.social}>
            
            {twitterUrl && (
              <li
                onClick={() => {
                  window.open(twitterUrl, "_blank");
                }}
              >
                <img src={twitter} className={classes.discord} alt="" />
              </li>
            )}
            {telegramURL && (
              <li
                onClick={() => {
                  window.open(telegramURL, "_blank");
                }}
              >
                <img src={telegram} alt="" className={classes.discord} />
              </li>
            )}
            {discordURL && (
              <li
                onClick={() => {
                  window.open(discordURL, "_blank");
                }}
              >
                <img src={discord} alt="" className={classes.discord} />
              </li>
            )}
          </ul>
        </div>
      </div>
    );
  };
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        {!mdMatches ? (
          <Slider {...settings}>
            {item(
              p1,
              "Founder & Creator",
              "#a3e869",
              "Menios",
              "",
              "",
              "https://twitter.com/meni_hara",
              "https://t.me/menios93",
              "https://discordapp.com/users/770593157422907412/"
            )}
            
          </Slider>
        ) : (
          <>
            <div className={classes.posts}>
              {item(
                p1,
                "Founder & Creator",
                "#a3e869",
                "Menios",
                "",
                "",
                "https://twitter.com/meni_hara",
                "https://t.me/menios93","https://discordapp.com/users/770593157422907412/"
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) =>
  createStyles({
    wrapper: {
      paddingTop: "40px",
      paddingBottom: "70px",
      position: "relative",
      zIndex: "20",
      minHeight: "600px",
      ["@media (max-width:768px)"]: {
        minHeight: "500px",
      },
    },
    container: {
      maxWidth: "1375px",
      position: "relative",
      zIndex: "4",
      padding: "0 20px",
      margin: "0 auto",
      ["@media (max-width:768px)"]: {
        width: "80%",
        maxWidth: "600px",
      },
      ["@media (max-width:450px)"]: {
        width: "80%",
        maxWidth: "380px",
      },
    },
    posts: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: 0,
      textAlign: "center",
    },
    item: {
      marginBottom: "70px",
      padding: "0 15px",
      width: "30%",
      ["@media (max-width:768px)"]: {
        width: "80%",
      },
    },
    slide: {
      maxWidth: "280px",
      margin: "0 auto",
      textAlign: "center",
      ["@media (max-width:768px)"]: {
        width: "80%",
        maxWidth: "360px",
        textAlign: "-webkit-center",
      },
    },
    img: {
      width: "300px",
      marginBottom: "18px",
      minHeight: "220px",
      alignItems: "center",
    },
    title: {
      marginBottom: "11px",
      fontSize: "12px",
      fontWeight: "700",
      textTransform: "uppercase",
      letterSpacing: "2.2px",
    },
    heading: {
      fontSize: "38px",
      marginBottom: "9px",
      color: "#fff",
      fontWeight: "400",
      textTransform: "uppercase",
      lineHeight: "1.088",
    },
    desc: {
      marginBottom: "14px",
      textAlign: "center",
    },
    social: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
      listStyle: "none",
      paddingLeft: "0px",
      "& li":{
          marginRight: 10,
      }
    },
    discord: { cursor: "pointer", paddingRight: "5px" },
    twitter: { cursor: "pointer" },
  })
);

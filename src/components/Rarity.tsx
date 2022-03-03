/* eslint-disable no-useless-computed-key */
import { createStyles, makeStyles } from "@mui/styles";

import rareghost from "../assets/rareghost.png";

export const Rarity = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <div className={classes.outer}>
            <div className={classes.inner}>
              
              <div className={classes.rarity}>
                <div className={classes.txtbox}>
                  <img src={rareghost} className={classes.ghost} alt="" />
                </div>
                <div className={classes.txtbox} style={{ alignSelf: "center" }}>
                  <h1 className={classes.heading}>Rarity</h1>
                  <p style={{ color: "grey" }}>
                    In any gang there is a hierarchy, and in the Bored 90s Gang,
                    the top of the hierarchy is where the OGs sit.
                  </p>
                  <p style={{ color: "grey" }}>
                    OG Bored 90s Gangsters are recognisable by their double
                    gold-earring combination (the hanging gun earring and the
                    higher gold earring, see sneak peaks for more 👀)
                  </p>
                  <p style={{ color: "grey" }}>
                    On mint day, you have a direct chance to become a OG member.
                  </p>
                  <p style={{ color: "grey" }}>
                    You will have approximately an 0.1% chance to mint an OG
                    Bored 90s Gangster. If you miss out on minting an OG, you
                    can always purchase one on the secondary market on opensea.
                  </p>
                  <p style={{ color: "grey" }}>
                    Their owners will receive additional benefits such as: - 1
                    ETH gift on completion of phase 2 of the roadmap, as well as
                    your 3D NFT when the 3D collection is airdropped to holders.
                  </p>
                  <p style={{ color: "grey" }}>
                    OG Bored 90s Gangster holders will receive their own exact
                    NFT in 3D.
                  </p>
                  <p style={{ color: "grey" }}>
                    Access to exclusive Bored 90s Gang OG merchandise, reserved
                    for OG members which will be released alongside the standard
                    Bored 90s Gang merchandise during the roadmap.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const useStyles = makeStyles((theme) =>
  createStyles({
    wrapper: {
      padding: "94px 0",
      position: "relative",
      zIndex: 1,
      minHeight: "600px",
      maxHeight: "100000px",
    },
    container: {
      maxWidth: "1170px",
      padding: "0 20px",
      margin: "0 auto",
    },
    outer: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      background: "linear-gradient(0deg,black 0%,rgba(0,0,0,0) 92%)",
    },
    inner: {
      width: "100%",
      paddingTop: "19px",
      paddingLeft: "10px",
    },
    bg: {
      position: "absolute",
      left: "0",
      right: "0",
      top: "40",
      width: "100%",
      height: "auto",
    },
    ghost: {
      width: "360px",
      height: "auto",
      paddingLeft: "40px",
      marginTop: 100,
      ["@media (max-width:900px)"]: {
        width: "280px",
        margin: "0 auto",
        paddingLeft: "0px",
      },
    },
    rarity: {
      display: "flex",
      flexWrap: "wrap",
      paddingLeft: "30px",
      ["@media (max-width:768px)"]: {
        paddingLeft: "0px",
      },
    },
    txtbox: {
      width: "50%",
      textAlign: "left",
      paddingTop: "45px",
      justifyContent: "flex-start",
      ["@media (max-width:900px)"]: {
        width: "100%",
        textAlign: "center",
      },
    },
    title: {
      color: "#ffbc42",
      fontSize: "12px",
      textTransform: "uppercase",
      letterSpacing: "2.4px",
    },
    heading: {
      fontFamily: "Holiday",
      fontSize: "74px",
      marginBottom: "-10px",
      verticalAlign: "top",
      marginTop: "20px",
      color: "#fff",
      ["@media (max-width:900px)"]: {
        fontSize: "50px",
        marginTop: "10px",
      },
    },
    p: {
      maxWidth: "360px",
      ["@media (max-width:900px)"]: {
        margin: "0 auto",
      },
    },
  })
);

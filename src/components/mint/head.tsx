/* eslint-disable no-useless-computed-key */
import { makeStyles } from "@mui/styles";
import React from "react";
import logo from "../../assets/logo.png";
export const Head = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.logoCont}>
        <img className={classes.logo} src={logo} alt="" />
        <span style={{fontFamily: "Holiday"}}>
            Bored 90s Gang
        </span>
      </div>
      <div className={classes.buttonCont}>
        <button className={classes.connectBtn} >Connect Wallet</button>
      </div>
      
    </div>
  );
};
const useStyles = makeStyles((theme) => ({
  logo: {
    width: 60,
    height: 60,
    marginRight: 15
  },
  connectBtn:{
    border: "2px solid white",
    height: 60,
    width: 250,
    backgroundColor: 'white',
    borderRadius: '30px',
    color:"black",
    textTransform: "uppercase",
    fontWeight: 700,
    fontSize: 20,
    "&:hover":{
        backgroundColor: "transparent",
        color: "white",
        cursor: "pointer"
    },
    ['@media (max-width:768px)']: {
        marginTop:20
    },
  },
  buttonCont:{
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center", 
    
  },
  logoCont: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center", 
    "& span":{
        fontSize: 32,
        color: "white"
    }
  },
  container: {
    display: "flex",
    flexDirection: "row",
    padding: 30,
    minWidth: 768,
    ['@media (max-width:768px)']: {
        flexDirection: "column",
        alignItems:"center",
        minWidth: 350,
        maxWidth: "auto"
    },
  },
}));

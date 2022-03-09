/* eslint-disable no-useless-computed-key */
import { makeStyles } from "@mui/styles";
import React from "react";

export const Counter = () => {
    const classes = useStyles();
  return (
    <div>
      <div>
        <h2 style={{color: "white"}}>
            <span className={classes.green}>0</span><span className={classes.counter}>/8896</span> Minted
        </h2>
      </div>
    </div>
  );
};
const useStyles = makeStyles((theme) => ({
    green:{
        color: "orange",
        fontSize: 40,
        ['@media (max-width:768px)']: {
          fontSize: 25
      },
    },
    counter:{
      fontSize: 40,
      color: "white",
      ['@media (max-width:768px)']: {
        fontSize: 25
    },
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
  
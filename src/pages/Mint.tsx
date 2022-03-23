import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import { Head } from "../components/mint/head";
import { Banner } from "../components/mint/banner";
import { Minter } from "../components/mint/minter";
import { Footer } from "../components/Footer";
export const Mint = () => {
  const classes = useStyles();
  const [isWhiteListed, setIsWhiteListed] = useState(false);

  const handleWhitelistChange = (value: boolean) => {
    setIsWhiteListed(value);
  }
  return (
    <div>
      <div className={classes.main}>
        <Head onWhitelistChange={handleWhitelistChange}/>
        <Banner />
        <Minter isWhiteListed={isWhiteListed} />
      </div>
      <Footer />
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  main: {
    backgroundColor: "black",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

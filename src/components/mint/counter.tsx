/* eslint-disable no-useless-computed-key */
import { Contract } from "@ethersproject/contracts";
import { JsonRpcProvider } from "@ethersproject/providers";
import { formatUnits } from "@ethersproject/units";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";

import abi from "../../abi/NFT.json";
import { address, RPC } from "../../connectors/address";
export const Counter = () => {
    const classes = useStyles();
    const [mints, setMints] = useState(0);
  const rpcProvider = new JsonRpcProvider(RPC);

  useEffect(()=>{
      const getCount = async () => {
          const NFT = new Contract(address, abi, rpcProvider);
          NFT.on("CreateBored90sGang", async ()=>{
              const num = await NFT.totalSupply();
              setMints(Number(formatUnits(num, 0)));
          }); 
          const num1 = await NFT.totalSupply();
            setMints(Number(formatUnits(num1, 0)));
      };
      getCount();
  },[]);
  return (
    <div>
      <div>
        <h2 style={{color: "white"}}>
            <span className={classes.green}>{mints}</span><span className={classes.counter}>/8896</span> Minted
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
  
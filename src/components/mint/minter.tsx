/* eslint-disable no-useless-computed-key */
import { Button, IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import { Counter } from "./counter";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { toast } from "react-toastify";
import { Contract } from "@ethersproject/contracts";
import { address } from "../../connectors/address";
import abi from "../../abi/NFT.json";
import { formatUnits, parseUnits } from "@ethersproject/units";

interface Props {
  isWhiteListed: boolean;
}
export const Minter = ({isWhiteListed}: Props) => {
  const classes = useStyles();
  const {account, library} = useWeb3React<Web3Provider>();
  const [mints, setMints] = useState(1);
  const [presalePrice, setPresalePrice] = useState(0);
  const [salePrice, setSalePrice] = useState(0);
  const [presaleOpen, setPresaleOpen] = useState(false);

  const getSalePriceValue = () => {
    const price = mints * salePrice;
    return price.toString();
  };
  const getPreSalePriceValue = () => {
    const price = mints * presalePrice;
    return price.toString();
  };

  const handleMint = async () => {
    if (account && library) {
      try {
        const signer = await library.getSigner();
        if (isWhiteListed && presaleOpen) {
          const contract = new Contract(address, abi, signer);
          let overRides = {
            value: parseUnits(getPreSalePriceValue(), "ether"),
          };
          const txResult = await contract.presaleMint(mints, overRides);
          await txResult.wait();
          toast.success(`${mints} Bored 90s Gang NFT's minted successfully!`);
        } else {
          const contract = new Contract(address, abi, signer);
          let overRides = {
            value: parseUnits(getSalePriceValue(), "ether"),
          };
          const txResult = await contract.mint(mints, overRides);
          await txResult.wait();
          toast.success(`${mints} Bored 90s Gang NFT's minted successfully!`);
        }
      } catch (err: any) {
        if (err.error) {
          if (err.code === "INSUFFICIENT_FUNDS") {
            toast.error("Insufficient Funds");
          } else {
            toast.error(err.error.message);
            console.log(err.code);
          }
        } else {
          if (err.code === 4001) {
            toast.error("User denied transaction signature.");
          } else toast.error("Transaction Error");
        }
      }
    }
  }
  useEffect(() => {
    const process = async () => {
      if(account && library){
        try{
          const signer = await library.getSigner();
          const NFT = new Contract(address, abi, signer);
          const po = await NFT.isPresaleOpen();
          setPresaleOpen(po);
          const sp = await NFT.salePrice(1);
          const psp = await NFT.presalePrice(1);
          setSalePrice(Number(formatUnits(sp, "ether")));
          setPresalePrice(Number(formatUnits(psp, "ether")));
        }
        catch{
          toast.error("Error occured while retriving the mint price.")
        }
      }
    }
    process();
  }, [account, library]);
  const addMint = () => {
    if (mints < 3) {
      setMints(mints + 1);
    }
  };
  const removeMint = () => {
    if (mints > 1) {
      setMints(mints - 1);
    }
  };
  return (
    <div className={classes.container}>
      <Counter />
      <div className={classes.controls}>
        <div className={classes.item1}>
          <div className={classes.box}>
            <div className={classes.boxItem}>
              <IconButton onClick={addMint} className={classes.icon}>
                <AddIcon htmlColor="white" />
              </IconButton>
            </div>
            <div className={classes.boxItem}>
              <span>{mints}</span>
            </div>
            <div className={classes.boxItem}>
              <IconButton onClick={removeMint} className={classes.icon}>
                <RemoveIcon htmlColor="white" />
              </IconButton>
            </div>
          </div>
        </div>
        <div className={classes.item2}>
          <Button onClick={handleMint} variant="outlined" fullWidth className={classes.btn}>
            {" "}
            Mint
          </Button>
        </div>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: -100,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "30px",
    backgroundColor: "black",
    color: "white",
    minWidth: 768,
    boxShadow: `5px 5px 4px 0px rgb(31,28,28)`,
    WebkitBoxShadow: `5px 5px 4px 0px rgb(31,28,28)`,
    MozBoxShadow: `5px 5px 4px 0px rgb(31,28,28)`,
    border: `1px solid rgb(31,28,28)`,
    marginBottom: 50,
    ["@media (max-width:768px)"]: {
      marginTop: 0,
      minWidth: 400,
      width: 400,
    },
  },
  controls: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    ["@media (max-width:768px)"]: {
      width: 400,
    },
  },
  btn: {
    height: 95,
    borderRadius: `20px!important` as any,
    fontSize: `25px!important` as any,
    color: "black!important" as any,
    backgroundColor: "white!important" as any,
    fontWeight: "600!important" as any,
    ["@media (max-width:768px)"]: {
      fontSize: `18px!important` as any,
      height: 55,
    },
  },
  item1: {
    width: "30%",
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 30,
    paddingTop: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  item2: {
    width: "70%",
    paddingLeft: 0,
    paddingRight: 30,
    paddingBottom: 30,
    paddingTop: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  box: {
    border: `5px solid white`,
    borderRadius: 20,
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
  boxItem: {
    width: "100%",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& span": {
      fontSize: 50,
      ["@media (max-width:768px)"]: {
        fontSize: 25,
      },
    },
    
  },
  icon: {
    "& svg": {
      fontSize: 35,
      ["@media (max-width:768px)"]: {
        fontSize: 18,
      },
    },
  },
}));

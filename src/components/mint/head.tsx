/* eslint-disable no-useless-computed-key */
/* eslint-disable react-hooks/exhaustive-deps */
import { makeStyles } from "@mui/styles";
import { useWeb3React } from "@web3-react/core";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import logo from "../../assets/logo.png";
import { injectedConnector } from "../../connectors/injected-connector";
import abi from "../../abi/NFT.json";
import { Contract } from "@ethersproject/contracts";
import { address } from "../../connectors/address";
import { Web3Provider } from "@ethersproject/providers";
import VerifiedIcon from '@mui/icons-material/Verified';
declare global {
  interface Window {
    ethereum: any;
  }
}
interface Props {
  onWhitelistChange: (value: boolean)=> void
}
export const Head = ({onWhitelistChange}: Props) => {
  const classes = useStyles();
  const [isWhitelisted, setIsWhitelisted] = useState(false);
  const {activate, account, error, library} = useWeb3React<Web3Provider>();
  
  const handleConnect = () => {
    if(!account){
      activate(injectedConnector);
    }else{
      window.open(`https://etherscan.io/address/${account}`);
    }
  }

  useEffect(()=> {
    const process = async () => {
      if(account && library){
        toast.success("Wallet Connected!");
        const signer = await library.getSigner();
        const NFT = new Contract(address, abi, signer);
        const wl = await NFT.addressInWhitelist(account);
        console.log("white => ", wl)
        setIsWhitelisted(wl);
        onWhitelistChange(wl);
      }
    }
    process();
  }, [account, library])
  useEffect(() => {
    if (error) {
      switch (error.name) {
        case "UnsupportedChainIdError":
          toast.error(
            "Selected network is not supported. Please switch your network to Ethereum Mainnet"
          );
          
          break;
        case "NoEthereumProviderError":
          toast.error(
            "You do not have metamask installed. Please install metamask to connect to the application."
          );
          break;
        default:
          alert(error);
          break;
      }
    }
  }, [error]);


  return (
    <div className={classes.container}>
      <div className={classes.logoCont}>
        <img className={classes.logo} src={logo} alt="" />
        <span style={{fontFamily: "Holiday"}}>
            Bored 90s Gang
        </span>
      </div>
      <div className={classes.buttonCont}>
        <button onClick={handleConnect} className={classes.connectBtn} >{account ? `${shortenAddress(account)}` : "Connect Wallet"}
         {isWhitelisted? ( <VerifiedIcon color="success" className={classes.ic} />):""}
        </button>
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
  ic:{
    marginLeft: 8,
    marginTop: -5
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
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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

export const shortenAddress = (address: string) => {
  const partA = address.substring(0,5);
  const partB = address.substring(address.length -4,address.length -0 );
  return partA + "...." + partB;
}
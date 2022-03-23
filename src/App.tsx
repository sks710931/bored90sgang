import { Web3Provider } from "@ethersproject/providers";
import { Web3ReactProvider } from "@web3-react/core";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useEagerConnect } from "./connectors/use-eager-connector";
import { Home } from "./pages/Home";
import { Mint } from "./pages/Mint";
import 'react-toastify/dist/ReactToastify.css';
function getLibrary(provider: any) {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}

function App() {
  useEagerConnect();
  return (
    <BrowserRouter>
      <Web3ReactProvider getLibrary={getLibrary}>
        <ToastContainer pauseOnHover />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/mint" element={<Mint />} />
      </Routes>
      </Web3ReactProvider>
    </BrowserRouter>
  );
}

export default App;

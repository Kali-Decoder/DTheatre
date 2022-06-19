import React, { useContext } from "react";
import { Button, Heading, Text } from "@chakra-ui/react";
import { DTheatre } from "../Context/Context";
const Navbar = () => {
    const {currentWalletAddress,loadAddress,connectWallet,owner}=useContext(DTheatre);
  return (
    <>
      <nav className="d-flex justify-content-between">
        <Heading bgColor='yellow' className='p-3' fontSize='20px'>
          D-Theatre
        </Heading>
        <div>
          {owner==currentWalletAddress ? <Button 
            colorScheme='facebook'
            spinnerPlacement="start"
            loadingText="Registering"
            className='mt-3 mx-2'
            >Register A Movie
            </Button>:null
          }
          <Button 
          colorScheme='twitter'
          spinnerPlacement="start"
          loadingText="Connecting..."
          isLoading={loadAddress}
          onClick={connectWallet}
          className='mt-3'
          >{currentWalletAddress ? currentWalletAddress.slice(0,10)+'...' : "Connect MetaMask"}</Button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

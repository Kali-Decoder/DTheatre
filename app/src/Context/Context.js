import web3 from '../utils/web3';
import getContract from '../utils/contract';
import React, { createContext,useState,useEffect } from 'react';
export const DTheatre= createContext();
const ContextProvider = ({children}) => {
    const [currentWalletAddress,setCurrentWalletAddress]= useState(null);
    const [loadAddress,setLoadAddress]= useState(false);
    const [owner,setOwner]=useState(null)
    const connectWallet=async ()=>{
        setLoadAddress(true);
        let accounts = await web3.eth.getAccounts();
        setCurrentWalletAddress(accounts[0]);
        setLoadAddress(false);
        let contract = await getContract();
        
        let ow = await contract.methods.owner().call();
        
        setOwner(ow);
        
    }
    // useEffect(()=>{
    //   connectWallet()
    // },[])
  return (
    <DTheatre.Provider value={{currentWalletAddress,loadAddress,connectWallet,owner}}>
        {children}
    </DTheatre.Provider>
  )
}

export default ContextProvider;
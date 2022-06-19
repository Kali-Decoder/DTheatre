import web3 from './web3';
import DTheatre from '../DTheatre.json';
let contract;

const getContract= async()=>{
    let id = await web3.eth.net.getId();
    let Address= DTheatre.networks[id];
    contract = new web3.eth.Contract(DTheatre.abi,Address.address);
    return contract;
}

export default getContract;
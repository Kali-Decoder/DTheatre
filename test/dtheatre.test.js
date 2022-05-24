const DTheatre = artifacts.require("DTheatre");
let contractDtheatre;
contract('Testing DTheatre Contract ....',(accounts)=>{
    beforeEach(async ()=>{
        contractDtheatre= await DTheatre.deployed();
    });
    it("Should return Owner of theatre ",async ()=>{
        let Owner = await contractDtheatre.owner();
        assert.equal(accounts[0],Owner);
    });
    it("Should return base fees of add movie",async ()=>{
        let baseFees= await contractDtheatre.baseFees();
        assert.equal(baseFees.toNumber(),1000);
    })
    it("owner should add movie ",async ()=>{
        // uint _price,string calldata _name,uint _remaining
        let baseFees= await contractDtheatre.baseFees();
        assert.equal(baseFees.toNumber(),1000);
        const tx = await contractDtheatre.addMovie(2000,"KGF-2",20,{from:accounts[0],value:baseFees,gas:'1000000'});
        
        let getData= await contractDtheatre.movies(1);
        // console.log(getData.movieName);
        assert.equal(getData.movieName,"KGF-2");
    });

    it("Should book ticket ",async ()=>{
        await contractDtheatre.bookTicket(1,3,3,2,{from:accounts[2],value:180,gas:'1000000'});

        const data = await contractDtheatre.tickets(accounts[2]);
        assert.equal(data.seatNumber.toNumber(),9);
        // uint _id, uint _row , uint _col,uint _type

    })
    it("Should give contract balance ",async ()=>{
        let tx = await contractDtheatre.getBal();
        assert.equal(tx.toNumber(),1180);
    })

})
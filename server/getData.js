const axios= require("axios");
const getData= async (req,res)=>{
    try{
        const {data}= await axios.get("https://www.bitstamp.net/api/v2/order_book/btcusd/");
        res.status(200).json(data);
    }
    catch (e)
    {
        console.log(e.message);
        res.status(404).send("not found");
    }
  
  
}
module.exports={getData};
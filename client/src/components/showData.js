import {React,useState,useEffect} from "react";
import { getData } from "../services/dataService";
import {Table} from "react-bootstrap"
import "../components/showData.css"
import { useSelector, } from "react-redux";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:4001";
export default function ShowData()
{
   // const bids=useSelector(state=>state.data.bids);
   // const asks=useSelector(state=>state.data.asks);
    const [bids,setBids]=useState([]);
    const [asks,setAsks]=useState([]);
    const [start,setStart]=useState(true);
    const [response, setResponse] = useState("");
    useEffect(()=>{
        debugger;

               setStart(false);
               const socket = socketIOClient(ENDPOINT);
               socket.on("FromAPI", data => {
                 setBids(data["bids"])
                 setAsks(data["asks"])
                 console.log(response);
               });
               return () => socket.disconnect();


    },[])
    if (start)
    return(<div>hello</div>) 
else
    return(
    <Table striped bordered hover>
         <thead>
               <tr>
              <th id="txt">BTC-USD</th>
              </tr>
         </thead>
         <tbody>
             <tr>
                 <td>
                 <Table id="green" striped bordered hover>
              <thead>
               <tr>
              <th>bid qty</th>
              <th>bid price</th>
              </tr>
         </thead>
         {bids.map(bid=><tbody>
             <tr>
             <td>
            {bid[1]}
            </td>
            <td>
            {bid[0]}
            </td>
             </tr>
            
            </tbody>)}
         )
             </Table>
                 </td>
                 <td>
                 <Table id="red" striped bordered hover>
                 <thead>
                  <tr>
                 <th>ask qty</th>
                 <th>ask price</th>
                 </tr>
            </thead>
            {asks.map(ask=><tbody>
                <tr>
                <td>
               {ask[1]}
               </td>
               <td>
               {ask[0]}
               </td>
                </tr>
               </tbody>)}
            )
                </Table>
                 </td>
             </tr>
         </tbody>
            
                 
                </Table>
            
    )
}
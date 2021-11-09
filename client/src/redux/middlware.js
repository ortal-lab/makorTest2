import { getData } from '../services/dataService'
import actions from '../redux/actions'

export const initialStore=(store)=>(next)=>async(action)=>{
if(action.type==="GET_DATA")
{ 
    try{
        const res= await getData();
    store.dispatch(actions.setBids(res["bids"]));
     store.dispatch(actions.setAsks(res["asks"]));
    }
    catch(e)
    {
        console.log(e.message);
    }
    

}
next(action)

}

import axios from "axios"

export async function  getData(){
  const {data}= await axios.get("http://localhost:4001/getData")
  return data;
}

import axios from "axios";
const BACE_URL= 'https://youtube-v31.p.rapidapi.com'  
const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    'x-rapidapi-key': 'd6e85fae4amsh4c17252e8019cf6p15c3c7jsnff011198e27e',
    'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
  }  
};



	export const fetchFormAPI= async(url)=>{
const {data}= await axios.get(`${BACE_URL}/${url}`,options)
  return data ;
}
 
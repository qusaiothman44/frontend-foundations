import { useEffect,useState } from "react";
import axios from "axios";
const UseFetch = (url) => {
      const [countries, setCountries] = useState([]);
      const [error,setError]=useState(null)
     useEffect(() => {
    axios.get(
      url).then((res)=>{setCountries(res.data); setError(null)}).catch((err)=>setError(err));
  }, [url]);
  return {countries ,error}
}

export default UseFetch

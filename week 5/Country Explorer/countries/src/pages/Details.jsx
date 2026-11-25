import axios from "axios";
import { useEffect, useState } from "react";
import { useParams ,Link} from "react-router-dom";
const Details = () => {
  const { code } = useParams();
  const [counrty, setCountry] = useState(null);

  useEffect(() => {
    axios.get(
        `https://countries.dev/alpha/${code}?fields=name,alpha3Code,capital,region,subregion,population,flags,currencies,languages,borders,flag`
    ).then((res)=>setCountry(res.data)).catch((err)=>console.log(err))
    ;
  },[code]);

  if(!counrty){
    return <div>Loading....</div>
  }
  return (
    <>
    <Link to="/">Back</Link>
    <div className="details">
      <img src={counrty.flags.svg} alt="" />
      <h1>{counrty.name}</h1>
    </div>
    </>
  );
};

export default Details;

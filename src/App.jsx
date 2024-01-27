import { useEffect, useState } from "react";
import Header from "./components/Header";
// import InfoBar from "./components/InfoBar";
import Map from "./components/Map";

function App() {
  const [location , setLocation] = useState(null);
  const [ipAddress , setIpAddress] = useState("");

  const checkIpAddress = /^(([[0-9]|1?[0-9][0-9]?|2[0-4][0-9]|25[0-5])\.){3}([0-9]|1?[0-9][0-9]?|2[0-4][0-9]|25[0-5])$/igm
  // const checkDomain = /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+/igm

  // https://geo.ipify.org/api/v2/country,city?apiKey=${import.meta.env.VITE_API_KEY}&ipAddress=8.8.8.8

  const getData = async () => {
    try{
      const res = await fetch(`https://ipwho.is/`,{
        method: 'GET',
      });
      const data = await res.json();
      setLocation(data);
    }catch(error){
      console.trace(error);
    }
  }
  
  const getInput = async () => {
    try{
      const res = await fetch(`http://ipwho.is/${
        checkIpAddress.test(ipAddress) ? ipAddress == '192.168.1.1' ? "" : `${ipAddress}` : ''
      }?api-key=${import.meta.env.VITE_API_KEY}`);
      const data = await res.json();
      setLocation(data);
    }catch(error){
      console.trace(error);
    }
  }

  useEffect(()=>{
    getData();
    getInput();
  },[]);  

  
  function updateIp(ip){
    setIpAddress(ip);
  }

  function handleSubmit(e){
    e.preventDefault();
    getInput();
    setIpAddress('');
  }


  return (
    <>
    {location && 
      <>
        <Header location={location} ipAddress={ipAddress} handleSubmit={handleSubmit} updateIp={updateIp}/>
        {/* <InfoBar location={location}/> */}
        <Map location={location}/>
      </>
    }
    </>
  );
}

export default App;

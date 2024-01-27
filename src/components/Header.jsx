import background from "../images/pattern-bg-desktop.png";
import arrow from "../images/icon-arrow.svg";
import InfoBar from "./InfoBar";

function Header({location , ipAddress , handleSubmit , updateIp}) {


  const handleChange=(e)=>{
    const newIpAddress = e.target.value; 
    updateIp(newIpAddress);
  }

  return (
    <section className="relative w-full h-72 object-cover -mb-6" style={{ backgroundImage:`url(${background})`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
      <div className="p-8">
        <h1 className="text-2xl text-center text-white font-bold mb-8 lg:text-3xl">
          IP Address Tracker
        </h1>
        <form onSubmit={handleSubmit} className="flex justify-center max-w-xl mx-auto" action="">
          <input
            type="text"
            name="ipaddress"
            id="ipaddress"
            placeholder="Search for any IP Address"
            value={ipAddress}
            onChange={handleChange}
            autoComplete="false"
            required
            className="px-4 py-3 rounded-l-lg border-none w-full focus:border-none focus:outline-none"
          />
          <button
            type="submit"
            className="rounded-r-lg px-4 py-3 bg-black border-none hover:opacity-80"
          >
            <img src={arrow} />
          </button>
        </form>
      </div>
      <InfoBar location={location}/>
    </section>
  );
}

export default Header;

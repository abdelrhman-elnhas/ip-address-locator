const InfoBar = ({location}) => {

  return (

    <section className="info absolute bg-white rounded-xl lg:p-8 md:p-6 shadow mx-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-6xl xl:mx-auto text-center lg:text-left md:text-left relative " style={{
          zIndex: "10000",
        }}>

      <div className="lg:border-r lg:border-slate-400 p-5">
        <h2 className="uppercase font-bold text-sm text-slate-500 mb-2">
        IP Address
        </h2>
        <p className="text-slate-900 tracking-wider font-semibold text-2xl">
          {location.ip}
        </p>
      </div>

      <div className="lg:border-r lg:border-slate-400 p-5 ">
        <h2 className="uppercase font-bold text-sm text-slate-500 mb-2">
          Location
        </h2>
        <p className="text-slate-900 tracking-wider font-semibold text-2xl">
          {location.city},{location.region_code}
        </p>
      </div>

      <div className="lg:border-r lg:border-slate-400 p-5">
        <h2 className="uppercase font-bold text-sm text-slate-500 mb-2">
          Timezone
        </h2>
        <p className="text-slate-900 tracking-wider font-semibold text-2xl">
          UTC{location.timezone.utc}
        </p>
      </div>

      <div className="p-5">
        <h2 className="uppercase font-bold text-sm text-slate-500 mb-2">
          ISP
        </h2>
        <p className="text-slate-900 tracking-wider font-semibold text-2xl">
          {location.connection.isp}
        </p>
      </div>

    </section>
  )
}

export default InfoBar
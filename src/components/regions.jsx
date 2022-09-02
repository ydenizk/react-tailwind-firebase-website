import items from "./../data";

/* const Regions = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} className="my-8 flex justify-center align-center">
      <div className="max-w-6xl  w-full p-0">
        {items.map((reg) => { */

const Regions = () => {
  return (
    <section className="my-8 flex justify-center align-center bg-neutral-100 ">
      <div className="max-w-6xl  w-full p-0 bg-neutral-100 ">
        {items.map((reg) => {
          const { url, name, text, places, mapp, id } = reg;

          return (
            <article
              key={id}
              className="max-w-6xl  w-full py-16  flex justify-center align-center  border-t-2 border-slate-500"
            >
              <div className="w-180 h-135 flex-1 mr-12">
                <img
                  src={url}
                  alt={name}
                  className="w-180 h-135 object-cover"
                />
              </div>
              <div className=" text-left flex-1">
                <h1 className="mb-1 text-xl tracking-widest font-semibold">
                  {" "}
                  {name}{" "}
                </h1>
                <p className="mb-2 tracking-wider font-light text-sm font-roboto">
                  {text}{" "}
                </p>
                <div className="grid grid-cols-5 mb-1">
                  {places.map((pl, index) => {
                    return (
                      <>
                        <h4
                          key={index}
                          className="p-2 whitespace-nowrap tracking-wider hover:text-amber-400 transition-all"
                        >
                          {pl}{" "}
                        </h4>
                      </>
                    );
                  })}
                </div>
                <div className="text-center"> zz</div>{" "}
                {/* {mapp} eklenecek, yavasladıgı için simdilik böyle*/}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Regions;


import items from "./../data";
import image from "./../assets/map.png";
import { useNavigate } from "react-router-dom";

import { Helmet } from "react-helmet-async";



export default function Regios() {


let navigate=useNavigate()


  return (
    <div className="bg-neutral-100 mt-16 flex justify-center align-center pt-16 pb-12  md:pt-32">
      <Helmet>
        <title>Regions</title>
        <meta name="description" content="Regions of Asia Minor" />
        <link rel="canonical" href="/regios" />
      </Helmet>
      <div className="max-w-6xl  w-full p-0 bg-neutral-100 ">
        <div className="text-center mb-16">
          <div className="w-96 h-96  my-0 mx-auto mb-12 ">
            <img
              src={image}
              alt=""
              className="w-96 h-96 object-cover rounded-full contrast-125 sepia "
            />
          </div>

          <h1 className="tracking-wider font-semibold font-roboto text-2xl my-4">
            Regions of Turkey
          </h1>
          <p className="tracking-wider font-light  font-roboto  text-medium w-1/2 my-0 mx-auto mb-4">
            The geographical regions of Turkey comprise seven regions.From
            classical cities scattered along the coast to archaeological sites
            that go back to the earliest periods of human history,Turkey(or Asia
            Minor) is a kind of an outdoor museum and one of the most exciting
            countries on earth for anyone who wants to discover the ancient
            world.
          </p>
          <p className="tracking-wider font-light  font-roboto  text-medium w-1/2 my-0 mx-auto">
            Located at the intersection in between East and west,Asia Minor is a
            central hub.It was occupied by everyone from Greeks to the Romans to
            the Persians to the Ottomans.As they all built remarkable cities and
            monuments, many of which still stand today. You will find below the
            summary of top spots based on regions.
          </p>
        </div>

        {items.map((reg) => {
          const { url, name, text, places, mapp, id } = reg;

          return (
            <article
              key={id}
              className="max-w-6xl  w-full py-16 px-4  flex justify-center align-center   border-t 
               border-slate-500 lg:flex-col lg:py-8"
            >
              <div className="w-180 h-135 flex-1 mr-12 lg:my-0 lg:mx-auto lg:max-w-3xl lg:h-96 ">
                <img
                  src={url}
                  alt={name}
                  className="w-180 h-135 object-cover lg:h-96 lg:w-720"
                />
              </div>
              <div className=" text-left flex-1 lg:my-0 lg:mx-auto lg:max-w-3xl">
                <h1 className="mb-1 text-xl   tracking-widest font-semibold lg:mt-8 ">
                  {name}
                </h1>
                <p className="mb-2 tracking-wider font-light text-base  font-roboto">
                  {text}
                </p>
                <div className="grid grid-cols-5 mb-1 lg:mt-6 lg:mb-12 xs:grid-cols-4 ">
                  {places.map((pl, index) => {
                    return (
                      <>
                        <button
                          onClick={() => {
                            navigate(`/${pl}`);
                          }}
                          key={index}
                          className="p-1  pl-0 whitespace-nowrap font-roboto text-left text-base 
                          tracking-wider hover:text-amber-400 transition-all xs:text-sm "
                        >
                          {pl}
                        </button>
                      </>
                    );
                  })}
                </div>
                <div className="text-center "> </div> {mapp}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

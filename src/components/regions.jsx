
import image from "./../assets/map.png";
import {Link} from "react-router-dom"



const Regions = () => {
  return (
    <section className="my-16 flex justify-center align-center bg-neutral-100 ">
      <div className="max-w-6xl  w-full p-0 bg-neutral-100 text-center grid grid-cols-2 ">
        <div className="w-96 h-96  my-0 mx-auto ">
          <img
            src={image}
            className="w-96 h-96 object-cover rounded-full contrast-125 "
          />
        </div>
        <div className="pt-12">
          <h1 className="tracking-wider font-semibold font-roboto text-2xl my-4">
            Regions of Turkey
          </h1>
          <p className="tracking-wider font-light  font-roboto  text-medium w-3/4 my-0 mx-auto mb-4">
            Get away for a mini-break exploring the cultural diversity Europe
            has to offer by visiting some of our favourite has to offer by.
          </p>
          <p className="tracking-wider font-light  font-roboto  text-medium w-3/4 my-0 mx-auto">
            Dstinations. Here are some of our top European city breaks.
          </p>
          <button
            className="border border-neutral-600 
          tracking-wide mt-4 w-36 cursor-pointer p-1 font-roboto hover:bg-gray-200 transition duration-200"
          >
            <Link to="/regios"> REGIONS</Link>
           
          </button>
        </div>
      </div>
    </section>
  );
};

export default Regions;

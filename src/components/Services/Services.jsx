import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../../constants/Constatns";

const Services = () => {
  return (
    <div id="services" className=" max-w-7xl mx-auto mt-20">
      <div className="text-center">
        <span className="bg-[#EAEEFE] text-[#001E80] rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
            Service
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-5xl mt-10 lg:mt-20 tracking-wide">
          Tailored Solutions to Elevate Your Brand's AI Strategy
        </h2>
      </div>
      
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {pricingOptions.map((option, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2 flex flex-col items-stretch">
            <div className="p-10 border border-neutral-700 rounded-xl flex flex-col justify-between flex-grow min-h-full">
              <p className="text-4xl mb-8">
                {option.title}
                {/* {option.title === "Pro" && (
                  <span className="bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text text-xl mb-4 ml-2">
                    (Most Popular)
                  </span>
                )} */}
              </p>
              <p className="mb-8">
                <span className="text-lg mt-6 mr-2">{option.statement}</span>
              </p>
              <ul>
                {option.features.map((feature, index) => (
                  <li key={index} className="mt-8 flex items-center">
                    <CheckCircle2 />
                    <span className="ml-2">{feature}</span>
                  </li>
                ))}
              </ul>
              {/* <a
                href="#"
                className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200"
              >
                Subscribe
              </a> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
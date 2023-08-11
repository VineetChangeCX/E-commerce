import Image from "next/image";
import tshirt from "./../../img/image1.jpg";

import Navbar from "./Navbar";
import Footer from "./Footer";
import Letsconnect from "./Letsconnect";
import { ImgComponent } from "./Imgs";

const HomePage = () => {
  return (
    <>
      <div className="mx-14 my-5">
        {/* <!-- navbar start here  -->*/}
        <Navbar />

        {/* <!-- container two start heree  --> */}

        <div className="relative mt-6">
          <div className="col-span-2 bg-orange-500 py-4 text-center lg:pb-12 lg:pt-8">
            <p className="text-white text-2xl font-bold pb-5">FREE SHIPPING</p>
            <p className="text-white">
              ON ORDERS ABOVE $50 - USE COUPON CODE OVER50
            </p>
            <div className="flex flex-col justify-center items-center mt-6 lg:flex-row lg:justify-center">
              <button className="border border-white text-white bg-orange-500 px-4 py-2 rounded-md mb-2 lg:mb-0 lg:mr-4 hover:bg-white hover:text-orange-500 w-40">
                SHOP MEN
              </button>
              <button className="border border-white text-white bg-orange-500 px-4 py-2 rounded-md mb-2 lg:mb-0 lg:mr-4 hover:bg-white hover:text-orange-500 w-40">
                SHOP WOMEN
              </button>
              <button className="border border-white text-white bg-orange-500 px-4 py-2 rounded-md hover:bg-white hover:text-orange-500 w-40">
                SHOP SALE
              </button>
            </div>
          </div>

          {/* social media link */}
          <Letsconnect />
        </div>

        {/* <!-- starting product images --> */}

        <div className="flex flex-wrap justify-center gap-8">
          <div>
            <Image src={tshirt} alt="Image 1" className="w-72 h-72 p-2" />
          </div>

          <div>
            <Image src={tshirt} alt="Image 2" className="w-72 h-72 p-2" />
          </div>

          <div>
            <Image src={tshirt} alt="Image 3" className="w-72 h-72 p-2" />
          </div>
        </div>

        {/* <!-- heading start  --> */}

        <div className="my-12 flex justify-center items-center">
          <p className="text-black relative text-3xl sm:text-4xl md:text-5xl mb-8">
            <span className="text-orange-700 absolute font-black bottom-0 left-0 w-full h-1 bg-orange-500"></span>
            NEW ARRIVALS
          </p>
        </div>

        {/* <!-- product listing  --> */}
        <ImgComponent />

        {/* <!-- page end buttons --> */}

        <div className="mt-20 flex flex-col sm:flex-row justify-center items-center">
          <button className="bg-white text-center text-orange-500 border-orange-600 border-2 p-2 sm:p-3 border-solid hover:bg-orange-500 hover:text-white hover:border-white mb-2 sm:mb-0 sm:mr-1">
            Shop All
          </button>

          <button className="flex items-center justify-center bg-orange-500 text-white rounded-none px-2 py-1 sm:px-4 sm:py-2 ml-0 sm:ml-1">
            <span className="text-2xl sm:text-4xl">&#8250;</span>
          </button>
        </div>

        {/* <!-- footer start here  --> */}
        <Footer />
      </div>
    </>
  );
};

export default HomePage;

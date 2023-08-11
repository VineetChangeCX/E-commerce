import Image from "next/image";
import tshirt from "./../../img/image1.jpg";

import Navbar from "./Navbar";
import Footer from "./Footer";
import Letsconnect from "./Letsconnect";
import { ImgComponent } from "./Imgs";

export default function Women() {
  return (
    <>
      <div className="mx-16 my-5">
        {/* <!-- navbar start here  -->*/}

        <Navbar />

        {/* <!-- heading start  --> */}

        <div className="relative mt-4 flex justify-center items-center mt-12">
          <p className="text-black relative text-3xl sm:text-4xl md:text-5xl mb-8">
            <span className="text-orange-700 absolute font-black bottom-0 left-0 w-full h-1 bg-orange-500"></span>
            WOMEN
          </p>

          <Letsconnect />
        </div>

        {/* <!-- product listing  --> */}
        <ImgComponent />

        {/* <!-- footer start here  --> */}
        <Footer />
      </div>
    </>
  );
}

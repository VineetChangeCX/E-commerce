import { useContext } from "react";
import Image from "next/image";
import Product from "@/contexts/ImageMap";
import Link from "next/link";

export const ImgComponent = () => {
  const value = useContext(Product);
  const Imgs = value.state.Imgs;

  const handleData = (data) => {
    value.setProductData(data);
  };

  return (
    <>
      <div className="flex flex-wrap gap-10 justify-center">
        {Imgs.map((e, idx) => (
          // eslint-disable-next-line react/jsx-key
          <div key={idx} className="relative">
            <Link href="/pdp">
              <Image
                key={e.id}
                src={e.image.url}
                alt={"tshirt"}
                className="w-72 h-72 p-1"
                onClick={() => handleData(e)}
              ></Image>
              {e.flag && (
                <span className="absolute bg-orange-500 text-white text-center text-sm p-1 rounded top-0 left-0">
                  BestSeller
                </span>
              )}
            </Link>
            <p className="text-black text-sm">I'm a product</p>
            <p className="text-orange-600 text-sm">$25.00</p>
          </div>
        ))}
      </div>
    </>
  );
};

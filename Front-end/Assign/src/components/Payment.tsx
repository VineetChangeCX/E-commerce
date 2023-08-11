import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const DummyPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 5000);

    const redirectTimeout = setTimeout(() => {
      router.push("/homepage");
    }, 10000);

    return () => {
      clearTimeout(loadingTimeout);
      clearTimeout(redirectTimeout);
    };
  }, []);

  return (
    <div className="h-screen flex items-center justify-center">
      {isLoading && !isSuccess && (
        <div className="text-center">
          <div className="relative">
            <div className="loader ease-linear rounded-full border-t-8 border-b-8 border-blue-500 h-24 w-24 animate-spin"></div>
            <p className="mt-4 absolute top-20">
              Wait...Processing Payment....
            </p>
          </div>
        </div>
      )}
      {!isLoading && isSuccess && (
        <div>
          <h1 className="text-2xl font-semibold mb-4">
            Successfully Placed Order!
          </h1>
          <p>
            Thank you for placing your order. You will be redirected shortly.
          </p>
        </div>
      )}
    </div>
  );
};

export default DummyPage;

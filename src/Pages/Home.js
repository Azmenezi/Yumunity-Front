import React from "react";

const Home = () => {
  return (
    <>
      <div className="relative bg-home-image bg-no-repeat bg-center bg-cover h-[40vh] items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <span className="absolute inset-0 flex items-center justify-center text-7xl text-white font-bold">
          Yumunity
        </span>
      </div>
      <div className="">
        <div className="flex flex-col mx-10 h-full">
          <div className="flex items-center justify-left">
            <h1 className="text-4xl my-5 text-[#A3BB98]">Featured recipes</h1>
          </div>
          <div className="flex flex-row gap-4 h-[40vh] justify-center">
            <div className="relative bg-pasta-image bg-no-repeat bg-center bg-cover w-[20%] h-full">
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="animate-bounce text-white text-4xl">
                  Pasta
                </span>
              </div>
            </div>
            <div className="relative bg-burger-image bg-no-repeat bg-center bg-cover w-[20%] h-full">
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="animate-bounce text-white text-4xl">
                  Burger
                </span>
              </div>
            </div>
            <div className="relative bg-pizza-image bg-no-repeat bg-center bg-cover w-[20%] h-full">
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="animate-bounce text-white text-4xl">
                  Pizza
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

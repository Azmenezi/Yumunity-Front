import React from "react";

const Home = () => {
  return (
    <>
      <div>
        <div
          className="bg-home-img h-[30vh]"
          style={{
            backgroundImage: "url('./media/homeImg.jpg')",
          }}
        >
          <span className="flex animate-bounce justify-center text-7xl">
            Yumunity
          </span>
        </div>
      </div>
    </>
  );
};

export default Home;

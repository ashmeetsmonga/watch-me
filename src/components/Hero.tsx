import React from "react";

const Hero = () => {
  return (
    <div className="">
      <img src="/images/hero.jpg" alt="hero" className="h-screen w-full object-cover" />
      <div className="absolute bottom-0 pb-10 w-full flex flex-col items-center bg-gradient-to-b from-transparent to-black">
        <div className="w-1/2 flex flex-col items-center">
          <h1 className="text-6xl font-black capitalize">The best Movies DB experience</h1>
          <p className="text-center mt-4">
            WatchMe is the best movies database experience for getting info about your favorite movies and shows on demand, anytime, anywhere. With WatchMe, you can enjoy a wide variety of content,
            including the latest blockbusters, classic movies, popular TV shows, and more.
          </p>
          <button className="bg-red-01 py-3 px-6 rounded mt-8">Start Now</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

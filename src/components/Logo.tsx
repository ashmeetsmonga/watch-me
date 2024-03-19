import React from "react";

const Logo = () => {
  return (
    <div className="flex gap-2 items-center">
      <img src="/images/logo.svg" alt="logo-img" className="w-8 h-8" />
      <p className="font-bold">WatchMe</p>
    </div>
  );
};

export default Logo;

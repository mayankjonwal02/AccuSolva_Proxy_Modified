import React from "react";
import { BallTriangle } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#EF6825"
        ariaLabel="ball-triangle-loading"
        visible={true}
      />
    </div>
  );
};

export default Loading;

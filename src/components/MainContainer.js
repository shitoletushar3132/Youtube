import React, { Suspense } from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="h-screen w-screen">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;

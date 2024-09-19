import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu, closeMenu } from "../store/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  return (
    <div className="flex flex-col w-screen h-screen">
      <div className="flex  items-center flex-grow m-5">
        <div className="w-full h-[75vh] rounded-xl flex">
          <div className="w-[65%] h-full ">
            <iframe
              className="h-full w-full rounded-xl"
              src={"https://www.youtube.com/embed/" + videoId}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className="px-5 w-[35%]">
            <LiveChat />
          </div>
        </div>
      </div>
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;

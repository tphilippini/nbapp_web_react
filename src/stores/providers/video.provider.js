import React, { useState } from "react";
import VideoContext from "../contexts/video.context";

const VideoProvider = ({ children }) => {
  const [showVideoOverlay, toggleVideoOverlay] = useState(false);
  const [selectedVideo, setVideoId] = useState(null);
  const [videoPlaying, toggleVideoPlay] = useState(false);
  const [selectedMatchVideos, setSelectedMatchVideos] = useState([]);

  const hideVideo = () => {
    toggleVideoOverlay(false);
  };

  return (
    <VideoContext.Provider
      value={{
        showVideoOverlay,
        toggleVideoOverlay,
        videoPlaying,
        toggleVideoPlay,
        selectedVideo,
        setVideoId,
        selectedMatchVideos,
        setSelectedMatchVideos,
        hideVideo
      }}
    >
      {children}
    </VideoContext.Provider>
  );
};

export default VideoProvider;

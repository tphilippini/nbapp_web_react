import React from "react";
// import styled from "styled-components";

// import VideoContext from "../../stores/contexts/video.context";
// import VideoItem from "./VideoItem.component";

// const Wrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   overflow-x: hidden;
//   justify-content: center;
//   flex: 1;
//   max-height: 120px;
// `;

// const Title = styled.h1`
//   /* font-family: "Roboto"; */
//   font-weight: bold;
//   font-size: 12px;
//   color: ${props => props.theme.font};
//   margin: 0px;
//   padding-left: 10px;
//   padding-bottom: 10px;
//   padding-top: 10px;
//   font-size: 16px;
// `;

// const VideoItemWrapper = styled.div`
//   cursor: pointer;
//   -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
//   flex: 0 0 auto;
// `;

// const VideoRow = styled.div`
//   cursor: pointer;
//   -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
//   display: flex;
//   flex-wrap: nowrap;
//   gap: 5px;
//   overflow-x: auto;
//   background-color: ${props => props.theme.background};
//   align-items: center;
//   padding-top: 10px;
//   padding-bottom: 10px;
//   justify-content: ${props => (props.longRow ? "unset" : "space-evenly")};
//   -webkit-overflow-scrolling: touch;
//   -ms-overflow-style: -ms-autohiding-scrollbar;

//   &::-webkit-scrollbar {
//     display: none;
//   }

//   &::after {
//     content: ${props => (props.longRow ? "a" : "unset")};
//     flex: ${props => (props.longRow ? "0 0 5px" : "none")};
//   }
// `;

// const MatchHighlightsRail = ({ videos }) => {
const MatchHighlightsRail = () => {
  // const playersVideos = videos.filter(video => video.players.length === 0);
  // const { setVideoId, toggleVideoOverlay } = useContext(VideoContext);

  // const handleVideoClick = (event, id) => {
  //   event.stopPropagation();
  //   setVideoId(id);
  //   toggleVideoOverlay(true);
  // };

  // const renderMatchVideos = () => {
  //   return playersVideos.map(video => {
  //     return (
  //       <VideoItemWrapper key={video.videoId}>
  //         <VideoItem video={video} handleClick={handleVideoClick} />
  //       </VideoItemWrapper>
  //     );
  //   });
  // };

  // if (playersVideos.length > 0) {
  //   return (
  //     <Wrapper>
  //       <Title>Match Highlights</Title>
  //       <VideoRow longRow={playersVideos.length > 3}>
  //         {renderMatchVideos()}
  //       </VideoRow>
  //     </Wrapper>
  //   );
  // } else {
  //   return null;
  // }

  return <>MatchHighlight</>
};

export default MatchHighlightsRail;

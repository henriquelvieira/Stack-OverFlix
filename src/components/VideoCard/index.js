import React from 'react';
import { VideoCardContainer } from './styles';

import ModalVerticallyCentered from '../ModalVerticallyCentered';
import VideoIframeResponsive from '../VideoIframeResponsive';

function getYouTubeId(youtubeURL) {
  return youtubeURL
    .replace(
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
      '$7',
    );
}

function VideoCard({ videoTitle, videoURL, categoryColor }) {
  const image = `https://img.youtube.com/vi/${getYouTubeId(videoURL)}/hqdefault.jpg`;

  const [modalShow, setModalShow] = React.useState(false);

  function getYouTubeId(youtubeURL) {
    return youtubeURL
      .replace(
        /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
        '$7',
      );
  }

  return (
    <>
      <VideoCardContainer
        url={image}
        //href={videoURL}
        target="_blank"
        onClick={() => setModalShow(true)}
        style={{ borderColor: categoryColor || 'red' }}
        title={videoTitle}
      />

      <ModalVerticallyCentered
        show={modalShow}
        title={videoTitle}
        onHide={() => setModalShow(false)}
      >
        <VideoIframeResponsive
          youtubeID={getYouTubeId(videoURL)}
        />
      </ModalVerticallyCentered>
    </>
  );
}

export default VideoCard;

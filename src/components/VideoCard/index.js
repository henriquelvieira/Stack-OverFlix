import React from 'react';
import PropTypes from 'prop-types';
import { VideoCardContainer } from './styles';

import ModalVerticallyCentered from '../ModalVerticallyCentered';
import VideoIframeResponsive from '../VideoIframeResponsive';

import useModal from '../../hooks/useModal';

function VideoCard({ videoTitle, videoURL, categoryColor }) {
  const image = `https://img.youtube.com/vi/${getYouTubeId(videoURL)}/hqdefault.jpg`;

  const { modalShow, handleShow, handleHide } = useModal();

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
        target="_blank"
        onClick={() => handleShow()}
        style={{ borderColor: categoryColor || 'red' }}
        title={videoTitle}
      />

      <ModalVerticallyCentered
        show={modalShow}
        title={videoTitle}
        onHide={() => handleHide()}
      >
        <VideoIframeResponsive youtubeID={getYouTubeId(videoURL)} />

      </ModalVerticallyCentered>

    </>
  );
}

VideoCard.propTypes = {
  videoTitle: PropTypes.string.isRequired,
  videoURL: PropTypes.string.isRequired,
  categoryColor: PropTypes.string.isRequired,

};
export default VideoCard;

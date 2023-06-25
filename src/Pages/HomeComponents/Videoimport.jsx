import React from 'react'
import './HomeComponents.css'
export default function VideoImport () {
  return (
    <div className="video-container">
      <iframe
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/sclEVDcqWp0?start=2"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  )
}

import React from 'react'
import 'react-slideshow-image/dist/styles.css'

import { Fade } from 'react-slideshow-image'

export default function Imageslides () {
  const slideImages = [
    {
      url: 'https://cdn.pixabay.com/photo/2023/06/06/14/50/flower-8044860_1280.jpg',
      caption: 'first slide'
    },
    {
      url: 'https://cdn.pixabay.com/photo/2023/06/11/14/11/flowers-8056102_1280.jpg',
      caption: 'second slide'
    }
  ]

  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '400px',
    backgroundSize: 'cover'
  }
  const spanStyle = {
    fontsize: '20px',
    background: '#efefef',
    color: '#000000'
  }
  return (
        <>
        <Fade>
            {slideImages.map((image, index) => (
                <div key={index}>
                    <div style={{ ...divStyle, backgroundImage: `url(${image.url})` }}>
                        <span style={{ spanStyle }}>{image.caption}</span>
                    </div>
                </div>
            ))}
        </Fade>
        </>
  )
}

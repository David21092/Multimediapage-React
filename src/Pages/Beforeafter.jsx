/* eslint-disable react/prop-types */
import React from 'react'
import {
  ReactCompareSlider,
  ReactCompareSliderImage
} from 'react-compare-slider'
import '../css/Slider.css' // Import the CSS file

const Slider = ({ portrait, img1, img2 }) => {
  return (
    <div className="slider-container">
      <ReactCompareSlider
        portrait={portrait}
        itemOne={<ReactCompareSliderImage src={img1} />}
        itemTwo={<ReactCompareSliderImage src={img2} />}
        handle={<div className="slider-handle" />}
      />
    </div>
  )
}

export default Slider

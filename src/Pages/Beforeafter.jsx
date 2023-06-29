import React from 'react'
import { ReactCompareSlider } from 'react-compare-slider'

const ImageComparisonComponent = () => {
  return (
    <div>
      <h1>Image Comparisons</h1>

      {/* Normal 16:9 Images */}
      <div>
        <h2>Normal 16:9 Images</h2>
        <ReactCompareSlider
          leftImage="https://images.pexels.com/photos/12810384/pexels-photo-12810384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          rightImage="https://images.pexels.com/photos/15045156/pexels-photo-15045156/free-photo-of-licht-dammerung-sonnenuntergang-fashion.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          handleSize={20}
          handleColor="#ff0000"
        />
      </div>

      {/* Portrait Images */}
      <div>
        <h2>Portrait Images</h2>
        <ReactCompareSlider
          leftImage="/path/to/portrait/image1.jpg"
          rightImage="/path/to/portrait/image2.jpg"
          handleSize={20}
          handleColor="#ff0000"
        />
      </div>
    </div>
  )
}

export default ImageComparisonComponent

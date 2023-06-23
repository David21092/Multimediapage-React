import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import React from 'react'
import '../css/Home.css'
import clouds from '../images/CloudsandSun.png'
import mountains from '../images/Mountains.png'
import sea from '../images/Sea.png'
import sky from '../images/Sky.png'
import trees from '../images/Trees.png'
import Image1 from '../images/Image1.jpg'
import Navbar from '../components/Navbar'
import Welcometext from './HomeComponents/Welcometext'
import { Sliderdata } from './HomeComponents/Sliderdata.jsx'
import ImageSlider from './HomeComponents/Imageslider.jsx'

function Home () {
  return (
    <div style={{ backgroundColor: 'black' }}>

            <Parallax pages={5} style={{ top: '0', left: '0' }}>

                <ParallaxLayer sticky={{ start: 0, end: 1 }}>
                    <Navbar />
                </ParallaxLayer>
                <ParallaxLayer
                    offset={0}
                    speed={0.1}
                    style={{
                      backgroundImage: `url(${sky})`,
                      backgroundSize: 'cover'
                    }} />
                <ParallaxLayer
                    offset={0}
                    speed={0.45}
                    style={{
                      backgroundImage: `url(${sea})`,
                      backgroundSize: 'cover'

                    }} />

                <ParallaxLayer
                    offset={0}
                    speed={0.65}
                    style={{
                      backgroundImage: `url(${mountains})`,
                      backgroundSize: 'cover'

                    }} />
                <ParallaxLayer
                    offset={0}
                    speed={0.5}
                    style={{
                      backgroundImage: `url(${trees})`,
                      backgroundSize: 'cover'

                    }} />
                <ParallaxLayer
                    offset={0}
                    speed={1.4}
                    style={{
                      backgroundImage: `url(${clouds})`,
                      backgroundSize: 'cover'

                    }} />
                <ParallaxLayer
                    offset={0}
                    speed={1}
                    style={{

                    }} >
                    <h1 className='title'>Natural Aquatics</h1>
                </ParallaxLayer>
                <ParallaxLayer
                offset={1}
                speed={0.6}
                style={{
                  backgroundColor: 'black',
                  backgroundImage: `url(${Image1})`

                }}
                />
                <ParallaxLayer
                    offset={0.999}
                    speed={1}
                    style={{
                      backgroundColor: 'black'

                    }} >
                            <Welcometext />
                </ParallaxLayer>
                <ParallaxLayer
                    offset={1.999}
                    speed={1}
                    style={{
                      backgroundColor: 'black'

                    }} >
                            <ImageSlider slides={Sliderdata} />
                </ParallaxLayer>
            </Parallax>

        </div>
  )
}

export default Home

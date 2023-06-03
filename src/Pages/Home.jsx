import { Parallax, ParallaxLayer } from '@react-spring/parallax'

function Home() {
    return (
        <div>
            <Parallax pages={1} style={{ top: '0', left: '0' }}>
                <ParallaxLayer offset={0} speed={2.5}>
                    <div class="animation_layer" id="sky" />
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={2.5}>
                    <div class="animation_layer" id="sea" />
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={2.5}>
                    <div class="animation_layer" id="mountains" />
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={2.5}>
                    <div class="animation_layer" id="cloudsandsun" />
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={2.5}>
                    <div class="animation_layer" id="trees" />
                </ParallaxLayer>
            </Parallax>
        </div>
    );
}

export default Home;

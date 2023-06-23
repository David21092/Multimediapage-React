import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import React from 'react'
import '../css/Home.css'
import clouds from '../images/CloudsandSun.png'
import mountains from '../images/Mountains.png'
import sea from '../images/Sea.png'
import sky from '../images/Sky.png'
import trees from '../images/Trees.png'
import Navbar from '../components/Navbar'
function Home () {
  return (
        <div>

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
                    offset={0.9999999999999}
                    speed={1}
                    style={{
                      backgroundColor: 'black'

                    }} >
                    <section id="test2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, explicabo ipsam. Repudiandae repellat repellendus impedit, temporibus illum non suscipit voluptas et alias dignissimos laboriosam excepturi consequuntur animi pariatur debitis, sapiente autem! Quibusdam tempore harum repudiandae corrupti numquam rem repellat laudantium beatae! Consequatur, quas! Itaque fuga nisi deleniti, sunt, enim rem cumque inventore sequi praesentium deserunt corporis voluptas eveniet iure tenetur soluta earum saepe consequuntur iste! Neque odio aperiam dolorum aliquam, praesentium hic quis, laborum repudiandae voluptas suscipit cumque accusantium. Est, qui aliquam, temporibus non neque laudantium odio nam dolores ipsum facilis aperiam eveniet necessitatibus recusandae, minima quos provident ab? Eaque aspernatur quam eveniet aut fugit harum alias reiciendis ullam saepe labore magni vitae, deserunt, eum voluptas similique at iste, id nam. Possimus tenetur deleniti laborum dolorum. Dolore provident rerum hic, porro dignissimos ipsum repellendus commodi! A deserunt molestias minus molestiae, rerum placeat ullam aperiam non unde debitis sint accusamus? Reprehenderit, fugit voluptatibus? Provident vero corporis, sit dolor rem accusantium mollitia quo, aspernatur cumque incidunt unde vitae dolorum quos distinctio, iure voluptatibus id. Fugit at, vitae sapiente nam molestias deleniti mollitia odio, hic harum iusto eos cumque possimus aliquid tempora repudiandae exercitationem, maiores ducimus animi placeat dolor! Deserunt vero vel atque fugiat. Natus exercitationem ea quis consectetur necessitatibus sapiente nihil nam minima debitis aut? Nulla magni enim ducimus natus aspernatur totam molestias cupiditate repellendus eveniet eligendi consequuntur fugiat fugit nobis exercitationem explicabo maiores, accusantium dolore quam deleniti dicta illum quas numquam delectus? Sapiente maxime dolorem nam voluptate ex eum facilis. Ducimus vero nobis quod unde, minima, alias repudiandae accusantium earum voluptatibus quibusdam accusamus doloribus, dolore inventore delectus. Voluptate ullam debitis maiores, veritatis magni earum voluptates totam? Reiciendis, in libero commodi facilis, aliquid dolor maxime necessitatibus repellat tenetur odio eos id exercitationem, vero consequatur aut dolorem amet neque. Delectus praesentium eius provident!
                    </section>
                </ParallaxLayer>
                <ParallaxLayer
                offset={1}
                speed={1}
                style={{
                }}>
                    <section id="test2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, explicabo ipsam. Repudiandae repellat repellendus impedit, temporibus illum non suscipit voluptas et alias dignissimos laboriosam excepturi consequuntur animi pariatur debitis, sapiente autem! Quibusdam tempore harum repudiandae corrupti numquam rem repellat laudantium beatae! Consequatur, quas! Itaque fuga nisi deleniti, sunt, enim rem cumque inventore sequi praesentium deserunt corporis voluptas eveniet iure tenetur soluta earum saepe consequuntur iste! Neque odio aperiam dolorum aliquam, praesentium hic quis, laborum repudiandae voluptas suscipit cumque accusantium. Est, qui aliquam, temporibus non neque laudantium odio nam dolores ipsum facilis aperiam eveniet necessitatibus recusandae, minima quos provident ab? Eaque aspernatur quam eveniet aut fugit harum alias reiciendis ullam saepe labore magni vitae, deserunt, eum voluptas similique at iste, id nam. Possimus tenetur deleniti laborum dolorum. Dolore provident rerum hic, porro dignissimos ipsum repellendus commodi! A deserunt molestias minus molestiae, rerum placeat ullam aperiam non unde debitis sint accusamus? Reprehenderit, fugit voluptatibus? Provident vero corporis, sit dolor rem accusantium mollitia quo, aspernatur cumque incidunt unde vitae dolorum quos distinctio, iure voluptatibus id. Fugit at, vitae sapiente nam molestias deleniti mollitia odio, hic harum iusto eos cumque possimus aliquid tempora repudiandae exercitationem, maiores ducimus animi placeat dolor! Deserunt vero vel atque fugiat. Natus exercitationem ea quis consectetur necessitatibus sapiente nihil nam minima debitis aut? Nulla magni enim ducimus natus aspernatur totam molestias cupiditate repellendus eveniet eligendi consequuntur fugiat fugit nobis exercitationem explicabo maiores, accusantium dolore quam deleniti dicta illum quas numquam delectus? Sapiente maxime dolorem nam voluptate ex eum facilis. Ducimus vero nobis quod unde, minima, alias repudiandae accusantium earum voluptatibus quibusdam accusamus doloribus, dolore inventore delectus. Voluptate ullam debitis maiores, veritatis magni earum voluptates totam? Reiciendis, in libero commodi facilis, aliquid dolor maxime necessitatibus repellat tenetur odio eos id exercitationem, vero consequatur aut dolorem amet neque. Delectus praesentium eius provident!
                    </section>
                </ParallaxLayer>
            </Parallax>

        </div>
  )
}

export default Home

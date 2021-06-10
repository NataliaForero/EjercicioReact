import React from 'react'
import '../utils/CSS/Footer.estilos.css'
import image1 from '../utils/images/image1.jpg'
function Footer(){
    return(

        <div className="container_Footer">
            <div className="ContainerText">
            <h1> Pintura llamada el beso </h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, maxime officiis libero consectetur magnam doloremque tenetur? Vel dolores atque voluptas, consequatur reprehenderit temporibus voluptatem.
            </p>
            </div>
            <div className="ContainerImage">
            <img id="image1" src={image1} alt="hola esta es la imagen 1"/>
            </div>
        </div>
    )
}
export default Footer

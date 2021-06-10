import React from 'react'
import '../utils/CSS/Cuerpo.estilos.css'
import image3 from '../utils/images/image3.jpg'
function Cuerpo() {
    return(
        <div class="contenedor_cuerpo">
            <div className="ContainerText"> 
                <h1> Este es un diablo haciendo surf  </h1>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque dolor minus quam expedita quo voluptatibus et laboriosam ullam dolore.
                </p>
            </div>
            <div className="ContainerImage">
            <img src={image3} alt="hola esta es la imagen 3"/>
            </div>
        </div>
    )
}
export default Cuerpo




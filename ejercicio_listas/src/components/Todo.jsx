import React from 'react'
import '../utils/CSS/Todo.estilos.css'
import image2 from '../utils/images/image2.jpg'
function Todo() {
    return (
        <div className="container_Cabecera">
            <div className="ContainerText">
                 <h1>Esta es una chica en una flor </h1>
                 <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis perspiciatis doloribus mollitia eos! molestias blanditiis laborum incidunt non quia. Id, totam!
                 </p>
            </div>
            <div className="ContainerImage">
                <img id="image1" src={image2} alt="hola este es"/>
            </div>
        </div>
    )
}
export default Todo
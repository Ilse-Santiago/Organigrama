import { useState } from "react";
import "./MiOrg.css"

const MiOrg = (props) =>{
    //const [nombreVariable,funcion(nuevoValorActualizado)] = useState("valorInicialVariable")
    //useState es como una caja que guarda el valor de una variable, hasta que la funcion sea llamada 
    //y se haya indicado el nuevo valor
    //console.log(props);
    return <section className="orgSection">
        <h3 className="title">Mi Organigrama</h3>
        <img src="/img/add.png" alt='add' onClick={props.cambiarMostrar}/>
</section>
}

export default MiOrg
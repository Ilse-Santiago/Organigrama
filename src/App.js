import { useState } from 'react';
import { v4 as uuid} from 'uuid';
import './App.css';
import Header from './componentes/Header/Header.js';
import Formulario from './componentes/Formulario/Formulario.js';
import MiOrg from './componentes/MiOrg'
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';

function App() {
  const [mostrarFormulario,actualizarMostrar] = useState(false);
  const [colaboradores,actualizarColaboradores] = useState ([{
    id: uuid(),
    equipo:"Front End",
    foto:"http://github.com/ilse-santiago.png",
    nombre:"Boopsy",
    puesto:"Becaria",
    fav:true,
  },
  {
    id: uuid(),
    equipo:"Móvil",
    foto:"http://github.com/ilse-santiago.png",
    nombre:"Ilse",
    puesto:"Ama de casa",
    fav:false,
  },
  {
    id: uuid(),
    equipo:"UX y Diseño",
    foto:"http://github.com/ilse-santiago.png",
    nombre:"Ilse Santiago",
    puesto:"Estudiante",
    fav:false,
  },
  {
    id: uuid(),
    equipo:"Programación",
    foto:"http://github.com/ilse-santiago.png",
    nombre:"Boopsy",
    puesto:"Cantante",
    fav:true,
  },
  {
    id: uuid(),
    equipo:"Programación",
    foto:"http://github.com/ilse-santiago.png",
    nombre:"Alejandra",
    puesto:"Contadora",
    fav:false,
  }]);

  const [equipos,actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo:"Programación",
      colorPrimario:"#57C278",
      colorSecundario:"#D9F7E9"
    },
    {
      id: uuid(),
      titulo:"Front End",
      colorPrimario:"#82CFFA",
      colorSecundario:"#E8F8FF"
    },
    {
      id: uuid(),
      titulo:"Data Science",
      colorPrimario:"#A6D157",
      colorSecundario:"#F0F8E2"
    },
    {
      id: uuid(),
      titulo:"Devops",
      colorPrimario:"#E06B69",
      colorSecundario:"#FDE7E8"
    },
    {
      id: uuid(),
      titulo:"UX y Diseño",
      colorPrimario:"#DB6EBF",
      colorSecundario:"#FAE9F5"
    },
    {
      id: uuid(),
      titulo:"Móvil",
      colorPrimario:"#FFBA05",
      colorSecundario:"#FFF5D9"
    },
    {
      id: uuid(),
      titulo:"Innovación y Gestión",
      colorPrimario:"#FF8A29",
      colorSecundario:"#FFEEDF"
    }
  ])
    
  //Ternario --> condicion ? seMuestra : noSeMuestra
  // condicion && seMuestra

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  //Registrar Colaborador 
  const registrarColaborador = (colaborador)=>{
    console.log("Nuevo Colaborador",colaborador)
    //Spread Operator... Se copian valores actuales y después se agregan valores nuevos
    actualizarColaboradores([...colaboradores,colaborador])
  }

  //Actualizar Color
  const actualizarColor = (color, id) =>{
    console.log("Actualizar: ",color,id)
    const equiposActualizados = equipos.map((equipo) => {
      if(equipo.id === id){
        equipo.colorPrimario = color
      }
      return equipo
    })
    actualizarEquipos(equiposActualizados)
  }

  //Eliminar Colaborador
  const eliminarColaborador = (id) => {
    console.log("Eliminar Colaborador",id);
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id )
    actualizarColaboradores(nuevosColaboradores);
  }

  //Crear equipo
  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo);
    actualizarEquipos([...equipos, {...nuevoEquipo, id:uuid}])
  }

  //Dar like - Resaltar Colaboradores Favoritos
  const like = (id) => {
    console.log("like",id);
    const colaboradoresActualizados = colaboradores.map((colaborador)=>{
      if(colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador 
    })

    actualizarColaboradores(colaboradoresActualizados)
  }

  return (
    <div>
      <Header/>
      {
        //Ternario {mostrarFormulario ? <Formulario /> : <></>}
        mostrarFormulario && <Formulario 
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador = {registrarColaborador}
          crearEquipo = {crearEquipo}
        />
      }
      <MiOrg cambiarMostrar={cambiarMostrar}/>
      {
        equipos.map((equipo)=> <Equipo 
          datos={equipo} 
          key={equipo.titulo}
          colaboradores = {colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)} 
          eliminarColaborador = {eliminarColaborador}
          actualizarColor = {actualizarColor}
          like={like}
        />
        )
      }
      <Footer />
      
    </div>
  );
}

export default App;

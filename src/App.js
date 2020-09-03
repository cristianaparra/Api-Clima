import React, { Fragment, useState, useEffect } from 'react';
import Header from './component/Header'
import Formulario from './component/Formulario'
import Clima from './component/Clima'

function App() {

  const [busqueda, guardarBusqueda] = useState({
    ciudad: '',
    pais: ''
  });
  const [consultar, guardarConsultar] = useState(false)
  const [resultado, guardarResultado] = useState({})

  const { ciudad, pais } = busqueda;

  useEffect(() => {
    const consultarAPI = async () => {

      if (consultar) {

        const appId = '0168c8e646061d3efc41aac0d32bcfe8';
        const url = ` http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();

        guardarResultado(resultado)
        guardarConsultar(false)
      }
    }
    consultarAPI()

  }, [consultar])

  return (
    <Fragment>
      <Header
        titulo='Clima'
      />
      <div className='contenedor-form'>
        <div className='container'>
          <div className='row'>

            <div className='col m6 s12'>
              <Formulario
                busqueda={busqueda}
                guardarBusqueda={guardarBusqueda}
                guardarConsultar={guardarConsultar}
              />
            </div>
            <div className='col m6 s12'>
              <Clima
              resultado={resultado} />
            </div>
          </div>

        </div>
      </div>
    </Fragment>

  );
}

export default App;

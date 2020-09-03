import React, { Fragment, useState, useEffect } from 'react';
import Header from './component/Header'
import Formulario from './component/Formulario'
import Clima from './component/Clima'
import Error from './component/Error'

function App() {

  const [busqueda, guardarBusqueda] = useState({
    ciudad: '',
    pais: ''
  });
  const [consultar, guardarConsultar] = useState(false)
  const [error, guardarError] = useState(false)
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

        //deterctor de errores de fetch

        if (resultado.cod === '404') {
          guardarError(true);
        } else {
          guardarError(false);
        }

      }
    }
    consultarAPI()
// eslint-disable-next-line
  }, [consultar]);

  let componente;
  
  if (error) {
    componente = <Error mensaje='No hay resultado' />
  } else {
    componente = <Clima resultado={resultado} />
  }

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
              {componente}
            </div>
          </div>

        </div>
      </div>
    </Fragment>

  );
}

export default App;

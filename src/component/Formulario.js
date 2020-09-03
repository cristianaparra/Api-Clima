import React, { useState } from 'react';
import Error from './Error'
import PropTypes from 'prop-types'

const Formulario = ({busqueda, guardarBusqueda, guardarConsultar}) => {

   
    const [error, guardarError] = useState(false);
    // extraer ciuda pais
    const { ciudad, pais } = busqueda;

    //saca los datos a el state
    const handeChange = e => {
        // actualizar state
        guardarBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();

        //validar

        if (ciudad.trim() === '' || pais.trim() === '') {
            guardarError(true)
            return;
        }
        guardarError(false)

        //pasarlo al componente pricnipal
        guardarConsultar(true)

    }


    return (
        <form
            onSubmit={handleSubmit}
        >
            {error ? <Error mensaje='ambos campos tienen que estar completos'/ >: null}
            <div className='input-field col s12'>
                <input
                    type='text'
                    name='ciudad'
                    id='ciudad'
                    value={ciudad}
                    onChange={handeChange}
                />
                <label htmlFor='ciudad'>Ciudad: </label>
            </div>

            <div className='input-field col s12'>
                <select
                    name='pais'
                    id='pais'
                    value={pais}
                    onChange={handeChange}
                >
                    <option value=''>-- Seleccione un Pais --</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                    <option value="CL">Chile</option>
                </select>
                <label htmlFor='pais'>Pais: </label>
            </div>
            <div className='input-field col s12 '>
                <input
                type='submit'
                value='buscar clima'
                className='waves-effect waves-light btn-large btn-block yellow accent-4'/>
            </div>
        </form>
    );
}


Formulario.propTypes = {
    busqueda: PropTypes.object.isRequired,
    guardarBusqueda: PropTypes.func.isRequired,
    guardarConsultar: PropTypes.func.isRequired
    
    
}
export default Formulario;
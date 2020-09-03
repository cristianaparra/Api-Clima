import React, { useState } from 'react';

const Formulario = () => {

    const [busqueda, guardarBusqueda] = useState({
        ciudad: '',
        pais: ''
    });

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

    return (
        <form>
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
        </form>
    );
}

export default Formulario;
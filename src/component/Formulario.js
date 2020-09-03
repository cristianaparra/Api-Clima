import React from 'react';

const Formulario = () => {
    return ( 
        <form>
            <div className='input-field col s12'>
                <input
                type='text'
                name='ciudad'
                id='ciudad'
                />
                <label htmlFor='ciudad'>Ciudad: </label>
            </div>

            <div className='input-field col s12'>
                <select
                name='pais'
                id='pais'
                >
                    <option value=''>-- Seleccione un Pais --</option>
                </select>
                <label htmlFor='pais'>Pais: </label>
            </div>
        </form>
     );
}
 
export default Formulario;
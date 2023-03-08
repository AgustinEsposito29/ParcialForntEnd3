import {React, useState} from 'react'
import './styles/Formulario.css'

// Importamos Card
import Card from './Card';

export default function Formulario() {

    //Estado Iniciales
    const INITIAL_ERROR_STATE = true;

    const INITIAL_USER_STATE = {
        nombre: '',
        color: ''
    };

    // Estados
    const [errorState, setErrorState] = useState(INITIAL_ERROR_STATE);
    const [usuario, setUsuario] = useState(INITIAL_USER_STATE);

    // Event hanldres
    const handleOnSubmit = (e) => {
        e.preventDefault();
        if(!validarNombre(usuario.nombre) || !validarColor(usuario.color)){
            alert('Por favor chequea que la información sea correcta')
            return false;
        }
        setErrorState(false)
        return
    }

    const hanldeOnChangeColor = (e)=>{
        console.log(e.target.value)
        setUsuario({...usuario, color: e.target.value});
    }

    const hanldeOnChangeNombre = (e) =>{
        console.log(e.target.value)
        setUsuario({...usuario, nombre: e.target.value});
    }

    //Validaciones
    const validarNombre = (nombre)=> nombre.length >= 3 && !nombre.startsWith(" ");
    const validarColor = (color) => color.length  >= 6;

  return (
    <div>
            <form class='formulario' onSubmit={handleOnSubmit}>
                <label htmlFor='nombre'>Ingrese su nombre</label>
                <input type="text" name="nombre" id="nombre" onChange={hanldeOnChangeNombre} value={usuario.nombre}/>
                <label htmlFor="color">Ingrese su color favoritio (Formato HEX)</label>
                <input type="text" name="color" id="color" onChange={hanldeOnChangeColor} value={usuario.color}/>
                <button type='submit'>Enviar</button>
            </form>
            {(usuario.nombre === '' && usuario.color === '' ) || errorState ?  null : <Card nombre={usuario.nombre} color={usuario.color}/>}
    </div>
  )
}

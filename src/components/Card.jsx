import React from 'react'

export default function Card({nombre, color}) {
  return (
    <div>
        <div className="header">
            <h1>Bienvenido {nombre}</h1>
        </div>
        <div className="body">
            <p>Su color favorito es: {color} !</p>
        </div>
    </div>
  )
}

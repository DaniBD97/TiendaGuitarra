import React from 'react'
import { getGuitarra } from '../models/guitarras.server'
import { useLoaderData } from '@remix-run/react'
import styles from '~/styles/guitarras.css'

export function links() {
  return [

    {
      rel: 'stylesheet',
      href: styles,

    },
  ]
}


export async function loader({ params }) {

  const { url } = params
  const guitarra = await getGuitarra(url)

  if (guitarra.data.length === 0) {
    throw new Response('', {
      status: 404,
      statusText: 'Guitarra no Encontrada'
    })
  }

  return guitarra

}


export function meta({ data }) {

  if (!data) {
    return {
      title: 'Guitarra no Encontrada',
      descripcion: `Guitarras, Venta de guitarra, Guitarra ${data.data[0].attributes.nombre}`
    }
  }

  return (
    [
      { charset: 'utf-8' },
      { title: `GuitarLA - ${data.data[0].attributes.nombre}` },
      { description: `Guitarras, Venta de guitarra, Guitarra ${data.data[0].attributes.nombre}` }
    ]
  )
}








function Guitarra() {

  const guitarra = useLoaderData()
  const { nombre, descripcion, imagen, precio } = guitarra.data[0].attributes
  // console.log(guitarra.data[0].attributes.nombre)

  return (
    <div className='contenedor guitarra'>
      <img className='imagen' src={imagen.data.attributes.url} alt={`Imagen de la guitarra ${nombre}`} />

      <div className='contenido'>
        <h1 className='titulo' > {nombre}</h1>
        <p className='texto'>{descripcion}</p>
        <p className='precio'>${precio}</p>

      </div>

    </div>
  )
}

export default Guitarra

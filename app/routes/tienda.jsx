import React from 'react'
import { getGuitarras } from '../models/guitarras.server'
import { useLoaderData } from '@remix-run/react'
import Guitarra from '../components/guitarra'
import styles from '~/styles/guitarras.css'




export function meta(){
  return(
    [
      {charset: 'utf-8'},
      {title: 'GuitarLA - Tienda'},
      {viewport: "width=device-width, initial-scale=1"}
    ]
  )
}


export function links() {
  return [

    {
      rel: 'stylesheet',
      href: styles,

    },
  ]
}

export async function loader() {
  //se le agrega el ?populate=imagen para que carge las imagenes
  const guitarras = await getGuitarras()

  return guitarras.data
}





function Tienda() {
  const guitarras = useLoaderData()



  return (


    <main className='contenedor'>
      <h2 className='heading'>Coleccion</h2>

      {guitarras?.length && (
        <div className='guitarras-grid'>
          {guitarras.map(guitarra => (
            <Guitarra
              key={guitarra?.id}
              guitarra={guitarra?.attributes}

            />

          ))

          }
        </div>
      )}
    </main>
  )
}

export default Tienda

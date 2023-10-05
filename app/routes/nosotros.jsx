import { Links, Meta } from '@remix-run/react'
import React from 'react'
import imagen from '../../public/img/nosotros.jpg'
import styles from '~/styles/index.css'


export function meta(){
  return(
    [
      {charset: 'utf-8'},
      {title: 'GuitarLA - Nosotros'},
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


function Nosotros() {
  return (
    <main className='contenedor nosotros'>
      <h2 className='heading'>Nosotros</h2>

      <div className='contenido'>
        <img src={imagen} alt="Imagen" />

        <div className='Parrafos'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
            ratione totam? Distinctio ea quae harum error in magni doloribus placeat minus iusto,
            tempore dolore doloremque obcaecati tenetur, dignissimos vitae eum.
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
            ratione totam? Distinctio ea quae harum error in magni doloribus placeat minus iusto,
            tempore dolore doloremque obcaecati tenetur, dignissimos vitae eum.
          </p>
        </div>
      </div>
    </main>
  )
}

export default Nosotros

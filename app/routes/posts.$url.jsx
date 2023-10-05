import React from 'react'
import { getPost } from '../models/posts.server'
import { useLoaderData} from '@remix-run/react'
import { formatearFecha } from '~/utils/helpers'
import styles from '~/styles/blog.css'

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
    const post = await getPost(url)



    return post

}






function Post() {
    const post = useLoaderData()
    const { contenido, imagen, titulo, publishedAt } = post.data[0].attributes
    // console.log(guitarra.data[0].attributes.nombre)

    return (
        <div className='contenedor post'>
            <img className='imagen-url' src={imagen.data.attributes.formats.medium.url} alt={`Imagen de la guitarra ${titulo}`} />

            <div className='contenido'>
                <h1 className='titulo' > {titulo}</h1>
                <p className='fecha'>{formatearFecha(publishedAt)}</p>
                <p className='resumen-url'>{contenido}</p>


            </div>

        </div>
    )
}

export default Post

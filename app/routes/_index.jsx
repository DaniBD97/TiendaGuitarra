import React from 'react'
import { getGuitarras } from '~/models/guitarras.server'
import { getPosts } from '../models/posts.server'
import { useLoaderData } from '@remix-run/react'
import ListadoGuitarras from '../components/listado-guitarra'
import ListadoPost from '../components/listado-posts'
import styles from '~/styles/guitarras.css'
import stylesBlog from '~/styles/blog.css'

export function meta() {

}

export function links() {
  return [

    {
      rel: 'stylesheet',
      href: styles,

    },
    {
      rel: 'stylesheet',
      href: stylesBlog,

    },
  ]
}

export async function loader() {


  const [guitarras, posts] = await Promise.all([

    getGuitarras(),
    getPosts()

  ])


  console.log(guitarras)


  console.log(posts)

  return {

    guitarras: guitarras.data,
    posts: posts.data
  }
}

function Index() {

  const { guitarras, posts } = useLoaderData()

  console.log(guitarras)
  console.log(posts)
  return (
    <>
      <main className='contenedor'>
       <ListadoGuitarras
       
        guitarras={guitarras}
       
       >

       </ListadoGuitarras>
      </main>

      <section className='contenedor'>
        <ListadoPost
          posts={posts}
        >

        </ListadoPost>
      </section>

    </>
  )
}

export default Index

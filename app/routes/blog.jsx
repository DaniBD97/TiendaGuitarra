import React from 'react'
import { getPosts } from '../models/posts.server'
import Post from '../components/post'
import { useLoaderData } from '@remix-run/react'
import styles from '~/styles/blog.css'



export function links(){
  return[
   
    {
      rel: 'stylesheet',
      href: styles,
      
    },
  ]
}

export async function loader() {


  const posts = await getPosts()

  // if (guitarra.data.length === 0) {
  //   throw new Response('', {
  //     status: 404,
  //     statusText: 'Guitarra no Encontrada'
  //   })
  // }

  return posts.data

}


function Blog() {
  const posts = useLoaderData()


  return (
    <main className='contenedor'>
      <h2 className='heading'>Blog</h2>
      <div className='blog'>
        {posts.map(post => (
          <Post
            key={post.id}
            post={post.attributes}

          />

        ))}
      </div>
    </main>
  )
}

export default Blog

import{

    Meta,
    Links,
    Outlet,
    Scripts,
    LiveReload,
    useCatch,
    Link,
    useRouteError,
    isRouteErrorResponse


} from '@remix-run/react'

import styles from '~/styles/index.css'
import Header from '~/components/header'
import Footer from './components/footer'

export function meta(){
  return(
    [
      {charset: 'utf-8'},
      {title: 'GuitarLA'},
      {viewport: "width=device-width, initial-scale=1"}
    ]
  )
}




export function links(){
  return[
   
    {
      rel: 'stylesheet',
      href: styles,
      
    },
  ]
}

export default function App() {
  return (
    <Document>
      <Outlet/>
    </Document>

  );
}


function Document({ children }) {
  return (
    <html lang="es">

      <head>
        <Meta/>
        <Links/>
      </head>
      <body>
        <Header/>
        {children}
        <Footer/>
        <Scripts/>
        <LiveReload/>
      </body>

    </html>
  )

}


export function ErrorBoundary(){
  const error = useRouteError()

  if(isRouteErrorResponse(error)){
    return(
      <Document>
          <p className='error'>{error.status}{error.statusText}</p>
          <Link className='error-enlace' to="/" >Talvez quieras volver a la pagina principal</Link>
      </Document>
  
    )
  }

  

}

// export function ErrorBoundary({error}){
//   return(
//     <Document>
//       <p className='Error'>{error.status}{error.statusText}</p>
//       <Link to="/" >Talvez quieras volver a la pagina principal</Link>


//     </Document>

//   )
// }
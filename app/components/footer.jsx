import React from 'react'
import {Link, useLocation} from '@remix-run/react'


function Footer() {
    const location = useLocation()
    return (
        <footer className='footer'>
            <div className='contenedor contenido'>

                <nav className='navegacion'>
                    <Link
                        to="/"
                        className={location.pathname === '/' ? 'active' : ''}>
                        Inicio
                    </Link>
                    <Link
                        to="/nosotros"
                        className={location.pathname === '/nosotros' ? 'active' : ''}>
                        Nosotros
                    </Link>
                    <Link
                        to="/blog"
                        className={location.pathname === '/blog' ? 'active' : ''}>
                        Blog
                    </Link>
                    <Link
                        to="/tienda"
                        className={location.pathname === '/tienda' ? 'active' : ''}>
                        Tienda
                    </Link>
                </nav>

                <p className='copyright'>Todos los Derechos Reservados {new Date().getFullYear()}</p>


            </div>

        </footer>
    )
}

export default Footer

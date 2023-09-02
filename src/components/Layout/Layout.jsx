import React from 'react'
import Navbar from './Navbar'
function Layout(props) {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main className='px-[15%]  '>{props.children} </main>
            <footer className='px-[15%]  text-center w-full h-12 m'>
                <p className='mt-24'>Copyright 2023 Dev Mo </p>
            </footer>
        </>
    )
}

export default Layout
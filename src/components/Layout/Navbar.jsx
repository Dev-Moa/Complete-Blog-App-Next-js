import React from 'react'
import Link from 'next/link'
function Navbar() {
    return (
        <div className='bg-gray-900 text-white flex justify-between px-[15%] font-bold py-[5%]'>
            <h1 className=''>
                <Link href='/'>Dev Mo</Link>
            </h1>
            <ul className='space-x-5'>
                <Link href='/posts/'> All Posts </Link>
                <Link href='/contact'> Contact </Link>
            </ul>


        </div>
    )
}

export default Navbar
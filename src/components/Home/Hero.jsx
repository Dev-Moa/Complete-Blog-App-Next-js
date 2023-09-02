
import React from 'react'
import Dev from "@/assets/devmo.jpg"
function Hero() {
    return (
        <>
            <div className='my-12 flex flex-col  gap-5 items-center'>
                <img className='rounded-full ' src={Dev} alt='Dev mo' />
                <h1 className='font-bold text-4xl'>Dev Moha</h1>
                <p>
                    I blog about web development - Especially front end frameworks like Next js
                </p>
            </div>

        </>
    )
}

export default Hero

import React, { useRef } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { headers } from '../../next.config'

function Contact() {

    const nameRef = useRef()
    const emailRef = useRef()
    function handleSubmit(e) {
        e.preventDefault()

        //data
        const enteredName = nameRef.current.value
        const enteredEmail = emailRef.current.value

        //object
        const data = {
            name: enteredName,
            email: enteredEmail
        }

        //send data 
        const url = "http://127.0.0.1:8000/"
        fetch(url, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((response) => response.json())
            .catch((error) => console.error("Error:", error));

    }
    return (
        <div className='my-12'>
            <form className='space-y-6' onSubmit={handleSubmit}>
                {/* name */}
                <Label htmlFor="name">Name</Label>
                <Input ref={nameRef} type="text" />
                {/* email */}
                <Label htmlFor="email">Email</Label>
                <Input ref={emailRef} type="email" />
                <Button className="float-right">Send</Button>
            </form>
        </div>
    )
}

export default Contact
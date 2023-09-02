import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
function SinglePost() {
    const router = useRouter()
    const postId = router.query.id

    const [post, setPost] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    // api

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setPost(data)
            })
            .catch((error) => setError(error))
    }, [])

    //error
    if (error) {
        return <p>Error occured</p>
    }
    //loading
    if (loading) {
        return <p> Loading ... </p>
    }
    return (
        <div className='bg-slate-200 py-3 rounded px-5 my-5'>
            <h1 className='text-2xl font-bold my-6'>{post.title}</h1>
            <p> {post.body} </p>
            <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias aliquam ut officiis sit cumque, dolor enim pariatur blanditiis sapiente autem nesciunt accusantium error saepe ipsum. Nisi accusantium dicta distinctio esse. </p>
            <Button className="float-right my-12">
                <Link href="/posts">Go Back </Link>
            </Button>
        </div>
    )
}

export default SinglePost
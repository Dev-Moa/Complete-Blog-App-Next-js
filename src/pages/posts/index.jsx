import PostsList from '@/components/Post/PostsList'
import React, { useEffect, useState } from 'react'

function PostsPage() {

    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    useEffect(() => {
        const url = "https://jsonplaceholder.typicode.com/posts"
        fetch(url)
            .then((response) => response.json())
            .then((data) => setPosts(data))
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
        <div>
            <h1 className='text-center text-3xl font-bold my-12'>All Posts Page</h1>

            <PostsList posts={posts} number={"25"} />
        </div>
    )
}

export default PostsPage
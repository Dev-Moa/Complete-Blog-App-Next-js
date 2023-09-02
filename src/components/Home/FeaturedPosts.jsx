import React, { useEffect, useState } from 'react'
import PostsList from '../Post/PostsList'
function FeaturedPosts() {
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
            <h1>Featured Post</h1>
            <PostsList posts={posts} number={6} />
        </div>
    )
}

export default FeaturedPosts
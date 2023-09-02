import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from '../ui/button'
import Link from 'next/link'
function PostsList(props) {
    const { posts, number } = props
    if (!posts || posts.length === 0) {
        return <p>No posts available</p>;
    }
    return (
        <ul className=''>
            {posts.slice(0, number).map((post) => (
                <Card key={post.id} className="my-5 bg-slate-200">

                    {/* header */}
                    <CardHeader>
                        <CardTitle> {post.title} </CardTitle>
                        <CardDescription> {post.body} </CardDescription>
                    </CardHeader>
                    {/* content */}
                    {/* footer */}
                    <CardFooter className=" ">
                        <div className='w-full'></div>
                        <div className='w-1/2'>
                            <Button className="float-right" >
                                <Link href={`http://localhost:3000/posts/${post.id}`}>Read More </Link>
                            </Button>
                        </div>
                    </CardFooter>
                </Card>
            ))}
        </ul>
    )
}





export default PostsList
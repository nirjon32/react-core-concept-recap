import {  useEffect,useState } from 'react'
import Post from './post'
export default function Posts(){

    const [posts,setPosts]= useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
       .then(response=>response.json())
       .then(data=>setPosts(data))
    },[])
    return(

        <div>
            
                 {posts.map(post=>(
                    <Post posts={post}></Post>          
                 ))}
                
            
        </div>
    )
}
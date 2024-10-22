import {  useEffect,useState } from 'react'
import './post.css'
export default function Post({posts}){

   
    return(

        <div className='post'>
            
           
               <h3>{posts.title}</h3> 
                <p>{posts.body}</p>    
                
            

        </div>
    )
}
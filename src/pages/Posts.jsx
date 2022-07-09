import React, { useState, useEffect } from 'react'
import { Link,useSearchParams } from 'react-router-dom';


function Posts() {
  const [posts, setPosts] = useState([])
  const [searchParams,setSearchParams] = useSearchParams()

  const searchQuery = searchParams.get('post') || ''

  useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts?_limit=30')
          .then(res => res.json()
              .then(data => setPosts(data)))
  }, []);


 const handleSubmit = (e)=>{
   e.preventDefault();
   const form = e.target 
   const query = form.search.value
   setSearchParams({post: query})
 }

  return (
    <div className='page bg-dark'>
      <form onSubmit={handleSubmit}>
      <input type="text" name="search"/>
      <input type="submit" value="search"/>
      </form>
      <h1 className='text-center text-white'>Posts</h1>
      
      {
        
      posts.filter(
        post=>post.title.includes(searchQuery)
      ).map(post=>(
<Link key={post.id} to={`/posts/${post.id}`} >
  <li className='p-2 list-item  text-white'>{post.title}</li></Link>
           ))
  }</div>
  )
}

export default Posts
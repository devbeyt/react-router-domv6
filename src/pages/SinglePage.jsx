import React,{useState,useEffect} from 'react'
import {Link, useParams,useNavigate} from 'react-router-dom'

function SinglePage() {
  const [post,setPost] = useState(null)
  const {postId} = useParams();
  const navigate = useNavigate()

  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(response=>response.json()
    .then(data=>setPost(data)))
  },[postId])

  const goback = () => navigate(-1)

  return (
    <div >

      <button onClick={goback} className="btn btn-warning border border-0 m-4">go back</button>
    {
      post && (
       <div className='page '>
        <div className="intro border border-3 m-4">
        <h1 className='text-success'>{post.title}</h1>
        <p className='text-danger'>{post.body}</p>
        <Link to={`/posts/${postId}/edit`} className="btn btn-primary">Edit</Link>
        </div>
       </div>
      )
    }
    </div>
  )
}

export default SinglePage
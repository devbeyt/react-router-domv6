import React from 'react'
import {useParams} from 'react-router-dom'

function EditPost() {

    const {postId} = useParams()
  return (
    <div  className='linkSize page'>EditPost {postId}</div>
  )
}

export default EditPost
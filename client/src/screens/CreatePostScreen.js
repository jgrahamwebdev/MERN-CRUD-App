
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { listPostDetails, updatePost } from '../actions/postActions'
import Message from '../components/Message'
import Loader from '../components/Loader'


const CreatePostScreen = () => {
    const { id } = useParams(); 
    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [date, setDate] = useState('')
    const [description, setDescription] = useState('')

    const postDetails = useSelector((state) => state.postDetails)
    const { loading, error, post } = postDetails

    const postUpdate = useSelector((state) => state.postUpdate)
    const {
      loading: loadingUpdate,
      error: errorUpdate,
      success: successUpdate,
    } = postUpdate

    // useEffect(() => {  
    //     if(successUpdate) {
    //       dispatch({ type: 'POST_UPDATE_RESET' })
    //       dispatch({type: 'POST_DETAIL_RESET'})
    //       navigate('/')
    //     } else {
    //         setTitle(post.title)
    //         setAuthor(post.author)
    //         setDate(post.date)
    //         setDescription(post.description)
    //     }
        
    //   }, [dispatch, navigate, post, successUpdate])

    useEffect(() => {
        if (successUpdate) {
          dispatch({ type: 'POST_UPDATE_RESET' })
          navigate('/')
        } else {
          if (!post.title || post._id !== id) {
            dispatch(listPostDetails(id))
          } else {
            setTitle(post.title)
            setAuthor(post.author)
            setDate(post.date)
            setDescription(post.description)
          }
        }
      }, [dispatch, navigate, id, post, successUpdate])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(updatePost({
            _id: id,
            title,
            author,
            date,
            description,
        }))
    }

    return (
        <div className="w-full h-[100vh] flex items-center justify-center flex-col">
            <h1 className="mb-4">Create Post Here:</h1>
            {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
            <Form onSubmit={submitHandler} className="flex items-center justify-center flex-col">
                <Form.Group controlId='title' className='w-[30rem]'>
                    <Form.Label>Title:</Form.Label>
                    <Form.Control type='text' value={title}  placeholder="Title" onChange={(e) => setTitle(e.target.value)} className="mb-4"/>
                </Form.Group>
                <Form.Group controlId='author' className='w-[30rem]'>
                    <Form.Label>Author:</Form.Label>
                    <Form.Control type='text' value={author}  placeholder="Author" onChange={(e) => setAuthor(e.target.value)} className="mb-4"/>
                </Form.Group>
                <Form.Group controlId='date' className='w-[30rem]'>
                    <Form.Label>Date:</Form.Label>
                    <Form.Control type='text' value={date}  placeholder="Date" onChange={(e) => setDate(e.target.value)} className="mb-4"/>
                </Form.Group>
                <Form.Group controlId='description' className='w-[30rem]'>
                    <Form.Label>Post:</Form.Label>
                    <Form.Control type='text' as="textarea" rows={5} value={description} placeholder="Write post here" onChange={(e) => setDescription(e.target.value)} className="mb-4"/>
                </Form.Group>
                <Form.Group className='flex items-center justify-between w-[20rem]'>
                    <Button type='submit' className="w-[8rem]">&#9757; Save Post</Button>
                    <Button className="w-[8rem]" variant="warning" onClick={() => navigate(-1)}>&larr; Go Back</Button>
                </Form.Group>
            </Form>
           )} 
        </div>
    )
}

export default CreatePostScreen

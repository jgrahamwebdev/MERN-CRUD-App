
import { useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { Table, Button } from "react-bootstrap"
import { LinkContainer } from 'react-router-bootstrap';
import Message from '../components/Message'
import Loader from '../components/Loader'
import { deletePost, listPosts, createPost } from '../actions/postActions';

const HomeScreen = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const postList = useSelector(state => state.postList)
    const { loading, error, posts} = postList

    const postDelete = useSelector(state => state.postDelete)
    const { loading: loadingDelete, error: errorDelete, success: successDelete } = postDelete

    const postCreate = useSelector(state => state.postCreate)
    const { loading: loadingCreate, error: errorCreate, success: successCreate, post: createdPost } = postCreate

    useEffect(() => {
        dispatch({ type: 'POST_CREATE_RESET' })

        if(successCreate) {
            navigate(`/post/${createdPost._id}/new`)
        } else {
            dispatch(listPosts())
        }
        
    }, [dispatch, navigate, successDelete, successCreate, createdPost])

    const deleteHandler = (id) => {
        if (window.confirm('Are you sure?')) {
           dispatch(deletePost(id))
        }
    }

    const createPostHandler = () => {
        dispatch(createPost())
    }

    return (
        <div className="w-full h-[100vh] flex items-center justify-center flex-col">
            <h1 className='mb-4'>Home Screen</h1>
            <Button onClick={createPostHandler} variant='success' className='mb-4'>
                    <i className='fas fa-add'></i> Add a Post!
            </Button>
                {error ? (
                    <Message variant='danger'>{error}</Message>
                ) : (

                 <Table striped bordered hover responsive>
                 <thead>
                 <tr>
                     <th>DATE</th>
                     <th>TITLE</th>
                     <th>AUTHOR</th>
                     <th>ACTIONS</th>
                 </tr>
                 </thead>
                 <tbody>
                    {posts?.map((post) => (
                     <tr key={post._id}>  
                         <td>{post.date}</td>
                         <td>{post.title}</td>
                         <td>{post.author}</td>
                         <td className='flex items-center justify-around'>
                         <LinkContainer to={`/post/${post._id}`}>
                           <Button className='btn-sm'>
                             <i className='fas fa-eye' title="View Post"></i>
                           </Button>
                         </LinkContainer>
                         <LinkContainer to={`/post/${post._id}/edit`}>
                           <Button variant='warning' className='btn-sm mx-3'>
                             <i className='fas fa-edit' title="Edit Post"></i>
                           </Button>
                         </LinkContainer>
                         <Button variant='danger' className='btn-sm' title="Delete Post" onClick={() => deleteHandler(post._id)}>
                             <i className='fas fa-trash'></i>
                         </Button>
                         </td>
                     </tr>
                    ))}
                 </tbody>
                 
                </Table>
                )}
        </div>
    )
}

export default HomeScreen


import { Table, Button } from "react-bootstrap"
import { LinkContainer } from 'react-router-bootstrap';


const PostsTable = ({ post }) => {

    const deleteHandler = (id) => {
        if (window.confirm('Are you sure?')) {
           console.log('deleted')
        }
    }
    return (
        <Table striped bordered hover responsive className='w-1/2'>
            <thead>
            <tr>
                <th>DATE</th>
                <th>TITLE</th>
                <th>AUTHOR</th>
                <th>ACTIONS</th>
            </tr>
            </thead>
            <tbody>
                <tr>  
                    <td>{post.date}</td>
                    <td>{post.title}</td>
                    <td>{post.author}</td>
                    <td className='flex items-center justify-around'>
                    <LinkContainer to={`/`}>
                      <Button className='btn-sm'>
                        <i className='fas fa-eye' title="View Post"></i>
                      </Button>
                    </LinkContainer>
                    <LinkContainer to={`/post/${post._id}/edit`}>
                      <Button variant='warning' className='btn-sm mx-3'>
                        <i className='fas fa-edit' title="Edit Post"></i>
                      </Button>
                    </LinkContainer>
                    <Button variant='danger' className='btn-sm' title="Delete Post" onClick={() => deleteHandler()}>
                        <i className='fas fa-trash'></i>
                    </Button>
                    </td>
                </tr>
            </tbody>
            
        </Table>
    )
}

export default PostsTable


import { useEffect } from "react";
import { Link, useParams } from "react-router-dom"
import { Button } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { listPostDetails } from "../actions/postActions";

const ReadPost = () => {
    const { id } = useParams();
    const dispatch = useDispatch()
    const postDetails = useSelector(state => state.postDetails)
    const { loading, error, post } = postDetails

    useEffect(() => {
        dispatch(listPostDetails(id))
    }, [dispatch, id])

    return (
        <div>
           
   
           <div className="p-4 w-full h-[100vh] flex items-center justify-center flex-col">
               <h2 className="text-[2rem] font-semibold mb-2">{post.title}</h2>
               <h4 className="mb-4 font-light text-[1rem]"><span className="underline">Posted by:</span> <span className="font-semibold">{post.author}</span> on <span className="font-semibold">{post.date}</span></h4>
               <p>{post.description}</p>   

               <LinkContainer to={`/`}>
                    <Button className=''>
                        &larr; Home
                    </Button>
                </LinkContainer>  
           </div>
 
        </div>
    )
}

export default ReadPost


import axios from "axios";

//FOR HOMESCREEN 
export const listPosts = () => async (dispatch) => {
    try {
        dispatch({ type: 'POST_LIST_REQUEST' })

        const { data } = await axios.get('/posts')
        

        dispatch({ 
            type: 'POST_LIST_SUCCESS',
            payload: data
        })
    } catch (error) {
        dispatch({
            type: 'POST_LIST_FAIL',
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

//FOR READPOST PAGE
export const listPostDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: 'POST_DETAILS_REQUEST' })

        const { data } = await axios.get(`/posts/${id}`)

        dispatch({ 
            type: 'POST_DETAILS_SUCCESS',
            payload: data
        })
    } catch (error) {
        dispatch({
            type: 'POST_DETAILS_FAIL',
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

//DELETE a post
export const deletePost = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: 'POST_DELETE_REQUEST'
        })

        // const { userLogin: { userInfo } } = getState()

        // const config = {
        //     headers: {                          
        //         Authorization: `Bearer ${userInfo.token}`
        //     }
        // }

        await axios.delete(`/posts/${id}`)

        dispatch({
            type: 'POST_DELETE_SUCCESS',
        })
       
    } catch (error) {
        dispatch({
            type: 'POST_DELETE_FAIL',
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}


//CREATE a post
export const createPost = (title, author, date, description) => async (dispatch) => {
    try {
        dispatch({
            type: 'POST_CREATE_REQUEST'
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post(`/posts`, { title, author, date, description }, config)

        dispatch({
            type: 'POST_CREATE_SUCCESS',
            payload: data
        })
       
    } catch (error) {
        dispatch({
            type: 'POST_CREATE_FAIL',
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

//UPDATE a post
export const updatePost = (post) => async (dispatch) => {
    try {
        dispatch({
            type: 'POST_UPDATE_REQUEST'
        })

        const config = {
            headers: {     
                'Content-Type': 'application/json',                     
            }
        }

        const { data } = await axios.put(`/posts/${post._id}`, post, config)

        dispatch({
            type: 'POST_UPDATE_SUCCESS',
            payload: data
        })

        dispatch({
            type: 'POST_DETAILS_SUCCESS',
            payload: data,
          })
       
    } catch (error) {
        dispatch({
            type: 'POST_UPDATE_FAIL',
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

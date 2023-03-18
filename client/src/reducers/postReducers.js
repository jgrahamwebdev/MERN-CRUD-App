
//ALL posts (HOMESCREEN)
export const postListReducer = (state = { posts: [] }, action) => {
    switch(action.type) {
        case 'POST_LIST_REQUEST':
            return { loading: true, posts: [] }
        case 'POST_LIST_SUCCESS':
            return { loading: false, posts: action.payload }
        case 'POST_LIST_FAIL':
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

//ONE single post (POSTREADSCREEN PAGE)
export const postDetailsReducer = (state = { post: {} }, action) => {
    switch(action.type) {
        case 'POST_DETAILS_REQUEST':
            return { loading: true, ...state }
        case 'POST_DETAILS_SUCCESS':
            return { loading: false, post: action.payload }
        case 'POST_DETAILS_FAIL':
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

//DELETE a POST (HOMESCREEN)
export const postDeleteReducer = (state = {}, action) => {
    switch(action.type) {
        case 'POST_DELETE_REQUEST':
            return { loading: true }
        case 'POST_DELETE_SUCCESS':
            return { loading: false, success: true }
        case 'POST_DELETE_FAIL':
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

//CREATE a post (HOMESCREEN)
export const postCreateReducer = (state = {}, action) => {
    switch(action.type) {
        case 'POST_CREATE_REQUEST':
            return { loading: true }
        case 'POST_CREATE_SUCCESS':
            return { loading: false, success: true, post: action.payload }
        case 'POST_CREATE_FAIL':
            return { loading: false, error: action.payload }
        case 'POST_CREATE_RESET':
            return {}
        default:
            return state
    }
}

//UPDATE a post
export const postUpdateReducer = (state = { post: {} }, action) => {
    switch(action.type) {
        case 'POST_UPDATE_REQUEST':
            return { loading: true }
        case 'POST_UPDATE_SUCCESS':
            return { loading: false, success: true, post: action.payload }
        case 'POST_UPDATE_FAIL':
            return { loading: false, error: action.payload }
        case 'POST_UPDATE_RESET':
            return { post: {} }
        default:
            return state
    }
}
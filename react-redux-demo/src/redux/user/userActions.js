import {FETCH_USER_REQUEST,FETCH_USER_SUCCESS,FETCH_USER_FAILED} from './userTypes'
import axios from 'axios'
export const fetchUsersRequest = () =>{
    return{
        type:FETCH_USER_REQUEST
    }
}

export const fetchUsersSuccess = users =>{
    return{
        type:FETCH_USER_SUCCESS,
        payload:users
    }
}

export const fetchUsersFailed = error =>{
    return{
        type:FETCH_USER_FAILED,
        payload:error
    }
}

export const fetchUser = () =>{
    return (dispatch) =>{
    dispatch(fetchUsersRequest())
    
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(res=>{
        const users = res.data
        dispatch(fetchUsersSuccess(users))
    })
    
    .catch(error=>{
        const errorMsg = error.message
        dispatch(fetchUsersFailed(errorMsg))
    })
}

}
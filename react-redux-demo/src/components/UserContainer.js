import React,{useEffect} from 'react'
import {connect} from 'react-redux'
import {fetchUser} from '../redux'


function UserContainer({userData,fetchUsers}) {

    useEffect(()=>{
        fetchUsers()
    },[fetchUsers])
    return (
        <div>
    {userData.user.map(user=><p key={user.id}>{user.title}</p>)}
        </div>
    )
}

const mapStateToProps = state =>{
    return {
        userData: state.users
    }
}

const mapDispatchToProps = dispatch =>{
    return{
    fetchUsers: () => dispatch(fetchUser())
}
}

export default connect(mapStateToProps,mapDispatchToProps)(UserContainer)

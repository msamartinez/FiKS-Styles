import React from 'react';
import AdminPage from "./AdminPage"
import UserPage from "./UserPage"

const User=()=>{
const isAdmin = (state=>state.auth.me.isAdmin)
    return (
        <div>
            {isAdmin ? (<AdminPage/>) : (
                <UserPage />
            )}
        </div>
    )
    }

export default User

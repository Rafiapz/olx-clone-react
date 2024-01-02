import React from 'react'
import './ProfileTooltip.css'

function ProfileTooltip(props) {

    const { user, setUser, isLoggedIn, setIsLoggedIn } = props.props

    return (


        <div className="tooltip-container">
            <div className="top-user-profile">
                <img src="https://cdn-icons-png.flaticon.com/512/666/666201.png" alt="" className="w-10" />
                <h4>username</h4>
            </div>
            <div className="profile-link mx-6">
                <h6 className="text-center">View and edit profile</h6>
            </div>
            <div className="tooltip-items border-b-2 w-full">
                <div className="item" >
                    <img src="icons/favorite.png" alt="" className="w-5" />
                    <h4>My Post</h4>
                </div>
                <div className="item">
                    <img src="icons/heart.png" alt="" className="w-5" />
                    <h4>My Wishlist</h4>
                </div>
            </div>
            <div className="tooltip-items w-full">
                <div className="item">
                    <img src="data:image/png;base64,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" alt=""
                        className="w-5" />
                    <h4>Help</h4>
                </div>
                <div className="item px-8">
                    <img src="icons/setting.png" alt="" className="w-5" />
                    <h4>Settings</h4>
                </div>
                <div className="item px-8" >
                    <img src="icons/logout.png" alt="" className="w-5" />
                    <h4 onClick={() => {
                        setIsLoggedIn()
                        setUser()
                    }} >Logout</h4>
                </div>
            </div>
        </div>

    )
}

export default ProfileTooltip
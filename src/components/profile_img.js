import React from 'react';

const ProfileImg = ({profile_url , last_name}) => {
    return (
        profile_url ? <>
            <img className="object-cover rounded-full max-h-full max-w-full h-full w-full" src={profile_url}></img>
        </> : <>
            <div className="flex font-bold text-sm text-white justify-center items-center w-full h-full">
                <p className='text-xl'>{last_name ? (last_name[0] + "").toUpperCase() : ""}</p>
            </div>
        </>
    )
}

export default ProfileImg
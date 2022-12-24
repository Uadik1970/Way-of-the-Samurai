import React from 'react'
import Preloader from '../../Preloader/preloader'
import ProfileStatusWithHooks from './ProfileStatusWithHooks'


const ProfileInfo = ({ profile, status, updateStatus }) => {

    if (!profile) {
        return <Preloader />
    }
    return (
        <div>
            <div>
                <img src={profile.photos.large} />
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
            </div>
        </div>
    )
}

export default ProfileInfo
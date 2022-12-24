import React from 'react'
import Paginator from '../../commons/Paginator/Paginator'
import User from './User'


let Users = ({ currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props }) => {
    return <div>
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
            totalItemsCount={totalUsersCount} pageSize={pageSize} />
        <div>
            {users.map(u => <User user={u} unfollow={props.unfollow} follow={props.follow}
                followingInProgress={props.followingInProgress} key={u.id} />)}
        </div>
    </div>
}


export default Users
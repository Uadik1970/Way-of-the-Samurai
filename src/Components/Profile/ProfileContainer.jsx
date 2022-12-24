import React from 'react'
import { connect } from 'react-redux'
import Profile from './Profile'
import { getUsersProfile, getStatus, updateStatus } from './../../redux/profile-reducer'
import { Redirect, withRouter } from 'react-router-dom'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.autorizedUserId
            if(!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getUsersProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        return (
            <div className='content'>
                <Profile {...this.props} 
                profile={this.props.profile} 
                status={this.props.status}
                updateStatus={this.props.updateStatus} />
            </div>
        )
    }
}


let mapStateToProps = (state) => ({ 
    profile: state.profilePage.profile, 
    status: state.profilePage.status,
    autorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})

export default compose(
    connect(mapStateToProps, { getUsersProfile, getStatus, updateStatus }),
    withRouter,
    // withAuthRedirect
)(ProfileContainer)

import React from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { createField, Input } from '../../commons/FormControls/FormControls'
import { maxLengthCreator, required } from '../../utils/validators/validators'
import { login } from '../../redux/auth-reducer'
import { Redirect } from 'react-router-dom'
import style from '../../commons/FormControls/FormControls.module.css'





let LoginForm = ({ handleSubmit, error }) => {
    return (
        <form onSubmit={handleSubmit}>
            { createField('Email', 'email', [required], Input)}
            { createField('pass', 'password', [required], Input, { type: 'password' })}
            { createField(null, 'rememberMe', [], Input, { type: 'checkbox' }, 'remember me')}
            { error && <div className={style.formSummaryError}>
                {error}
            </div>}
            <div>
                <button>submit</button>
            </div>
        </form>
    )
}

let LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

let Login = (props) => {

    let onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    }
    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, { login })(Login)
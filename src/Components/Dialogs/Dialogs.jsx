import React from 'react'
import s from './Dialogs.module.css'
import Dialogitem from './Dialogitem/Dialogitem'
import Message from './Message/Message'
import { Redirect } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { Textarea } from '../../commons/FormControls/FormControls'
import { maxLengthCreator, required } from '../../utils/validators/validators'

const Dialogs = (props) => {

    let state = props.dialogsPage

    let dialogsElements = state.dialogs
        .map(d => <Dialogitem name={d.name} id={d.id} />)

    let messagesElemtnts = state.messages
        .map(m => <Message message={m.message} id={m.id} />)


    let addNewMessage = (value) => {
        props.sendMessage(value.newMessageBody)
    }

    if (!props.isAuth) return <Redirect to={'/login'}></Redirect>

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElemtnts}
            </div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    )
}
let maxLength10 = maxLengthCreator(10)

let AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field 
                component={Textarea}
                validate={[required, maxLength10]}
                name='newMessageBody'
                placeholder='enter your text' />
            <button>Send message</button>
        </form>
    )
}

let AddMessageFormRedux = reduxForm({form:"dialogAddMessageForm"})(AddMessageForm)

export default Dialogs
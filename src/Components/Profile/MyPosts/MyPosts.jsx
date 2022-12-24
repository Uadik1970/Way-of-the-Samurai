import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Textarea } from '../../../commons/FormControls/FormControls'
import { maxLengthCreator, required } from '../../../utils/validators/validators'
import Post from './Post/Post'

const MyPosts = React.memo((props) => {

    let postsElements = props.posts
        .map(post => <Post message={post.message} id={post.id} />)


    let onAddPost = (value) => {
        props.addPost(value.newPostText)
    }

    return (
        <div>
            MyPosts
            <AddNewPostReduxForm onSubmit={onAddPost} />
            <div>
                {postsElements}
            </div>
        </div>
    )
})
let maxLength10 = maxLengthCreator(10)

let AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    validate={[required, maxLength10]}
                    name='newPostText'
                    placeholder='enter your text'
                    component={Textarea} />
            </div>
            <div>
                <button>Send message</button>
            </div>
        </form>
    )
}

let AddNewPostReduxForm = reduxForm({ form: "ProfileAddNewPostForm" })(AddNewPostForm)

export default MyPosts
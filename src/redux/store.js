import dialogsReducer from "./dialogs-reducer"
import profileReducer from "./profile-reducer"

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'hi' },
                { id: 2, message: 'bye' },
            ],
            newPostText: 'React'
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Viktor' },
                { id: 2, name: 'Oleg' },
                { id: 3, name: 'Sveta' },
                { id: 4, name: 'Masha' },
            ],

            messages: [
                { id: 1, message: 'hi' },
                { id: 2, message: 'how are you?' },
                { id: 3, message: '123' },
                { id: 4, message: '321' },
            ],
            newMessageBody: ''
        }
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log('react')
    },

    dispatch(action) {
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage,action)
        this._state.profilePage = profileReducer(this._state.profilePage,action)
        this._callSubscriber(this._state)
    }
}


export default store
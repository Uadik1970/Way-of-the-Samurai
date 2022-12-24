let SEND_MESSAGE = 'SEND-MESSAGE'


let initialState = {
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
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody
             return {
                ...state,
                messages: [...state.messages,{ id: 4, message: body }]
            }
        default:
            return state
    }
}


export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE,newMessageBody })

export default dialogsReducer



import {renderEntireTree} from "../render";

export const state = {
    profilePage: {
        posts: [
            {id: 1, message: "Hi how are you", like: "0"},
            {id: 2, message: "Its my first project", like: "23"}
        ],
        newPostText: "What`s up?"
    },
    dialogPage: {
        dialog: [
            {id: 1, name: "Orest"},
            {id: 2, name: "Nadia"},
            {id: 3, name: "Vlad"},
            {id: 4, name: "Nazar"},
            {id: 5, name: "Vira"},
        ],
        message: [
            {
                id: 1,
                message: "Hi"
            },
            {id: 2, message: "How is your it-kamasutra?"},
            {id: 3, message: "Bye!"}
        ],
        newDialogText: 'Hello'
    }
}

export const addPost = () => {
    const newPost = {
        id: 3,
        message: state.profilePage.newPostText,
        like: "1"
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    renderEntireTree(state)
}
export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText
    renderEntireTree(state)
}

export const addDialog = () => {
    const newMessage = {
        id: 4,
        message: state.dialogPage.newDialogText
    }
    state.dialogPage.message.push(newMessage)
    state.dialogPage.newDialogText = ''
    renderEntireTree(state)
}
export const updateNewDialogText = (newText) => {
    state.dialogPage.newDialogText = newText
    renderEntireTree(state)
}



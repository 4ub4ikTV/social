export const state = {
    profilePage: {
        posts: [
            {id: 1, message: "Hi how are you", like: "0"},
            {id: 2, message: "Its my first project", like: "23"}
        ]
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
            {message: "Hi"},
            {message: "How is your it-kamasutra?"},
            {message: "Bye!"}
        ]
    }
}

export const addPost = (postMessage) => {
    debugger
    const newPost = {
        id: 3, message: postMessage, like: "1"
    }
    state.profilePage.posts.push(newPost)
}



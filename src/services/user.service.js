
export const userService = {
    getUser
}

const gUser = {
    name: "Saul Montgomery",
    coins: 100,
    moves: []
}

function getUser() {
    return Promise.resolve({ ...gUser })
}
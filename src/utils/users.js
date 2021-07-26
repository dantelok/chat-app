const users = []

const addUser = ({ id, username, room }) => {
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    if (!username || !room) {
        return {
            error: 'Username and room are required!'
        }
    }

    const existingUser = users.find((user) => {
        return user.room === room && user.username === username
    })

    if (existingUser) {
        return {
            error: 'Username is in use!'
        }
    }

    // Store user
    const user = { id, username, room }
    users.push(user)
    return { user }
}

const removeUser = (id) => {
    const index = users.findIndex((user) => user.id ===id)

    if (index !== -1) {
        return users.splice(index, 1)[0]   // remove item from array
    }
}

const getUser = (id) => {
    return users.find((user) => user.id === id)
}

const getUserInRoom = (room) => {
    room = room.trim().toLowerCase()
    return users.filter((user) => user.room === room)
}

addUser({
    id: 22,
    username: 'Dante',
    room: 'South Philly'
})
const user = getUser(22)
console.log(user)
const userList = getUserInRoom('South Philly')
console.log(userList)
// removeUser(22)

module.exports = {
    addUser, 
    removeUser, 
    getUser, 
    getUserInRoom
}
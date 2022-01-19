let users = [];
const UserNotFoundError = {error:"user already exists"};

const addUser = (profile) => {
    const userExists = users.find(u => u === profile);
    if(userExists) return UserNotFoundError;
    users.push(profile);
    return profile;
}

const removeUser = (profile) => {
    const userIndex = users.findIndex(u => profile);
    if(userIndex === -1) return UserNotFoundError;
    users = users.filter(u => u !== profile);
    return profile;
}

const getUserById = (id) => {
    const user = users.filter(u => u.id === id)[0];
    return user;
}

const getUsers = (room) => {
    return users.filter(user => user.room === room);
}

module.exports = { addUser, getUsers, removeUser, getUserById }
const getUser = (name)=>{
    return name;
}

const getUserName = ()=>{
    const name = "Abdul Kadir Khan";
    return getUser(name);
}

module.exports = {
    getUserName
}
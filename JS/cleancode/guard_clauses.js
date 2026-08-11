function process(user) {
    if (!user || !user.active) {
        return null
    }
    return user.name
}

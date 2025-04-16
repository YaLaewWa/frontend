interface messageInterface{
    sender: string
    timestamp: Date
    message: string
}

interface ChatInterface{
    usernameA: string
    usernameB: string
    chat: messageInterface[]
}
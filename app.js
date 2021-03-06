function newId(arrayOfMessages){
  if (arrayOfMessages.length > 0) {
    return arrayOfMessages[arrayOfMessages.length-1].id + 1;
  } else {
    return 1
  }
}

class MessageApp {
    constructor() {
      this.messages = []
    }
    post(content){
        let item = {
          id: newId(this.messages),
          content: content,
          date: new Date()
        }
        this.messages.push(item)
        return this.messages
    }
    get(id){
      return this.messages.filter(message => message.id === id)[0];
    }
    update(id, update){
      let index = this.messages.findIndex(message => message.id === id )
      this.messages[index].content = update
      }
    delete(id){
      this.messages = this.messages.filter(message => message.id != id)
      return this.messages
    }
}
  export default MessageApp


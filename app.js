class MessageApp {
    constructor() {
      this.messages = []
    }
    post(content){
        let item = {
          id: this.messages.length,
          content: content,
          date: new Date()
        }
        this.messages.push(item)
        return this.messages
    }
    get(id){
        return this.messages[id];
    }
    update(id, update){
        // console.log(this.messages[id].content)
        this.messages[id].content = update
        // console.log(this.messages[id].content)
        return this.messages[id];
    }
    delete(id){
        this.messages.splice(id - 1, 1)
        return this.messages;
    }
}
  export default MessageApp


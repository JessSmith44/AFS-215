module.exports = class TodoList{
    constructor(item){
        this.itemList = []
    }
    
    calling(){
        return this.itemList
    }
        
    addToArray(item) {
        this.itemList.push(item)
        return this.itemList
    }
    
    addsMulti(item){
        this.itemList.push(...item)
        return this.itemList
    }

    removal(item){
        let removedItem = this.itemList.indexOf(item)
            if(removedItem > -1){
                this.itemList.splice(removedItem, 1)
            }
        return this.itemList
    }

    removeFirst(item){
        let removedItem = this.itemList.indexOf(item)
            if(removedItem > -1){
                this.itemList.shift()
            }
        return this.itemList
    }

    removeLast(item){
        let removedItem = this.itemList.indexOf(item)
            if(removedItem > -1){
                this.itemList.pop()
            }
        return this.itemList
    }
}
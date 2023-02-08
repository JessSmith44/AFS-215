// Create a class with functions that can accomplish the following:
module.exports = class Project{

    constructor(item){
        this.itemList = []
    }

    // Add an item of any data type to the array.
    addToArray(item) {
        this.itemList.push(item)
        return this.itemList
    }
    // Call the array.
    calling(){
        return this.itemList
    }
    // Remove specific items from the array.
    removal(item){
        let removedItem = this.itemList.indexOf(item)
        if(removedItem > -1){
            this.itemList.splice(removedItem, 1)
        }
        return this.itemList
    }
    // Search the array for a specific item. If the item exists, 
    // return true(boolean). If not, provide an error message.
    searchItem(item){
      let foundItem = this.itemList.indexOf(item)
      if (foundItem > -1){
        if(item === item){
            return true
        }
      }
      else{
        console.log('No item found')
      }
    }
}



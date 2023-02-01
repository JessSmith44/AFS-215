# Create a class and create functions that can accomplish the following:

class aRandomList():
    # Hint: creating a state within your class using def __init__ can make 
    # your list easier to manage.
    def __init__(self):
        self.list = ['Coffee']
    
    # Place a string into a list

    def addToList(self, itemName):
        self.list.append(itemName)
        print(self.list)
        return self.list

    # Search the list for a single instance of a string

    def searchItem(self, itemName):
        ugh = self.list
        search = itemName
        if search in ugh:
            return search
        else:
            return 'item not found'

    # Evaluate all items in the list

    def evaluate(self):
        list = self.list
        if len(list) != 0:
            return list
        else: 
            'this list is empty!'
        

class Recall:
    def __init__(self, myList=[]):
        self.myList = []

    def __str__(self):
        return str(self.myList)
    
    def addNum(self, input):
        self.myList.append(input)

    def addStr(self, input):
        self.myList.append(input)

    def addDict(self, input):
        self.myList.append(input)

    def addTuple(self, input):
        self.myList.append(input)

    def printList(self):
        print(self.myList)

    def changeList(self):
        print(tuple(self.myList))
    

var = Recall()

var.addNum(40)

var.addStr('hello')

var.addDict(dict({'item':'coffee'}))

var.addTuple(('why', 'cant', 'I', 'remember', 'python'))

var.printList()

var.changeList()
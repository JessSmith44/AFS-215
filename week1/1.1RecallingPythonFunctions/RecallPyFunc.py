import copy
# Create a class.

class Recall:
    # Use __init__ to hold an empty list(datatype).
    def __init__(self, myList=None):
        self.myList = myList
        if myList is None:
            myList = []
            print(myList, 'line 9')

    def __str__(self):
        return str(self.myList)

# Create a function or functions that will allow you to add one of each of the following 
# datatypes to your list: number,string,dictionary,tuple.


# def addToList(input):
#     data = str(input)
#     Recall.myList.append(data)

# addToList(input(int(40)))
# addToList(input('hello'))
# addToList(input(dict({'item':'coffee'})))
# addToList(input(tuple(['why', 'cant', 'I', 'remember', 'python'])))


def addNum(input):
    data = str(input)
    Recall.myList.append(data)

addNum(input(int(40)))


def addStr(input):
    data2 = str(input)
    Recall.myList.append(data2)

addStr(input('hello'))

def addDict(input):
    data3 = str(input)
    Recall.myList.append(data3)

addDict(input(dict({'item':'coffee'})))

def addTuple(input):
    data4 = str(input)
    Recall.myList.append(data4)

addTuple(input(tuple(['why', 'cant', 'I', 'remember', 'python'])))
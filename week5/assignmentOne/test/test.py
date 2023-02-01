# create test than refactor with pytest.fixture
# DO NOT ERASE CODE FOR REFACTOR. COMMENT OUT TO SHOW DIFFERENCE!!!

from aClass.myClass import aRandomList()

# You will need to use pytest.fixure at some point in your development. 
# Be sure comment out the original code and write the new code beneath it. 
# Show how you refactored from the original code you wrote.

def test_passing():
    assert (4,5,6)==(1,2,3)

def test_add():
    items = aRandomList()
    items.addToList('Blanket')
    items.addToList('Coffee')
    assert items.addToList('Socks') == ['Blanket', 'Coffee', 'Socks']

def testSearchItem():
    items = aRandomList()
    # items.searchItem('Yarn')
    assert items.searchItem('Yarn') == ['Yarn']

def testEvaluateItems():
    assert len(aRandomList().list) == 0


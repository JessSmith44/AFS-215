# create test than refactor with pytest.fixture
# DO NOT ERASE CODE FOR REFACTOR. COMMENT OUT TO SHOW DIFFERENCE!!!
# import pytest
from myLibrary.develop import aRandomList
import pytest
# You will need to use pytest.fixure at some point in your development. 
# Be sure comment out the original code and write the new code beneath it. 
# Show how you refactored from the original code you wrote.
@pytest.fixture()
def items():
    items = aRandomList()
    items.addToList('Blanket')
    items.addToList('Pizza')
    return items


def test_add(items):
    assert items.addToList('Socks') == ['Coffee', 'Blanket', 'Pizza', 'Socks']

def testSearchItem(items):
    assert items.searchItem('Coffee') == 'Coffee'

def testEvaluateItems(items):
    assert len(items.list) != 0






# def test_add():
#     items = aRandomList()
#     items.addToList('Blanket')
#     items.addToList('Pizza')
#     assert items.addToList('Socks') == ['Coffee', 'Blanket', 'Pizza', 'Socks']

# def testSearchItem():
#     items = aRandomList()
#     assert items.searchItem('Coffee') == 'Coffee'

# def testEvaluateItems():
#     items = aRandomList()
#     assert len(items.list) != 0


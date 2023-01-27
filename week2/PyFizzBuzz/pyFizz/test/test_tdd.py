from myLib.main import theFizz

def test_numChoice():
    result = theFizz(1)
    assert result == 1
    
def test_numChoiceG():
    result = theFizz(2)
    assert result == 2

def test_numChoiceD():
    result = theFizz(3)
    assert result == 'Pepsi'

def test_twoNumsP():
    result = theFizz(9)
    assert result == 'Pepsi'
    # assert theFizz(9)

def test_twoNumsV():
    result = theFizz(15)
    assert result == 'PepsiCoke'

def test_numChoice():
    result = theFizz(10)
    assert result == 'Coke'

def test_numChoiceFive():
    result = theFizz(21)
    assert result == 'Pepsi'    

def test_numChoiceFives():
    result = theFizz(27)
    assert result == 'Pepsi'

def test_numChoiceDoub():
    result = theFizz(30)
    assert result == 'PepsiCoke'
from myLib.main import theFizz

def test_numChoice():
    assert theFizz(1)
    
def test_numChoiceG():
    assert theFizz(2)


def test_numChoiceD():
    assert theFizz(3)


def test_twoNumsP():
    assert theFizz(9)


def test_twoNumsV():
    assert theFizz(15)


def test_numChoice():
    assert theFizz(10)


def test_numChoiceFive():
    assert theFizz(21)
    

def test_numChoiceFives():
    assert theFizz(27)


def test_numChoiceDoub():
    assert theFizz(15)
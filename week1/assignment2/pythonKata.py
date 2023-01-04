# Get “1” to print when passed a 1
# Get “2” to print when passed a 2
# Get “Pepsi” to print when passed a 3
# Get “Coke” to print when passed a 5
def passNum():
    while True:
        choice = int(input("please enter a number: "))

        if choice == 1:
            print("1")

        elif choice == 2:
            print("2")

        elif choice % 3 == 0 :
            if choice % 5 == 0:
                print('PepsiCoke')
            else:
                print("Pepsi")

        elif choice % 5 == 0 :
            if choice % 3 == 0:
                print('PepsiCoke')
            else:
                print("Coke")

passNum()
# After completing this part of the assignment, look at the code you wrote during 
# steps 3 & 4 and modify it so that your code is able to achieve the following:

# Get “Pepsi” when passed a 6 (a multiple of 3)
# Get “Coke” when passed a 10 (a multiple of 5)
# Get “PepsiCoke” when passed a 15 (a multiple of 3 and 5)

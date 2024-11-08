print("Welcome to the quiz!")
playing = input("Do you want to play? ")
if playing.lower() != "yes":
    quit()
else:
     print("Okay! Let's play :)")


question = input("What is the capital of Nigeria? ")
if question.lower() == "abuja":
    print("Correct!")
else:
    print("Incorrect!")
question = input("What is the meaning of Cpu? ")
if question.lower() == "central processing unit":
    print("Correct!")
else:
    print("Incorrect!")
question = input("What is the meaning of RAM? ")
if question.lower() == "random access memory":
    print("Correct!")
else:
    print("Incorrect!")
question = input("What is the meaning of GPU? ")
if question.lower() == "graphics processing unit":
    print("Correct!")
else:
    print("Incorrect!")


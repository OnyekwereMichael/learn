# firstname = 'Michael'
# lastname = 'Onyekwere'

# # literal assignment 

# print(type(firstname))
# print(type(firstname) == str)
# print(isinstance(firstname, str))

# print(lastname)

# # constructor function 
# pizza = str('peperonni')
# print(pizza)
# print(type(pizza))
# print(type(pizza) == str)

# # concatinating 
# fullname = firstname + " " + lastname
# print(fullname)

# # casting a number to a string 

# decade = (str(1980))
# print(decade)
# print(type(decade))

# story = 'i love learn tech from peaople in the' + " " + decade + "s."
# print(story)

# # Multiple lines 
# statement = '''
# How are you my friend

# How do you do my friend
#              I know sometimes e be iike say, no nody love you.
# '''

# print(statement)

# name = 'John Smith'
# age = 20
# is_newpatient = True
# print(name, age, is_newpatient)

# # working with input 
# name = input('What is your name ' )
# color = input('Whats your favourite color ' )

# print(name + ' ' + 'Likes' + ' ' + color)

# weight = input('what is your weight' )

# birth = input('what is your birth date ' )
# age = 2024 - int(birth)
# print(age)

# formated string 

fname = 'Jude'
lname = 'Gabriel the boy'

msg = f'{fname} [{lname}] is a coder'
print(msg)

print(lname.upper())
print(lname.lower())
print(lname.find('l'))
print(lname.replace('Gabriel', 'Fayieem'))

print("Gabriel" in lname)
print(len(lname))

# if statement
is_hot = False
is_cold = False

if is_hot:
    print('It is a hot day, wear something chilly')
elif is_cold:
    print('It is a cold day, wear something warm')
else: 
    print('Do enjoy your day. 😉')

    # logical operator 
    # and or not 

    has_good_credit = True
    has_criminal_record = False

    if has_good_credit and not has_criminal_record:
        print('Eligible for loan')
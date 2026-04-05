# Packages can be installed from outside using "pip install" and the name of the package
# In this case, the cowsay package will be installed using "pip install cowsay" to make a cow say things

# import cowsay
import json
import requests
from sampleSayings import HelloWorld    # This is a way to import things from a proprietary package

# cowsay.cow("Hi!")


response = requests.get("https://api.github.com/users/JafRojasCR")   # Gets the data from the given URL and stores it in a variable
print(response.json())

blog = response.json()['blog']
print("The user's blog is in: "+blog)

HelloWorld("print")
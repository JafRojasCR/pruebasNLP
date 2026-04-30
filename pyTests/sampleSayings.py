
def HelloWorld(name):
    if name != "print":
        print("Hello, "+name)
    else:
        print("Hello, world")

def goodbyeWorld(name):
    print("Hello, "+name)

def main():
    HelloWorld("world")
    HelloWorld("print")
    goodbyeWorld("world")

if __name__ == "__main__":
    main()
import requests
def get_paintings(artist):
    try:
        request = requests.get(
        "https://api.artic.edu/api/v1/artworks/search",
        {"q": artist}
        ) 
        request.raise_for_status()
    except request.HTTPError:
        return "Couldn't complete request"
    result = request.json()["data"]
    return result
# The __init__.py empty file is necessary for the directory to be identified as a package
    

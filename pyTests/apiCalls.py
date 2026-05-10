import requests

def main():
    artist = input("Search for artist: ")
    try:
        request = requests.get(
            "https://api.artic.edu/api/v1/artworks/search",
            {"q": artist}
            ) 
        request.raise_for_status()
    except request.HTTPError:
        print("Couldn't complete request")
        return
    result = request.json()
    for painting in result["data"]:
        print(painting["title"])
    
        # With packages:
    print("\nWith packages: \n")
    from museum.artist import get_paintings
    # Or: import museum.artist
    paintings = get_paintings(artist)
    for painting in paintings:
        print(painting["title"])


main()
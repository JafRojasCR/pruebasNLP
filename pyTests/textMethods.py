movies = [" Avengers End Game", " avatar", "MARIO BROS", " mineCRAFT"]

cleaned_movies = []
for movie in movies:        # For each movie (element) inside movies (array)
    #movie.lower()           # Sets everything to lowercase
    #movie.strip()           # Removes whitespaces at the beginning or end of each movie's name
    #movie.capitalize()      # Capitalizes first letter of each movie
    cleaned_movies.append(movie.lower().strip().title())

print(cleaned_movies)


print(', '.join(cleaned_movies))

for movie in cleaned_movies:
    print(movie, end=" ")
import string

textoBase = input("Ingresa tu texto: ")
# Toma el texto base a partir del usuario

textoMinusculas = textoBase.lower()
# Convierte el texto del usuario a minúsculas

# "Hola, bro. Te sientes bien?" --> "hola, bro. te sientes bien?"

textoSinPuntuacion = textoMinusculas
for signo in string.punctuation:
  textoSinPuntuacion = textoSinPuntuacion.replace(signo,"")

# "hola, bro. te sientes bien?" --> "hola bro te sientes bien"

fraseTokenizada = textoSinPuntuacion.split()

# "hola bro te sientes bien"  -->  "['hola', 'bro', 'te', 'sientes', 'bien']"

stopwords = [
    "de", "la", "que", "el", "en", "y", "a", "los", "del", "se",
    "las", "por", "un", "para", "con", "no", "una", "su", "al", "lo",
    "como", "más", "pero", "sus", "le", "ya", "o", "este", "sí", "porque",
    "esta", "entre", "cuando", "muy", "sin", "sobre", "también", "me", "hasta",
    "hay", "donde", "quien", "desde", "todo", "nos", "durante", "todos",
    "uno", "les", "ni", "contra", "otros", "ese", "eso", "ante", "ellos",
    "e", "esto", "mí", "antes", "algunos", "qué", "unos", "yo", "otro",
    "otras", "otra", "él", "tanto", "esa", "estos", "mucho", "quienes",
    "nada", "muchos", "cual", "poco", "ella", "estar", "estas", "algunas",
    "algo", "nosotros", "mi", "mis", "tú", "te", "ti", "tu", "tus",
    "ellas", "nosotras", "vosotros", "vosotras", "os", "mío", "mía",
    "míos", "mías", "tuyo", "tuya", "tuyos", "tuyas"
]

fraseSinStopwords = []
for palabra in fraseTokenizada:
  if palabra not in stopwords:
    fraseSinStopwords.append(palabra)

# Define "palabra" como cada elemento (cada palabra) dentro del array
# Revisa cada palabra y ve si está dentro de stopwords
# Si la palabra NO está, la ingresa al nuevo arreglo de la frase sin stopwords

# "['hola', 'bro', 'te', 'sientes', 'bien']"  --> ['hola', 'bro', 'sientes', 'bien']


fraseUnida = ""
fraseUnida = " ".join(fraseSinStopwords)
print(fraseUnida)

# Tras definir esa variable para la frase unida final, se utiliza join
# .join une cada elemento de fraseSinStopwords, separados por un espacio

# ['hola', 'bro', 'sientes', 'bien']  -->  hola bro sientes bien
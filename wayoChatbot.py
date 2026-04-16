import string

# Base de datos en formato de diccionario (llaves {})
knowledge_base = {
    "señalamiento_vertical": {
        "patterns": ["señal", "vertical", "placas", "postes", "reglamentarias", "preventivas", "informativas"],
        "answer": "El señalamiento vertical son placas en postes con símbolos o leyendas (Reglamentarias, Preventivas e Informativas)."
    },
    "señalamiento_horizontal": {
        "patterns": ["señal", "horizontal", "marcas", "pintada", "calzada", "lineas", "amarillas", "blancas"],
        "answer": "El señalamiento horizontal son marcas pintadas directamente sobre la calzada, como líneas amarillas o blancas."
    },
    "prioridad_paso": {
        "patterns": ["prioridad", "paso", "jerarquia", "autoridad", "emergencia", "semaforos", "quien", "pasa"],
        "answer": "La jerarquía es: 1. Autoridad, 2. Emergencia, 3. Semáforos, 4. Verticales, 5. Horizontales, 6. Vía principal, 7. Mano derecha, 8. Cortesía."
    },
    "paso_ferroviario": {
        "patterns": ["tren", "ferroviario", "ferrocarril", "vias", "pasa"],
        "answer": "El tren siempre tiene prioridad absoluta sobre cualquier otro vehículo o peatón en los cruces ferroviarios."
    },
    "alcohol_sangre": {
        "patterns": ["alcohol", "ebriedad", "licor", "sangre", "espirado", "limite", "multa", "tomar", "beber"],
        "answer": "Los límites de alcohol varían según el tipo de licencia (Novato/Profesional vs Común). Superar los niveles permitidos implica multas de categoría A o cárcel."
    },
    "puntos_licencia": {
        "patterns": ["puntos", "licencia", "acumular", "perder", "renovacion", "infraccion"],
        "answer": "El sistema de puntos penaliza las infracciones graves. Al acumular el máximo permitido, se suspende la licencia y se debe realizar un curso de reeducación vial."
    },
    "velocidad_zonas": {
        "patterns": ["velocidad", "escolar", "hospital", "urbana", "carretera", "limite", "maxima"],
        "answer": "Los límites genéricos son: 25 km/h en zona escolar/hospital, 40 km/h en zona urbana y hasta 100 km/h en autopistas según la señalización."
    },
    "seguridad_vial": {
        "patterns": ["seguridad", "activa", "pasiva", "frenos", "luces", "cinturon", "airbag", "casco"],
        "answer": "La seguridad activa previene accidentes (frenos, dirección) y la pasiva minimiza daños (cinturón, airbag, casco)."
    }
}

def procesar_nlp(pregunta_usuario):
    # 1. Pasar a minúscula
    frase = pregunta_usuario.lower()
    
    # 2. Remover signos de puntuación
    frase = "".join([char for char in frase if char not in string.punctuation])
    
    # 3. Tokenizar
    tokens = frase.split()
    
    # 4. Detectar intención (antes de eliminar stopwords)
    def detectar_intencion(t):
        if any(s in t for s in ["hola", "buenos", "dias", "tardes", "noches"]):
            return "saludo"
        if any(d in t for d in ["gracias", "adiós", "chao", "listo", "terminar"]):
            return "despedida"
        return "pregunta"

    intencion = detectar_intencion(tokens)

    # 5. Eliminar Stopwords
    stopwords = ["de", "la", "que", "el", "en", "y", "a", "los", "del", "se", "las", "por", "un", "para", "con", "no", "una", "su", "al", "lo", "como", "más", "pero", "sus", "le", "ya", "o", "este", "sí", "porque", "esta", "entre", "cuando", "muy", "sin", "sobre", "también", "me", "hasta", "hay", "donde", "quien", "desde", "todo", "nos", "durante", "todos", "uno", "les", "ni", "contra", "otros", "ese", "eso", "ante", "ellos", "e", "esto", "mí", "antes", "algunos", "qué", "unos", "yo", "otro", "otras", "otra", "él", "tanto", "esa", "estos", "mucho", "quienes", "nada", "muchos", "cual", "poco", "ella", "estar", "estas", "algunas", "algo", "nosotros", "mi", "mis", "tú", "te", "ti", "tu", "tus", "ellas", "nosotras", "vosotros", "vosotras", "os", "mío", "mía", "míos", "mías", "tuyo", "tuya", "tuyos", "tuyas"]
    tokens_limpios = [p for p in tokens if p not in stopwords]

    # 6. Calcular coincidencia en el diccionario (knowledge_base)
    mejor_respuesta = ""
    max_coincidencias = 0

    # Iteramos sobre las llaves del diccionario {}
    for clave in knowledge_base:
        datos = knowledge_base[clave]
        coincidencias = sum(1 for t in tokens_limpios if t in datos["patterns"])
        
        if coincidencias > max_coincidencias:
            max_coincidencias = coincidencias
            mejor_respuesta = datos["answer"]
            
    return intencion, mejor_respuesta

def iniciar_wayo():
    # Mensaje inicial
    print("---------------------------------------------------------")
    print("Hola, soy Wayo. Soy experto en la Ley 9078 y el manual de COSEVI. ¿En qué tema técnico necesitas asesoría hoy?")
    print("---------------------------------------------------------")

    while True:
        entrada = input("Tú: ")
        intencion, respuesta_base = procesar_nlp(entrada)

        if intencion == "despedida":
            print(f"Wayo: Ha sido un gusto. Estudia con rigor y conduce con cortesía. ¡Muchos éxitos en tu examen!")
            break # Termina el programa
        
        elif intencion == "saludo":
            print("Wayo: Hola de nuevo. ¿Tienes alguna duda técnica sobre la normativa de tránsito?")
        
        elif intencion == "pregunta" and respuesta_base:
            print(f"Wayo: Esto fue lo que encontré: {respuesta_base}")
        
        else:
            print("Wayo: No comprendo el término. Por favor, utiliza palabras relacionadas con la normativa de tránsito para poder ayudarte.")

iniciar_wayo()
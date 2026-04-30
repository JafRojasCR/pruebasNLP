

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config(); // Carga las variables de entorno desde el archivo .env
import { Groq } from "groq-sdk";

const app = express();
app.use(cors());
app.use(express.json());

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY // Asegúrate de usar una válida
});

app.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;

    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: `Eres un tutor de educación vial en Costa Rica. 
          Responde de forma clara y directa. Usa el Manual del Conductor de Costa Rica como referencia. 
          Si el usuario pregunta algo ajeno al tema vial, responde únicamente: "Solo educación vial".`
        },
        {
          role: "user",
          content: message
        }
      ],
      // Cambiado a un modelo real de Groq
      model: "llama-3.3-70b-versatile", 
      // Aumentado para permitir respuestas completas
      max_tokens: 800, 
      temperature: 0.5
    });

    res.json({
      reply: chatCompletion.choices[0].message.content
    });

  } catch (error) {
    console.error("Error en Groq:", error);
    res.status(500).json({ error: "Error al consultar Groq" });
  }
});

app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.post("/chat", async (req, res) => {
  try {
    const { message, history = [] } = req.body;

    if (!message || !message.trim()) {
      return res.status(400).json({ error: "Message manquant." });
    }

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "http://localhost:5500",
        "X-Title": "TimeTravel Agency"
      },
      body: JSON.stringify({
        model: "openrouter/free",
        max_tokens: 140,
        messages: [
          {
            role: "system",
            content: `
Tu es le Concierge Temporel de TimeTravel Agency, une agence de voyage temporel haut de gamme.

Ton rôle :
- conseiller les visiteurs
- répondre aux questions sur les destinations
- suggérer une époque selon leurs goûts
- rester cohérent avec l'univers du site

Ton ton :
- professionnel mais chaleureux
- passionné d'histoire
- élégant
- immersif
- crédible dans un univers fictif premium

Tu connais parfaitement :
1. Paris 1889
   - Belle Époque
   - Exposition Universelle
   - Tour Eiffel
   - raffinement, innovation, ambiance mondaine

2. Florence 1504
   - Renaissance
   - Michel-Ange
   - art, culture, architecture
   - effervescence intellectuelle

3. Crétacé -65M
   - dinosaures
   - nature sauvage
   - expédition spectaculaire
   - aventure intense

Consignes de réponse :
- réponds en français
- sois clair et assez court
- maximum 5 à 6 phrases
- reste dans l'univers TimeTravel Agency
- tu peux inventer des prix cohérents si on te le demande
- ne dis jamais que tu es une IA générique
- si l'utilisateur hésite, recommande une destination avec une justification
`
          },
          ...history,
          {
            role: "user",
            content: message
          }
        ]
      })
    });

    const data = await response.json();

    if (!response.ok) {
      console.error(data);
      return res.status(500).json({
        error: "Erreur API",
        details: data
      });
    }

    const reply = data.choices?.[0]?.message?.content || "Une perturbation temporelle empêche ma réponse pour l'instant.";

    res.json({ reply });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Erreur serveur"
    });
  }
});

app.listen(PORT, () => {
  console.log(`Serveur chatbot lancé sur http://localhost:${PORT}`);
});
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { GENERATE_SYSTEM_INSTRUCTION } from '../constants';
import { ChatMessage } from '../types';

export const sendMessageToAssistant = async (
  history: ChatMessage[],
  newMessage: string
): Promise<string> => {
  try {
    // Adhere to Google GenAI SDK guidelines: API key must be obtained from process.env.API_KEY.
    const apiKey = process.env.API_KEY;

    if (!apiKey) {
      console.error("API Key not found! Please ensure API_KEY is defined in your environment variables.");
      return "Fehler: API-Schlüssel fehlt. Bitte prüfen Sie die Umgebungsvariablen.";
    }

    const ai = new GoogleGenAI({ apiKey });

    const systemInstruction = GENERATE_SYSTEM_INSTRUCTION();
    
    // Geçmiş mesajları filtrele ve formatla
    const recentHistory = history
      .filter(msg => !msg.isError)
      .slice(-10) // Son 10 mesajı bağlam olarak tut
      .map(msg => `${msg.role === 'user' ? 'Interviewer' : 'Anil'}: ${msg.text}`)
      .join('\n');

    const prompt = `
Konversationsverlauf:
${recentHistory}

Aktuelle Eingabe:
Interviewer: ${newMessage}
Anil:`;

    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      }
    });

    // GenerateContentResponse.text doğrudan string döndürür.
    const text = response.text;
    if (!text) {
        throw new Error("Leere Antwort von der KI erhalten.");
    }

    return text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Entschuldigung, ich habe gerade Verbindungsprobleme. Könnten wir das Thema wechseln?";
  }
};
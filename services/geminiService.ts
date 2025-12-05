import { GoogleGenAI } from "@google/genai";
import { GENERATE_SYSTEM_INSTRUCTION } from '../constants';
import { ChatMessage } from '../types';

export const sendMessageToAssistant = async (
  history: ChatMessage[],
  newMessage: string
): Promise<string> => {
  try {
    // Fix: Use process.env.API_KEY as per Google GenAI SDK guidelines.
    // This assumes process.env.API_KEY is available in the environment.
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

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

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      }
    });

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
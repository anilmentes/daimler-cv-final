import { GoogleGenAI } from "@google/genai";
import { GENERATE_SYSTEM_INSTRUCTION } from '../constants';
import { ChatMessage } from '../types';

export const sendMessageToAssistant = async (
  history: ChatMessage[],
  newMessage: string
): Promise<string> => {
  try {
    // API anahtarı, Google GenAI SDK yönergelerine göre process.env.API_KEY'den alınmalıdır.
    // Bu değişkenin çalışma zamanında tanımlı ve erişilebilir olduğu varsayılmaktadır.
    const apiKey = process.env.API_KEY;

    if (!apiKey) {
      console.error("API Key bulunamadı! Lütfen process.env.API_KEY'in tanımlı olduğundan emin olun.");
      return "Hata: API anahtarı eksik. Lütfen ortam değişkenlerini kontrol edin.";
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
    return "Entschuldigung, ich habe gerade Verbindungsproblemleri. Könnten wir das Thema wechseln?";
  }
};
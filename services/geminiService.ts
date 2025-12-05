import { GoogleGenAI } from "@google/genai";
import { GENERATE_SYSTEM_INSTRUCTION } from '../constants';
import { ChatMessage } from '../types';

let client: GoogleGenAI | null = null;

const getClient = () => {
  if (!client) {
    // Initialize GoogleGenAI with process.env.API_KEY as required by guidelines.
    // Assume process.env.API_KEY is pre-configured and valid.
    client = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  return client;
};

export const sendMessageToAssistant = async (
  history: ChatMessage[],
  newMessage: string
): Promise<string> => {
  try {
    const ai = getClient();
    const systemInstruction = GENERATE_SYSTEM_INSTRUCTION();
    
    // Filter history to remove errors and limit context size for performance
    const recentHistory = history
      .filter(msg => !msg.isError)
      .slice(-10) // Keep last 10 messages for context
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
        maxOutputTokens: 500,
      }
    });

    const text = response.text;
    if (!text) {
        throw new Error("Leere Antwort von der KI erhalten.");
    }

    return text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error; // Propagate error to UI for handling
  }
};
import type { Config } from '@netlify/functions';
import { GoogleGenAI } from '@google/genai';

export const config: Config = {
  path: '/api/gemini-proxy',
  method: ['POST'],
};

interface GeminiRequest {
  prompt: string;
  systemInstruction: string;
}

interface GeminiResponse {
  candidates: Array<{
    content: {
      parts: Array<{ text: string }>;
    };
  }>;
}

export default async function handler(req: Request) {
  if (req.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return new Response('GEMINI_API_KEY is not set', { status: 500 });
  }

  try {
    const { prompt, systemInstruction } = (await req.json()) as GeminiRequest;

    if (!prompt) {
      return new Response('Missing prompt in request body', { status: 400 });
    }

    const ai = new GoogleGenAI({ apiKey });
    const model = ai.getGenerativeModel({ model: "gemini-2.5-flash" });

    const result = await model.generateContent({
      contents: [{ parts: [{ text: prompt }] }],
      systemInstruction: systemInstruction,
      generationConfig: {
        temperature: 0.7,
      },
    });

    const data = result.response;
    const generatedText = data.candidates?.[0]?.content?.parts?.[0]?.text || 'No response from Gemini API.';

    return new Response(JSON.stringify({ response: generatedText }), {
      headers: { 'Content-Type': 'application/json' },
      status: 200,
    });
  } catch (error) {
    console.error('Function error:', error);
    return new Response(`Internal Server Error: ${(error as Error).message}`, { status: 500 });
  }
}

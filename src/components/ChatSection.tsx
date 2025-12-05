import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';
import { sendMessageToAssistant } from '../services/geminiService';
import { CANDIDATE_NAME, CHAT_SUGGESTIONS, LABELS } from '../constants';

export const ChatSection: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: `Hallo! Ich bin der KI-Assistent von ${CANDIDATE_NAME}. Sie können mich alles über seine Projekte, Erfahrungen oder Visionen für Daimler Buses fragen.`,
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (textToSend: string) => {
    if (!textToSend.trim() || isLoading) return;

    const userText = textToSend.trim();
    setInput('');
    
    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: userText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMessage]);
    setIsLoading(true);

    try {
      const responseText = await sendMessageToAssistant(messages, userText);
      
      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: responseText,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
        console.error(error);
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: "Entschuldigung, ich kann gerade nicht antworten.",
        timestamp: new Date(),
        isError: true
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSend(input);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-140px)] animate-fadeIn w-full">
      <div className="bg-blue-50 border border-blue-100 rounded-xl p-3 mb-2">
        <p className="text-xs text-blue-800 text-center flex items-center justify-center gap-1">
           🤖 Gemini AI
        </p>
      </div>

      <div className="flex-1 overflow-y-auto space-y-4 pr-2 pb-4 scrollbar-hide min-h-0">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[85%] rounded-2xl p-4 text-sm leading-relaxed shadow-sm ${
                msg.role === 'user'
                  ? 'bg-blue-900 text-white rounded-tr-none'
                  : 'bg-white text-slate-700 border border-slate-100 rounded-tl-none'
              } ${msg.isError ? 'bg-red-50 text-red-600 border-red-100' : ''}`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white border border-slate-100 rounded-2xl rounded-tl-none p-4 shadow-sm flex space-x-2">
              <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-100"></div>
              <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-200"></div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Suggestion Chips - Updated for better scrolling */}
      <div className="mb-3 w-auto -mx-6 px-6">
        <p className="text-xs text-slate-400 mb-2 font-medium px-1">{LABELS.chatHelper}</p>
        <div className="flex gap-2 overflow-x-auto pb-2 px-1 scrollbar-hide touch-pan-x overscroll-x-contain">
            {CHAT_SUGGESTIONS.map((suggestion, idx) => (
                <button
                    key={idx}
                    onClick={() => handleSend(suggestion)}
                    disabled={isLoading}
                    className="flex-none bg-white border border-blue-200 text-blue-800 text-xs px-4 py-2.5 rounded-full shadow-sm hover:bg-blue-50 active:bg-blue-100 transition-colors disabled:opacity-50 whitespace-nowrap"
                >
                    {suggestion}
                </button>
            ))}
            {/* Spacer to allow scrolling to the very end */}
            <div className="w-4 flex-none"></div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="relative">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Stellen Sie eine Frage..."
          className="w-full bg-white border border-slate-300 text-slate-900 rounded-full py-4 pl-6 pr-14 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={!input.trim() || isLoading}
          className="absolute right-2 top-2 w-10 h-10 bg-blue-900 text-white rounded-full flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-800 transition-colors"
        >
          ➤
        </button>
      </form>
    </div>
  );
};
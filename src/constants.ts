
import { Experience, Project, Skill, Education } from './types';

// PERSÖNLICHE DATEN
export const CANDIDATE_NAME = "Anil Emre Mentes";
export const CANDIDATE_TITLE = "Masterstudent Management @ TUM";
export const INTERVIEW_COMPANY = "Daimler Buses";
// GÜNCEL: Kullanıcının sağladığı çalışan doğrudan resim bağlantısı
export const PROFILE_IMAGE_URL = "https://i.postimg.cc/pXJx4khW/profil-jpg.png";

export const ABOUT_ME = `
Hallo, ich bin ${CANDIDATE_NAME}. Ich bin Masterstudent an der TU München (Heilbronn) und Maschinenbauingenieur (ITU).
Meine Leidenschaft liegt an der Schnittstelle von Technik und Management – speziell in der digitalen Transformation.
Mit Erfahrung bei Mercedes-Benz Türk (F&E) und praktischen Kenntnissen in GenAI & Python verbinde ich technisches Verständnis mit betriebswirtschaftlichem Denken.
`;

export const EDUCATION: Education[] = [
  {
    id: 1,
    institution: "Technische Universität München (TUM)",
    degree: "Master of Science - Management",
    period: "Seit Okt 2024",
    details: "Campus Heilbronn. Schwerpunkte: Digitalisierung, Projektmanagement & Data Science."
  },
  {
    id: 2,
    institution: "Istanbul Technical University (ITU)",
    degree: "B.Sc. Maschinenbau & Bauingenieurwesen",
    period: "2018 - 2023",
    details: "Istanbul, Türkei."
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 1,
    company: "BirdVision (Projekt)",
    role: "AI Chatbot Developer & PM",
    period: "Masterstudium",
    description: "Entwicklung von 'ChatBird' (GenAI) zur Optimierung der Customer Journey. HubSpot-Integration, API-Entwicklung (Python) und Präsentation vor der Geschäftsleitung."
  },
  {
    id: 2,
    company: "Mercedes-Benz Türk A.Ş.",
    role: "Entwicklungsingenieur (AdBlue)",
    period: "2023 (4 Monate)",
    description: "Validierung von Heizelementen im AdBlue-Tank, Datenanalyse und technische Dokumentation zur Vermeidung von Frostschäden."
  },
  {
    id: 3,
    company: "Mercedes-Benz Türk A.Ş.",
    role: "Werkstudent (Prototypenbau)",
    period: "Juli 2022 - Juni 2023",
    description: "Digitalisierung von Prototypenprozessen. Einsatz von FARO 3D-Scannern, Mixed Reality und Siemens NX zur Qualitätsprüfung."
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "ChatBird - GenAI Bot",
    description: "Ein von Grund auf entwickelter KI-Chatbot für das Startup BirdVision. Automatisierung von Support-Tickets und Lead-Kategorisierung durch HubSpot-CRM Integration.",
    technologies: ["Python", "GenAI / Gemini", "SQL", "API Integration"],
    imageUrl: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=800&auto=format&fit=crop",
    projectUrl: "https://chatbird-app.vercel.app/"
  },
  {
    id: 2,
    title: "Digital Prototyping (MBT)",
    description: "Integration von 3D-Messtechnik (Faro Arm) und Mixed Reality in die Prototypenfertigung von Bussen zur Fehlererkennung und Effizienzsteigerung.",
    technologies: ["Siemens NX", "Mixed Reality", "FARO 3D", "Polyworks"],
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop"
  }
];

export const SKILLS: Skill[] = [
  { name: "Projektmanagement", level: 90, category: 'tools' },
  { name: "Python / Data Science", level: 85, category: 'backend' },
  { name: "GenAI / Gemini API", level: 80, category: 'backend' },
  { name: "Siemens NX / CAD", level: 75, category: 'tools' },
  { name: "SQL & Power BI", level: 70, category: 'backend' },
  { name: "Deutsch (B2) / Englisch (C1)", level: 100, category: 'tools' },
];

export const DAIMLER_VISION = `
Ich sehe das Praktikum im Bereich 'Projektmanagement Digitalisierung Aftersales' als perfekte Chance.
Mein Ziel ist es, meine Erfahrungen aus der Chatbot-Entwicklung (ChatBird) und der technischen Digitalisierung (MBT) einzubringen, um das neue 'Aftersales-Portal' und das 'Dealer Management System' mitzugestalten.
Ich möchte nicht nur ein Praktikant sein, sondern ab März 2026 echten Mehrwert schaffen und im Anschluss meine Masterarbeit in genau diesem innovativen Umfeld schreiben.
`;

export const CHAT_SUGGESTIONS = [
  "Warum Aftersales Digitalisierung?",
  "Erzähl mir von 'ChatBird'",
  "Was hast du bei MBT gemacht?",
  "Was sagt dein Referenzgeber?",
  "Wann kannst du anfangen?"
];

export const LABELS = {
  role: "Bewerber:in",
  about: "Über Mich",
  experiences: "Berufserfahrung",
  education: "Ausbildung",
  skills: "Kompetenzen",
  projects: "Relevante Projekte",
  vision: "Motivation & Ziele",
  chatHelper: "Fragen Sie meinen AI-Zwilling:",
  nav: { home: "Profil", projects: "Projekte", vision: "Vision", chat: "AI-Chat" }
};

// Systemanweisung für die KI - Hochgradig personalisiert
export const GENERATE_SYSTEM_INSTRUCTION = (): string => `
Du bist der KI-Zwilling von ${CANDIDATE_NAME} und assistierst in einem Bewerbungsgespräch bei ${INTERVIEW_COMPANY} für die Stelle "Praktikum im Bereich Projektmanagement Digitalisierung Aftersales".
Antworte IMMER auf DEUTSCH. Sei höflich, professionell, aber auch selbstbewusst und enthusiastisch.

--- DEINE PERSONA (ANIL EMRE MENTES) ---
*   **Ausbildung:** Master in Management (TUM Campus Heilbronn, aktuell), Bachelor in Maschinenbau & Bauingenieurwesen (ITU Istanbul).
*   **Sprachen:** Türkisch (Muttersprache), Englisch (C1), Deutsch (B2 - aktiv am Verbessern am Goethe-Institut).
*   **Verfügbarkeit:** Ab März 2026 für 6 Monate. Ziel: Danach Masterarbeit bei Daimler schreiben.

--- DEINE ERFAHRUNGEN (Highlights) ---
1.  **BirdVision (Start-up):** Du hast "ChatBird" gebaut. Das ist kein theoretisches Projekt! Du hast Python, SQL und APIs genutzt, um HubSpot zu integrieren und Support-Prozesse zu automatisieren. Du verstehst "Digital Customer Journey".
2.  **Mercedes-Benz Türk (MBT):**
    *   *Prototypenbau:* Du kennst die Daimler-Kultur. Du hast mit FARO Arm Scannern, Mixed Reality und Siemens NX gearbeitet. Du hast physische Teile digital validiert.
    *   *AdBlue Entwicklung:* Du hast Ingenieursarbeit geleistet (Tests, Dokumentation).
    *   *Referenz:* Hakan Kesemen (Dein Manager bei MBT) beschreibt dich als: "fleißig, selbstmotiviert, zielorientiert, diszipliniert und pünktlich." Er lobt deine schnelle Auffassungsgabe bei neuen Technologien.

--- WARUM DIESE STELLE? (WICHTIG) ---
*   Du willst am **Dealer Management System** und dem **Aftersales Portal** arbeiten.
*   Du bringst genau den Mix mit: Technisches Verständnis (Ingenieur) + Business (Master) + IT-Skills (Python/AI).
*   Du kennst bereits die Daimler-Systeme (Smaragd, Engineering Client) aus deiner Zeit in der Türkei.

--- VERHALTENSWEISE ---
*   Wenn nach Schwächen gefragt wird: Erwähne, dass dein Deutsch B2 ist, aber du es täglich verbesserst und Englisch/Techniksprache fließend beherrschst.
*   Wenn nach technischen Skills gefragt wird: Betone Python, GenAI (Gemini Flash Erfahrung), und Datenanalyse.
*   Halte die Antworten prägnant (max 3-4 Sätze), es sei denn, es wird nach Details gefragt.

Viel Erfolg! Zeig ihnen, dass du der perfekte Kandidat ("Young Talent") bist.
`;

import React, { useState } from "react";

const SpeechRecognitionContext = React.createContext<{
  SpeechRecognition: any;
  recognition: any;
  language: string;
  setLanguage: (language: string) => void;
}>({
  SpeechRecognition: null,
  recognition: null,
  language: "",
  setLanguage: () => {},
});

export const SpeechRecognitionProvider = ({ children }: { children: any }) => {
  const [language, setLanguage] = useState("en-US");
  const SpeechRecognition =
    (window as any).SpeechRecognition ||
    (window as any).webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.lang = language;

  return (
    <SpeechRecognitionContext.Provider
      value={{ SpeechRecognition, recognition, language, setLanguage }}
    >
      {children}
    </SpeechRecognitionContext.Provider>
  );
};

export const useSpeechRecognition = () => {
  const context = React.useContext(SpeechRecognitionContext);
  if (!context) {
    throw new Error(
      "useSpeechRecognition must be used within a SpeechRecognitionProvider"
    );
  }
  return context;
};

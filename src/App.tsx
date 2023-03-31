import { useState, useContext } from "react";
import PlayBtn from "./components/PlayBtn/PlayBtn";
import { SpeechRecognitionContext } from "./contexts/LangContext";
import { lang } from "./utils/Lang";
import LanguageSwitch from "./components/LanguageSwitch/LanguageSwitch";

function App() {
  const [isRecording, setIsRecording] = useState(false);
  const [recordedText, setRecordedText] = useState("");

  const { recognition, language } = useContext(SpeechRecognitionContext);

  const languageText = lang(language);

  const handleStartRecording = () => {
    setIsRecording(true);
    recognition.start();
  };

  const handleStopRecording = () => {
    setIsRecording(false);
    recognition.stop();
  };

  recognition.onresult = (event: any) => {
    let interimTranscript = "";
    for (let i = event.resultIndex; i < event.results.length; i++) {
      if (event.results[i].isFinal) {
        interimTranscript += event.results[i][0].transcript;
      } else {
        interimTranscript += event.results[i][0].transcript;
      }
    }
    setRecordedText(interimTranscript);
  };

  return (
    <>
      <h1>{languageText.title}</h1>
      <LanguageSwitch />
      <main>
        <PlayBtn
          startPlay={handleStartRecording}
          stopPlay={handleStopRecording}
          isPlaying={isRecording}
        />
        <div className="transcript-board">
          <p>{recordedText}</p>
        </div>
      </main>
    </>
  );
}

export default App;

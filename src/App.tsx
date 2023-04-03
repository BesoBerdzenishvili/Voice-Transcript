import { useState, useContext, useEffect } from "react";
import { SpeechRecognitionContext } from "./contexts/LangContext";
import { lang } from "./utils/Lang";
import PlayBtn from "./components/PlayBtn/PlayBtn";
import Header from "./layout/Header/Header";
import CopyBtn from "./components/CopyBtn/CopyBtn";
import CopyMessage from "./components/CopyBtn/CopyMessage";

function App() {
  const { recognition, language } = useContext(SpeechRecognitionContext);
  const languageText = lang(language);
  const [isRecording, setIsRecording] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [fontSize, setFontSize] = useState(() => {
    const saved = localStorage.getItem("fontSize");
    return saved ? JSON.parse(saved) : 16;
  });

  useEffect(() => {
    localStorage.setItem("fontSize", JSON.stringify(fontSize));
  }, [fontSize]);
  const [recordedText, setRecordedText] = useState(languageText.instruction);

  useEffect(() => {
    setRecordedText(lang(language).instruction);
  }, [language]);

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
      <CopyMessage showMessage={showMessage} />
      <Header
        fontSize={fontSize}
        setFontSize={setFontSize}
        languageText={languageText}
      />
      <main>
        <PlayBtn
          startPlay={handleStartRecording}
          stopPlay={handleStopRecording}
          isPlaying={isRecording}
        />
        <div className="transcript-board">
          <p style={{ fontSize: fontSize }}>
            <CopyBtn text={recordedText} setShowMessage={setShowMessage} />
            {recordedText}
          </p>
        </div>
      </main>
    </>
  );
}

export default App;

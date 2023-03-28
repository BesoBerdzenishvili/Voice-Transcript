import { useSpeechRecognition } from "../contexts/LangContext";

const { language } = useSpeechRecognition();

export const lang =
  language === "ka-GE"
    ? {
        copy: "ასლი",
        title: "ტრანსკრიპტი",
        startInstruction: "დააჭირეთ ღილაკს საუბრის ჩასაწერად",
        recordInstruction: "ისაუბრეთ ტრანსკრიფციის ჩასაწერად",
      }
    : {
        copy: "copy",
        title: "Transcript",
        startInstruction: "Hit play to transcript you're speech",
        recordInstruction: "Speack to record your transcript",
      };

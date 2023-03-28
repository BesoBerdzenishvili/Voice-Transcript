import { useSpeechRecognition } from "../contexts/LangContext";

const LanguageSwitch = () => {
  const { language, setLanguage } = useSpeechRecognition();

  const languages = [
    { label: "ქართ", value: "ka-GE" },
    { label: "EN", value: "en-US" },
  ];

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setLanguage(event.target.value);
  };

  return (
    <select value={language} onChange={handleLanguageChange}>
      {languages.map(({ label, value }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
};
export default LanguageSwitch;

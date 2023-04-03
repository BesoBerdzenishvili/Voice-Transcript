import FontSize from "../../components/FontSize/FontSize";
import LanguageSwitch from "../../components/LanguageSwitch/LanguageSwitch";
import "./Header.css";

type Props = {
  fontSize: number;
  setFontSize: (value: number) => void;
  languageText: {
    title: string;
  };
};

export default function Header({ fontSize, setFontSize, languageText }: Props) {
  return (
    <header>
      <FontSize size={fontSize} setSize={setFontSize} />
      <h1>{languageText.title}</h1>
      <LanguageSwitch />
    </header>
  );
}

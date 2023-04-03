import copyImg from "../../images/copyBtn.png";
import "./CopyBtn.css";

type Props = {
  text: string;
  setShowMessage: (showMessage: boolean) => void;
};

export default function CopyBtn({ text, setShowMessage }: Props) {
  const copy = async () => {
    await navigator.clipboard.writeText(text);

    setShowMessage(true);

    setTimeout(() => {
      setShowMessage(false);
    }, 1900);
  };
  return (
    <button onClick={copy} disabled={!text} className="copy-btn">
      <img src={copyImg} alt="two papers" width="58px" />
    </button>
  );
}

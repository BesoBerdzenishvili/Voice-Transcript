import "./CopyMessage.css";

type Props = {
  showMessage: boolean;
};

export default function CopyAlert({ showMessage }: Props) {
  return (
    <div
      className="copy-message"
      style={{ display: !showMessage ? "none" : "" }}
    >
      Copied to clipboard!
    </div>
  );
}

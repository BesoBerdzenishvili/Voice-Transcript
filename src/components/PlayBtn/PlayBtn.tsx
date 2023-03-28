import "./PlayBtn.css";

interface PlayBtnProps {
  play: boolean;
  setPlay: (play: boolean) => void;
}

const PlayBtn = ({ play, setPlay }: PlayBtnProps) => {
  const handleClick = () => {
    setPlay(!play);
  };

  return (
    <button className="play-btn" onClick={handleClick}>
      {play ? (
        <div className="vertical-lines">
          <div className="line"></div>
          <div className="line"></div>
        </div>
      ) : (
        <div className="triangle"></div>
      )}
    </button>
  );
};

export default PlayBtn;
